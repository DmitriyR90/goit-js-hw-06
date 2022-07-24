const textInput = document.querySelector('#validation-input');
const textInputLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', onCheckTextInput);

function onCheckTextInput(event) {
  if (event.currentTarget.value.length === textInputLength) {
    textInput.classList.add('valid');
    if (textInput.classList.contains('invalid')) {
      textInput.classList.remove('invalid');
    }
  } else {
    textInput.classList.add('invalid');
    if (textInput.classList.contains('valid')) {
      textInput.classList.remove('valid');
    }
  }
}
