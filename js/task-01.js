const categoriesList = document.querySelector('#categories');
const categoryItems = Array.from(categoriesList.children);

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelector('ul').children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});


