const pool = require('../connection');

module.exports = {
  getQuestions: function(id, callback) {
    let queryString = `
      SELECT json_build_object('product_id', questions.product_id, 'results', (
  SELECT json_agg(
          json_build_object(
            'question_id', questions.id, 'question_body', questions.body, 'question_date', questions.date_written, 'asker_name',
            questions.asker_name, 'question_helpfulness', questions.helpful, 'reported', questions.reported,
            'answers', (
              SELECT coalesce (answers_json, '{}'::json)
              FROM (
    SELECT json_object_agg(answers.id, json_build_object(
      'id', answers.id, 'body', answers.body, 'date', answers.date_written, 'answerer_name', answers.answerer_name, 'helpfulness', answers.helpful,
      'photos', (
        SELECT coalesce (photos, '[]'::json)
          FROM (
            SELECT json_agg(json_build_object('url', answers_photos.url)) AS photos
            FROM answers_photos
            WHERE answers_photos.id_answers = answers.id
          ) AS photos
              )
            )
          ) AS answers_json
          FROM answers
          WHERE answers.id_questions = questions.id
        ) as answers2
            )
          )
  ) AS results
  FROM questions
  WHERE questions.product_id = $1
))
FROM questions WHERE questions.product_id = $1;
`
    let queryArg = [id];
    pool.query(queryString, queryArg, (err, questions) => {
      callback(err, questions);
    });
  },

   getAnswers: function(id, callback) {
    let queryString =
    `SELECT answers.id_questions, (
      SELECT json_object_agg(answers.id, json_build_object(
      'id', answers.id, 'body', answers.body, 'date', answers.date_written, 'answerer_name', answers.answerer_name, 'helpfulness', answers.helpful,
      'photos', (
        SELECT coalesce (photos, '[]'::json)
          FROM (
            SELECT json_agg(json_build_object('url', answers_photos.url)) AS photos
            FROM answers_photos
            WHERE answers_photos.id_answers = answers.id
          ) AS photos
              )
            )
          ) AS answers_json
          FROM answers
          WHERE answers.id_questions = questions.id
        ) as answers2
            )
          )
  ) AS results
  FROM questions
  WHERE questions.id = 1)
  ; `

    let queryArg = [id];
    pool.query(queryString, queryArg, (err, answers) => {
      callback(err, answers);
    });
  },

  postQuestion: function(question, callback) {
    let queryString = 'INSERT INTO questions (product_id, body, asker_name, asker_email) VALUES($1, $2, $3, $4) RETURNING *;';
    let queryArg = [question.product_id, question.body, question.name, question.email];
    pool.query(queryString, queryArg, (err, questions) => {
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