import React, { useEffect, useState } from 'react';
import logo from './Images/test.png';
import Footer from './Footer';
import Search from './Search';
import Developers from './Developers';
import Developer from './Developer';
import { Loading, NotFound } from './common/common';
import { fetchingDevelopersApi } from './../api/api';

export const DeveloperContext = React.createContext();

function HomePage() {
  const [developers, setdevelopers] = useState([]);

  const [filterdDevelopers, setFilterdDevelopers] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  const [loading, setloading] = useState(true);

  const [count, setCount] = useState(0);



  const fetchingDevelopers = () => {
    fetchingDevelopersApi()
      .then((response) => response.json())
      .then((response) => {
        setdevelopers(response);
        setloading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchingDevelopers();
  }, [count]);


  const searchfn = (inputText) => {
    if (inputText === '') {
      setIsSearching(false);
      return;
    }
    const filterData = developers.filter((dev) => {
      return dev.id.toLowerCase().includes(inputText);
    });
    setIsSearching(true);
    setFilterdDevelopers(filterData);
  };


  const DevelopersListView = () => {
    if (isSearching && filterdDevelopers.length > 0) {
      return <Developers developers={filterdDevelopers} />;
    }
    if (developers.length > 0) {
      return <Developers developers={developers} />;
    }
    return <NotFound />;
  };

  return (
    <DeveloperContext.Provider value={{ count, setCount, setloading }}>
      <div className='container'>
        <div className='main-dag'>
          <h3 className='title'>
            The Developer <br></br> Repository
          </h3>
          <img src={logo} alt=''></img>
        </div>
        <h3 className='title1'>Explore developer profiles</h3>
        <div className='line'></div>

        <Search searchfn={searchfn} />

        {loading ? <Loading /> : <DevelopersListView />}

        <div className='line'></div>
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
