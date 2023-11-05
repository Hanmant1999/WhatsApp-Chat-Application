import React from 'react';
import ChatHeader from '../ChatHeading/ChatHeader';
import styles from './LeftComponent.module.scss';
import {data,Mycontacts} from '../../Data/users';
import UsersChat from '../UsersChat/UsersChat';

export function LeftComponent() {
    return (
        <div className={styles.leftportion}>
            <ChatHeader />
            <input placeholder='type a Message' className={styles.inputbox} />
            {data.map((user:Mycontacts)=>{
            return (
                <>
                <UsersChat  key ={user.username} image={user.image} username={user.username} message={"hANMANT"} unreadmessages={user.unreadmessages} />
                <hr />
                </>
            )
})
}

        </div>
    );
}
