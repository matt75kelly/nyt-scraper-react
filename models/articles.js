import mongoose from "mongoose";

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  
});

// This creates our model from the above schema, using mongoose's model method
var Articles = mongoose.model("Articles", ArticleSchema);

// Export the Article model
module.exports = Articles;
