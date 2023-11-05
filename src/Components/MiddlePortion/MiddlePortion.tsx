import React from 'react';
import Otherleft from '../ChatMessages/Owner/Other/Otherleft';
import Ownerright from '../ChatMessages/Owner/Ownerright';
import style from './MiddlePortion.module.scss';
import * as Redux from "redux";
import { useDispatch, useSelector } from "react-redux";
import { store } from '../../Reducers/store';
import { messageList } from '../../Reducers/messagesReducer';
function MiddlePortion() {
    const {conversation}= useSelector((store:any)=>(
          {conversation :store.messages}
    ));
    return (
        <div className={style.middleportion}>
            {conversation.map((message:messageList)=>{
                return (message && message.from === "Hanmant") ?
                <Ownerright key ={message?.from} time={message?.time} message={message?.message} /> :
                <Otherleft key ={message?.from} time={message?.time} message={message?.message} />
            })}
        </div>
    );
}

export default MiddlePortion;