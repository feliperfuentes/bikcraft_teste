// Ativar Links do Menu
const linksMenu = document.querySelectorAll(".header-menu li a")

linksMenu.forEach(function linkAtivo(link) {
  if(location.href.includes(link.href)) {
    link.classList.add("ativo")
  }
})

// Ativar Itens do Orçamento
if(location.search && location.search.includes("tipo")) {
  const parametros = new URLSearchParams(location.search)
  const paramTipo = parametros.get("tipo")
  const ParamProduto = parametros.get("produto")
  
  let tipo = document.querySelector("#" + paramTipo)
  tipo.checked = true
  
  let produto = document.querySelector("#" + ParamProduto)
  produto.checked = true
}

// Perguntas Frequentes
const perguntas = document.querySelectorAll("dt")

function mostrarResposta(e) {
  const resposta = e.currentTarget.nextElementSibling
  
  if(!resposta.classList.contains("visivel")) {
    resposta.classList.add("visivel")
    e.currentTarget.classList.add("open")
  } else {
    resposta.classList.remove("visivel")
    e.currentTarget.classList.remove("open")
  }
}

function findPergunta(pergunta) {
  pergunta.addEventListener("click", mostrarResposta)
}

perguntas.forEach(findPergunta)