window.onload = function() {

var cssProps = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyTag");



function changeGradient(){
	cssProps.textContent = body.style.background + ";";
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color2.addEventListener("input", changeGradient);
color1.addEventListener("input", changeGradient);



cssProps.textContent = body.style.background;

}