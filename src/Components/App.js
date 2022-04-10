import React, { useState } from "react";
import logo from "./Images/test.png";

import Footer from "./Footer";
import Search from "./Search";
import Users from "./Users";
import Developer from "./Developer";
import data from "./Developers_data";

export const DeveloperContext = React.createContext();

function App() {
  const [developers, setdevelopers] = useState(data);

  const searchfn = (text) => {
    const filterData = data.filter((el) => {
      if (text === "") {
        return el;
      } else {
        return el.name.toLowerCase().includes(text);
      }
    });
    setdevelopers(filterData);
  };

  const addDeveloper = (details) => {
    setdevelopers([...developers, details]);
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
        <Footer />
      </div>
    </DeveloperContext.Provider>
  );
}

export default App;
