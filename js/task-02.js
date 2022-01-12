const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const makeListOfIngredients = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = ingredient;

    return ingredientEl
  });

listIngredientsEl.append(...makeListOfIngredients)

