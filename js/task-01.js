//Виводимо в консоль кількість категорій в ul#categories, тобто елементів li.item
const quantityElemets = document.querySelectorAll("li.item");
console.log(`Number of categories: ${quantityElemets.length}`);

//Для кожного элемента li.item у списку ul#categories, знайшов та вивів в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього). Для виконання цього завдання використав метод forEach() і властивості навігації по DOM.
quantityElemets.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
