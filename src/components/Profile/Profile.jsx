import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export default function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
    </div>
  )
}
