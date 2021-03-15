/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path ="/dialogs/"+props.id;

    return(
    <div className={styles.dialog + " " + styles.active}>
      <img className={styles.image}src='https://icon-library.com/images/104337_avatar.svg.svg'></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
    );
}

export default DialogItem;