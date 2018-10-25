const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/nytreact"
);

const articleSeed = [
    {
        title: "Test Article",
        author: "Jordan Schneider",
        synopsis: "Blah blah blah blah blah",
        date: new Date(Date.now())
    },
    {
        title: "Test Article 2",
        author: "Jordan Schneider",
        synopsis: "Blah blah blah blah blah",
        date: new Date(Date.now())
    }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  });