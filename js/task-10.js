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

// const inputControls = document.querySelector("#controls");

// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");

// const valueBoxes = document.querySelector("#boxes");

// createBtn.addEventListener("click", onChangeCollection);

// destroyBtn.addEventListener("click", onResetCollection);

// function onChangeCollection(evt) {
//   const newCollection = getRandomHexColor();
// }

// function onResetCollection(evt) {
//   evt.currentTarget.reset();
// }
