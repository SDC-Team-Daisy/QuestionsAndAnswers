const express = require('express');
const app = express();
const port = 3000;
const controller = require('../controller')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/qa/questions', controller.getQuestions);

app.get('/qa/questions/:question_id/answers', controller.getAnswers);

app.post('/qa/questions', controller.postQuestion);

app.post('/qa/questions/:question_id/answers', controller.postAnswer);

app.put('/qa/answers/:answer_id/report', controller.reportAnswer);

app.put('/qa/answers/:answer_id/helpful', controller.helpfulAnswer);

app.put('/qa/questions/:question_id/report', controller.reportQuestion);

app.put('/qa/questions/:question_id/helpful', controller.helpfulQuestion);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
});