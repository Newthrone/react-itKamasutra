import { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { followUser, unfollowUser, setUsers, setTotalPages, setCurrentPage, setIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersContainer extends Component {

  requestPage = (currentPage) => {
    const { pageSize } = this.props;
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`,{
      withCredentials: true,
    })
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setTotalPages(Math.ceil(response.data.totalCount/this.props.pageSize))
        this.props.setUsers(response.data.items)
      })
  }

  componentDidMount() {
    this.requestPage(this.props.currentPage);
  }

  render() {

    return (
      <>
        { this.props.isFetching && <Preloader />}
        <Users
          users = {this.props.users}
          totalPages = {this.props.totalPages}
          currentPage = {this.props.currentPage}
          setCurrentPage = {this.props.setCurrentPage}
          requestPage = {this.requestPage}
          followUser = {this.props.followUser}
          unfollowUser = {this.props.unfollowUser}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  totalPages: state.usersPage.totalPages,
  isFetching: state.usersPage.isFetching,
})

export default connect(mapStateToProps,
  {followUser, unfollowUser, setUsers, setTotalPages,
setCurrentPage, setIsFetching})(UsersContainer);
