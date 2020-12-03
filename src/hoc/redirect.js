import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />

      return <Component {...this.props} />
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export const withProfileRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />

    return <Component {...props} />
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
