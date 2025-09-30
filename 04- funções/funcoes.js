// Exemplo 1
//const sum = 10 + 5;
//console.log(sum);
console.log(sum(8, 3));

function sum(num1, num2) {
  return num1 + num2;
}


//console.log(sum(10, 5));
//console.log(sum(100, 75));

// Exemplo 2 
const peopleName = 'Gandalf';

const helloPeople = (name) => `Olá ${name}, Tudo bem?`;

console.log(helloPeople('Gustavo'));
console.log(helloPeople('Maysa'));

//console.log(`Olá ${peopleName}, Tudo bem?`);

//Cria uma função que retorne o maior e o menos número de um array


const maiorMenor = (array) => {
  let maior = array[0];
  let menor = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    } else if (array[index] < menor) {
      menor = array[index];
    }
  };

  return `O maior número é ${maior} e o menor é ${menor}`;
};

  console.log(maiorMenor([1, 4, 5, 66, 12, -3, 0, 7, 13, 22]));
  console.log(maiorMenor([21, 45, 67,90, -133, 0, 91, 1900, 9092, 1234, 5432, 345345, 4534, 345, 234234, 23423444]));