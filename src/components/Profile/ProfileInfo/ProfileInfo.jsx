import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <img src="https://klike.net/uploads/posts/2022-09/1663047483_g-32.jpg" />
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;