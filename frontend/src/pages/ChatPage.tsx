// import { useEffect, useState } from "react";
// import { useChats } from "../hooks/useChats"
// import { ChatType } from "../type";

// export default function ChatPage() {

// const [chats,setChats] = useState<ChatType[]>([])

// const {getChats} = useChats(setChats)
// useEffect(()=>{getChats()},[getChats])

// console.log(chats);

//   return (
//     <div >{chats.map(chat=>(
//         <div key={chat._id}>{chat.chatName}</div>
//     ))}</div>
//   )
// }
