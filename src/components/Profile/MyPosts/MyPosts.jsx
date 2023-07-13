import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = (props) => {
    const postsElements = props.dataPosts.map(post => {
        return <Post id={post.id} message={post.message} like={post.likesCount} img={post.img}/>
    });

    let newPostRef = React.createRef();
    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostRef.current.value;
        props.changeProfileMessage(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.title}>My post</h3>
            <div className={classes.postInput}>
                <input type="text" onChange={onPostChange} ref={newPostRef} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;