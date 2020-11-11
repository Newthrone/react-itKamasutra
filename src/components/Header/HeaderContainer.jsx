import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthenticationThunkCreator } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthenticationThunkCreator()
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    userId: state.auth.userId,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {getAuthenticationThunkCreator})(HeaderContainer);
