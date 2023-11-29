import { Injectable } from "@angular/core"; //  Usado para marcar una clase como un servicio
import { HttpClient } from "@angular/common/http"; // Modulo con funcionalidades para hacer peticiones HTTP
import { Observable } from "rxjs"; // Observable maneja y observa los eventos asincronos de la solicitud(es) HTTP
import { map } from "rxjs/operators";
import { MovieResponse } from "../movie.interface";
@Injectable({
    providedIn: 'root' // Le indicas a Angular que traiga el servicio de manera global en toda la aplicación 
})
export class MovieService { // Injectable convierte a MovieService es un servicio injectable, para poder usarlo en otros componentes
    constructor(private http: HttpClient) { } // El constructor inicializa el servicio de MovieService
    getMovies(page: number): Observable<MovieResponse> { // Método getMovies, toma un parámetro page de tipo número, que se usa para construir la URL de la solicitud.
        const apiKey = 'ad22179806a32645da3db8a592f0af57'; // Mi llave API
        // Construyes la URL para la solicitud HTTP utilizando la clave de API y el número de página proporcionados como parámetros.
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&per_page=10`;
        // Realizas la solicitud HTTP con el metodo get
        return this.http.get<MovieResponse>(url).pipe(map((resp: MovieResponse) => {
            return resp
        })); 
    }

}
/* la clase MovieService proporciona un método llamado getMovies que realiza una solicitud HTTP utilizando HttpClient para obtener
información sobre películas desde la API de TMDb. La clave de API se utiliza para autenticar la solicitud y el número de página
se utiliza para paginar los resultados. La respuesta de la solicitud HTTP se envuelve en un Observable y se devuelve para que los
componentes de tu aplicación puedan suscribirse a él y recibir las actualizaciones cuando lleguen los datos */
