const inputName = document.getElementById('name');
const inputEmail = document.querySelector ('#email');
const form = document.querySelector('form');
const btnMenosLanchao = document.querySelector('.btn-menos-lanchao');
const qtdLanchao = document.querySelector('#qtd-lanchao');
const btnMaisLanchao = document.querySelector('.btn-mais-lanchao');
const btnMenosLanche = document.querySelector('.btn-menos-lanche');
const qtdLanche = document.querySelector('#qtd-lanche');
const btnMaisLanche = document.querySelector('.btn-mais-lanche');
const btnMenosLanchinho = document.querySelector('.btn-menos-lanchinho');
const qtdLanchinho = document.querySelector('#qtd-lanchinho');
const btnMaisLanchinho = document.querySelector('.btn-mais-lanchinho');
const btnMenosOvo = document.querySelector('.btn-menos-ovo');
const qtdOvo = document.querySelector('#qtd-ovo');
const btnMaisOvo = document.querySelector('.btn-mais-ovo');
const btnMenosAbacaxi = document.querySelector('.btn-menos-abacaxi');
const qtdAbacaxi = document.querySelector('#qtd-abacaxi');
const btnMaisAbacaxi = document.querySelector('.btn-mais-abacaxi');
const Batata = document.getElementById('sim');
const comentario = document.querySelector('textarea');
const listaNotaFiscal = document.getElementById('orderList');
const nota = document.querySelector('.ticket');

const atulizarQuantidade = (btnMenos, btnMais, qtdElementos) => {
  btnMenos.addEventListener ('click', () => {
    const quantidade = parseInt(qtdElementos.innerText);
    if (quantidade > 0){
      qtdElementos.innerText = quantidade - 1;
    }
  })

  btnMais.addEventListener('click', () => {
    qtdElementos.innerText = parseInt(qtdElementos.innerText) + 1; 
  }) 
}

atulizarQuantidade(btnMenosLanchao, btnMaisLanchao, qtdLanchao)
atulizarQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche)
atulizarQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho)
atulizarQuantidade(btnMenosOvo, btnMaisOvo, qtdOvo)
atulizarQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi)


form.addEventListener ('submit', (event) => {
  event.preventDefault ();

  let orderInfo = {};

  orderInfo.Nome = inputName.value;
  orderInfo.Email = inputEmail.value;

  if (parseInt(qtdLanchao.innerText) > 0) orderInfo.Lanchao = qtdLanchao.innerText;
  if (parseInt(qtdLanche.innerText) > 0) orderInfo.Lanche = qtdLanche.innerText;
  if (parseInt(qtdLanchinho.innerText) > 0) orderInfo.Lanchinho = qtdLanchinho.innerText;
  if (parseInt(qtdOvo.innerText) > 0) orderInfo.Ovo = qtdOvo.innerText;
  if (parseInt(qtdAbacaxi.innerText) > 0) orderInfo.Abacaxi = qtdAbacaxi.innerText;

  const molhos = document.querySelectorAll('input[name="molho"]:checked');

  if (molhos.length > 0) orderInfo.Molhos = molhos.length;
  if (Batata.checked === true) orderInfo.Batata = 'sim';
  if (comentario.value !== '') orderInfo.comentario = comentario.value;

  const itemsNotaFiscal = Object.entries(orderInfo);

  itemsNotaFiscal.forEach((item) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${item[0]}: ${item[1]}`;
    listaNotaFiscal.appendChild(newLi);
  })

  nota.style.display = 'block';

  console.log(itemsNotaFiscal);
  
})