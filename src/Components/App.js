import React from "react";
import logo from "./Images/test.png";

import Footer from "./Footer";
import Search from "./Search";
import Users from "./Users";
import Developer from "./Developer";


function App() {
  return (
    <>
      <div className="container">
        <div className="main-dag">
          <h3 className="title">
            The Developer <br></br> Repository
          </h3>
          <img src={logo} alt=""></img>
        </div>
        <h3 className="title1">Explore developer profiles</h3>
        <div className="line"></div>
        <Search />
        <Users/>
        <div className="line"></div>
       <Developer/>
        <Footer />
      </div>
    </>
  );
}

export default App;
