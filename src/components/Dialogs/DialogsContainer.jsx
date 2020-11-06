// import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updateNewTextMessageActionCreater } from '../../redux/dialog-reducer';
// import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
//   // console.log(props);


//   return (
//     <StoreContext.Consumer>
//       { store => {
//         const {dialogs, messages, newMessage} = store.getState().dialogsPage;
//         const {dispatch} = store;

//         function updateNewMessage(text) {
//           dispatch(updateNewTextMessageActionCreater(text));
//           // dispatch({type:'UPDATE_TEXT_MESSAGE', text:fieldMessage.current.value})
//         }

//         function sendMessage() {
//           dispatch(addMessageActionCreater())
//           // dispatch({type:'ADD_MESSAGE'})
//         }

//         return (
//           <Dialogs
//             sendMessage={sendMessage}
//             updateNewMessage={updateNewMessage}
//             messages={messages}
//             dialogs={dialogs}
//             newMessage={newMessage}
//           />
//         )

//       }}
//     </StoreContext.Consumer>
//   )
// }



const mapStatetoProps = (store) => {
  return {
    messages: store.dialogsPage.messages,
    dialogs: store.dialogsPage.dialogs,
    newMessage: store.dialogsPage.newMessage,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(addMessageActionCreater()),
    updateNewMessage: (text) => dispatch(updateNewTextMessageActionCreater(text)),
  }
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps)(Dialogs);


export default DialogsContainer
