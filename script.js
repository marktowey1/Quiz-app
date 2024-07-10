const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const questionContainer = document.querySelector("#question-container");

startButton.addEventListener("click", () => {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  questionContainer.classList.remove("hide");
});
