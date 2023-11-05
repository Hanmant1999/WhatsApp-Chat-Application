import React from 'react';
import styles from './ChatHeading.module.scss';
import IconButton from '../ChatIcon/IconButton';
import {FcSearch} from 'react-icons/fc'

export interface ChatHeaderprops{

}

function ChatHeader(props:ChatHeaderprops):JSX.Element{
    return (
        <div className={styles.chatHeader}>
            <div className={styles.chatleftside}>
                <img className ={styles.photo } src='https://i.pinimg.com/originals/8b/1b/69/8b1b69d1040e436b029106cd6eb80bf0.jpg' alt="myphoto" />
                <div className={styles.fullname}>
                <h3 className={styles.fname}>Hanmant</h3>
                <h3 className={styles.lname}>Peter</h3>
                </div>
                <div></div>
                </div>
                <div><IconButton className={styles.searchbutton}>
                    <FcSearch className={styles.icon} />
                    </IconButton>
                </div>
        </div>
    );
}

export default ChatHeader;