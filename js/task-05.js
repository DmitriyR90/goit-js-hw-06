const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputName);

let userNameDefault = nameOutput.textContent;

function onInputName(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === '') {
    nameOutput.textContent = userNameDefault;
  }
}
