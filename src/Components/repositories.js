import React, { useEffect,useState } from "react";

import axios from "axios";

import Displayrepos from "./Displayrepos"



const Repositories = ({ github }) => {
  const url = `https://api.github.com/users/${github}`;
  const [data,repodata] = useState([]);
  const finalData = [];
  useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return fetch(response.repos_url);
        })
        .then(response => response.json())
        .then(repos => {
            repos.map((repo, index) => {
                finalData.push(
                    {
                        key: index,
                        name:repo.name,
                        url:repo.html_url
                    }
                );
            });
            repodata(finalData);
        });
         
          
         
         
        //  const response = fetch(url);
        // const reposData = await axios(response.data.repos_url);
        //   const repos = reposData.data;   
        //   repos.map((repo, index) => {
            
        //     finalData.push(
        //       {
        //           name:repo.name,
        //           url:repo.html_url
        //       }
        //     )
        
        
         
      console.log("called again");
      
  },[]);
  


  return data && <Displayrepos repodata = {data}/>
  
};

export default Repositories;
