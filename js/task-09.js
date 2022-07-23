function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

btnChangeColor.addEventListener('click', onChangeBgColor);

function onChangeBgColor(event) {
  const backgroundColorValue = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColorValue;
  colorValue.textContent = backgroundColorValue;
}
