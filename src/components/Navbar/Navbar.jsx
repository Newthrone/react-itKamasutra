import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export default function Navbar(props) {
  const id = props.id ? props.id : '';
  return (
    <nav className={s.navbar}>
      <div className={s.navbar__item}>
        <NavLink exact to={`/profile/${id}`} activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/1" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/2" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}
