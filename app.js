function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// const h1 = document.querySelector("h1");
// setInterval(function () {
//   h1.style.color = getRandomRGB();
// }, 500);

const letters = document.querySelectorAll(".letter");

setInterval(function () {
  for (let letter of letters) {
    letter.style.color = getRandomRGB();
  }
}, 500);
