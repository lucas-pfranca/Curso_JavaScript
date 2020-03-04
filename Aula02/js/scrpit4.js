/*
Essa estrutura de código é para a utilizção da estrutura de 
repetição tais como:
    -While;
    -For;
    -For in*;

As estruturas de repetição possuem 4 partes distintas:
    -Inicio da variável;
    -Condição para a repetição;
    -Corpo;
    -Incrementação ou decrementação;
*/
function contagem() {
  var x = 0;
  while (x <= 10) {
    console.log("Contei" + x);
    x = x + 1;
  }
}
