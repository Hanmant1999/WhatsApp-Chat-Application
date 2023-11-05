import React from 'react';
import styles from './UsersChat.module.scss';

export interface UsersChatProps{
    image:string;
    username:string;
    message:string;
    unreadmessages: number;
}

function UsersChat(props:UsersChatProps) {
    return (
        <div className={styles.userlist}>
            <div className={styles.userImage}>
            <img  className={styles.profimage} src={props.image} alt={props.username} /> 
            </div>
            <div className={styles.usermessage}>
                <h3>{props.username}</h3>
                <p>{props.message}</p>
            </div>
            <div className={styles.messagecount}>
                <h3>{props.unreadmessages}</h3>
            </div>
        </div>
    );
}

export default UsersChat;