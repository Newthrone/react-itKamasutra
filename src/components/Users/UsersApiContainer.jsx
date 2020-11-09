import React, { Component } from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersApiContainer extends Component {

  requestPage = (currentPage) => {
    const { pageSize } = this.props;

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        this.props.setTotalPages(Math.ceil(response.data.totalCount/this.props.pageSize))
        this.props.setUsers(response.data.items)
      })
  }

  componentDidMount() {
    this.requestPage(this.props.currentPage);
  }

  render() {
    return (
      <Users
        users = {this.props.users}
        totalPages = {this.props.totalPages}
        currentPage = {this.props.currentPage}
        setCurrentPage = {this.props.setCurrentPage}
        requestPage = {this.requestPage}
      />
    )

    /* const {totalPages, currentPage, setCurrentPage} = this.props;
    return (
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          requestPage={this.requestPage}
        />
        {this.props.users.map(user => <div key={user.id}>
            <article className={styles.user}>
              <img className={styles.userAvatar} src={user.photos.small != null
                ? user.photos.small
                : userPhotoDefault} alt="avatar"/>
              {user.followed
                ? <button className={styles.userBtnFollow} onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                : <button className={styles.userBtnUnfollow} onClick={() => this.props.followUser(user.id)}>Follow</button>
              }
              <div className={styles.userName}>{user.name}</div>
              <div>{user.status ? user.status : 'без статуса'}</div>
            </article>
          </div>
        )}
      </div>
    ) */
  }
}

export default UsersApiContainer;
