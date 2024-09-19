// question.js
export class Question {
  constructor(id, question, answer, description, codeLanguage, code, tags) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.description = description;
    this.codeLanguage = codeLanguage;
    this.code = code;
    this.tags = tags;
    this.bookmarked = false;
    this.bookmarkCount = 0;
  }

  toggleBookmark() {
    this.bookmarked = !this.bookmarked;
    this.bookmarkCount += this.bookmarked ? 1 : -1;
    return this.bookmarked;
  }

  toHTML() {
    return `
      <section class="card" id="question-${this.id}">
        <h2 class="card__heading">${this.question}</h2>
        <section class="counter__box">
          <button
            class="card__bookmark material-icons ${this.bookmarked ? 'active' : ''}"
            id="bookmark-${this.id}"
            data-id="${this.id}"
          >
            bookmark
          </button>
          <span id="counter-${this.id}" class="counter">${this.bookmarkCount}</span>
        </section>
        <button
          class="btn center"
          id="answer-btn-${this.id}"
          data-id="${this.id}"
        >
          Show answer
        </button>
        <article class="answerbox" id="answer-${this.id}">
          <p>${this.answer}</p>
        </article>
        <ul class="taglist">
          ${this.tags.map(tag => `<li class="tag">${tag}</li>`).join('')}
        </ul>
      </section>
    `;
  }
}
