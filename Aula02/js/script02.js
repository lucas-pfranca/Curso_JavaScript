var cor = prompt(
  "Digite uma das cores para o plano de fundo: Preto, Vermelho, Verde, Azul, Amarelo"
);

//cor = cor.toUpperCase(); //Converter todas as letras para maiúscula
cor = cor.toLowerCase(); // Converter todas as letras para minúsculas

console.log(cor);

// if (cor == "preto") document.bgColor = "black";
// if (cor == "vermelho") document.bgColor = "red";
// if (cor == "verde") document.bgColor = "green";
// if (cor == "amarelo") document.bgColor = "yellow";
// if (cor == "azul") document.bgColor = "blue";

// if (cor == "preto") document.bgColor = "black";
// else if (cor == "vermelho") document.bgColor = "red";
// else if (cor == "verde") document.bgColor = "green";
// else if (cor == "amarelo") document.bgColor = "yellow";
// else if (cor == "azul") document.bgColor = "blue";
// else document.bgColor = "silver";

// Quando temos muitostestes a se fazer utilizamos a estruturas switch ao invés de if
switch (cor) {
  case "vermelho":
    document.bgColor = "#f44336";
    break;
  case "roxo":
    document.bgColor = "#9c27b0";
    break;
  case "preto":
    document.bgColor = "000000";
    break;
  case "verde":
    document.bgColor = "#00ff00";
    break;
  case "azul":
    document.bgColor = "0000ff";
    break;
  case "laranja":
    document.bgColor = "#ff9800";
    break;
  case "cinza":
    document.bgColor = "#9e9e9e";
    break;

  default:
    document.bgColor = "#eeeeee";
    break;
}
