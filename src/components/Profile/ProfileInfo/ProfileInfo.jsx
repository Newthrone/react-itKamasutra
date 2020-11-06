import React from 'react'
import s from './ProfileInfo.module.css'

export default function ProfileInfo(props) {
  return (
    <div>
      <img className={s.profile__img}
        src="http://media.except.nl/media/uploaded_images/asset_image/Nov19-Energy__Environment.jpg" alt="hero"/>
    </div>
  )
}
