const tabela = document.getElementById('tabela');
const mediaNotas = document.getElementById('media-notas');

const alunos = [
  {nome: 'João', notaP1: Math.floor(Math.random() * 11), notaP2: Math.floor(Math.random() * 11), notaT1: Math.floor(Math.random() * 11), faltas: Math.floor(Math.random() * 6)},
  {nome: 'Maria', notaP1: Math.floor(Math.random() * 11), notaP2: Math.floor(Math.random() * 11), notaT1: Math.floor(Math.random() * 11), faltas: Math.floor(Math.random() * 6)},
  {nome: 'Pedro', notaP1: Math.floor(Math.random() * 11), notaP2: Math.floor(Math.random() * 11), notaT1: Math.floor(Math.random() * 11), faltas: Math.floor(Math.random() * 6)},
  {nome: 'Ana', notaP1: Math.floor(Math.random() * 11), notaP2: Math.floor(Math.random() * 11), notaT1: Math.floor(Math.random() * 11), faltas: Math.floor(Math.random() * 6)},
  {nome: 'Lucas', notaP1: Math.floor(Math.random() * 11), notaP2: Math.floor(Math.random() * 11), notaT1: Math.floor(Math.random() * 11), faltas: Math.floor(Math.random() * 6)}
];

let notasTotais = 0;
for (let aluno of alunos) {
  const notaTotal = aluno.notaP1 + aluno.notaP2 + aluno.notaT1;
  notasTotais += notaTotal;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${aluno.nome}</td>
    <td>${aluno.notaP1}</td>
    <td>${aluno.notaP2}</td>
    <td>${aluno.notaT1}</td>
    <td>${notaTotal}</td>
    <td>${aluno.faltas}</td>
  `;
  tabela.appendChild(tr);

  tr.addEventListener('click', () => {
    alert(tr.cells[tr.cells.length - 1
