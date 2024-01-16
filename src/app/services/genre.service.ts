import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Genre, Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiKey = 'ad22179806a32645da3db8a592f0af57'
  constructor(private http: HttpClient) { }

  // Metodo getGenres:  obtener la lista completa de géneros disponibles
  getGenres(): Observable<Genre[]> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<Genre[]>(url).pipe(
      catchError(error => {
        console.error('Error fetching genres', error)
        throw error
      })
    )
  }
  // Metodo getMoviesByGenre: obtener películas que estén etiquetadas con un género específico.
  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const params = new HttpParams().set('api_key', this.apiKey).set('with_genres', genreId.toString());
    return this.http.get<Movie[]>(url, { params });
  }
}
