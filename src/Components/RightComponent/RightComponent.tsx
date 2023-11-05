import React from 'react';
import ChatBottom from '../ChatBottom/ChatBottom';
import ChatHeader from '../ChatHeading/ChatHeader';
import MiddlePortion from '../MiddlePortion/MiddlePortion';
import styles from  "./RightComponent.module.scss";


export function RightComponent() {
    return (
        <div className={styles.rightportion}>
           <ChatHeader />
            <ChatBottom />
            <MiddlePortion />
        </div>
    );
}
