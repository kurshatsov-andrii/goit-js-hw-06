//Виводимо в консоль кількість категорій в ul#categories, тобто елементів li.item
const quantityEl = document.querySelector("ul#categories");
console.log(`Number of categories: ${quantityEl.children.length}`);

//Для кожного элемента li.item у списку ul#categories, знайшов та вивів в консоль текст
//заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//вкладених в нього).Для виконання цього завдання використав метод forEach() і властивості
//навігації по DOM.
[...quantityEl.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
