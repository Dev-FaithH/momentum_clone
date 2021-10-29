const backGround = document.querySelector("body");
const colors = ["#498ed0", "#9954a8", "#e7bd43"];

function windowResize() {
  if (window.innerWidth < 650) {
    backGround.style.backgroundColor = colors[0];
  } else if (window.innerWidth < 900) {
    backGround.style.backgroundColor = colors[1];
  } else {
    backGround.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", windowResize);
