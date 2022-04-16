import user from "./Images/user.svg";
import link from "./Images/link.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ developers }) => {
  const navigate = useNavigate();
 
  const devData = (link) => {
    navigate("/App1", { state: { links:{link} } });
  };


  const devs = developers.map((dev, index) => {
    return (
      <div className="users" key={index}>
        <img src={user} alt=""></img>
        <h1>{dev.github_link}</h1>
        <div className="userlink">
         
            <span onClick={() => devData(dev)}>
            <img src={link} alt=""></img>
            </span>
        
        </div>
      </div>
    );
  });
  return <div className="devgroup">{devs}</div>;
};

export default Users;
