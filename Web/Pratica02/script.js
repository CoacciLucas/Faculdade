function calcularTroco() {
  const valorCompra = parseInt(document.getElementById("valorCompra").value);
  const valorPago = parseInt(document.getElementById("valorPago").value);
  let troco = valorPago - valorCompra;
  const notas = [50, 20, 10, 5, 1];
  const resultadoTROCO = document.getElementById("resultadoTROCO");
  resultadoTROCO.innerHTML = "";

  if (troco < 0) {
    alert("A quantia paga é insuficiente para realizar a compra!");
  } else {
    resultadoTROCO.innerHTML = "Troco: " + troco + "<br>";
    for (let nota of notas) {
      const qtdNotas = Math.floor(troco / nota);
      resultadoTROCO.innerHTML += `Notas de ${nota}: ${qtdNotas}<br>`;
      troco -= qtdNotas * nota;
    }
  }
}
function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = peso / altura ** 2;
  const resultadoIMC = document.getElementById("resultadoIMC");

  if (isNaN(imc)) {
    resultadoIMC.innerHTML = "Por favor, preencha os campos corretamente.";
  } else {
    resultadoIMC.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}. Categoria: ${categoriaIMC(imc)}`;
  }
}

function categoriaIMC(imc) {
  if (imc < 20) {
    return "Abaixo do Peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 35) {
    return "Obesidade grau I";
  } else if (imc < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
}

function calcular() {
  const x = parseFloat(document.getElementById("valorX").value);
  const resultadoX = document.getElementById("resultadoX");

  if (x < -2) {
    resultadoX.innerHTML = `Resultado: ${2 * x + 2}`;
  } else if (x >= -2 && x < 3) {
    resultadoX.innerHTML = "Resultado: 3";
  } else {
    resultadoX.innerHTML = `Resultado: ${-x}`;
  }
}

function buscarProduto() {
  const codigo = parseInt(document.getElementById("codigoProduto").value);
  const resultadoProduto = document.getElementById("resultadoProduto");

  switch (codigo) {
    case 1:
      resultadoProduto.innerHTML = "Produto: Sapato<br>Preço: R$99,99";
      break;
    case 2:
      resultadoProduto.innerHTML = "Produto: Bolsa<br>Preço: R$103,89";
      break;
    case 3:
      resultadoProduto.innerHTML = "Produto: Camisa<br>Preço: R$49,98";
      break;
    case 4:
      resultadoProduto.innerHTML = "Produto: Calça<br>Preço: R$89,72";
      break;
    case 5:
      resultadoProduto.innerHTML = "Produto: Blusa<br>Preço: R$97,35";
      break;
    default:
      resultadoProduto.innerHTML = "Código de produto inválido!";
      break;
  }
}

const colaboradores = [
  { codigo: 1, nome: "Ana", valorHora: 45.78 },
  { codigo: 2, nome: "Bruna", valorHora: 60.0 },
  { codigo: 3, nome: "Carlos", valorHora: 38.99 },
  { codigo: 4, nome: "Diogo", valorHora: 45.78 },
  { codigo: 5, nome: "Ester", valorHora: 45.78 },
];

function calcular() {
  const codigo = Number(document.getElementById("codigo").value);
  const horas = Number(document.getElementById("horas").value);
  let valorHora = 0;

  // busca o colaborador pelo código informado
  for (let i = 0; i < colaboradores.length; i++) {
    if (colaboradores[i].codigo === codigo) {
      valorHora = colaboradores[i].valorHora;
      break;
    }
  }

  // verifica se encontrou o colaborador
  if (valorHora === 0) {
    document.getElementById("resultadoTrabalho").textContent =
      "Código inválido!";
  } else {
    const salario = horas * valorHora;
    document.getElementById(
      "resultadoTrabalho"
    ).textContent = `Salário: R$ ${salario.toFixed(2)}`;
  }
}
