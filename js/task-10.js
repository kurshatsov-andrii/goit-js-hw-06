// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію
// getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
// в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням
// на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює
// стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

createButton.addEventListener("click", function () {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const boxSize = 30;
  let html = "";
  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxesDiv.innerHTML = html;
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  inputEl.value = "";
}
