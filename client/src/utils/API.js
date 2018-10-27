import axios from "axios";

export default {
  // Gets the articles with the given id
  searchArticles: function(topic, startDate, endDate) {
    return axios.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'q' : topic,
          'begin_date': startDate,
          'end_date': endDate
        },
      });
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};