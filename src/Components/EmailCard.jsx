import React from "react";

const EmailCard = ({ id, fromEmail, fromName, subject, desc, timestamp, fav, read, clickHandle}) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; 

  const formattedDateTime = `${year}-${month}-${day} ${hours12}:${minutes} ${amOrPm}`;

  const handleClick = () => {
    clickHandle(id);
  }
  return (
    <div onClick={handleClick}
      style={{
        height: "150px",
        width: "100%",
        border: "1px solid #999999",
        marginBottom: "12px",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        gap: "20px",
        backgroundColor: read ? "#ebeae6" : "white",
        cursor:"pointer"
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#e62c70",
        }}
      ></div>
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "6px"
        }}
      >
        <p>
          <span style={{ color: "#666666" }}>From:</span> {fromName} &lt;
          {fromEmail}
          &gt;
        </p>
        <p>
          <span style={{ color: "#666666" }}>Subject:</span> {subject}
        </p>
        <p style={{ color: "#333" }}>{desc}</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <p style={{ color: "#333" }}>{formattedDateTime}</p>
          {fav ? <p style={{ color: "#e62c70" }}>Favorite</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
