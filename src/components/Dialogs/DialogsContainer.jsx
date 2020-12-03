import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/redirect';
import { addMessageActionCreater } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const mapStatetoProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(addMessageActionCreater(message)),
  }
}

const DialogsContainer = compose(
  connect(mapStatetoProps, mapDispatchtoProps),
  withAuthRedirect
  )(Dialogs)

export default DialogsContainer;
