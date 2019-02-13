/*
function NOME (ARGUMENTO, ARGUMENTO, ARGUMENTO, ARGUMENTO) {
  EXECUÇÃO
}

NOME(PARAMETRO, PARAMETRO, PARAMETRO, PARAMETRO);
*/

// let primeiroValor = Number(prompt("Qual o primeiro valor para a soma"));
function somaElevadaAoQuadrado(a = 0, b = 0) { //Assinatura da função
  let soma = a + b;

  return soma ** 2;
}

console.log(somaElevadaAoQuadrado(10, 10));

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}