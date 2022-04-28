import React, { useEffect, useState } from "react";
import Displayrepos from "./Displayrepos";

const Repositories = ({ repos }) => {
  const [data, repodata] = useState([]);
 if(repos.length>29){
   repos = repos.slice(0,repos.length);
 }
  const finalData = [];
  useEffect(() => {
    repos.forEach((repo, index) => {
      finalData.push({
        key: index,
        name: repo.name,
        url: repo.html_url,
      });
    });
    repodata(finalData);
  }, []);
  return data && <Displayrepos repodata={data} />;
};

export default Repositories;
