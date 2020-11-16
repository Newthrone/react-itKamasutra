import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsersThunkCreator, requestFollowUserThunkCreator, requestUnfollowUserThunkCreator } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends Component {

  requestPage = (currentPage) => {
    const { pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize)
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
          requestFollowUserThunkCreator = {this.props.requestFollowUserThunkCreator}
          requestUnfollowUserThunkCreator = {this.props.requestUnfollowUserThunkCreator}
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

  export default compose(
    connect(mapStateToProps,
      {setCurrentPage, getUsersThunkCreator, requestFollowUserThunkCreator, requestUnfollowUserThunkCreator}),
      withAuthRedirect,
  )(UsersContainer)
