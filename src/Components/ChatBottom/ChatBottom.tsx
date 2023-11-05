import React, { ChangeEvent } from 'react';
import IconButton from '../ChatIcon/IconButton';
import {BsFillEmojiSmileFill} from 'react-icons/bs';
import styles from './ChatBottom.module.scss';
import {ImAttachment} from 'react-icons/im';
import {FaMicrophone} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi';
import { useDispatch } from 'react-redux';

function ChatBottom() {
    const dispatch=useDispatch()
    const [messages,setMessages]= React.useState<string>("");
    const getmessage= ()=>{
        const newtime:any =new Date();
        const  time = newtime.now();
        const arr={from:"Hanmant", time: time, message:messages};
        dispatch({type:"add",payload:messages});  
    }

    const sendMessage = (e:ChangeEvent<HTMLInputElement>)=>{
        setMessages(e.target.value)
    }
    const debounce = (e:ChangeEvent<HTMLInputElement>)=>{
           let timeoutid ;
            return function(e:ChangeEvent<HTMLInputElement>){
             clearTimeout(timeoutid);
             timeoutid = setTimeout(()=>{
                console.log(`${e?.target?.value} from settimeout`);
                sendMessage(e);
            },1000)
        }();
           }
    return (
            <div className={styles.chatBottom} >
                <div className={styles.leftportion}>
                <IconButton className={styles.emoji} >
                <BsFillEmojiSmileFill />
                </IconButton>
                <IconButton className={styles.emoji} >
                    <ImAttachment />
                </IconButton>
                </div>
                <input placeholder='type a Message' value={messages} className={styles.inputbox} onChange={(e:ChangeEvent<HTMLInputElement>)=>{debounce(e)}}/>
                <IconButton className={styles.emoji}  >
                    <FiSend onClick={()=>{getmessage()}}/>
                </IconButton>
                <div className={styles.rightportion}>
                <IconButton className={styles.emoji} >
                    <FaMicrophone />
                </IconButton>
                </div>
            </div>
    );
}

export default ChatBottom;