import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    articles : [],
  };

  componentDidMount() {
  }

  //---------------------API Database Functions---------------------
  fetchArticles(){
    this.setState({articles : API.getArticles()});
  };

  deleteArticles(){
      API.deleteArticles()
      .then(results=>{
        this.setState({articles : []}); 
      }).catch(err=>{
          throw new Error("Could Not Delete articles from Database");
      });        
  };
  //---------------------Click Handler Functions---------------------

  handleScrape(event){
    event.breventDefault();
    this.fetchArticles();
  };

  handleDeleteArticles(event){
      event.preventDefault();
      this.deleteArticles();
  };
  render() {
    return (
      <h1>This is a Test</h1>
    );
  }
}

export default Home;
