import { EventEmitter, Injectable } from "@angular/core"; //  Usado para marcar una clase como un servicio
import { HttpClient, HttpParams } from "@angular/common/http"; // Modulo con funcionalidades para hacer peticiones HTTP
import { Observable } from "rxjs"; // Observable maneja y observa los eventos asincronos de la solicitud(es) HTTP
import { map } from "rxjs/operators";
import { Movie, MovieResponse } from "../movie.interface";

@Injectable({
    providedIn: 'root' // Le indicas a Angular que traiga el servicio de manera global en toda la aplicación 
})
export class MovieService { // Injectable convierte a MovieService es un servicio injectable, para poder usarlo en otros componentes
   
    constructor(private http: HttpClient) { } // El constructor inicializa el servicio de MovieService
    
    itemsPerPage = 20;
    totalPages = 42002
    currentPage = 1
    nextPage = new EventEmitter<number>()
    previousPage = new EventEmitter<number>()
    
    // Metodo GetMovies 
    getMovies(page: number): Observable<MovieResponse> { // Método getMovies
        // console.log(page)
        this.currentPage = 1
        // Mi llave API
        const apiKey = 'ad22179806a32645da3db8a592f0af57'
        const params = new HttpParams() // HttpParams para construir los parametros de la URL de solicitud HTTP
            .set('api_key', apiKey) // .set se utiliza para agregar un parámetro a los HttpParams
            .set('page', page)
        // Construyes la URL para la solicitud HTTP utilizando la clave de API y el número de página proporcionados como parámetros.
        const url = `https://api.themoviedb.org/3/discover/movie`;
        // Realizas la solicitud HTTP con el metodo get
        return this.http.get<MovieResponse>(url, { params }).pipe(map((resp: MovieResponse) => {
            return resp
        })
        )
    }
}
/* la clase MovieService proporciona un método llamado getMovies que realiza una solicitud HTTP utilizando HttpClient para obtener
información sobre películas desde la API de TMDb. La clave de API se utiliza para autenticar la solicitud. La respuesta de la solicitud HTTP 
se envuelve en un Observable y se devuelve para que los componentes de tu aplicación puedan suscribirse a él y recibir las actualizaciones 
cuando lleguen los datos */
