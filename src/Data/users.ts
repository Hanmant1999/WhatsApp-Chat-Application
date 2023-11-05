
export type Mycontacts={
    image:string,
    username:string,
    About?: string,
    unreadmessages: number
}

export const data:Mycontacts[]=
    [
    {
        image:'https://cdn.iconscout.com/icon/premium/png-128-thumb/adult-man-2314669-1919398.png',
        username:"Hanmant",
        About:"I am using whatsapp",
        unreadmessages: 4,
    },
    {
        image:"https://cdn.iconscout.com/icon/premium/png-128-thumb/woman-avatar-2314720-1919449.png",
        username:"Payal",
        About:"I am using something else",
        unreadmessages: 6,
    },
    { 
        image:"https://cdn.iconscout.com/icon/premium/png-128-thumb/student-2314657-1919386.png",
        username:"Anushka",
        About: "Catch me if you can",
        unreadmessages: 8,
    }

    ];

export type Mymessages={
    Contacts:Mycontacts[] ;
    messages:{}
}