/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import MyPosts from "./Myposts/MyPosts";
import styles from  './Profile.module.css';
import ProfilInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // let posts = [
    //     {id: 1, post: "Hi how are you" , likesCount: 12},
    //     {id: 2, post: "It's my first post", likesCount: 15 }

    // ];

    return (
        <div>
           <ProfilInfo text="Avater + Discription"/>
           <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;