import React from 'react';
import styles from './users.module.css';
import userPhotoDefault from './../../assets/images/userDefault.jpg';
import Pagination from '../Pagination/Pagination';

const Users = (props) => {
  const {users, totalPages, currentPage, setCurrentPage, requestPage} = props;

  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        requestPage={requestPage}
      />
      {users.map(user => <div key={user.id}>
          <article className={styles.user}>
            <img className={styles.userAvatar} src={user.photos.small != null
              ? user.photos.small
              : userPhotoDefault} alt="avatar"/>
            {user.followed
              ? <button className={styles.userBtnFollow} onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
              : <button className={styles.userBtnUnfollow} onClick={() => props.followUser(user.id)}>Follow</button>
            }
            <div className={styles.userName}>{user.name}</div>
            <div>{user.status ? user.status : 'без статуса'}</div>
          </article>
        </div>
      )}
    </div>
  )
}

export default Users;
/*
import React, { Component } from 'react';
import * as axios from 'axios';
import styles from './users.module.css';
import userPhotoDefault from './../../assets/images/userDefault.jpg';
import Pagination from '../Pagination/Pagination';

class Users extends Component {

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
    const {totalPages, currentPage, setCurrentPage} = this.props;
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
    )
  }
}

export default Users;
 */
