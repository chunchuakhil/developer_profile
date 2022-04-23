import React, { useState } from "react";
import { useContext } from "react";
import { DeveloperContext } from "./Home";




const Developerform = ({ formdisplay }) => {
  const addDeveloper = useContext(DeveloperContext);
  const [github, setgithub] = useState("");
  const [hackerrank, sethackerrank] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [medium, setmedium] = useState("");
  const [codechef, setcodechef] = useState("");
  const [twitter, settwitter] = useState("");

  const clickHandler = () => {
    formdisplay();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    formdisplay();
    const developer_details = {
      github_link: github,
      hackerrank_link: hackerrank,
      linked_link: linkedIn,
      medium_link: medium,
      twitter_link: twitter,
      codechef_link: codechef,
    };
    fetch('/api/developers/',{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        "github_id": github,
        "linkedin_id": linkedIn,
        "codechef_id": codechef,
        "hackerrank_id": hackerrank,
        "twitter_id": twitter,
        "medium_id": medium
      })
    })
    addDeveloper(developer_details);
    setgithub("");
    sethackerrank("");
    setcodechef("");
    setlinkedIn("");
    setmedium("");
    settwitter("");
  };
  
  return (
    <div className="formdata">
      <form onSubmit={submitHandler}>
        <label htmlFor="github">Github</label>
        <input
          type="text"
          value={github}
          onChange={(e) => setgithub(e.target.value)}
        ></input>
        <label htmlFor="HackerRank">HackerRank</label>
        <input
          type="text"
          value={hackerrank}
          onChange={(e) => sethackerrank(e.target.value)}
        ></input>
        <label htmlFor="LinkedIn">LinkedIn</label>
        <input
          type="text"
          value={linkedIn}
          onChange={(e) => setlinkedIn(e.target.value)}
        ></input>
        
        <label htmlFor="Medium">Medium</label>
        <input
          type="text"
          value={medium}
          onChange={(e) => setmedium(e.target.value)}
        ></input>
        <label htmlFor="Twitter">Twitter</label>
        <input
          type="text"
          value={twitter}
          onChange={(e) => settwitter(e.target.value)}
        ></input>
        <label htmlFor="Codechef">Codechef</label>
        <input
          type="text"
          value={codechef}
          onChange={(e) => setcodechef(e.target.value)}
        ></input>
        <div className="btns">
          <button id="btn2" onClick={clickHandler}>
            Exit
          </button>
          <button id="btn1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Developerform;
