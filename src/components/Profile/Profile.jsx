/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import MyPosts from "./Myposts/MyPosts";
import styles from  './Profile.module.css';
import ProfilInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
           <ProfilInfo text="Avater + Discription"/>
           <MyPosts />
        </div>
    );
}

export default Profile;