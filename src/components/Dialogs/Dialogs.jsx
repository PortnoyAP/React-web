import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = props => {

    let dialogsElement = props.state.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>);

    let messagesElements = props.state.messages
    .map( messageEl => <MessageItem message={messageEl.message}></MessageItem>);



    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsIitems}>
               {dialogsElement}
            </div>
            <div className={styles.messages}>
               {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
