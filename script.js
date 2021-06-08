const container = document.querySelector("#container");
const slider = document.querySelector("#myRange");
const randomButton = document.querySelector("#randomButton");
const darkButton = document.querySelector("#darkButton");
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#reset");
const number = document.querySelector("#number");

changeGridSize(10); //create default 10 *10
function changeGridSize(value) {
  number.textContent = value + " x " + value;
  container.style.gridTemplateColumns = "repeat(" + value + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + value + ", 1fr)";
  while (container.firstChild) {
    container.removeChild(container.firstChild); // clean container before run
  }

  // creat grid in js
  const squared = value * value;
  for (let i = 0; i < squared; i++) {
    const div = document.createElement("div"); // creat a <dv> element
    div.classList.add("grid"); //  add class ="grid"
    container.appendChild(div); //  append <grid> to <container>
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.id === "container") {
    return;
  }

  if (mode === undefined) {
    return;
  }

  let style = e.target.style;
  style.background = mode(style.background);
});

slider.addEventListener("input", function (e) {
  const value = e.target.value;
  changeGridSize(value);
});

let mode;
randomButton.addEventListener("click", function () {
  mode = randomColor;
});

shadesButton.addEventListener("click", function () {
  mode = shadesColor;
});

reset.addEventListener("click", (e) => {
  mode = undefined;
  resetBoard();
});

eraser.addEventListener("click", (e) => {
  mode = eraserMode;
  eraserColor();
});

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function shadesColor(color) {
  switch (color) {
    case "": // default background
      return "rgb(216, 216, 216)";
    case "rgb(216, 216, 216)":
      return "rgb(180, 180, 180)";
    case "rgb(180, 180, 180)":
      return "rgb(150, 150, 150)";
    case "rgb(150, 150, 150)":
      return "rgb(110, 110, 110)";
    case "rgb(110, 110, 110)":
      return "rgb(70, 70, 70)";
    case "rgb(70, 70, 70)":
      return "rgb(40, 40, 40)";
    case "rgb(40, 40, 40)":
      return "rgb(0, 0, 0)";
  }
}

function resetBoard() {
  const gridItems = document.querySelectorAll(".grid");
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "";
  });
}

function eraserMode() {
  return "";
}
