import React from 'react'
import EmailCard from './EmailCard'
import { useSelector } from "react-redux";

const FavoriteList = ({handleClick}) => {
    const favList = useSelector((state) => state.favoritesList);
  return (
    <div style={{padding:"50px", flex:"1", overflowY:"scroll", height:"88vh", fontSize: "0.8em", color:"#666666"}}>
        {favList.map((items) => (
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

export default FavoriteList;
