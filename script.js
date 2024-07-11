const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const questionContainer = document.querySelector("#question-container");
const shuffledQuestions = undefined;
const currentQuestionIndex = undefined;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextButton.classList.remove("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion() {}

const questions = [
  {
    question: "What is the capital of Ireland?",
    answers: [
      { text: "Cork", isCorrect: false },
      { text: "Dublin", isCorrect: true },
      { text: "Belfast", isCorrect: false },
      { text: "Galway", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of England?",
    answers: [
      { text: "London", isCorrect: true },
      { text: "Birmingham", isCorrect: false },
      { text: "Liverpool", isCorrect: false },
      { text: "Manchester", isCorrect: false },
    ],
  },
];
