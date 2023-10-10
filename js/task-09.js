function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanContent = document.querySelector('.color');


btn.addEventListener('click', () => {
 const random = getRandomHexColor();
  body.style.backgroundColor = random;
  spanContent.textContent = random;
})
