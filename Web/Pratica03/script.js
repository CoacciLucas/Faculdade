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

let numeros = [];

function adicionarNumero() {
  const inputNumero = document.getElementById("numero");
  const numero = inputNumero.value;

  if (numero !== "") {
    numeros.push(Number(numero));
    inputNumero.value = "";
    inputNumero.focus();
    const pNumerosInformados = document.getElementById("numeros-informados");
    pNumerosInformados.textContent =
      "Números informados: " + numeros.join(", ");
  }
}

function calcularMedia() {
  const media = numeros.reduce((total, num) => total + num, 0) / numeros.length;
  const pMedia = document.getElementById("media");
  pMedia.textContent = "Média aritmética: " + media.toFixed(2);
}

let numerosMaior = [];

function adicionarNumeroMaior() {
  const inputNumero = document.getElementById("numeroMaior");
  const numero = Number(inputNumero.value);

  if (!isNaN(numero)) {
    numerosMaior.push(numero);
    inputNumero.value = "";
    inputNumero.focus();
    const listaNumeros = document.getElementById("lista-numeros");
    const li = document.createElement("li");
    li.textContent = numero;
    listaNumeros.appendChild(li);
  }
}

function mostrarMaiorNumero() {
  const pMaiorNumero = document.getElementById("maior-numero");
  if (numerosMaior.length > 0) {
    const maiorNumero = Math.max(...numerosMaior);
    pMaiorNumero.textContent = "Maior número informado: " + maiorNumero;
  } else {
    pMaiorNumero.textContent = "Nenhum número informado.";
  }
}
