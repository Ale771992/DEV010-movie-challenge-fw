export interface Movie { // Cada objeto pelicula tiene las siguientes propiedades
    title: string
    release_date: number
    poster_path: string
    
}
export interface MovieResponse { // Es la estructura de la respuesta que contiene un arreglo de peliculas 
    // en la propiedad results 
    results: Movie[];
    page: number
    totalPages: 42002
}
export interface Genre {
    id: number
    name: string
}
