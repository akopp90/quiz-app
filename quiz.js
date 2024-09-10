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
function bookmark(event) {
  let counter = parseFloat(document.getElementById("counter").innerHTML);
  var button = event.target.innerText;
  switch (button) {
    case "like":
      if (like_flag == false && dislike_flag == false) {
        counter++;
        like_flag = true;
      } else if (like_flag == false && dislike_flag == true) {
        counter = counter + 2;
        like_flag = true;
        dislike_flag = false;
      } else {
        counter--;
        like_flag = false;
      }
      break;
  }
  console.log("the button " + button + " was pressed");

  document.getElementById("counter").innerHTML = counter;
}
