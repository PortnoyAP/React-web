import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = props => {

    // let dialogs = [
    //     {id: 1, name: "Serega"},
    //     {id: 2, name: "Alesha"},
    //     {id: 3, name: "Misha"},
    //     {id: 4, name: "Sveta"},
    //     {id: 5, name: "Olesya"}
    // ];

    // let messages = [
    //     {id: 1, message: "Hello"},
    //     {id: 2, message: "Ashkelon"},
    //     {id: 3, message: "Israel"},
    //     {id: 4, message: "Yo"},
    //     {id: 5, message: "Yo"},
    // ];


    let dialogsElement = props.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>);

    let messagesElements = props.messages
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
