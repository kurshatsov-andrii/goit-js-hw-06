//Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору в span.color.
const body = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn(evt) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}
