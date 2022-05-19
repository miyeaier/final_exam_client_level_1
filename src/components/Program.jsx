import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  
  const fetchPrograms = async () => {
    const response = await axios.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );
    setPrograms(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']);
  };
  

  useEffect(() => {
    fetchPrograms();
  }, []);

  const programlist = programs.map((program) => {
    return( 
    <Card key={program.id}></Card>
    )
 });

  return <div data-cy="program-list">{programlist}</div>;
};

export default Programs;
