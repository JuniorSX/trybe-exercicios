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
} else if (novoUm === novoDois || novoUm === novoTres || novoDois === novoTres) {
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
    if (somaAngulo === 180) {
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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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
    if(numbers[index] % 2 !== 0){
        quantosImpares = quantosImpares +1;
    }
}
if(quantosImpares > 0){
    console.log("Existem " + quantosImpares + " numeros ímpares");
}else{
    console.log("Nenhum valor ímpar encontrado");
}