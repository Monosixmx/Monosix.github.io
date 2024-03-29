const pergunta1 = document.getElementById('caixaprimeira');
const btnsim1 = document.getElementById('sim1');
const btnnao1 = document.getElementById('nao1');
const height = window.innerHeight - 50;
const width = window.innerWidth - 50;

const reset = document.getElementById('reset');

const pergunta2 = document.getElementById('caixasegunda');
const btnsim2 = document.getElementById('sim2');
const btnnao2 = document.getElementById('nao2');
const respnao2 = document.getElementById('naomoranabuceta');

const pergunta3 = document.getElementById('caixaterceira');
const btnsim3 = document.getElementById('sim3');
const btnnao3 = document.getElementById('nao3');
const entaonaotomapinga = document.getElementById('entaonaosaipinga');

const pergunta4 = document.getElementById('caixaquarta');
const btnsim4 = document.getElementById('sim4');
const btnnao4 = document.getElementById('nao4');
const entaosopinga = document.getElementById('entaosopinga');

const educosta = document.getElementById('caixaquinta');
const btnarb = document.getElementById('livrearb');

const ultima = document.getElementById('ultima');
const btnsim5 = document.getElementById('sim5');
const btnnao5 = document.getElementById('nao5');

btnsim1.addEventListener('click', function() {
  pergunta1.style.display = 'none';
  pergunta2.style.display = 'block';
  reset.style.display = 'block';
});

btnnao1.addEventListener('mouseover', function() {
  btnnao1.style.position = 'absolute';
  btnnao1.style.top = Math.random() * height + 'px';
  btnnao1.style.left = Math.random() * width + 'px';
});

reset.addEventListener('click', function() {
  pergunta1.style.display = 'block';
  pergunta2.style.display = 'none';
  respnao2.style.display = 'none';
  pergunta3.style.display = 'none';
  pergunta4.style.display = 'none';
  entaonaotomapinga.style.display = 'none';
  educosta.style.display = 'none';
  entaosopinga.style.display = 'none';
  ultima.style.display = 'none';
  pergunta2.style.display = 'none';
})

btnsim2.addEventListener('click', function() {
  pergunta2.style.display = 'none';
  pergunta3.style.display = 'block';
});

btnnao2.addEventListener('click', function() {
  pergunta2.style.display = 'none';
  respnao2.style.display = 'block';
});

btnsim3.addEventListener('click', function() {
  pergunta3.style.display = 'none';
  pergunta4.style.display = 'block';
});

btnnao3.addEventListener('click', function() {
  pergunta3.style.display = 'none';
  entaonaotomapinga.style.display = 'block';
});

btnsim4.addEventListener('click', function() {
  pergunta4.style.display = 'none';
  educosta.style.display = 'block';
});

btnnao4.addEventListener('click', function() {
  pergunta4.style.display = 'none';
  entaosopinga.style.display = 'block';
});

btnarb.addEventListener('click', function() {
  educosta.style.display = 'none';
  ultima.style.display = 'block';
});

btnsim5.addEventListener('click', function() {
  ultima.style.display = 'none';
  entaosopinga.style.display = 'block';
});

btnnao5.addEventListener('click', function() {
  ultima.style.display = 'none';
  entaonaotomapinga.style.display = 'block';
});