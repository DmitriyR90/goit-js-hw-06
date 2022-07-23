const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = loginForm.firstElementChild.firstElementChild.value;
  const password =
    loginForm.firstElementChild.nextElementSibling.firstElementChild.value;

  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    return alert('Все поля формы должны быть заполнены!');
  } else {
    formData.email = email;
    formData.password = password;
  }

  console.log(formData);
  loginForm.reset();
}
