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
