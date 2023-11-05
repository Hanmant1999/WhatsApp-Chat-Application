import React from 'react';
import styles from './Ownerright.module.scss';
export type Ownerrightprops={
    message:string;
    time:string;
};

function Ownerright(props:Ownerrightprops) {
    return (
        <div className={styles.Ownerright}>
            <h3>{props.message}</h3>
            <p>{props.time}</p>
        </div>
    );
}

export default Ownerright;