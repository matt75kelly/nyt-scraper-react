import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SavedArticles from "./pages/SavedArticles";


const App =() => {
    return(
        <Router>
            <div>
                <NavBar
                    NavRoute1 = "/"
                    NavRoute2 = "/saved"
                    />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route exact path="/saved" component={SavedArticles}/>
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>    
    )}

export default App;
//---------------------API Database Functions---------------------
    // fetchArticles(){
    //     this.setState({articles : API.getArticles()});
    // };

    // deleteArticles(){
    //     API.deleteArticles()
    //     .then(results=>{
    //        this.setState({articles : []}); 
    //     }).catch(err=>{
    //         throw new Error("Could Not Delete articles from Database");
    //     });        
    // };

    // saveArticle(id){
    //     API.saveArticle(id)
    //     .then(result =>{
    //         this.setState({savedArticles : API.getSavedArticles()});
    //     }).catch(err=>{
    //         throw new Error("Could Not Add article to Saved Database");
    //     });
    // };

    // deleteSavedArticle(id){
    //     API.deleteSavedArticle(id)
    //     .then(result=>{
    //         this.setState({savedArticles : API.getSavedArticles()});
    //     }).catch(err=>{
    //         throw new Error("Could Not Remove article from Saved Database");
    //     });
    // };

    //---------------------Click Handler Functions---------------------

    // handleScrape(event){
    //     event.breventDefault();
    //     this.fetchArticles();
    // };

    // handleDeleteArticles(event){
    //     event.preventDefault();
    //     this.deleteArticles();
    // };

    // handleSaveArticle(event){
    //     event.preventDefault();
    //     const id = event.target.id;
    //     this.saveArticle(id);
    // };

    // handleDeleteSavedArticles(event){
    //     event.preventDefault();
    //     const id = event.target.id;
    //     API.deleteSavedArticle(id);
    // };