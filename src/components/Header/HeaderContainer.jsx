import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { deleteAuthenticationTC } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {deleteAuthenticationTC}),
  withRouter,
)(HeaderContainer)
