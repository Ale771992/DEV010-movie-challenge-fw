import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { Movie } from "../movie.interface";
@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
    // Declaración de la variable
    movie: Movie = {
        title: "Título de la película",
        release_date: 2021,
        poster_path: "/ruta/imagen.jpg"
    };
    currentPage = 1;
    itemsPerPage = 10;
    allMovies: Movie[] = []

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.getMovies();
    }
    getMovies(page: number = this.currentPage) {
        this.movieService.getMovies(page).subscribe((resp) => {
            console.log(resp);
            this.allMovies = [...this.allMovies, ...resp.results]
        });
    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
    goToNextPage() {
        const totalPages = Math.ceil(this.allMovies.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
        }
    }
}
