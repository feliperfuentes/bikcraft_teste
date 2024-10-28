const linksMenu = document.querySelectorAll(".header-menu li a")

linksMenu.forEach(function linkAtivo(link) {
  if(location.href.includes(link.href)) {
    link.classList.add("ativo")
  }
})