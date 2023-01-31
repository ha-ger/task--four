let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let progress = document.querySelector(".no-2");


next.addEventListener("click", nextt);
prev.addEventListener("click", previous);

let dataWidth = 80;
let curr = 2;
function nextt() {
  progress.style.width = `${dataWidth}px`;
  dataWidth += 80;

  prev.classList.add("active");

  document.querySelectorAll(`[data-width="${curr}"]`)[0]
    .classList.add("active");
    curr++;

  if (progress.style.width === `${240}px`) {
    dataWidth = 240;

    next.classList.remove("active");
  }

  if (progress.style.width !== `${240}px`) {
    next.classList.add("active");
  }

}

function previous() {
  let newDta = +dataWidth;

  progress.style.width = `${newDta - 80}px`;
  dataWidth -= 80;

  document.querySelectorAll(`[data-width="${curr - 1}"]`)[0]
    .classList.remove("active");

  if (curr === 2) {
    document.querySelectorAll(`[data-width="${1}"]`)[0].classList.add("active");
  }

  if (progress.style.width === `${0}px`) {
    dataWidth = 80;
    next.classList.add("active");
    prev.classList.remove("active");
  } else {
    next.classList.add("active");

    prev.classList.add("active");
  }
  curr--;

}
