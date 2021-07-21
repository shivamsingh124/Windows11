let button1=document.getElementById("button1");
let spin=document.getElementById("spin");
let rotateAngle = 90;
let rotatecycle=Math.floor(Math.random() * 5);
rotateAngle=Math.floor(Math.random() * 360) + (360*rotatecycle);
button1.addEventListener("click", function (e) {
    let rotatecycle=Math.floor(Math.random() * 5);
    rotateAngle=Math.floor(Math.random() * 360) + (360*rotatecycle);
    spin.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");

})