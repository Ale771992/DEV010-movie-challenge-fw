import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre, Movie } from '../movie.interface'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-filter-movie.',
    templateUrl: './filter-movie.component.html',
    styleUrls: ['./filter-movie.component.css']
})
export class FilterMovieComponent {
    genres: Genre[] = []
    selectedGenre: Genre | undefined = undefined// Variable para almacenar el genero seleccionado.
    genresSubscription: Subscription | undefined
    movies: Movie[] = []
    constructor(private genreService: GenreService, private router: Router) { }

    
}
