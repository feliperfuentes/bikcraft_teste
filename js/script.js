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