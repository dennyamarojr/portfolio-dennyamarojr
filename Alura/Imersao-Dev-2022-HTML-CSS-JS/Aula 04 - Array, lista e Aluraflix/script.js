var listaFilmes = [
    "https://image.tmdb.org/t/p/original/1JqvFeNRS5449yvzPnQ8m0j2zUu.jpg",
    "https://image.tmdb.org/t/p/w1280/cG7Sm32Fpkj5STW2Ic1KTQ4YSME.jpg",
    "https://www.animationmagazine.net/wordpress/wp-content/uploads/the-witcher2-1.jpg",
    "https://www.tvinsider.com/wp-content/uploads/2021/12/reacher-alan-ritchson-poster-1386x2048.jpg",
    "https://image.tmdb.org/t/p/original/tZZhN5RuNAYzHcfyHsVvzUKbknW.jpg",
    "https://image.tmdb.org/t/p/w500/aqawO5mYblDRwEmHjMiLJa8LyIr.jpg",
    "https://vignette.wikia.nocookie.net/entertainment1/images/2/29/7F535954-F454-463E-B3C2-942DC714D263.jpeg/revision/latest?cb=20180314021900",
    "https://www.dvdsreleasedates.com/posters/800/C/CSI-Cyber-2015-movie-poster.jpg",
    "https://m.media-amazon.com/images/I/A1GI+VOKUjL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91KBjIcnKdL._SL1500_.jpg",
    "https://flxt.tmsimg.com/assets/p21515554_b_v13_ac.jpg",
    "https://wallpapercave.com/wp/wp4038403.jpg"
  ];
  
  // for (valor inicial; condição; expressão final)
  for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">");
  }
  
  function add() {
    var addFilme = document.getElementById("link").value;
    var elementoAviso = document.getElementById("aviso");
    var adicionado = false;
    for (var indice = 0; indice < listaFilmes.length; indice++) {
      if (listaFilmes[indice] == addFilme) {
        elementoAviso.innerHTML = "Este filme/série já esta na biblioteca!";
        adicionado = true;
      }
    }
    if (adicionado == false) {
      elementoAviso.innerHTML = "";
      listaFilmes.push(addFilme);
      var imgFilme = document.createElement("img");
      imgFilme.src = addFilme;
      document.body.appendChild(imgFilme);
    }
  }
  