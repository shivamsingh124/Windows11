var rocket = document.getElementById("rocket");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    rocket.style.left = left - 10 + "px";
  }

  else if (e.key == "ArrowRight" && left <= 460) {
    rocket.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp") {
 
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var alien = document.getElementsByClassName("alien");

      for (var i = 0; i < alien.length; i++) {
        var alie = alien[i];
        if (alie != undefined) {
          var rockbound = alie.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top 
            
          ) {
            alie.parentElement.removeChild(alie);
          
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      bullet.style.left = left + "px"; 
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generatealien = setInterval(() => {
  var alie = document.createElement("div");
  alie.classList.add("alien");
  alie.style.left = Math.floor(Math.random() * 450) + "px";
  board.appendChild(alie);
}, 1000);

var movealien = setInterval(() => {
  var alien = document.getElementsByClassName("alien");

  if (alien != undefined) {
    for (var i = 0; i < alien.length; i++) {
      var alie = alien[i]; 
      var rocktop = parseInt(
        window.getComputedStyle(alie).getPropertyValue("top")
      );

      if (rocktop >= 475) {
        alert("Game Over");
      }

      alie.style.top = rocktop + 25 + "px";
    }
  }
}, 450);