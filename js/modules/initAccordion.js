export default function Iniaccordion(){
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

