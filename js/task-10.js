// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію
// getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів
// в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням
// на кнопку Очистити, колекція елементів очищається.

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

createButton.addEventListener("click", onInput);

function onInput() {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  createBoxes(amount);
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює
// стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

//Рендеріться колекція
function createBoxes(amount) {
  const boxSize = 30;
  let htmlCode = "";
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    htmlCode += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxesDiv.innerHTML = htmlCode;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.

destroyButton.addEventListener("click", onDestroyBoxes);

//Очистка
function onDestroyBoxes() {
  boxesDiv.innerHTML = "";
  inputEl.value = "";
}
