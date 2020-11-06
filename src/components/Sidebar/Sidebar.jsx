import React from 'react'
// import StoreContext from '../../storeContext'
import Navbar from '../Navbar/Navbar'
import s from './Sidebar.module.css'

const Sidebar = (props) => {
  const { friends } = props;
  return (
    // <StoreContext.Consumer>
      // {props.friends => {

        // return (
        <aside className={s.aside}>
          <Navbar />
          {
            friends.map((friend) => {
              return (
                <div key={friend.id}>{friend.name}</div>
                )
              })
          }
        </aside>
        // )
      // }}
    // </StoreContext.Consumer>
  )
}

export default Sidebar
