import React from 'react'
import Preloader from '../../Common/Preloader';
import s from './ProfileInfo.module.css';
import defaultAvatarImg from '../../../assets/images/userDefault.jpg';
import iAgreeImg from '../../../assets/images/iAgree.gif';
import iDisAgreeImg from '../../../assets/images/doesNotAgree.jpg';
import ProfileStatus from './ProfileStatus';
// import { Redirect } from 'react-router-dom';

export default function ProfileInfo(props) {
  // if (props.userProfile?.profileIsUndefined) return <Redirect to='/404'/>
  // существуют недоступные профили. например 125
  if (!props.userProfile) return <Preloader />

  return (
    <div>
      {/* <img className={s.profileHero}
        src="http://media.except.nl/media/uploaded_images/asset_image/Nov19-Energy__Environment.jpg" alt="hero"/> */}
      <article className={s.profile}>
        <img className={s.profilePhoto} src={props.userProfile.photos?.large || defaultAvatarImg} alt={'profile'} />
        <ProfileStatus isOwnProfile={props.isOwnProfile}
                       profileStatus={props.profileStatus}
                       hasErrorUpdateStatus={props.hasErrorUpdateStatus}
                       updateUserStatusTC={props.updateUserStatusTC}
                       setProfileStatus={props.setProfileStatus}/>
        <div className={s.profileName}>{props.userProfile.fullName}</div>
        <div className={s.profileAboutMeTitle}>Обо мне: <span className={s.profileAboutMeText}>{props.userProfile.aboutMe}</span></div>
        <div className={s.profileWork}>
          <div className={s.profileWorkStatus}>Ищу работу:
            <div className={s.profileWorkStatusBody}>{props.userProfile.lookingForAJobDescription}</div>
          </div>
          <img className={s.profileWorkImg} src={props.userProfile.lookingForAJob ? iAgreeImg : iDisAgreeImg} alt="smile"/>
        </div>
      </article>
    </div>
  )
}
