import React, { useEffect, useState } from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  const [isDisabledBtn, setisDisabledBtn] = useState(true);
  const {dialogs, messages, newMessage} = props;

  useEffect(()=> {setisDisabledBtn(()=> !newMessage);}, [newMessage])

  const fieldMessage = React.createRef();

  let dialogElements = dialogs ? dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}></DialogItem>) : '';

  let messageElements = messages ? messages.map(m => <Message key={m.id} message={m.message} id={m.id}></Message>) : '';

  function updateNewMessage() {
    let message = fieldMessage.current.value;
    props.updateNewMessage(message);
  }

  function sendMessage() {
    props.sendMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogElements }
      </div>
      <div className={s.messages}>
        { messageElements }
        <textarea ref={fieldMessage} value={newMessage} onChange={updateNewMessage} cols="50" rows="10"></textarea>
        <div>
          <button disabled={isDisabledBtn} onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
