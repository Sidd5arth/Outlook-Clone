import React from "react";
import { useSelector } from "react-redux"; // Import the useSelector hook
import Filters from "./Components/Filters";
import MailList from "./Components/MailList";
import ShimmerList from "./Components/Shimmer/ShimmerList";
import useEmailList from "./Components/Hooks/useEmailList";
import MailCard from "./Components/MailCard";
import ReadList from "./Components/ReadList";
import UnreadList from "./Components/UnreadList";
import FavoriteList from "./Components/FavoriteList";
import { useState } from "react";

function App() {
  // localStorage.clear();

  useEmailList(1);
  const emailList = useSelector((state) => state.emailList);
  const [clickedId, setClickedId] = useState(null);
  const [clickedFilter, setClickedFilter] = useState(null);

  const handleClick = (val) => {
    if (val.target) {
      setClickedFilter(val.target.innerText);
      console.log(val.target.innerText)
      setClickedId(null);
    } else {
      setClickedId(val);
    }
  };

  return (
    <div className="App">
      <Filters handleClick={handleClick} />
      {emailList.length === 0 ? (
        <ShimmerList itemCount={10} />
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll",
            overFlowX: "hidden",
          }}
        >
          {clickedFilter === "read" && <ReadList handleClick={handleClick} />}
          {clickedFilter === "unread" && <UnreadList handleClick={handleClick} />}
          {clickedFilter === "favorite" && <FavoriteList handleClick={handleClick} />}
          {(clickedFilter === null || clickedFilter === "All") && (
            <MailList emailList={emailList} handleClick={handleClick} />
          )}
          {clickedId && (
            <MailCard clickedId={clickedId} emailList={emailList} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
