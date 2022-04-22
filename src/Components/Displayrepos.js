import React from "react";
import link from "./Images/link.svg";


const Displayrepos = ({ repodata }) => {

  console.log(repodata);
  const repos = repodata.map((repo, index) => {
    return (
      <div className="repo" key={index}>
        <h1>{repo.name}</h1>
        <div className="userlink">
          <a href={repo.url} target="_blank" rel="noreferrer"><img src={link} alt=""></img></a>
        </div>
      </div>
    );
  });
  return <>{repos}</>;
};

export default Displayrepos;
