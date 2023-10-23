import React from "react";
import "./shimmer.css";
import useEmailList from "../Hooks/useEmailList";

const ShimmerList = ({ itemCount }) => {
  const shimmerItems = Array.from({ length: itemCount }, (_, index) => (
    <div key={index} className="shimmer-item">
      <div className="shimmer"></div>
    </div>
  ));

  return (
    <>
      <div className="shimmer-filters"></div>
      <div className="shimmer-list">{shimmerItems}</div>;
    </>
  );
};

export default ShimmerList;
