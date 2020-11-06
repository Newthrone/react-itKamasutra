import React from 'react'
import s from './Post.module.css'

export default function Post(props) {
  return (
    <div className={s.post}>
      <img className={s.avatar} src={`${process.env.PUBLIC_URL}/medved.jpg`} alt="avatar"/>
      {props.message}
      <div className={s.like}>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}
