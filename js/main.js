let questionIndex = 0;
let score = 0;
let timerElement = document.getElementById("countdown");
let timerId;
var timeLeft;

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    timeLimit: 20,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
    timeLimit: 15,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    timeLimit: 25,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswer: "Blue Whale",
    timeLimit: 30,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    timeLimit: 18,
  },
];

function startQuestionTimer() {
 timeLeft = quizData[questionIndex].timeLimit;
  timerElement.innerHTML = timeLeft;

  timerId = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = timeLeft;

    if (timeLeft === 0)
     {

      clearInterval(timerId);
      questionIndex++;
      displayNextQuestion();
    }
  }, 1000);
}

function displayQuestion() {
  document.getElementById("setting").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  displayCurrentQuestion();
}

function UpdateQuestionNumber(currentQuestionNum) {
  var questionNumber = currentQuestionNum + 1;
  var questionNumberText =
    "Question " + questionNumber + " of " + quizData.length;
  document.getElementById("questionNumber").innerHTML = questionNumberText;
  document.getElementById("num").innerHTML =
    "Q" + (questionIndex + 1) + " :";
}
function displayCurrentQuestion() {

  startQuestionTimer();
  let currentQuestion = quizData[questionIndex];

  UpdateQuestionNumber(questionIndex);

  document.getElementById("question").innerHTML = currentQuestion.question;

  let answerOptionsContainer = document.getElementById("rowAnswer");
  answerOptionsContainer.innerHTML = "";
  console.log(answerOptionsContainer);

  for (let i = 0; i < currentQuestion.options.length; i++) {
    let option = currentQuestion.options[i];

    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "answer");
    radioBtn.setAttribute("value", option);
    answerOptionsContainer.appendChild(radioBtn);

    let label = document.createElement("label");
    label.innerHTML = option;
    answerOptionsContainer.appendChild(label);

    answerOptionsContainer.appendChild(document.createElement("br"));
  }
  document.getElementById("alert").style.display = "none";
}

function submitAnswer() {
  let selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  console.log(selectedAnswer);

  if (selectedAnswer) {
    let currentQuestion = quizData[questionIndex];
    let isCorrect = selectedAnswer.value === currentQuestion.correctAnswer;
console.log(isCorrect)

    if (isCorrect) {
      score++;
    }

    let message = isCorrect ? "Correct!" : "Incorrect!";
    document.getElementById("alert").textContent = message;
    document.getElementById("alert").className = isCorrect
      ? "alert alert-success mt-3"
      : "alert alert-danger mt-3";
    document.getElementById("alert").style.display = "block";

    if (questionIndex < quizData.length - 1) {
      questionIndex++;
      setTimeout(displayCurrentQuestion, 1000);

    } else {
      displayFinishSection();
    }
    
  }
   else {
    document.getElementById("alert").className = "alert alert-danger mt-3";
    document.getElementById("alert").style.display = "block";
  }
}

function displayFinishSection() {
  document.getElementById("quiz").style.display = "none";

  document.getElementById("finish").style.display = "block";

  document.getElementById("score").textContent =
    score + " out of " + quizData.length;
document.getElementById("timeleft").textContent="Time take to finish Quiz " + sum + " seconds";
  document.getElementById("tryBtn").style.display = "block";
  if(score ==5||score ==4) {
    document.getElementById("congratulation").style.display = "block";
    document.getElementById("result").innerHTML="congratulation 🥳🎉"; 
    document.getElementById("tryBtn").style.display = "none";


  }
  else if(score ==3||score ==2) {
    document.getElementById("not-good").style.display = "block";
    document.getElementById("result").innerHTML="Not Good Score 😔 "; 

  }else if(score ==1||score ==0) {
    document.getElementById("bad").style.display = "block";
    document.getElementById("result").innerHTML="So bad score please try again 😢😢";
  }
}
    document.getElementById("alert").style.display = "block";

document.getElementById("startBtn").addEventListener("click", displayQuestion);
document.getElementById("next").addEventListener("click", function(){
  submitAnswer();
  submitFinc();
  
});
document.getElementById("tryBtn").addEventListener("click", function () {
  document.getElementById("alert").style.display = "none";

  questionIndex = 0;
  score = 0;
  clearInterval(timerId);
  displayQuestion();

  startQuestionTimer()

  document.getElementById("tryBtn").style.display = "none";
  clearInterval(timerId);

  document.getElementById("quiz").style.display = "none";
    document.getElementById("finish").style.display = "block";
});

document.getElementById("finish").addEventListener("click", function () {
  document.getElementById("quiz").style.display = "block";

  document.getElementById("finish").style.display = "none";
});

function displayNextQuestion() {
  // clearInterval(timerId);

  document.getElementById("countdown").innerHTML = "";
  if (questionIndex < quizData.length) {
    clearInterval(timerId);

    displayCurrentQuestion();
  } else {
    clearInterval(timerId);

    displayFinishSection();
  }
}
var sum =0

var index = 0;
function submitFinc()
{ 
    sum += Number((quizData[index].timeLimit)-timeLeft);

    clearInterval(timerId);
    console.log(sum);

    index++;
}
























































































































































































































































































































