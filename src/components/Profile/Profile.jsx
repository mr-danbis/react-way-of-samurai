import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dataPosts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;