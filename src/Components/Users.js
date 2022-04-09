import user from "./Images/user.svg";
import link from "./Images/link.svg";
import React from "react";
import developers from "./Developers_data";

const Users = (users) => {
  const devs = developers.map((dev)=>{
    return (
    <div className="users" key={dev.id}>
            <img src={user} alt=""></img>
            <h1>{dev.name}</h1>
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
