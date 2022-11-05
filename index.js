var readlineSync = require("readline-sync");

score = 0
function welcome() {
  var userId = readlineSync.question("May I have your name? ")
  console.log("Welcome " + userId + "!!")
  console.log("Hey " + userId + " Let's see how well you know me ;>")
}
//array of objects

var questions = [{
  question: "What is my name? ",
  answer: "Neha"
}, {
  question: "What is my favourite food?",
  answer: "dosa"
},
{
  question: "What is my Birthday Month? ",
  answer: "april"
},
{
  question: "Which flavour do I like in icecreams?",
  answer: "butterscotch"
},
{
  question: "Who is my favourite heroine? ",
  answer: "Anushka"
}

];


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay!You were right!!")
    score++;
  }
  else {
    console.log("I'm sorry! You are wrong!!")

  }

  console.log("Current score:  ", score)
  console.log("..................")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

welcome();
game();
var highScore = [
  {
    name: "Sathvika",
    score: 5,
  },

  {
    name: "Shiva",
    score: 4,
  },
]


function scores() {
  console.log("You scored: ", score);

  console.log("Check out the high scores, if you also want to be there message me with a screenshot and I will update it");

  highScore.map(score => console.log(score.name, " : ", score.score))
}


scores()