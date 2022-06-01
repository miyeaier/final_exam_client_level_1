import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {
    const response = await axios.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );
    setPrograms(
      response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
    );
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const programlist = programs.map((program) => {
    // debugger
    return (
      <Card className="display-show" key={program.publicPath}>
        <Image data-cy="series-image" src={program.content.images.boxart.url} />
        <Card.Content>
          <Card.Header data-cy="series-title">
            {program.content.series.title}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group data-cy="program-list">{programlist}</Card.Group>;
};

export default Programs;
