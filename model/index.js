const { Pool } = require('pg')

const pool = new Pool({
  user: 'karlithomas',
  host: 'localhost',
  database: 'questionsandanswers',
  // password: 'secretpassword',
  port: 5432,
});

module.exports = {
  getQuestions: function(callback) {
    let queryString = 'SELECT * FROM questions LIMIT 10';
    // let queryArg = [id];
    pool.query(queryString, (err, questions) => {
      callback(err, questions);
    });
  },
   getAnswers: function(callback) {
    let queryString = 'SELECT * FROM answers LIMIT 10';
    // let queryArg = [id];
    pool.query(queryString, (err, answers) => {
      callback(err, answers);
    });
  },
  postQuestion: function(callback) {
    let queryString = 'INSERT INTO questions LIMIT 10';
    // let queryArg = [id];
    pool.query(queryString, (err, questions) => {
      callback(err, questions);
    });
  },
  postAnswer: function(callback) {
    let queryString = 'INSERT INTO answers LIMIT 10';
    // let queryArg = [id];
    pool.query(queryString, (err, answer) => {
      callback(err, answer);
    });
  },
}