import { Action } from "redux";

export type messageList ={
    from :string;
    time: string;
    message:string;

};

export const  initialConversation :messageList[]=[{from:"Hanmant",time:"12/12/22",message:"hi"},{from:"other",time:"12/12/21",message:"hello"}
,{from:"Hanmant",time:"12/12/22",message:"how are you?"},{from:"other",time:"12/12/22",message:"fine"},
{from:"Hanmant",time:"12/12/22",message:"how are you?"},{from:"other",time:"12/12/22",message:"good"},
{from:"Hanmant",time:"12/12/22",message:"how are you?"},{from:"other",time:"12/12/22",message:"fine"},
{from:"Hanmant",time:"12/12/22",message:"how are you?"},{from:"other",time:"12/12/22",message:"good"}];


export const messagesReducer =(state:messageList[]=initialConversation,action:any)=>
{
    return (
        [
            ...state,
            action.payload

        ]
    )
}
