// index.js
import { QuizApp } from "./components/quiz-app.js";
import questions from "./components/questions.js";
import { Question } from "./components/question.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = new QuizApp(questions);
  app.init();

  // Modal functionality
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("myBtn");
  const closeModalBtn = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = () => (modal.style.display = "block");
  closeModalBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Form submission for creating new questions
  const form = document.querySelector('[data-js="form"]');
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newQuestion = {
      id: app.questions.length + 1,
      question: formData.get("question"),
      answer: formData.get("answer"),
      tags: formData
        .get("tags")
        .split(",")
        .map((tag) => tag.trim()),
    };
    app.questions.push(
      new Question(
        newQuestion.id,
        newQuestion.question,
        newQuestion.answer,
        "",
        "",
        [],
        newQuestion.tags
      )
    );
    app.renderQuestions();
    modal.style.display = "none";
    form.reset();
  });

  // Character count functionality
  const questionInput = document.querySelector('[data-js="question"]');
  const answerInput = document.querySelector('[data-js="answer"]');
  const questionCharCount = document.querySelector('[data-js="char-count1"]');
  const answerCharCount = document.querySelector('[data-js="char-count2"]');

  function updateCharCount(input, charCount) {
    const maxLength = input.getAttribute("maxlength");
    charCount.textContent = maxLength - input.value.length;
  }

  questionInput.addEventListener("input", () =>
    updateCharCount(questionInput, questionCharCount)
  );
  answerInput.addEventListener("input", () =>
    updateCharCount(answerInput, answerCharCount)
  );

  // Initialize character counts
  updateCharCount(questionInput, questionCharCount);
  updateCharCount(answerInput, answerCharCount);
});
