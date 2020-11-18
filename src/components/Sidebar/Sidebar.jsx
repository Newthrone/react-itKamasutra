import React from 'react'
import NavbarConatainer from '../Navbar/NavbarContainer';
import s from './Sidebar.module.css'

const Sidebar = (props) => {
  const { friends } = props;
  return (
    <aside className={s.aside}>
      <NavbarConatainer />
      {
        friends.map((friend) => {
          return (
            <div key={friend.id}>{friend.name}</div>
            )
          })
      }
    </aside>
  )
}

export default Sidebar
