import React, { useState, useEffect } from "react";
import hr from "./Images/hr.png";
import ln from "./Images/ln.png";
import github from "./Images/github.png";
import cc from "./Images/cc.png";
import tw from "./Images/tw.png";
import medium from "./Images/medium.png";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Repositories from "./Repositories";

const DevProfile = () => {
  const location = useLocation();
  const githubId = location.state.links.id;
  const [linkedinId, setLinkedinId] = useState();
  const [hackerrankId, setHackerrankId] = useState();
  const [codeChefId, setCodeChefId] = useState();
  const [mediumId, setMediumId] = useState();
  const [twitterId, setTwitterId] = useState();
  const [repos, setrepos] = useState();
  const [avatar, setAvatar] = useState();
  const [bio, setbio] = useState();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`/api/developers/${githubId}`)
      .then((response) => response.json())
      .then((response) => {
        setbio(response.bio);
        setAvatar(response.avatar_url);
        setLinkedinId(response.linkedin_id);
        setHackerrankId(response.hackerrank_id);
        setCodeChefId(response.codechef_id);
        setMediumId(response.medium_id);
        setTwitterId(response.twitter_id);
        setrepos(response.repos);
      });
  }, []);

  if (repos !== undefined && Loading === false) {
    setLoading(true);
  }

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>The Developer Profile</h1>
          <h1>All Developers</h1>
        </div>
        <div className="main-profile">
          <div>
            <img className="avatar" src={avatar} width="300px" alt=""></img>
          </div>
          <div className="profile-info">
            <h1>{githubId}</h1>
            <h3>{bio}</h3>
            <div className="profiles">
              <a
                href={`https://github.com/${githubId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt=""></img>
              </a>
              <a
                href={`https://www.linkedin.com/in/${linkedinId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={ln} alt=""></img>
              </a>
              <a
                href={`https://www.hackerrank.com/${hackerrankId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={hr} alt=""></img>
              </a>
              <a
                href={`https://www.codechef.com/users/${codeChefId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={cc} alt=""></img>
              </a>
              <a
                href={`https://medium.com/${mediumId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={medium} alt=""></img>
              </a>
              <a
                href={`https://twitter.com/${twitterId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={tw} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Github Repositories</h1>

      {Loading && (
        <div className="repos">
          <Repositories repos={repos} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default DevProfile;
