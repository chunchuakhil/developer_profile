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
        <label htmlFor="github">HackerRank</label>
        <input
          type="text"
          value={hackerrank}
          onChange={(e) => sethackerrank(e.target.value)}
        ></input>
        <label htmlFor="github">LinkedIn</label>
        <input
          type="text"
          value={linkedIn}
          onChange={(e) => setlinkedIn(e.target.value)}
        ></input>
        <label htmlFor="github">Medium</label>
        <input
          type="text"
          value={medium}
          onChange={(e) => setmedium(e.target.value)}
        ></input>
        <label htmlFor="github">Twitter</label>
        <input
          type="text"
          value={twitter}
          onChange={(e) => settwitter(e.target.value)}
        ></input>
        <label htmlFor="github">Codechef</label>
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
