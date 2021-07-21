var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {

  let {left}=jet.getBoundingClientRect();
  let left2=board.getBoundingClientRect();
  let right=left2.left;
  let main=left-right-2;
// //   console.log(main)



//   console.log(left);
//   console.log(right);

  if (e.key == "ArrowLeft" && main > 0) {
    jet.style.left = main - 15 + "px";
  }
})