let num1 = 100;
let num2 = 100
let word = 'Palavra'
let xablau = null;
let babalu = undefined;

//let = declaração da variavel
//const = declaração de constante (não pode ser alterada)
//var = declaração de variavel (não usar mais)
// "=" = atribuição
// "==" = comparação (valor)
// "===" = comparação (valor e tipo)

//Exercício 1
const myName = "Gustavo";
const birthCity = "Santa Rita do Sapucaí";
const birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//Exercício 2

const base = 5;
const height = 8;
const area = base * height;
const perimeter = 5 + 5 + 8 + 8;

console.log(perimeter);

//Exercício 3
const grade = 45;
let message = '';

if (grade >= 80) {
  message = "Parabéns, você faz parte do grupo de pessoas aprovadas!"
} else if (grade >= 60 && grade < 80) {
  message = "Você está na nossa lista de espera."
} else {
  message = "Infelizmente, você reprovou."
};

console.log(message);


//Exercíco 4
//let currentHour = 17;
//let message2 = '';

//if (currentHour >= 22) {
message2 = "Não deveríamos comer nada, é hora de dormir";
//} else if (currentHour >= 18 && currentHour < 22) {
message2 = "Rango da noite, vamos jantar :D";
//} else if (currentHour >= 14 && currentHour < 18) {
message2 = "Vamos fazer um bolo pro café da tarde?";
//} else if (currentHour >= 11 && currentHour < 14) {
message2 = "Hora do almoço!!!";
//} else if (currentHour >= 4 && currentHour < 11) {
message2 = "Hmmm, cheiro de café recém passado";
//};

//console.log(message2);



if (num1 > num2) {
  console.log('Num1 é o maior');
} else if (num1 === num2) {
  console.log('Empate');
} else {
  console.log('Num2 é o maior');
}


console.log(1 === '1');


//Exercício 7: Calculadora de salário líquido

let aliquotINSS;
let aliquotIR;
let grossSalary = 3000;
if (grossSalary <= 1556.94) { aliquotINSS = grossSalary * 0.08; }
else if (grossSalary <= 2594.92) { aliquotINSS = grossSalary * 0.09; }
else if (grossSalary <= 5189.82) { aliquotINSS = grossSalary * 0.11; }
else { aliquotINSS = 570.88; };

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) { aliquotIR = 0; }
else if (baseSalary <= 2826.65) { aliquotIR = (baseSalary * 0.075) - 142.80; }
else if (baseSalary <= 3751.05) { aliquotIR = (baseSalary * 0.15) - 354.80; }
else if (baseSalary <= 4664.68) { aliquotIR = (baseSalary * 0.225) - 636.13; }
else { aliquotIR = (baseSalary * 0.275) - 869.36; };

console.log("Salário: R$" + (baseSalary - aliquotIR));

//--------------------------------------
'condição' ? 'retorno se verdadeira' : 'retorno se falsa';

let temperature = 28;
let weater = temperature >30 && 'tá quente';

console.log(`A temperatura é ${temperature}, portanto, ${weater}.`);
