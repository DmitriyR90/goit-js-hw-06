function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesContainer: document.querySelector('#boxes'),
  input: document.querySelector('#controls').firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};
// console.log(refs.createBtn);
// console.log(refs.input);

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  console.log(refs.input.value);
  console.log(amount.type);
  console.log(amount.currentTarget.value);
}

// const boxes =
