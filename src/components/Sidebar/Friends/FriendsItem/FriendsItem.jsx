import React from 'react';
import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {

    return (
        <div className={classes.item}>
            <img className={classes.img} src={props.img} alt=""/>
            {props.name}
        </div>
    )
}

export default FriendsItem;