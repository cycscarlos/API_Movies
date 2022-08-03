Let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior®);
const btnSiguiente = document.getElementById('btnSiguiente’);

btnSiguiente.addEventListener('click’, () => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();

bs

btnAnterior.addEventListener('click’, () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();

bs

const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch(”
https://api.themoviedb.org/3/movie/popular?api_key=192e0b98215641261529497
${pagina}");

        console. log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
              Let peliculas = "';
            datos.results.forkach(pelicula => {
                  peliculas += ~
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/
                        <h3 class="titulo">${pelicula.title}</h3>
                      </div>

              13H

              document.getElementById( contenedor”).innerHTML = peliculas;

        } else if(respuesta.status === 401){
              console.log('Pusiste la 1llave mal‘);
        } else if(respuesta.status === 404){
            console.log('La pelicula que buscas no existe');
        } else {

              console.log('Hubo un error y no sabemos que paso‘);

    } catch(error){
        console.log(error);

cargarPeliculas();