import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { authorizationTC } from '../../redux/auth-reducer';
import styles from './Login.module.css'
import { withProfileRedirect } from '../../hoc/withAuthRedirect';
import classes from 'html-classes';

let LoginForm = (props) => {
  const { handleSubmit } = props;

  const classesFakeCheckbox = () => {
    return props.rememberMe
    ? classes([styles.loginFormLabel, styles.loginFormCheckboxChecked])
    : classes([styles.loginFormLabel, styles.loginFormCheckboxUnChecked])
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h1 className={styles.loginFormTitle}>Login</h1>
      <label htmlFor='formEmail' className={styles.loginFormLabel}>Введите email</label>
      <Field name='email' component='input' type='email' placeholder='Login' id='formEmail' required className={styles.loginFormInput} />
      <label htmlFor='formPassword' className={styles.loginFormLabel}>Введите пароль</label>
      <Field name='password' component='input' type='password' placeholder='Password' id='formPassword' required className={styles.loginFormInput} />
      <label htmlFor='formRemember' className={classesFakeCheckbox()}>Запомнить данные</label>
      <Field name='rememberMe' component='input' type='checkbox' id='formRemember' className={classes([styles.loginFormInput, styles.loginFormCheckbox])} />
      <button type='submit' className={styles.loginFormSubmit}>Sign in</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const submit = values => {
    props.authorizationTC(values);
  }

  return <LoginReduxForm onSubmit={submit}
                         rememberMe={props.rememberMe}
         />
}

const mapStateToProps = (state) => {
  return {
    rememberMe: state.form.login?.values?.rememberMe,
  }
};

export default compose(
  connect(mapStateToProps, {authorizationTC}),
  withProfileRedirect
)(Login);
