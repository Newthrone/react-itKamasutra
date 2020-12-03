import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from 'html-classes';
import s from './Header.module.css';

export default function Header(props) {
  let [loginIsActive, setLoginIsActive] = useState(false);
  const togleLogout = () => {
    if (props.isAuth) setLoginIsActive(loginIsActive = !loginIsActive)
  }

  const regExp = /login/;
  const isLoginPage = regExp.test(props.location.pathname);

  return (
    <header className={s.header}>
      <img className={s.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} alt="логотип"/>
      <div className={classes([s.loginBlock, {[s.loginBlockIsActive]: loginIsActive, [s.loginBlockIsInteractive]: !isLoginPage}])}
           onClick={togleLogout}
           onBlur={togleLogout}
           tabIndex={1000}
      >
        { props.isAuth
          ? <>
              {props.login}
              <div className={s.loginOut} onClick={props.deleteAuthenticationTC}>Выйти</div>
            </>
          : isLoginPage
          ? <span>Login</span>
          : <NavLink to={'/login'} >Login</NavLink>
        }
      </div>
    </header>
  )
}
