import React from "react";
import user from "./Images/user.svg";
import hr from "./Images/hr.png";
import ln from "./Images/ln.png";
import github from "./Images/github.png";
import cc from "./Images/cc.png";
import tw from "./Images/tw.png";
import medium from "./Images/medium.png";
import link from "./Images/link.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Repositories from "./Repositories";
import axios from "axios";

const App1 = () => {
  const location = useLocation();
  const userDetails = location.state.links.link;

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>The Developer Profile</h1>
          <h1>All Developers</h1>
        </div>
        <div className="main-profile">
          <div>
            <img src={user} width="300px" alt=""></img>
          </div>
          <div className="profile-info">
            <h1>{userDetails.github_link}</h1>
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

      <h1 style={{ textAlign: "center" }}>Github Repositories</h1>

      <div className="repos">
        <Repositories github={userDetails.github_link} />
      </div>
      <Footer />
    </>
  );
};

export default App1;
