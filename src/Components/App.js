import React from "react";
import logo from "./Images/test.png";
import search from "./Images/search.svg";
import user from "./Images/user.svg";
import link from "./Images/link.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="main-dag">
          <h3 className="title">
            The Developer <br></br> Repository
          </h3>
          <img src={logo} alt=""></img>
        </div>
        <h3 className="title1">Explore developer profiles</h3>

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
        {/* Individual users */}
        <div className="users">
          <img src={user} alt=""></img>
          <h1>Vignan</h1>
          <div className="userlink">
            <img src={link} alt=""></img>
          </div>
        </div>

        {/* footer */}
        <div className="footer">
          <h2>Could not find what are you were looking for?</h2>
          <button>Add developer info</button>
        </div>
        <div className="footer-final">
          <p>Made with love by vignan</p>
        </div>
      </div>
    </>
  );
}

export default App;
