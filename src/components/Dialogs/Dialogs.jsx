import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

    const DialogsElements = props.dataDialogs.map(dialog => {
        return <DialogsItem name={dialog.name} id={dialog.id} img={dialog.img}/>
    });

    const MessagesElements = props.dataMessages.map(message => {
        return <MessagesItem message={message.message} id={message.id}/>
    });

    let messageElement = React.createRef();
    const sendMessage = () => {
        let text = messageElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsGroup}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
            </div>
            <div>
                <input type="text" ref={messageElement}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;