const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
answerButton.addEventListener("click", function () {
  const answerId = answerButton.getAttribute("id");
  showAnswer(answerId);
});
function showAnswer(answerId) {
  var x = document.getElementById("a" + answerId);
  x.classList.toggle("answerbox--active");
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
  if (isBookmark.length > 0 && !isBookmark[0].classList.contains("active")) {
    // Access the first element in the collection
    const i = 0;

    isBookmark[i].parentElement.classList.add("card__bookmark--hide");
    console.log(isBookmark[i]);
    for (i < isBookmark.length; i++; ) {
      console.log(isBookmark[i]);
    }
  }
}
bookmarkButton.addEventListener("click", function () {
  showBookmarked();
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
