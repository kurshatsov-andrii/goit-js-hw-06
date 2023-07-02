//Виводимо в консоль кількість категорій в ul#categories, тобто елементів li.item
const quantityCategory = document.querySelector("ul#categories");
console.log(`Number of categories: ${quantityCategory.children.length}`);

//Для кожного элемента li.item у списку ul#categories, знайти та вивісти в консоль текст
//заголовку елемента(тегу <h2>) і кількість елементів в категорії(усіх <li>,
//вкладених в нього). Для виконання цього завдання використати метод forEach() і властивості
//навігації по DOM.
[...quantityCategory.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
