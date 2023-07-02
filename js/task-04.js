// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decButton = counter.querySelector('[data-action="decrement"]');
const incButton = counter.querySelector('[data-action="increment"]');
const valueElem = counter.querySelector("#value");

decButton.addEventListener("click", onDecValue);

function onDecValue() {
  counterValue -= 1;
  valueElem.textContent = counterValue;
}

incButton.addEventListener("click", onIncValue);

function onIncValue() {
  counterValue += 1;
  valueElem.textContent = counterValue;
}
