import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { authorizationTC } from '../../redux/auth-reducer';
import styles from './Login.module.css'
import { withProfileRedirect } from '../../hoc/withAuthRedirect';
import classes from 'html-classes';
import { email, maxLengthCreator, minLengthCreator, required } from '../../Utils/validators';
import { Input, Textarea } from '../Common/FormControls';

const maxLengthCreator20 = maxLengthCreator(20);
const minLengthCreator5 = minLengthCreator(5);

let LoginForm = (props) => {
  const { handleSubmit, valid } = props;

  const classesFakeCheckbox = () => {
    return props.rememberMe
    ? classes([styles.loginFormCheckboxChecked])
    : classes([styles.loginFormCheckboxUnChecked])
  }


  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h1 className={styles.loginFormTitle}>Login</h1>
      <Field name='email' component={Input} type='text' placeholder='Email' id='formEmail' className={styles.loginFormInput} validate={[email, required, maxLengthCreator20]} label={{htmlFor:'formEmail', text: 'Введите email'}}/>
      <Field name='password' component={Input} placeholder='Password' id='formPassword' className={styles.loginFormInput} validate={[required, minLengthCreator5]} label={{htmlFor:'formPassword', text: 'Введите пароль'}}/>
      <Field name='rememberMe' component={Input} type='checkbox' id='formRemember' className={classes([styles.loginFormInput, styles.loginFormCheckbox])} label={{htmlFor:'formRemember', text: 'Запомнить данные', classLabel: classesFakeCheckbox()}}/>
      <button type='submit' className={styles.loginFormSubmit} disabled={!valid}>Sign in</button>
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
