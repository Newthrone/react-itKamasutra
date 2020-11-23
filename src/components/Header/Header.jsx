import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from 'html-classes';
import s from './Header.module.css';

export default function Header(props) {
  let [loginIsActive, setLoginIsActive] = useState(false);
  const togleLogout = () => {
    setLoginIsActive(loginIsActive = !loginIsActive)
  }

  return (
    <header className={s.header}>
      <img className={s.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} alt="логотип"/>
      <div className={classes([s.loginBlock, {[s.loginBlockIsActive]: loginIsActive}])} onClick={togleLogout}
      >
        { props.isAuth
          ? <>
              {props.login}
              <div className={s.loginOut} onClick={props.deleteAuthenticationTC}>Выйти</div>
            </>
          : <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </header>
  )
}
