import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export default function Header(props) {
  return (
    <header className={s.header}>
      <img className={s.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} alt="логотип"/>
      <div className={s.loginBlock}>
        { props.isAuth ? props.login
          : <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </header>
  )
}
