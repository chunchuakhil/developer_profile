import React, { useEffect, useState } from "react";
import logo from "./Images/test.png";
import Footer from "./Footer";
import Search from "./Search";
import Developers from "./Developers";
import Developer from "./Developer";

export const DeveloperContext = React.createContext();

let developersData = [];

function HomePage() {
  const [developers, setdevelopers] = useState([]);
  const [booleanVal, setBoolean] = useState(false);

  const fetchingDevelopers = () => {
    fetch("/api/developers/")
      .then((response) => response.json())
      .then((response) => {
        setdevelopers(response);
        developersData = response;
      });
  };

  useEffect(() => {
    fetchingDevelopers();
  }, [booleanVal]);

  const searchfn = (inputText) => {
    if (inputText !== "") {
      const filterData = developersData.filter((dev) => {
        if (inputText === "") {
          return dev;
        } else {
          return dev.id.toLowerCase().includes(inputText);
        }
      });
      setdevelopers(filterData);
    } else {
      setdevelopers(developersData);
    }
  };

  const addDeveloper = () => {
    setTimeout(() => {
      setBoolean(!booleanVal);
    }, 800);
  };

  return (
    <DeveloperContext.Provider value={addDeveloper}>
      <div className="container">
        <div className="main-dag">
          <h3 className="title">
            The Developer <br></br> Repository
          </h3>
          <img src={logo} alt=""></img>
        </div>
        <h3 className="title1">Explore developer profiles</h3>
        <div className="line"></div>
        <Search searchfn={searchfn} />

        <Developers developers={developers} />
        <div className="line"></div>
        <Developer />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </DeveloperContext.Provider>
  );
}

export default HomePage;
