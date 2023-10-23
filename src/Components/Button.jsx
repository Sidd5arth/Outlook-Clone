import React from "react";

const Button = ({ type, name, handleClick }) => {
  const handleBtnClick = (e) => {
    if(type === "fav"){
      handleClick();
    }
    else{
      handleClick(e);
    }
  }

  return (
    <div>
      <button
        onClick={handleBtnClick}
        style={{
          padding: "0.5em",
          width: "6em",
          borderRadius: "1em",
          border: "0.5px solid #333",
          backgroundColor: type === "fav" ? "#e62c70" : "",
          color: type === "fav" ? "white" : "",
          cursor: "pointer",
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
