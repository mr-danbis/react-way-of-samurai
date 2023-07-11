import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

    const DialogsElements = props.messagesPage.dialogs.map(dialog => {
        return <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img}/>
    });

    const MessagesElements = props.messagesPage.messages.map(message => {
        return <MessagesItem message={message.message} id={message.id}/>
    });

    let messageElement = React.createRef();
    const sendMessage = () => {
        alert(props.messagesPage.newMessagesText);
        messageElement.current.value = '';
    }
    const onMessageChange = () => {
        let text = messageElement.current.value;
        props.changeDialogsMessage(text);
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogsGroup}>
                {DialogsElements}
            </div>
            <div className={classes.messagesGroup}>
                {MessagesElements}
            </div>
            <div className={classes.dialogsInput}>
                <input type="text" onChange={onMessageChange} ref={messageElement}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;