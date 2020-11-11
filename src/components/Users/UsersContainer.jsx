import { Component } from "react";
import { connect } from "react-redux";
import { followUser, unfollowUser, setUsers, setTotalPages, setCurrentPage, setIsFetching } from "../../redux/users-reducer";
import { getUsers } from "../../api/api";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersContainer extends Component {

  requestPage = (currentPage) => {
    const { pageSize, setIsFetching, setTotalPages, setUsers } = this.props;
    this.props.setIsFetching(true);
    getUsers(currentPage, pageSize)
      .then(({data}) => {
        setIsFetching(false);
        setTotalPages(Math.ceil(data.totalCount/pageSize))
        setUsers(data.items)
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
