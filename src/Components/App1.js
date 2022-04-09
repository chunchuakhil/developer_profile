import React from "react";
import user from "./Images/user.svg";
import hr from "./Images/hr.png";
import ln from "./Images/ln.png";
import github from "./Images/github.png";
import cc from "./Images/cc.png";
import tw from "./Images/tw.png";
import medium from "./Images/medium.png";
import link from "./Images/link.svg";

const App1 = () => {
  return (
    <>
      <div class="main-container">
        <div className="header">
          <h1>The Developer Profile</h1>
          <h1>All Developers</h1>
        </div>
        <div className="main-profile">
          <div>
            <img src={user} width="300px" alt=""></img>
          </div>
          <div className="profile-info">
            <h1>Sai Vignan</h1>
            <h3>Software Engineer</h3>
            <div className="profiles">
              <img src={hr} alt=""></img>
              <img src={ln} alt=""></img>
              <img src={github} alt=""></img>
              <img src={cc} alt=""></img>
              <img src={medium} alt=""></img>
              <img src={tw} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ "text-align": "center" }}>Github Repositories</h1>
      <div className="repos">
        <div className="repo">
          <h1>Utility App</h1>
          <div className="userlink">
            <img src={link} alt=""></img>
          </div>
        </div>
       
          <div className="repo">
            <h1>Star Rating</h1>
            <div className="userlink">
              <img src={link} alt=""></img>
            </div>
          </div>
        </div>
        <div className="footer-final">
          <p>Made with love by vignan</p>
        </div>
    </>
  );
};

export default App1;
