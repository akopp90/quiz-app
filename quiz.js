function showAnswer(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let like_flag = false;
let dislike_flag = false;
function bookmark(event, id) {
  let counter = parseFloat(document.getElementById("counter-" + id).innerHTML);
  var button = event.target.innerText;
  switch (button) {
    case "bookmark":
      if (like_flag == false && dislike_flag == false) {
        counter++;
        document.getElementById("like-" + id).classList.add("active");
        document.getElementById("counter-" + id).innerHTML = counter;
        like_flag = true;
      } else if (like_flag == false && dislike_flag == true) {
        counter = counter + 1; //changed this to 1 instead of 2
        document.getElementById("like-" + id).classList.add("active");
        document.getElementById("counter-" + id).innerHTML = counter;
        like_flag = true;
        dislike_flag = false;
      } else {
        counter--;
        document.getElementById("like-" + id).classList.remove("active");
        document.getElementById("counter-" + id).innerHTML = counter;
        like_flag = false;
      }
      break;
  }
  console.log("the button " + button + " was pressed");
}
