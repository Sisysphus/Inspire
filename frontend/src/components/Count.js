import React from "react";

const Count = ({ count }) => {
  return (
    <div className="wrappercont">
      <div className="count">
        <h4>{count}</h4>
        <div className="anotherone">
          <h5>Please log in to use</h5>
        </div>
      </div>
    </div>
  );
};

export default Count;
