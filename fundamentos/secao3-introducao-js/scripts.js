/* const a = 5;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const numUm = 22;
const numDois = 70;

if (numUm > numDois) {
    console.log(numUm + " é o maior numero")
} else if (numUm < numDois) {
    console.log(numDois + " é o maior numero")
} else {
    console.log("Os numeros são iguais")
}

const novoUm = 20;
const novoDois = 8;
const novoTres = 20;

if (novoUm > novoDois && novoUm > novoTres) {
    console.log(novoUm + " é o maior numero")
} else if (novoDois > novoUm && novoDois > novoTres) {
    console.log(novoDois + " é o maior numero")
} else if ((novoTres > novoDois && novoTres > novoUm)) {
    console.log(novoTres + " é o maior numero")
} else if (novoUm ==== novoDois || novoUm ==== novoTres || novoDois ==== novoTres) {
    console.log("Dois ou mais numeros são iguais")
}

const number = 4;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
};

let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

let somaAngulo = anguloA + anguloB + anguloC;
let positivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (positivos) {
    if (somaAngulo ==== 180) {
        console.log("true");
    } else {
        console.log("false");
    }
} else {
    console.log("Erro: Angulo inválido");
} */

/* let pecaXadrezDigitada = "Peão";
let pecaXadrez = pecaXadrezDigitada.toLowerCase();

switch(pecaXadrez){
    case "rei":
        console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal). 1 casa por vez');
    break;
    case "dama":
        console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser');
    break;
    case "bispo":
        console.log('Move-se na diagonal, quantas casas quiser');
    break;
    case "cavalo":
        console.log('O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”');
    break;
    case "torre":
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser');
    break;
    case "peão":
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
    break;
    default:
        console.log('Peça inválida');
}    */

/* let valor = 150;
if (valor < 0 || valor > 100){
    notaAluno = 'Erro: nota inválida'
} else if(valor >= 80){
    notaAluno = 'Nota do Aluno: B'
} else if(valor >= 70){
    notaAluno = 'Nota do Aluno: C'
} else if(valor >= 60){
    notaAluno = 'Nota do Aluno: D'
} else if(valor >= 50){
    notaAluno = 'Nota do Aluno: E'
} else if(valor < 50){
    notaAluno = 'Nota do Aluno: F'
}else if(valor >= 90){
    notaAluno = 'Nota do Aluno: A'
}else{
    notaAluno = 'Insira o valor da nota'
}
console.log(notaAluno); */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
let mediaArray = 0;
let numeroMaior = 0;
let quantosImpares = 0;

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    somaArray += numbers[index];
    mediaArray = somaArray / numbers.length;
    if (numbers[index] >= numeroMaior){
        numeroMaior = numbers[index]
    }
}
console.log("Soma dos numeros = " + somaArray);
console.log("Média aritmética = " + mediaArray);
console.log("O maior numero do Array é = " + numeroMaior);
if(mediaArray > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !=== 0){
        quantosImpares = quantosImpares +1;
    }
}
if(quantosImpares > 0){
    console.log("Existem " + quantosImpares + " numeros ímpares");
}else{
    console.log("Nenhum valor ímpar encontrado");
} */

/* let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

let word = 'tryber';
 */


// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

/* let soma = 0;
for(let index = 1; index <= 50; index +=1){
    soma += index
}
console.log("A soma total de 1 a 50 é: " + soma); */

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

/* qntDivisivel = 0;

for(let index = 2; index <=150; index +=1){
    if(index % 3 ==== 0){
        qntDivisivel +=1
    }
}
if(qntDivisivel ==== 50){
    console.log(qntDivisivel);
    console.log("exibe msg secreta");
}
 */
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

/* let jogador1 = "pedra"
let jogador2 = "tesoura"

if (jogador1 === "pedra") {
    if (jogador2 === "tesoura") {
        console.log("Player 1 won");
    } else if (jogador2 === "papel"){
        console.log("Player 2 won");
    } else if (jogador2 === "pedra") {
        console.log("A Ties");
    }

}
else if (jogador1 === "tesoura") {
    if (jogador2 === "pedra") {
        console.log("Player 2 won");
    } else if (jogador2 === papel){
        console.log("Player 1 won");
    } else if (jogadoe2 === "tesoura") {
        console.log("A Ties");
    }
}

else if (jogador1 === "papel"){
    if (jogador2 === "pedra") {
        console.log("Player 1 won");
    }else if (jogador2 === "tesoura") {
        console.log("Player 2 won");
    }else if (jogador2 === "papel")  {
        console.log("A Ties");
    }

}
 */

// 4- Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

/* let pessoa = 'Teste';
let idade = 22;
idade >= 18 ? console.log(pessoa + " é maior de idade") : console.log("Não"); */


// 5 - Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:


let player = { 
    name:'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }

}
player['fullName'] = player.name + ' ' + player.lastName;
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player['fullName'] + ' tem ' + player.age + ' anos de idade');

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player['fullName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');
console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata' );


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let key in names) {
    console.log("Olá " + names[key]);    
  }


//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key + ' ' + car[key]);    
  }

  function sum(a, b) {
    a + b;
  }
  console.log(sum(1, 2));

