import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = (props) => {

    const postsElements = props.dataPosts.map(post => {
        return <Post message={post.message} like={post.likesCount} id={post.id} img={post.img}/>
    });

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <input type="text"/>
                <button>Submit</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;