import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postTop}>
                <img src={props.img} alt=""/>
                {props.message}
            </div>
            <div>
                 <span>{props.like} likes </span>
            </div>
        </div>
    )
}

export default Post;