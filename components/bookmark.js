function getLikeFlag() {}

let like_flag = false;
let dislike_flag = false;
function bookmark(event, id) {
  let counter = parseFloat(document.getElementById("counter-" + id).innerHTML);
  const button = event.target.innerText;

  switch (button) {
    case "bookmark":
      if (!event.target.classList.contains("active")) {
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
