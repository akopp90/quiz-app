//show Answer
const answerButton = document.querySelector('[data-js="answer-button"]');

function showAnswer(answerId) {
  const x = document.getElementById("a" + answerId);
  x.classList.toggle("answerbox--active");

  // Find the button element that triggered the event
  const button = document.getElementById(answerId);
  console.log(button);
  if (x.classList.contains("answerbox--active")) {
    console.log(button.textContent);
    button.textContent = "Hide answer";
  } else {
    console.log(button.textContent);
    button.textContent = "Show answer";
  }
}
