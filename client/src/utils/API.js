import axios from 'axios';

export default {
     // scrape for more articles
     getArticles: function() {
          return axios.get("/api/articles");
     },
     // pull saved articles from database
     getSavedArticles: function() {
          return axios.get("api/saved");
     },
     // push a new article into the Saved Articles database
     saveArticle: function(article) {
          return axios.post("api/saved", article)
     },
     // delete a specific article from the Saved Articles database 
     deleteSavedArticle: function(id) {
          return axios.delete(`api/saved/${id}`)
     }

     ,// clear all the scraped articles off the Home Page. Prepares for Scrape 
     deleteArticles: function() {
          return axios.delete("api/articles");
     }
     , 
}