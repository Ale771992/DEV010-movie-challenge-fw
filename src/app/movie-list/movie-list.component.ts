import { Component, OnInit } from "@angular/core"; // Decorador Component se usa para definir un componente 
import { MovieService } from "../services/movie.service";
import { Movie } from "../movie.interface";
@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {// OnInit es un ciclo de vida del componente, se ejecuta una vez que el componente ha sido inicializado. 
    // inicialización de la variable
    movie: Movie = {
        title: "Título de la película",
        release_date: 2021,
        poster_path: "/ruta/imagen.jpg"
    };
    currentPage = 1
    itemsPerPage = 20;
    allMovies: Movie[] = []

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.getMovies(this.currentPage);
    }
    getMovies(page: number = this.currentPage) {
        console.log('Antes de la llamada a getMovies:', this.allMovies.length)
        this.movieService.getMovies(page).subscribe((resp) => {
            console.log(resp);
            this.allMovies = resp.results
            console.log('Después de la llamada a getMovies:', this.allMovies.length);
            this.currentPage = resp.page
        });
    }
    goToNextPage() {
        console.log(this.currentPage);

        const totalPages = Math.ceil(this.allMovies.length / this.itemsPerPage);
        console.log(totalPages);

        if (this.currentPage < totalPages) {
            this.getMovies(this.currentPage)
        } else {
            this.currentPage++;
            this.getMovies(this.currentPage)
        }

    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getMovies(this.currentPage)
        }
    }

}
