const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  username: String,
  email: String,
  body: String,
  timePosted: Date,
  helpfulness: Number,
  report: Boolean,
  product_id: Number,
})

const answerSchema = new mongoose.Schema({
  username: String,
  email: String,
  body: String,
  timePosted: Date,
  helpfulness: Number,
  report: Boolean,
  product_id: Number,
})

const photoSchema = new mongoose.Schema({
  url: String,
})

const Questions = mongoose.model("Questions", questionSchema);
const Answers = mongoose.model("Answers", answerSchema);
const Photos = mongoose.model("Photos", photoSchema);

module.exports = {Questions, Answers, Photos};