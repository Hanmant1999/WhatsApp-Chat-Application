import React from 'react';

import { FcSearch} from 'react-icons/fc';
export interface IconButtonProps{
    className: string;
    children : React.ReactNode
}
const IconButton = (props:IconButtonProps) => {
    return (
        <div>
            <button className={props.className}>
                {props.children}
            </button>
            
        </div>
    );
};

export default IconButton;