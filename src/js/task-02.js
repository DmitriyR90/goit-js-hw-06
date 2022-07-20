const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsListEL = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add('item');
  return ingredientItemEl;
});

ingredientsList.append(...ingredientsListEL);
