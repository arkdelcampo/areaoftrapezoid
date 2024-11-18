// Variables
let b1Input = document.getElementById("b1Input");
let b2Input = document.getElementById("b2Input");
let hInput = document.getElementById("hInput");
let calcBtn = document.getElementById("calc-btn");
let output = document.getElementById("output");
let checkmarkImg = document.getElementById("checkmarkImg");
let dropDown = document.getElementById("area-unit");

// Event Listeners
calcBtn.addEventListener("click", calc);

// Function to calculate the area of the trapezoid
function calc() {
  console.log("RECIEVED SIGNAL");

  // Input
  let num1 = +b1Input.value;
  let num2 = +b2Input.value;
  let num3 = +hInput.value;

  // Process
  let area = (1 / 2) * (num1 + num2) * num3;
  area = area.toFixed(2);

  let unit = dropDown.value;
  area = area + unit;

  // Output
  output.innerHTML = area;
  console.log(area);

  b1Input.value = "";
  b2Input.value = "";
  hInput.value = "";
  checkmarkImg.src = "images/checkmark.png";
}
