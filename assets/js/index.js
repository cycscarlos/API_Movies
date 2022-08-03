// Mi ejemplo con Fetch

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=668ad3c4b306cdc7dfd0263734de447f"
    );
    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      console.log(datos.title);
    } else if (respuesta.status === 401) {
      console.log("Hubo un error con el código de la llave");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
