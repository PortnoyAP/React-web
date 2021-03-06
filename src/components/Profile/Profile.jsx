/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import MyPosts from "./Myposts/MyPosts";
import styles from  './Profile.module.css';
import ProfilInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
           <ProfilInfo text="Avater + Discription"/>
           <MyPosts posts={props.profilePage.posts}
                    newPostText= {props.profilePage.newPostText}
                    updateNewText = {props.updateNewText}
                    addPost={props.addPost}/>
        </div>
    );
}

export default Profile;