import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {addMessageCreator, changeDialogMessageActionCreator} from "../../redux/messages-reducer";

const Dialogs = (props) => {

    const DialogsElements = props.messagesPage.dialogs.map(dialog => {
        return <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img}/>
    });

    const MessagesElements = props.messagesPage.messages.map(message => {
        return <MessagesItem message={message.message} id={message.id}/>
    });

    let messageElement = React.createRef();
    const sendMessage = () => {
        props.dispatch(addMessageCreator());
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(changeDialogMessageActionCreator(text));
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogsGroup}>
                {DialogsElements}
            </div>
            <div className={classes.messagesGroup}>
                {MessagesElements}
                <div className={classes.dialogsInput}>
                    <input type="text" onChange={onMessageChange} ref={messageElement} value={props.messagesPage.newMessagesText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;