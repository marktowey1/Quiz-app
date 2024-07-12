const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = shuffleQuestions(questions);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.isCorrect) {
      button.dataset.isCorrect = answer.isCorrect;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  clearStatusClass(document.body);
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.isCorrect;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.isCorrect);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.classList.remove("hide");
    startButton.innerText = "Restart";
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

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
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "22", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "44", isCorrect: false },
      { text: "5", isCorrect: false },
    ],
  },
];

function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [questions[i], questions[randomNumber]] = [
      questions[randomNumber],
      questions[i],
    ];
  }
  return questions;
}

shuffledQuestions = questions.sort(() => Math.random() - 0.5);
