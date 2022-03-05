DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE questions (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 product_id INTEGER NOT NULL,
 body TEXT NOT NULL,
 date_written TIMESTAMPTZ NOT NULL,
 asker_name TEXT NOT NULL,
 asker_email TEXT NOT NULL,
 reported SMALLINT NOT NULL DEFAULT 0,
 helpful INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE answers (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 id_questions BIGINT,
 body TEXT NOT NULL,
 date_written TIMESTAMPTZ NOT NULL,
 answerer_name TEXT NOT NULL,
 answerer_email TEXT NOT NULL,
 reported SMALLINT NOT NULL DEFAULT 0,
 helpful INTEGER NOT NULL DEFAULT 0,
 FOREIGN KEY (id_questions)
  REFERENCES questions(id)
);


CREATE TABLE answers_photos (
 id BIGSERIAL PRIMARY KEY,
 id_answers BIGINT,
 url TEXT NOT NULL,
 FOREIGN KEY (id_answers)
  REFERENCES answers(id)
);

-- ALTER TABLE answers ADD CONSTRAINT answers_id_questions_fkey FOREIGN KEY (id_questions) REFERENCES questions(id);
-- ALTER TABLE answers_photos ADD CONSTRAINT answers_photos_id_answers_fkey FOREIGN KEY (id_answers) REFERENCES answers(id);

COPY questions FROM '/Users/karlithomas/Code/hackreactor/QuestionsAndAnswers/questions-processed.csv' DELIMITER ',' CSV HEADER;

COPY answers FROM '/Users/karlithomas/Code/hackreactor/QuestionsAndAnswers/answers-processed.csv' DELIMITER ',' CSV HEADER;

COPY answers_photos FROM '/Users/karlithomas/Code/hackreactor/QuestionsAndAnswers/answers_photos.csv' DELIMITER ',' CSV HEADER;