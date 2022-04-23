import React, { useEffect,useState } from "react";
import logo from "./Images/test.png";
import Footer from "./Footer";
import Search from "./Search";
import Users from "./Users";
import Developer from "./Developer";
// import data from "./Developers_data";

export const DeveloperContext = React.createContext();

const data = [];

function Home() {
  const [developers, setdevelopers] = useState(data);
  

  useEffect(() => {
    fetch('/api/developers/').then(response => response.json())
     .then(response =>
       setdevelopers(response));
 
    console.log(developers);
},[]);


  const searchfn = (text) => {
   
    if (text !== "") {
      const filterData = data.filter((el) => {
        if (text === "") {
          return el;
        } else {
          return el.github_link.toLowerCase().includes(text);
        }
      });
      setdevelopers(filterData);
    } else {
      setdevelopers(data);
    }
  };

  const addDeveloper = (details) => {
    setdevelopers([...developers, details]);
    data.push(details);
  };

  return(
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


export default Home;
