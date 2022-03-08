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
        res.json(questions.rows[0]);
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
    model.postQuestion(req.body, (err, question) => {
      console.log(err, question);
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).json(question.rows[0]);
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