function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem invaálida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
