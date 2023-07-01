// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counter = document.querySelector("#counter");
const decButton = counter.querySelector('[data-action="decrement"]');
const incButton = counter.querySelector('[data-action="increment"]');
const valueElem = counter.querySelector("#value");

function updateCounter() {
  valueElem.textContent = counterValue;
}

decButton.addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

incButton.addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});

updateCounter();
