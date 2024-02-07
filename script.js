const links = document.querySelectorAll(".menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

const titulo = document.querySelectorAll(".perguntas button");

function clickAparecer(event) {
  let pergunta = event.currentTarget; //pega os elementos do dado selecionado
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls); //buscar o elemento pelo id
  resposta.classList.toggle("ativa");
  const ativo = resposta.classList.contains("ativa"); //para ver se contem "ativa" na resposta
  pergunta.setAttribute("aria-expanded", ativo);

  // const resposta = document.querySelectorAll(".perguntas dd");
  // resposta.setAttribute("aria-expanded",true);
  // if (resposta["aria-expanded"] === true){
  //     texto.classList.add("ativa")
  // }
}
function eventoPergunta(evento) {
  evento.addEventListener("click", clickAparecer);
}
titulo.forEach(eventoPergunta);

const listaImagens = document.querySelectorAll(".bicicleta-img img");
const listaImagensContainer = document.querySelector(".bicicleta-img");

function trocaImagens(event) {
  const clickada = event.currentTarget;
  const media = matchMedia("min-width:1000px").matches;
  listaImagensContainer.prepend(clickada);
}

function paraTodos(img) {
  img.addEventListener("click", trocaImagens);
}

listaImagens.forEach(paraTodos);

//Animação plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}
