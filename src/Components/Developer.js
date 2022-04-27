import React, { useState } from "react";
import Developerform from "./Developerform";

const Developer = () => {
  const [formVisibility, setformVisibility] = useState(false);
  const clickHandler = () => {
    setformVisibility(true);
  };
  const formdisplay = () => {
    setformVisibility(false);
  };
  return (
    <>
      <div className="footer">
        <h2>Could not find what are you were looking for?</h2>
        <button style={{ cursor: "pointer" }} onClick={clickHandler}>
          Add developer info
        </button>
        <br></br>
        <br></br>
        {formVisibility && <Developerform formdisplay={formdisplay} />}
      </div>
    </>
  );
};

export default Developer;
