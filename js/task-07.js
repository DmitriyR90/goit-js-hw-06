const textControl = document.querySelector('#font-size-control');
const textToControl = document.querySelector('#text');

textToControl.style.fontSize = `${textControl.value}px`;
textControl.addEventListener('input', onTextResise);

function onTextResise(event) {
  let newFontSise = Number(event.currentTarget.value);

  textToControl.style.fontSize = `${newFontSise}px`;
}
