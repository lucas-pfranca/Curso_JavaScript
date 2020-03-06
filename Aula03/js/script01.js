function contagem() {
  var x = 1;
  while (x <= 10) {
    document.getElementById("caixa").innerHTML += "Contei" + x + "<br>";
    x++;
  }
}
function pares() {
  var inicial = prompt("Digite um número");
  var final = prompt("Digite outro número");

  while (inicial <= final) {
    //Para saber quai são os números pares usaremos a divisão
    // com o módulo e pegamos o resto da divisão. Se for igual a xero(0)
    //então o número é par e portanto será exibido em tela
    if (inicial % 2 == 0) {
      document.getElementById("caixa").innerHTML +=
        "Este número é par" + inicial + "<br>";
    }
    inicial++;
  }
}

function parcelamento() {
  var produto = document.getElementById("produto").value;
  var preco = document.getElementById("preco").value;
  var taxa = document.getElementById("taxa").value;
  var parcelas = document.getElementById("parcelas").value;

  var resultado = preco * (1 + parseFloat(taxa));
  var valorParcela = resultado / parcelas;
  document.getElementById("resultado").innerHTML +=
    "O produto " +
    produto +
    "<br> Tem valor a vista de " +
    preco +
    "<br> Valor a prazo " +
    resultado +
    "<br> Dividido em: " +
    parcelas +
    "x <br> Cada parcela: " +
    valorParcela;
}

function parcelas() {
  var x = 1;
  while (x <= 24) {
    document.getElementById("parcelas").innerHTML +=
      "<option value= " + x + ">" + x + "</option>";
    x++;
  }
}
