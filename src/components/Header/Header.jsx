import React from 'react'
import s from './Header.module.css'

export default function Header(props) {
  return (
    <header className={s.header}>
      <img className={s.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} alt="логотип"/>
    </header>
  )
}
