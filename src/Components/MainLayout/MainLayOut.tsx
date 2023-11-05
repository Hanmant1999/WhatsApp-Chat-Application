import React from 'react';
import styles from  "./MainLayOut.module.scss";

export  interface MainLayOutProps{
    left:React.ReactNode,
    right:React.ReactNode,
}

export function MainLayOut(props:MainLayOutProps): JSX.Element {
    return (
        <div className={styles.MainLayout}>
            {props.left}
            {props.right}
        </div>
    );
}
