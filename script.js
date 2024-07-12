const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const questionContainer = document.querySelector("#question-container");
const question = document.querySelector("#question");
const answerButtons = document.querySelectorAll("#answer-buttons");

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
];

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  question.innerHTML = questions[0].question;
  shuffleCountries(countries);
}

function selectAnswer() {}

let countries = ["Ireland", "England", "France", "Wales", "Scotland"];
let shuffledCountries;

function shuffleCountries(countries) {
  for (let i = countries.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [countries[i], countries[randomNumber]] = [
      countries[randomNumber],
      countries[i],
    ];
  }
}

// {
//   question: "What is the capital of England?",
//   answers: [
//     { text: "London", isCorrect: true },
//     { text: "Birmingham", isCorrect: false },
//     { text: "Liverpool", isCorrect: false },
//     { text: "Manchester", isCorrect: false },
//   ],
// },

shuffledQuestions = questions.sort(() => Math.random() - 0.5);
