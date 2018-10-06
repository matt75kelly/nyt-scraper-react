import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import Jumbotron from "react-bootstrap/lib/Jumbotron";


class SavedArticles extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
  componentDidMount() { 
  
  }

  saveArticle(id){
    API.saveArticle(id)
    .then(result =>{
        this.setState({savedArticles : API.getSavedArticles()});
    }).catch(err=>{
        throw new Error("Could Not Add article to Saved Database");
    });
  };

  deleteSavedArticle(id){
      API.deleteSavedArticle(id)
      .then(result=>{
          this.setState({savedArticles : API.getSavedArticles()});
      }).catch(err=>{
          throw new Error("Could Not Remove article from Saved Database");
      });
  };
  handleSaveArticle(event){
    event.preventDefault();
    const id = event.target.id;
    this.saveArticle(id);
    };

    handleDeleteSavedArticles(event){
        event.preventDefault();
        const id = event.target.id;
        API.deleteSavedArticle(id);
    };
  render() {
    return (
      <h1>This is also a Test</h1>
    );
  }
}

export default SavedArticles;
