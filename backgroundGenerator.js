//Written May 2018 by Leslie C. Bomar: contact mrlesbomar@gmail.com

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");

color1.addEventListener("input", changeBackgroundGradient);
color2.addEventListener("input", changeBackgroundGradient);
button.addEventListener("click", randomizeGradient);

function changeBackgroundGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

function randomizeGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBackgroundGradient();
}

changeBackgroundGradient();