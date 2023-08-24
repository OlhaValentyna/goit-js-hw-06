const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

const liElements = ingredients.map(ingredient => {
  return `<li class="item">${ingredient}</li>`;
});

ul.innerHTML = liElements.join('');
