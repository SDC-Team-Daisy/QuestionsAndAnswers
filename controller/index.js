const model = require('../model');

module.exports = {
  getQuestions: function(req, res) {
    model.getQuestions((err, questions) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(questions.rows);
      }
    });
  },
  getAnswers: function(req, res) {
    model.getQuestions((err, answers) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(answers.rows);
      }
    });
  },
  postQuestion: function(req, res) {
    model.postQuestion((err, question) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(question.rows);
      }
    });
  },
  postAnswer: function(req, res) {
    model.postAnswer((err, answer) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(answer.rows);
      }
    });
  },
}