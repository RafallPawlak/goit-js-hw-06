const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});

ingredientsEl.append(...elements);

