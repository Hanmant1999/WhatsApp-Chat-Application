import React from 'react';

export interface ImageProps{
    src:string;
    alt?:string;
}

function Image(props:ImageProps):JSX.Element {
    return (
        <div>
           <img src={props.src}  alt={props.alt} />
        </div>
    );
}

export default Image;