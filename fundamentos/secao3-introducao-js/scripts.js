const a = 5;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const numUm = 22;
const numDois = 70;

if (numUm > numDois){
    console.log(numUm + " é o maior numero")
}else if(numUm < numDois){
    console.log(numDois + " é o maior numero")
}else{
    console.log("Os numeros são iguais")
}

const novoUm = 20;
const novoDois = 8;
const novoTres = 20;

if (novoUm > novoDois && novoUm > novoTres){
    console.log(novoUm + " é o maior numero")
}else if(novoDois > novoUm && novoDois > novoTres){
    console.log(novoDois + " é o maior numero")
}else if((novoTres > novoDois && novoTres > novoUm)){
    console.log(novoTres + " é o maior numero")
}else if (novoUm === novoDois || novoUm === novoTres || novoDois === novoTres){
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

if(positivos) {
    if(somaAngulo === 180){
    console.log("true");
}else{
    console.log("false");
}
}else{
    console.log("Erro: Angulo inválido");
}