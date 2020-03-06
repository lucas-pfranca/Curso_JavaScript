function cor() {
  /*
    Vamos trabalhar coms a cores RGB e com uma variação de
    números para formar a cor de 0 a 9. Os números virão de 
    forma aleatória, portanto se faz necessário o uso do
    comando MAth.random();
    Iremos multipliar os valores obtdos por random por 8 e 
    arredondar suas casas decimais.
    */

  console.log("#" + r + "" + r + "" + g + "" + g + "" + b + "" + b + "");
  //   document.bgColor = "#" + r + "" + r + "" + g + "" + g + "" + b + "" + b;

  var tabela = "<table>";

  for (var linha = 1; linha <= 20; linha++) {
    tabela += "<tr>";
    for (var coluna = 1; coluna <= 20; coluna++) {
      var r = Math.round(Math.random() * 8);
      var g = Math.round(Math.random() * 8);
      var b = Math.round(Math.random() * 8);

      tabela +=
        "<td style=background-color:" +
        "#" +
        r +
        "" +
        r +
        "" +
        g +
        "" +
        g +
        "" +
        b +
        "" +
        b +
        ">Cor</td>";
    }

    tabela += "</tr>";
  }
  tabela += "</table>";
  document.getElementById("saida").innerHTML = tabela;
}
