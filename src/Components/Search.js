import React from "react";
import search from "./Images/search.svg";


const Search = ()=>{
  return(
      <>
       <div className="search">
          <input
            type="text"
            id="search"
            placeholder="search for username"
          ></input>
          <div class="searchIcon" style={{ "margin-top": "25px" }}>
            <button>
              {" "}
              <img src={search} style={{ width: "30px" }} alt=""></img>
            </button>
          </div>
        </div>
      </>
  )
}

export default Search;