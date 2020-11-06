import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
  console.log('Users begin: props', props);
  console.log('in Users: props.users.length', props.users.length);
  if (props.users.length === 0) {
    props.setUsers([
    { id: 1, fullName: 'Dimych', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss', location: {city: 'Krasnodar', country: 'Russia'}, followed: true, },
    // { id: 2, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Moscow', country: 'Russia'}, followed: false, },
    // { id: 3, fullName: 'Sveta', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Kirov', country: 'Russia'}, followed: true, },
    // { id: 4, fullName: 'Tayler', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Boston', country: 'USA'}, followed: false, },
    // { id: 5, fullName: 'Mika', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Helsinki', country: 'Finland'}, followed: true, },
    // { id: 6, fullName: 'Andrew', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/100px-NewTux.svg.png', status: 'I\'m a boss too', location: {city: 'Vancouver', country: 'Canada'}, followed: true, },
    ])
  }

  return (
    <div>
      {props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <img className={styles.userAvatar} src={user.photoUrl} alt="avatar"/>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                : <button onClick={() => props.followUser(user.id)}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default Users;
