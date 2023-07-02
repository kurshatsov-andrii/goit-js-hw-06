// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли
// завдання.

const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", onValidateInput);

const inputLength = Number(inputElement.dataset.length); // 6 символів

function onValidateInput() {
  if (inputElement.value.length === inputLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}
