import React from 'react';
import fetchingImg from '../../../assets/images/fetching.gif';

const style = {
  zIndex: 50,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, .9)',
}

let Preloader = () => {
  return <div style={style}><img src={fetchingImg} alt='loading'/></div>
}

export default Preloader
