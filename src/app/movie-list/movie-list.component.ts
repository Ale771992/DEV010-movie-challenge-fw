import { Component, OnInit } from "@angular/core"; // Decorador Component se usa para definir un componente 
import { MovieService } from "../services/movie.service";
import { Movie } from "../movie.interface";
import { PaginationComponent } from "../pagination/pagination.component";

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
        this.movieService.getMovies(page).subscribe((resp) => {
            console.log("This is the value of resp", resp);
            if (resp) {
                this.allMovies = resp.results
                console.log('After calling getmovies:', this.allMovies.length);
                this.currentPage = resp.page
            }
        });
    }
    goToNextPage() {
        this.currentPage++
        this.getMovies(this.currentPage)
    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getMovies(this.currentPage);
        }
    }

}
