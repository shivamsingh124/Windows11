var rocket = document.getElementById("rocket");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
  var top = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));

  if (e.key == "ArrowLeft" && left > 0) {
    rocket.style.left = left - 10 + "px";
    if(left==460 && top==390)
    alert("WON");
  }

  else if (e.key == "ArrowRight" && left <= 460) {
    rocket.style.left = left + 10 + "px";
    if(left==460 && top==390)
     alert("WON");
  }

  else if (e.key == "ArrowDown"&& top<450 ) {
    rocket.style.top = top + 10 + "px";
    if(left==460 && top==390)
    alert("WON");

  }
  else if (e.key == "ArrowUp"&& top>0 ) {
    // console.log("up")
    rocket.style.top = top - 10 + "px";
    if(left==460 && top==390)
    alert("WON");

  }
 
    // var bullet = document.createElement("div");
    // bullet.classList.add("bullets");
    // board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var alien = document.getElementsByClassName("alien");
      // var rocket = document.getElementsByClassName("alien");

      for (var i = 0; i < alien.length; i++) {
        var alie = alien[i];
        if (alie != undefined) {
          var rockbound = alie.getBoundingClientRect();
          var bulletbound = rocket.getBoundingClientRect();

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.bottom &&
            bulletbound.bottom >= rockbound.top 

            
          ) {
            alert("Game Over");
          
          }
        }
      }
      // var bulletbottom = parseInt(
      //   window.getComputedStyle(bullet).getPropertyValue("bottom")
      // );

      // if (bulletbottom >= 500) {
      //   clearInterval(movebullet);
      // }

      // bullet.style.left = left + "px"; 
      // bullet.style.bottom = bulletbottom + 3 + "px";
    });
  
});

var generatealien = setInterval(() => {
  var alie = document.createElement("div");
  alie.classList.add("alien");
  alie.style.left = Math.floor(Math.random() * 450) + "px";
  board.appendChild(alie);
}, 300);

var movealien = setInterval(() => {
  var alien = document.getElementsByClassName("alien");

  if (alien != undefined) {
    for (var i = 0; i < alien.length; i++) {
      var alie = alien[i]; 
      var rocktop = parseInt(
        window.getComputedStyle(alie).getPropertyValue("top")
      );

      // if (rocktop >= 475) {
      //   alert("Game Over");
      // }

      alie.style.top = rocktop + 25 + "px";
    }
  }
}, 150);