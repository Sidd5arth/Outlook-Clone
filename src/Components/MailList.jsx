import React from "react";
import { useSelector } from "react-redux";
import EmailCard from "./EmailCard";

const MailList = ({ emailList, handleClick }) => {
  const readList = useSelector((state) => state.readList);
  const favList = useSelector((state) => state.favoritesList);
  console.log(favList);
  console.log(readList);

  return (
    <div
      style={{
        padding: "50px",
        flex: "1",
        overflowY: "scroll",
        height: "88vh",
        fontSize: "0.8em",
        color: "#666666",
      }}
    >
      {emailList.map((item) => {
        const isRead = readList.some((readItem) => readItem.id === item.id);
        const isfav = favList.some((favItem) => favItem.id === item.id);
        console.log(isRead);
        console.log(isfav);

        return (
          <EmailCard
            key={item.id}
            id={item.id}
            clickHandle={handleClick}
            subject={item.subject}
            timestamp={item.date}
            desc={item.short_description}
            fromName={item.from.name}
            fromEmail={item.from.email}
            read={isRead}
            fav={isfav}
          />
        );
      })}
    </div>
  );
};

export default MailList;
