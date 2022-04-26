import React, { useEffect, useState } from "react";
import logo from "./Images/test.png";
import Footer from "./Footer";
import Search from "./Search";
import Users from "./Users";
import Developer from "./Developer";

export const DeveloperContext = React.createContext();

let developersData = [];

function Home() {
  const [developers, setdevelopers] = useState([]);

  const fetchingDevelopers = () => {

    fetch("/api/developers/")
      .then((response) => response.json())
      .then((response) => {
       
        setdevelopers(response);
        developersData = response;
      });
  };


  const refreshFunction = ()=>{
    window.location.reload(false);
  }

  useEffect(() => {
    fetchingDevelopers();
  }, []);

  const searchfn = (text) => {

    if (text !== "") {
      const filterData = developersData.filter((el) => {
        if (text === "") {
          return el;
        } else {
          return el.id.toLowerCase().includes(text);
        }
      });

      setdevelopers(filterData);
    } else {
      setdevelopers(developersData);
    }
  };

  const addDeveloper = () => {
    //fetch the developers again
    fetchingDevelopers();
    setTimeout(refreshFunction,1000);
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
        <Users developers={developers} />

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

export default Home;
