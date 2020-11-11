import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';
import { getAuthentication } from '../../api/api';

class HeaderContainer extends Component {
  componentDidMount() {
    getAuthentication()
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email)
        }
      })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
