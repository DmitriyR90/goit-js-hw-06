const refs = {
  btnIncr: document.querySelector('[data-action="increment"]'),
  btnDecr: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnIncr.addEventListener('click', onBtnIncr);
refs.btnDecr.addEventListener('click', onBtnDecr);

function onBtnIncr() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function onBtnDecr() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
