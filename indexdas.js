import questions from "./components/questions.js";

const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
/**
 * Handles the click event on the answer button, which shows the answer for the corresponding question.
 * 
 * @param {string} answerId - The ID of the answer button that was clicked.
 */
‚answerButton.addEventListener("click", function () {
  const answerId = answerButton.getAttribute("id");
  console.log(answerId);
  showAnswer(answerId);
});
function createCard(question, answer, tag, qId) {
  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.classList.add(qId + 1);
  newCard.innerHTML = `<h2 class="card__heading">${question}</h2>
      <section class="counter__box">
        <button
          class="card__bookmark material-icons"
          id="like-${qId + 1}"
          onclick="bookmark(event, ${qId + 1})"
        >
          bookmark
        </button>

        <span id="counter-${qId + 1}" class="counter">0</span>
      </section>
      
      <button
        class="btn center"
        onclick="showAnswer(${qId + 1})"
        id="${qId + 1}"
        data-js="answer-button"
      >
        Show answer
      </button>
      <article class="answerbox" name="answer${qId + 1}" id="a${qId + 1}">
        <p>${answer}</p>
      </article>
      <ul class="taglist">
        <li class="tag">${tag}</li>
      </ul>`;
  document.querySelector('[data-js="main"]').append(newCard);
}

const qId = questions.length;
for (let i = 0; i < questions.length; i++) {
  createCard(questions[i].question, questions[i].answer, questions[i].tags, i);
}

// Bookmarks
function showBookmarked() {
  const isBookmark = document.getElementsByClassName("card__bookmark");
  let bookmarkLenght = isBookmark.length;
  console.log(bookmarkLenght);
  for (let i = 0; i < bookmarkLenght; i++) {
    const card = document.getElementsByClassName("card " + (i + 1));
    console.log("isBookmark");

    if (!isBookmark[i].classList.contains("active")) {
      console.log(isBookmark[i].closest(".card"));
      isBookmark[i].closest(".card").classList.add("card__bookmark--hide");
    }
  }
}
bookmarkButton.addEventListener("click", function () {
  showBookmarked();
});
const showAllButton = document.querySelector('[data-js="home-btn"]');
function showAll() {
  const isBookmark = document.getElementsByClassName("card__bookmark");
  let bookmarkLenght = isBookmark.length;
  for (let i = 0; i < bookmarkLenght; i++) {
    const card = document.getElementsByClassName("card " + (i + 1));
    console.log("isBookmark");
    isBookmark[i].closest(".card").classList.remove("card__bookmark--hide");
  }
}

//show all (home)

showAllButton.addEventListener("click", function () {
  showAll();
});

// Profile Page

function showProfile() {
  document.body.innerHTML = `<main class="content">
      <section class="card profile">
        <img
          src="https://picsum.photos/200/200"
          alt="John"
          width="200px"
          style="border-radius: 50%"
          class="profile_pic"
        />
        <h2>Andreas Kopp</h2>
        <p class="title">CEO & Founder, Example</p>
        <p>thePower Business School</p>
        <ul class="socials">
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-github"></i></a>
          </li>
        </ul>

        <p><button>Contact</button></p>
      </section>
    </main>
    <footer class="footer">
      <nav class="nav">
        <ul class="footer__nav">
          <li class="footer__nav__item">
            <a class="navitem material-icons" href="index.html">
              <i class="">dashboard</i>&nbsp;</a
            >
          </li>
          <li class="footer__nav__item">
            <a class="navitem material-icons" href="bookmark.html">
              <i class="">bookmarks</i>&nbsp;</a
            >
          </li>
          <li class="footer__nav__item">
            <a class="navitem material-icons" href="#">
              <i class="">edit</i>&nbsp;</a
            >
          </li>
          <li class="footer__nav__item">
            <a class="navitem material-icons" href="profile.html">
              <i class="">portrait</i>&nbsp;</a
            >
          </li>
        </ul>
      </nav>
    </footer>`;
}
const profileBtn = document.querySelector('[data-js="profile-btn"]');
profileBtn.addEventListener("click", function () {
  showProfile();
});

//Create Question Modal

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Create Questions

const createButton = document.querySelector('[data-js="create"]');
const form = document.querySelector('[data-js="form"]');
const answer = document.querySelector('[data-js="answer"]');
const question = document.querySelector('[data-js="question"]');
const charCount = document.querySelector('[data-js="char-count1"]');
const charCount2 = document.querySelector('[data-js="char-count2"]');
const maxLength = question.getAttribute("maxlength");
const maxLength2 = answer.getAttribute("maxlength");
console.log(charCount);
const updateAmountLeft = (value) => {
  charCount2.innerText = value;
};

updateAmountLeft(maxLength2);

answer.addEventListener("input", () => {
  updateAmountLeft(maxLength2 - answer.value.length);
});
const updateAmountLeft2 = (value) => {
  charCount.innerText = value;
};

updateAmountLeft2(maxLength);

question.addEventListener("input", () => {
  updateAmountLeft2(maxLength - question.value.length);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);

  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;
  const qId = 1;
  createQuestion(question, answer, tag, qId);
  const newQuestion = form.elem;
  function createQuestion(question, answer, tag, qId) {
    const newQuestion = document.createElement("section");
    newQuestion.classList.add("card");
    newQuestion.innerHTML = `<h2 class="card__heading">${question}</h2>
        <section class="counter__box">
          <button
            class="card__bookmark material-icons"
            id="like-${qId}"
            onclick="bookmark(event, ${qId})"
          >
            bookmark
          </button>

          <span id="counter-${qId}" class="counter">0</span>
        </section>
        
        <button
          class="btn center"
          onclick="showAnswer(${qId})"
          id="${qId}"
          data-js="answer-button"
        >
          Show answer
        </button>
        <article class="answerbox" name="answer1" id="a3">
          <p>${answer}</p>
        </article>
        <ul class="taglist">
          <li class="tag">${tag}</li>
        </ul>`;
    document.querySelector('[data-js="main"]').append(newQuestion);
    modal.style.display = "none";
  }
});
