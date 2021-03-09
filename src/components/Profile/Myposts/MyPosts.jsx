import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsData = [
        {id: 1, post: "Hi how are you" , likesCount: 12},
        {id: 2, post: "It's my first post", likesCount: 15 }

    ];

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
                <Post message={postsData[0].post} counts={postsData[0].likesCount}/>
                <Post message={postsData[1].post} counts={postsData[1].likesCount}/>
               
            </div>
        </div>   
    );
}

export default MyPosts;