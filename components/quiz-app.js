// quiz-app.js
import { Question } from './question.js';

export class QuizApp {
  constructor(questions) {
    this.questions = questions.map(q => new Question(
      q.id,
      q.question,
      q.answer,
      q.description,
      q.code_language,
      q.code,
      q.tags
    ));
    this.currentView = 'all';
  }

  init() {
    this.renderQuestions();
    this.attachEventListeners();
  }

  renderQuestions() {
    const mainContent = document.querySelector('[data-js="main"]');
    mainContent.innerHTML = '';
    
    const questionsToRender = this.currentView === 'bookmarked' 
      ? this.questions.filter(q => q.bookmarked)
      : this.questions;

    questionsToRender.forEach(question => {
      mainContent.insertAdjacentHTML('beforeend', question.toHTML());
    });
  }

  attachEventListeners() {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('card__bookmark')) {
        this.handleBookmark(event);
      } else if (event.target.id.startsWith('answer-btn-')) {
        this.toggleAnswer(event);
      }
    });

    document.querySelector('[data-js="bookmark-button"]').addEventListener('click', () => {
      this.currentView = 'bookmarked';
      this.renderQuestions();
    });

    document.querySelector('[data-js="home-btn"]').addEventListener('click', () => {
      this.currentView = 'all';
      this.renderQuestions();
    });

    // Add other event listeners (profile, create question, etc.) here
  }

  handleBookmark(event) {
    const questionId = parseInt(event.target.dataset.id);
    const question = this.questions.find(q => q.id === questionId);
    const isBookmarked = question.toggleBookmark();
    
    event.target.classList.toggle('active', isBookmarked);
    document.getElementById(`counter-${questionId}`).textContent = question.bookmarkCount;
  }

  toggleAnswer(event) {
    const questionId = event.target.dataset.id;
    const answerElement = document.getElementById(`answer-${questionId}`);
    answerElement.classList.toggle('answerbox--active');
    event.target.textContent = answerElement.classList.contains('answerbox--active') ? 'Hide answer' : 'Show answer';
  }

  // Add other methods (showProfile, createQuestion, etc.) here
}
