import React from 'react';
import * as axios from 'axios';
import styles from './users.module.css';
import userPhotoDefault from './../../assets/images/userDefault.jpg';
import Pagination from '../Pagination/Pagination';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const {users, totalPages, currentPage, setCurrentPage, requestPage, unfollowUser, followUser} = props;
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
            <NavLink to={'/profile/' + user.id}>
              <img className={styles.userAvatar} src={user.photos.small != null
                ? user.photos.small
                : userPhotoDefault} alt="avatar"/>
            </NavLink>
            {user.followed
              ? <button className={styles.userBtnFollow} onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                    withCredentials: true,
                    headers: {
                      "API-KEY": "55eae980-be03-4407-9ab1-4b41ff913d2b"
                    },
                  })
                  .then((response) => {
                      if (response.data.resultCode === 0) unfollowUser(user.id)
                  })
                }
              }>Unfollow</button>
              : <button className={styles.userBtnUnfollow} onClick={() => {


                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "55eae980-be03-4407-9ab1-4b41ff913d2b"
                    },
                  })
                    .then((response) => {
                      if (response.data.resultCode === 0) followUser(user.id)
                    })
                }
              }>Follow</button>
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
