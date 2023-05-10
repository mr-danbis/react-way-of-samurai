import React from 'react';
import classes from './../Dialogs.module.css';

const MessagesItem = (props) => {
    return (
        <div className={classes.messagesItem}>{props.message}</div>
    );
}
export default MessagesItem;