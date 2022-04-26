import link from "./Images/link.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ developers }) => {
  const navigate = useNavigate();

  const devData = (id) => {
    console.log("link",link);
    navigate("/App1", { state: { links: { id } } });
  };

  const devs = developers.map((dev, index) => {
    return (
      <div className="users" key={index}>
        <img className="dev-image" src={dev.avatar_url} alt=""></img>
        <h1>{dev.id}</h1>
        <div className="userlink">
          <span onClick={() => devData(dev.id)}>
            <img src={link} alt=""></img>
          </span>
        </div>
      </div>
    );
  });
  return <div className="devgroup">{devs}</div>;
};

export default Users;
