import React from 'react';
import style from '../InputComponent/InputComponent.module.scss';

interface InputComponentProps{
    left:React.ReactNode,
    right:React.ReactNode,
}

export function InputComponent(props:InputComponentProps) {
    return (
        <div className={style.inputbox}>
            {props.left}
            <input className={style.inputElement}  id="inputelement" />
            {props.right}    
        </div>
    );
}
