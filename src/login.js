'use strict';

const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const buttonSubmit = document.querySelector('button');
// console.log(usernameInput, passwordInput);

usernameInput.addEventListener('keyup', function () {
  // const username = this.value;
  if (!emptyInputs()) buttonSubmit.classList.add('btn--active');
  else buttonSubmit.classList.remove('btn--active');
});

passwordInput.addEventListener('keyup', function () {
  // const username = this.value;
  if (!emptyInputs()) buttonSubmit.classList.add('btn--active');
  else buttonSubmit.classList.remove('btn--active');
});

form.onsubmit = function (event) {
  event.preventDefault();
};

const emptyInputs = function () {
  return usernameInput.value == '' || passwordInput.value === '';
};

const buttonShowPassword = document.querySelector('span');

buttonShowPassword.addEventListener('click', function () {
  this.classList.toggle('show');
  if (this.classList.contains('show'))
    passwordInput.setAttribute('type', 'password');
  else passwordInput.removeAttribute('type');
});
