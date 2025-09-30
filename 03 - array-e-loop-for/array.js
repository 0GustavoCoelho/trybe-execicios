//const array = [1, 2, 3, 4, 5, 'Coelho'];
//console.log(array[array.length -1]);
//  console.log('Número ' + index + ' = ' + lotteryNumbers[index] ); 


const lotteryNumbers = [];
const firstGame = [4, 8, 15, 16, 23, 42];

// Sorteio dos números;
for (let index = 0; index < 6; index += 1) {
  let randomNumber = (Math.ceil(Math.random() * 60));
  if (lotteryNumbers.includes(randomNumber)) {
    index -= 1;
  } else {
    lotteryNumbers.push(randomNumber)
  }
}


// Comparação do sorteio com o meu jogo;
let numbeOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
      numbeOfHits += 1;
      hits.push(lotteryNumbers[indexLottery])
    }
  }
}

//Quantidade de acertos;
console.log(`Número sorteados: ${lotteryNumbers}`);
console.log(`Meu jogo: ${firstGame}`);
console.log(`Quantidade de acertos: ${numbeOfHits}`);
console.log(`Números acertados: ${hits}`);