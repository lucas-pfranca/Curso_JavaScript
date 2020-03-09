function array1() {
  var cidades = ["São Paulo", "Leme", "Campinas", "Salvador"];
  console.log(cidades);

  for (var i = 0; i <= 3; i++) {
    console.log(cidades[i] + " => Cidade");
  }
}

function array2() {
  var cidades = [
    ["Campinas", "Cidade de SP", "500000"],
    ["Leme", "Cidade de SP", "200000"],
    ["Salvador", "Cidade de BA", "500000"]
  ];
  console.log(cidades);

  var exibir = "";
  for (var i = 0; i <= 2; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 2; j++) {
      exibir += "<p>" + cidades[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}

function array3() {
  var cursos = [
    [
      "Administração Geral",
      "Administração Financeira",
      "Análise e Planejamneto Financeiro",
      "Assistente Administrativo"
    ],
    [
      "Beleza e Estética",
      "Depilação",
      "Depilação Facial com Linha",
      "Drenagem Linfática Manual"
    ],
    [
      "Computação Gráfica",
      "Autocad - Projetos em 2D",
      "Coreldraw - Ilustrção Digital",
      "Photoshop - Tratamento de Imagem"
    ],
    [
      "Fotografia",
      "Captação de Vídeos com DSLR ou Mirrorless",
      "Formação Básica e Fotografia",
      "Lightroom: Fluco de Trabalho e Tratamento de Imagem"
    ],
    [
      "Tecnologia da Informção",
      "Básico em Computação - Windows Office 2019",
      "Excel 2019 - Avançado",
      "Excel com VBA"
    ],
    [
      "Terapias Complementares",
      "Quick Massage",
      "Relfexologia das Mãos e Pés",
      "Reike - Master"
    ]
  ];
  console.log(cursos);

  var exibir = "";
  for (var i = 0; i <= 5; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 3; j++) {
      exibir += "<p>" + cursos[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}
