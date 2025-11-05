const inputName = document.getElementById('name');
const inputEmail = document.querySelector ('#email');
const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
  event.preventDefault();

  let orderInfo = {};

  orderInfo.Nome = inputName.value;
  orderInfo.Email = inputEmail.value;

  console.log(orderInfo);
  
})