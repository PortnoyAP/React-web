import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
    .map ( post => <Post message={post.post} counts={post.likesCount}/>)

    return(
        <div className={styles.posts}>
            <div className={styles.item}>
               <h3> MY POSTS : </h3>
            </div>
            <div>
                <textarea></textarea>
                <br/>
                <button>Add Post</button>
                <button>Delete Post</button>
            </div>
            <div >
                { postsElements } 
            </div>
        </div>   
    );
}

export default MyPosts;