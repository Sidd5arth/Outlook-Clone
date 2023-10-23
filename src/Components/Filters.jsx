import React from "react";
import Button from "./Button";

const Filters = ({handleClick}) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding:"50px 50px 0px 50px" }}>
      <span>Filter By:</span>
      <Button handleClick={handleClick} type="All" name="All" />
      <Button handleClick={handleClick} type="unread" name="unread" />
      <Button handleClick={handleClick} type="read" name="read" />
      <Button handleClick={handleClick} type="favorite" name="favorite" />
    </div>
  );
};

export default Filters;
