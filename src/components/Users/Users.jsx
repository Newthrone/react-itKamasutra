import React from 'react';
import styles from './users.module.css';
import userPhotoDefault from './../../assets/images/userDefault.jpg';
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom';
import { requestFollowUser, requestUnfollowUser } from '../../api/api';
import Button from '../Common/Button';

const Users = (props) => {
  const {users, totalPages, currentPage, setCurrentPage, requestPage, unfollowUser, followUser} = props;

  const onClickHandlerFollow = (userId, callback) => {
    requestFollowUser(userId)
      .then((response) => {
        if (response.data.resultCode === 0) followUser(userId);
        callback();
      })
  }

  const onClickHandlerUnfollow = (userId, callback) => {
    requestUnfollowUser(userId)
      .then((response) => {
        if (response.data.resultCode === 0) unfollowUser(userId);
        callback();
    })
  }

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
            <NavLink className={styles.userLinkProfile} to={'/profile/' + user.id}>
              <img className={styles.userAvatar} src={user.photos.small != null
                ? user.photos.small
                : userPhotoDefault} alt="avatar"/>
            </NavLink>
            {user.followed
              ? <Button
                  className={styles.userBtnUnfollow}
                  title={'Unfollow'}
                  onClickHandlers={(callback) => {
                    onClickHandlerUnfollow(user.id, callback)
                  }}
                />
              : <Button
                  className={styles.userBtnUnfollow}
                  title={'Follow'}
                  onClickHandlers={(callback) => {
                    onClickHandlerFollow(user.id, callback)
                  }}
                />
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
