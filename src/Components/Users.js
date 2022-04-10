import user from "./Images/user.svg";
import link from "./Images/link.svg";
import React from "react";

const Users = ({developers}) => {
  const devs = developers.map((dev,index)=>{
    return (
    <div className="users" key={index}>
            <img src={user} alt=""></img>
            <h1>{dev.github_link}</h1>
            <div className="userlink">
              <img src={link} alt=""></img>
            </div>
          </div>
    )
  });
  return (
    <div className="devgroup">
      {devs}
    </div>
  );
};

export default Users;
