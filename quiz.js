const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
answerButton.addEventListener("click", function () {
  const answerId = answerButton.getAttribute("id");
  showAnswer(answerId);
});
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

function getLikeFlag() {}
let like_flag = [false, false, false];
let dislike_flag = false;
function bookmark(event, id) {
  let counter = parseFloat(document.getElementById("counter-" + id).innerHTML);
  var button = event.target.innerText;
  switch (button) {
    case "bookmark":
      if (like_flag[id - 1] == false) {
        counter++;
        console.log(counter);
        document.getElementById("like-" + id).classList.add("active");
        document.getElementById("counter-" + id).innerHTML = counter;
        like_flag[id - 1] = true;
      } else {
        counter--;
        document.getElementById("like-" + id).classList.remove("active");
        document.getElementById("counter-" + id).innerHTML = counter;
        like_flag[id - 1] = false;
      }
      break;
  }
  console.log("the button " + button + " was pressed");
}

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
showAllButton.addEventListener("click", function () {
  showAll();
});
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
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
    newQuestion.innerHTML = `<h2 class="card__heading">heading</h2>
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
        <p class="card__text">
        ${question}
        </p>
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
