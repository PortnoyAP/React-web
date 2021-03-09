/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://media4.giphy.com/media/GbUrFXadBryQ8/giphy.gif'></img>
                {props.message}
            <div>
                <span> { props.counts } LIKE</span>
            </div>
        </div>
    );
}

export default Post;