import React from 'react';
import styles from './users.module.css';
import userPhotoDefault from './../../assets/images/userDefault.jpg';
import Pagination from '../Pagination/Pagination';

const Users = (props) => {
  const {users, totalPages, currentPage, setCurrentPage, requestPage, unfollowUser, followUser} = props;
  console.log(props);
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
              ? <button className={styles.userBtnFollow} onClick={() => unfollowUser(user.id)}>Unfollow</button>
              : <button className={styles.userBtnUnfollow} onClick={() => followUser(user.id)}>Follow</button>
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
