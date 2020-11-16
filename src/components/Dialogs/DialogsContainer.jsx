import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreater, updateNewTextMessageActionCreater } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapStatetoProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessage: state.dialogsPage.newMessage,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(addMessageActionCreater()),
    updateNewMessage: (text) => dispatch(updateNewTextMessageActionCreater(text)),
  }
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps)(AuthRedirectComponent);


export default DialogsContainer
