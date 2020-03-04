/*
Foi criada a função alterarCor para que seja chamada pelobotão de formulário no html. Assim o usuário poderá interagir com os elementos em tela
*/

function alterarCor() {
  /*
Para saber em qual botão de radio o usuário clicou, estamos usando o comando document.forms[0].cor[x].checked, onde: document tarta dos elements que estão
no body para pegar o formulário usamos o comando forms[0], ou seja, o primeiro forumulári de uma pagina html sempre terá o seu índice igua a zero(0), portanto
portanto estamos pegando o primeiro formulário.
E para pegar os elementos dentro do formulário também usamos os seus índices, assim temos cor que é um botão de radio e seguido de seu índice,
Ex: coe[0] assim pegamos o primeiro elemento do formulário.
Depis usamos o comando checked para saber se a caixa foi selecionada
*/

  if (document.forms[0].cor[0].checked) document.bgColor = "red";
  else if (document.forms[0].cor[1].checked) document.bgColor = "green";
  else if (document.forms[0].cor[2].checked) document.bgColor = "blue";
  else if (document.forms[0].cor[3].checked) document.bgColor = "yellow";
  else if (document.forms[0].cor[4].checked) document.bgColor = "black";
}
function abreFoto(x) {
  //   if (x == 1)
  //     document.getElementById("area").innerHTML = "<img src=img/foto1.jpg>";
  //   else if (x == 2)
  //     document.getElementById("area").innerHTML = "<img src=img/foto2.jpg>";
  //   else if (x == 3)
  //     document.getElementById("area").innerHTML = "<img src=img/foto3.jpg>";
  //   else if (x == 4)
  //     document.getElementById("area").innerHTML = "<img src=img/foto4.jpg>";
  switch (x) {
    case 1:
      document.getElementById("area").innerHTML = "<img src=img/foto1.jpg>";
      break;
    case 2:
      document.getElementById("area").innerHTML = "<img src=img/foto2.jpg>";
      break;
    case 3:
      document.getElementById("area").innerHTML = "<img src=img/foto3.jpg>";
      break;
    case 4:
      document.getElementById("area").innerHTML = "<img src=img/foto4.jpg>";
      break;
    case 5:
      document.getElementById("area").innerHTML = "<img src=img/foto5.jpg>";
      break;
    case 6:
      document.getElementById("area").innerHTML = "<img src=img/foto6.jpg>";
      break;
  }
}
