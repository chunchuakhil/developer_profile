import React, { useEffect,useState } from "react";
import Displayrepos from "./Displayrepos"

const Repositories = ({ github }) => {
  const url = `/api/developers/${github}`;
  const [data,repodata] = useState([]);
  const finalData = [];
  useEffect(() => {
        fetch(url).then(response => response.json())
        .then(response => response.repos)
        .then(repos => {
                repos.forEach((repo, index)=>{
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
  
  },[]);
  return data && <Displayrepos repodata = {data}/>
  
};

export default Repositories;
