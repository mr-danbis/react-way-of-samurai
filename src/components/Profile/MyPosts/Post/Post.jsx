import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={props.img} alt=""/>
            {props.message}
            <div>
                 <span>{props.like} likes </span>
            </div>
        </div>
    )
}

export default Post;