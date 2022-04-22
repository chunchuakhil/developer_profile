import React from "react";
import user from "./Images/user.svg";
import hr from "./Images/hr.png";
import ln from "./Images/ln.png";
import github from "./Images/github.png";
import cc from "./Images/cc.png";
import tw from "./Images/tw.png";
import medium from "./Images/medium.png";

import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Repositories from "./Repositories";


const App1 = () => {
  const location = useLocation();
  const userDetails = location.state.links.link;
  const githubLink = userDetails.github_link;
  const hackerrank_link = userDetails.hackerrank_link;
  const linkedIn_link = userDetails.linked_link;
  const medium_link = userDetails.medium_link;
  const twitter_link = userDetails.twitter_link;

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
              <a href={`https://github.com/${githubLink}`} target="_blank"><img src={github} alt=""></img></a>
              <img src={ln} alt=""></img>
              <img src={hr} alt=""></img>
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
