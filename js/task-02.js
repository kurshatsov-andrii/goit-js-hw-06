const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Створить окремий елемент <li>. Обов'язково використати метод document.createElement().
//Додати назву інгредієнта як його текстовий вміст.
//Додати елементу клас item.

const itemsIngredients = ingredients.map((ingredient) => {
  const ItemIngredient = document.createElement("li");
  ItemIngredient.classList.add("item");
  ItemIngredient.textContent = ingredient;
  return ItemIngredient;
});

//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listUlIngridients = document.querySelector("ul#ingredients");
listUlIngridients.append(...itemsIngredients);
