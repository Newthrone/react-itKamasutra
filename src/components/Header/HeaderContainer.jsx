import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
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
