import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm, reset } from 'redux-form';

const MessageForm = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit}
          className={s.messageForm}>
      <Field name='post'
             component='textarea'
             className={s.messageFormTextArea}
      />
      <button type='submit' disabled={pristine || submitting} >Add post</button>

    </form>
  )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('message'));

const MessageReduxForm = reduxForm({
  form: 'message',
  onSubmitSuccess: afterSubmit,
})(MessageForm);

const Dialogs = (props) => {
  const {dialogs, messages} = props;

  let dialogElements = dialogs ? dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}></DialogItem>) : '';

  let messageElements = messages ? messages.map(m => <Message key={m.id} message={m.message} id={m.id}></Message>) : '';

  function sendMessage({post}) {
    props.sendMessage(post);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogElements }
      </div>
      <div className={s.messages}>
        { messageElements }
        <MessageReduxForm onSubmit={sendMessage}/>
      </div>
    </div>
  )
}

export default Dialogs
