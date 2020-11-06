// import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';


const mapStatetoProps = (store) => {
  return store.sidebar
}

const SidebarContainer = connect(mapStatetoProps)(Sidebar);

export default SidebarContainer
