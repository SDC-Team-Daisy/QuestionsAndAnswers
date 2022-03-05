const model = require('../model');

module.exports = {
  getQuestions: function(req, res) {
    let id = req.query.product_id;
    console.log(id);
    model.getQuestions(id, (err, questions) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(questions.rows[0]);
      }
    });
  },
  getAnswers: function(req, res) {
    model.getQuestions(req.params.question_id, (err, answers) => {
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