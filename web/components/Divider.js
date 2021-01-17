import React from "react";

function Divider() {
  return (
    <div
      style={{
        width: "2rem",
        display: "flex",
        paddingTop: "0.8rem",
      }}
    >
      <hr
        style={{
          background: "black",
          width: "40%",
          height: "1px",
          border: "1px solid black",
        }}
      ></hr>
    </div>
  );
}

export default Divider;
