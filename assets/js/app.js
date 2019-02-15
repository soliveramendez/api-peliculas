const moviedb = "https://api.themoviedb.org/3/discover/movie?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1)"
const content = document.getElementById("content");
const movies = document.getElementById("movies");
fetch(moviedb)
    .then(res => res.json())
    .then(data => {
       
      const array = data.results;
      const btn = document.getElementById("btn");
      btn.addEventListener('click', () => {        
        for (let index of array) {
            // console.log(index);
            const search = document.getElementById("search");
            let value = search.value;
            
             if (value.toUpperCase() === index.title.toUpperCase()) {
                 content.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w185${index.poster_path}" width="200px">
                    <h6 class="py-3">Título: ${index.title}</h6>
                    <h6>Fecha Lanzamiento: ${index.release_date}</h6>
                    <h6>Reseña: ${index.overview}</h6>
                    <h6>Calificación: ${index.vote_average}</h6>
    	             `;
                 content.style.backgroundColor = `#000`;
            }
          }
       })
  
      let redirect = array.map(function (index) {
            //console.log(index);
        return `
            <li class="list-inline-item">
            <img id="img" src=" https://image.tmdb.org/t/p/w185${index.poster_path}" width="100%">
            <a id="press" href='https://www.themoviedb.org/movie/${index.id}' target="_blank" title="ver trailer">Ver info</a>
            <p class="titulo d-none">${index.title}</p>  
            </li>
            `
            })
            movies.innerHTML = redirect;

    })

    .catch(function (error) {
        console.log(error);
    })

