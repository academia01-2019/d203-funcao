console.log('=== Exercício da Escada ===');

/* 
  O usuário vai definir qual é o tamanho de uma escada que ele gostaria. Você tem que desenhar a escada no console de acordo com esse tamanho. Exemplo:
  USUÁRIO: 5 lances
  SAÍDA: 
  #
  ##
  ###
  ####
  #####


  BÔNUS:
  O usuário escolhe qual o material da escada. Exemplo:
  USUÁRIO: 5 lances, material @
  SAÍDA:
  @
  @@
  @@@
  @@@@
  @@@@@
*/

let lances = Number(prompt('Quantos lances de escada você gostaria de fazer?'));
// let material = '#';
let material = prompt('Qual é o material que você quer utilizar na escada?');
let degrau = material;
let i = 0;

while (i < lances) {  

    console.log(degrau);

    // degrau = degrau + material;
    degrau += material;

    i++;
}
