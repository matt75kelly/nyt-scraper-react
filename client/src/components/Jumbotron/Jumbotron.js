import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import React from "react";

const JumboTron = () => {
  return(
     <Jumbotron>
          <h1>React Article Scraper</h1>
          <p>
               Pull the Latest Articles from Market Watch
          </p>
          <p>
          <Button bsStyle="primary">Scrape</Button>
          </p>
     </Jumbotron>
  )}
