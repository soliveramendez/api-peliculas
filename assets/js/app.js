    /*
        const populares = "https://api.themoviedb.org/3/movie/297802/videos?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US"
            fetch(populares)
            .then(res => res.json())
            .then(data => {

            const myArray = data.results;
                
               // var foo = array.map(function(bar) {
                console.log(myArray[0]);
                peliculas2.innerHTML = `
            <a href='https://www.themoviedb.org/movie/${myArray[0].id}' title:"ingresa">Visita su pagina</a>
                `;
           
                })
               // peliculas2.innerHTML = foo;
     */
const moviedb = "https://api.themoviedb.org/3/discover/movie?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1)"
var peliculas = document.getElementById("peliculas");
var peliculas2 = document.getElementById("peliculas2");
fetch(moviedb)
    .then(res => res.json())
    .then(data => {
        const array = data.results;

    //var agrega="";
    //if (array === array[0]){
        var foo = array.map(function (bar) {
            console.log(bar);
                // for (let indice of array){
                //console.log(indice);
                //return `<li>Título: ${bar.title}</li>`;
                return `
                        <li class="list-inline-item">
                        <img id="img" src=" https://image.tmdb.org/t/p/w185${bar.poster_path}" width="100%">
                        <a id="pulsar" href='https://www.themoviedb.org/movie/${bar.id}' target="_blank" title="ver trailer">Ver info</a>
                        <p class="titulo d-none">${bar.title}</p>  
                        </li>
                        `
            })
            peliculas.innerHTML = foo;

        })

    .catch(function (error) {
        console.log(error);
    })

/* 
    function link() {
var img = document.getElementById("img");
var titulo = document.getElementsByClassName("titulo");
var ancor = document.createElement("a");
ancor.setAttribute("id", "pulsar");
ancor.setAttribute("href", "href='https://www.themoviedb.org/movie/${bar.id}'");
peliculas.insertBefore(ancor, titulo);

        //console.log(ancor);
        return ancor;
    // return `
        // <a class="pulsar" href='https://www.themoviedb.org/movie/${bar.id}' title="ver trailer"></a>
        // `
    }
link();
*/
//for(indice=0;indice < arreglo.length; indice++){
/*
console.log(data);
console.log(data.results);
console.log(data.results[0]);
console.log(data.results[1]);
peliculas.innerHTML = data.results[0].title;
peliculas2.innerHTML = data.results[1].title;
*/

//peliculas.innerHTML =JSON.stringify(data.results[0]);
//peliculas2.innerHTML =JSON.stringify(data.results[1]);

//peliculas.innerHTML = ` <p>Título: ${arreglo[indice].title}</p></br>`;
/*`
                <img src="https://image.tmdb.org/t/p/w185${arreglo[indice].poster_path}" width="200px">
                <p>Título: ${arreglo[indice].title}</p>
                </br>
                `
                
            })
            */
//const moviedb = "https://api.themoviedb.org/3/discover/movie?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1)"

function ver() {
    var contenido = document.getElementById("contenido");
    fetch(moviedb)
        .then(res => res.json())
        .then(data => {
            const arreglo = data.results;
            //  contenido.innerHTML = `
            // <img src="https://image.tmdb.org/t/p/w185${data.results[0].poster_path}" width="300px">
            //<p>Título: ${data.results[0].original_title}</p>
            //   `;
            for (let indice of arreglo) {
                console.log(indice);
                var titulo = document.getElementById("buscar");
                var valor = titulo.value;
                //var srt = arreglo.search("indice.title");
                //arreglo = arreglo.filter(function(dato){
                if (valor.toUpperCase() === indice.title.toUpperCase()) {
                    contenido.innerHTML = `
                                <img src="https://image.tmdb.org/t/p/w185${indice.poster_path}" width="200px">
                                <h6 class="py-3">Título: ${indice.title}</h1>
                                <h6>Fecha Lanzamiento: ${indice.release_date}</h3>
                                <h6>Reseña: ${indice.overview}</p>
                                <h6>Calificación: ${indice.vote_average}</h2>
    	                        `;
                    contenido.style.backgroundColor = `#000`;
                }
            }
        })

        .catch(function (error) {
            console.log(error);
        })
}

/*
                    //if(valor === indice.title){
                    contenido.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w185${indice.poster_path}">
                    <p>Título: ${indice.title}</p>
                    <p>Fecha Lanzamiento: ${indice.release_date}</p>
                    <p>Reseña: ${indice.overview}</p>
                    <p>Calificación: ${indice.vote_average}</p>  
                */

// Películas 

//const getConnection = () =>{
// const populares = "https://api.themoviedb.org/3/movie/297802?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US";
//const populares = "https://api.themoviedb.org/3/discover/movie?api_key=9ce61297e71d3908af00189c4a31d079&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1)"
//fetch(populares)
//.then(response => response.json())
//.then(response => {
//response.data.results.forEach(e => {
//   console.log(data);
//drawHero(e);
//});
/*
            const drawHero = e =>{
            const hero = `
            <img src="https://image.tmdb.org/t/p/w185${valor.poster_path}" width="100px">
            <p>Título: ${valor.homepage}</p>
            `
            }
*/
//getConnection();

//estreno.forEach(e => {
//   console.log(e);
//  for (var valor of estreno) {
//   console.log(valor);
//  var peliculas = document.getElementById("peliculas");
//      peliculas.innerHTML = `
//     <li>
//   <img src="https://image.tmdb.org/t/p/w185${valor.poster_path}" width="100px">
//     <p>Título: ${valor.homepage}</p>
//      </li>
//    `;
// }
// data.results.forEach(function(elemento) {
// console.log(elemento);
// });

/*   
            const agregar = e => {
            var peliculas = document.getElementById("peliculas");
            peliculas.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w185${indice.poster_path}" width="300px">
            <p>Título: ${indice.homepage}</p>
            `;

            }
            */

//for (let indice of estreno){
//peliculas.innerHTML =`
//console.log(estreno);
//`;
//}

//scroll color menu
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});


