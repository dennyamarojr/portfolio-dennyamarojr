addBtn.addEventListener('click', () => {
    const movieName = movieNameInput.value;
    const movieURL  = movieURLInput.value;
  
    if(verifyParameters(movieName, movieURL)) {
      addNewMovie(movieName, movieURL);
    }
  });
  
  const movieNameInput = document.querySelector('#movie-name');
  const movieURLInput  = document.querySelector('#movie-url');
  const cardsList      = document.querySelector('.cards-list');
  const errorElement   = document.querySelector('.error')
  
  const moviesList = [
    {
      id: 1,
      name: "O Protetor",
      url: "https://image.tmdb.org/t/p/original/1JqvFeNRS5449yvzPnQ8m0j2zUu.jpg"
    },
    {
      id: 2,
      name: "O Protetor 2",
      url: "https://image.tmdb.org/t/p/w1280/cG7Sm32Fpkj5STW2Ic1KTQ4YSME.jpg"
    },
    {
      id: 3,
      name: "The Witcher",
      url: "https://www.animationmagazine.net/wordpress/wp-content/uploads/the-witcher2-1.jpg"
    },
    {
      id: 4,
      name: "Reacher",
      url: "https://www.tvinsider.com/wp-content/uploads/2021/12/reacher-alan-ritchson-poster-1386x2048.jpg"
    },
    {
      id: 5,
      name: "The Equalizer",
      url: "https://image.tmdb.org/t/p/original/tZZhN5RuNAYzHcfyHsVvzUKbknW.jpg"
    },
    {
      id: 6,
      name: "Medium",
      url: "https://image.tmdb.org/t/p/w500/aqawO5mYblDRwEmHjMiLJa8LyIr.jpg"
    },
    {
      id: 7,
      name: "CSI: Miami",
      url: "https://vignette.wikia.nocookie.net/entertainment1/images/2/29/7F535954-F454-463E-B3C2-942DC714D263.jpeg/revision/latest?cb=20180314021900"
    },
    {
      id: 8,
      name: "CSI: Cyber",
      url: "https://www.dvdsreleasedates.com/posters/800/C/CSI-Cyber-2015-movie-poster.jpg"
    },
    {
      id: 9,
      name: "CSI: Crime Scene Investigation",
      url: "https://m.media-amazon.com/images/I/A1GI+VOKUjL._SL1500_.jpg"
    },
    {
      id: 10,
      name: "CSI: NY",
      url: "https://images-na.ssl-images-amazon.com/images/I/91KBjIcnKdL._SL1500_.jpg"
    },
    {
      id: 11,
      name: "Law & Order",
      url: "https://flxt.tmsimg.com/assets/p21515554_b_v13_ac.jpg"
    }, 
    {
      id: 12,
      name: "Law & Order: SVU",
      url: "https://wallpapercave.com/wp/wp4038403.jpg"
    }, 
  ];
  
  updateDisplayedMovies()
  
  function addNewMovie(movieName, movieURL) {
    const movie = {
      id: moviesList.length,
      name: movieName,
      url: movieURL
    }
  
    moviesList.push(movie)
  
    updateDisplayedMovies();
  }
  
  function updateDisplayedMovies() {
    cardsList.innerHTML = '';
  
    moviesList.forEach((movie) => {
      const cardElement = createCardElement(movie.name, movie.url);
  
      cardsList.appendChild(cardElement);
    })
  }
  
  function createCardElement(movieName, imageURL) {
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardTitle = document.createElement('span');
  
    cardImg.src = imageURL;
  
    if(movieName.length > 20) {
      cardTitle.textContent = movieName.substr(0,21) + "...";
    } else {
      cardTitle.textContent = movieName;
    }
  
    cardDiv.setAttribute('class', 'card');
    cardImg.setAttribute('onmouseover', 'mouseOver(event)');
    cardImg.setAttribute('onmouseout', 'mouseOut(event)');
    cardDiv.setAttribute('title', movieName);
  
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardTitle);
  
    return cardDiv;
  }
  
  function mouseOver(event) {
    const allCards = document.querySelectorAll('.card img');
    const target = event.target;
  
    allCards.forEach((card) => {
      if(card == target) {
        return;
      }
  
      card.classList.add('blur')
    })
  }
  
  function mouseOut(event) {
    const allCards = document.querySelectorAll('.card img');
    const target = event.target;
  
    allCards.forEach((card) => {
      if(card == target) {
        return;
      }
  
      card.classList.remove('blur')
    })
  }
  
  function verifyParameters(name, url) {
    if(!name) {
      errorElement.textContent = 'É necessário colocar o nome do Filme/Série.'
      return false;
    }
  
    if(!(url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg'))) {
      errorElement.textContent = 'É necessário colocar um link de uma imagem .jpg, .png ou .jpeg'
      return false;
    }
  
    for(let i in moviesList) {
      if(url == moviesList[i].url || name == moviesList[i].name) {
        errorElement.textContent = 'Este filme/série já existe na lista, tente adicionar um novo.'
        return false;
      }
    }
  
    errorElement.textContent = '';
    return true;
  }