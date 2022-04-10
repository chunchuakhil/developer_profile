import React, { useState } from "react";
import search from "./Images/search.svg";

const Search = ({ searchfn }) => {
  const [text, settext] = useState("");
  const filtertext = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          id="search"
          value={text}
          placeholder="search for username"
          onChange={(e) => {
            filtertext(e);
          }}
        ></input>
        <div class="searchIcon" style={{ "margin-top": "25px" }}>
          <button onClick={() => searchfn(text)}>
            {" "}
            <img src={search} style={{ width: "30px" }} alt=""></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;