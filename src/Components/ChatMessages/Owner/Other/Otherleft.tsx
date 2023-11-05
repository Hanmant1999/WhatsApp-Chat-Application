import React from 'react';
import styles from './Otherleft.module.scss';
export type Otherleftprops={
    message:string;
    time:string;
};

function Otherleft(props:Otherleftprops) {
    return (
        <div className={styles.Otherleft}>
            <h3>{props.message}</h3>
            <p>{props.time}</p>
        </div>
    );
}

export default Otherleft;