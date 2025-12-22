
function StartIMC(){
  const resultado = document.querySelector('.resultado')
  const botao = document.querySelector('.botao')

function calcular(){
  let nome = document.querySelector('.nome').value
  let VP = document.querySelector('.peso').value
  let VA = document.querySelector('.altura').value
  const ativo = 'ativo' 

  if(nome === '' || VP === '' || VA === ''){
    resultado.classList.add(ativo)
    resultado.textContent = 'preencha todos os campos'
    botao.classList.add(ativo)
    setTimeout(() =>{
    botao.classList.remove(ativo);
    },130);
  } else {
    resultado.classList.add(ativo)
    let resultadoDoImc = VP / (VA * VA)
    resultado.textContent = `${nome} seu imc é ${resultadoDoImc.toFixed(1)}`
    botao.classList.add(ativo)
    setTimeout(() =>{
    botao.classList.remove(ativo);
    },150);
  }


}

botao.addEventListener('click', calcular)
}
StartIMC()


function Iniaccordion(){
  const dt = document.querySelectorAll('.js-accordion dt')
  const ativo = 'ativo' 
  dt[0].nextElementSibling.classList.add(ativo)
  dt[0].classList.add(ativo)


  function addAtivo(e){
  const dt = e.target
  const nextdd = e.target.nextElementSibling
  nextdd.classList.toggle(ativo)
  dt.classList.toggle(ativo)

  }

  dt.forEach((i)=> i.addEventListener('click', addAtivo))
  }

Iniaccordion()

const dds = document.querySelectorAll('.dd')

