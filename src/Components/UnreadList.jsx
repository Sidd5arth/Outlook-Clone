import React from 'react'
import { useSelector } from "react-redux";
import EmailCard from './EmailCard'

const UnreadList = ({handleClick}) => {
    console.log("unresd")
    const readList = useSelector((state) => state.readList);
    const emailList = useSelector((state) => state.emailList);
    const unreadList = emailList.filter((email) => !readList.includes(email));

  return (
    <div style={{padding:"50px", flex:"1", overflowY:"scroll", height:"88vh", fontSize: "0.8em", color:"#666666"}}>
        {unreadList.map((items) => (
            <EmailCard
            key={items.id}
            id = {items.id}
            clickHandle={handleClick}
            subject={items.subject}
            timestamp={items.date}
            desc={items.short_description}
            fromName = {items.from.name}
            fromEmail = {items.from.email}
            />
        ))}
      
    </div>
  )
}

export default UnreadList;
