function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesContainer: document.querySelector('#boxes'),
  input: document.querySelector('#controls').firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

refs.createBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = refs.input.value;
  if (!amount) {
    alert('Необходимо ввести значение!');
  }
  greateBoxes(amount);
}

function greateBoxes(amount) {
  let width = 20;
  let height = 20;
  let boxArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    width += 10;
    height += 10;
    const backgroundColor = getRandomHexColor();
    const border = '1px solid black';

    boxEl.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${backgroundColor}; border: ${border}; margin-bottom: 5px `;
    boxArray.push(boxEl.outerHTML);
  }

  refs.boxesContainer.insertAdjacentHTML('beforeend', boxArray.join(''));
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
