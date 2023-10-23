import React, { useEffect } from "react";
import useGetEmail from "./Hooks/useGetEmail";
import Button from "./Button";
import { addFavorite } from "../Service/action";
import { addToRead } from "../Service/action";
import { useDispatch } from "react-redux";

const MailCard = ({ clickedId, emailList }) => {
  const { data, loading } = useGetEmail(clickedId);
  const dispatch = useDispatch();
  console.log(clickedId)

  const selectedMail = emailList.filter((items) => items.id === clickedId)[0];
  useEffect(() => {
    dispatch(addToRead(selectedMail));
  }, [clickedId])

  const handleClick = () => {
    console.log(selectedMail)
      dispatch(addFavorite(selectedMail));
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flex: "2",
            padding: "50px",
            backgroundColor: "white",
            borderRadius: "2em",
          }}
        >
          loading...
        </div>
      ) : (
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flex: "2",
            padding: "50px",
            backgroundColor: "white",
            borderRadius: "2em",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#e62c70",
              }}
            ></div>
            <Button name="Favorite" type="fav" handleClick={handleClick} />
          </div>

          <div
            style={{ fontSize: "0.8em", color: "#666666" }}
            dangerouslySetInnerHTML={{ __html: data?.body }}
          />
        </div>
      )}
    </>
  );
};

export default MailCard;
