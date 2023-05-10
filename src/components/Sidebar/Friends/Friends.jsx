import React from 'react';
import classes from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    const friendsElement = props.friendsData.map(friend => {
        return <FriendsItem img={friend.img} name={friend.name}/>
    });

    return (
        <div>
            Friends
            <div className={classes.friendsList}>
                {friendsElement}
            </div>
        </div>
    )
}

export default Friends;