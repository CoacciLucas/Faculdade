function calcularIdade() {
  const anoNascimento = Number(document.getElementById("ano-nascimento").value);
  const anoAtual = Number(document.getElementById("ano-atual").value);
  const idadeAtual = anoAtual - anoNascimento;
  const idade2050 = 2050 - anoNascimento;

  document.getElementById("idade-atual").innerText = idadeAtual;
  document.getElementById("idade-2050").innerText = idade2050;
}

function calcularAumento() {
  const salario = Number(document.getElementById("salario").value);
  const novoSalario = salario * 1.25;

  document.getElementById("novo-salario").innerText = novoSalario;
}

function calcularFahrenheit() {
  const celsius = Number(document.getElementById("temperatura-celsius").value);
  const fahrenheit = celsius * 1.8 + 32;

  document.getElementById("temperatura-fahrenheit").innerText = fahrenheit;
}

function calcularMedia() {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);
  const media = (nota1 + nota2 + nota3) / 3;

  document.getElementById("media").innerText = media;
}

function calcularHipotenusa() {
  const cateto1 = Number(document.getElementById("cateto1").value);
  const cateto2 = Number(document.getElementById("cateto2").value);
  const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);

  document.getElementById("hipotenusa").innerText = hipotenusa;
}

function calcularEsfera() {
  const raio = Number(document.getElementById("raio").value);
  const comprimento = 2 * Math.PI * raio;
  const area = Math.PI * raio ** 2;
  const volume = (3 / 4) * Math.PI * raio ** 3;

  document.getElementById("comprimento").innerText = comprimento;
  document.getElementById("area").innerText = area;
  document.getElementById("volume").innerText = volume;
}
