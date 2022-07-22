const textInput = document.querySelector('#validation-input');
const textInputLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', onCheckTextInput);

function onCheckTextInput(event) {
  if (event.currentTarget.value.length === textInputLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}
