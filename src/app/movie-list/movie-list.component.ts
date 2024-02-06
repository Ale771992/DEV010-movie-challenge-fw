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
    movies: Movie[] = []

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        
        // Me suscribo a los eventos del paginador
        this.movieService.nextPage.subscribe(() => {
           this.currentPage = this.movieService.currentPage
           this.getMovies()
        })
        this.movieService.previousPage.subscribe(() => {
            this.currentPage = this.movieService.currentPage
            this.getMovies()
        })
        this.getMovies()
    }
    getMovies(){
        const currentPage = this.movieService.currentPage
        const itemsPerPage = this.movieService.itemsPerPage
        //Llamo al servicio para obtener las peliculas de la pagina actual
        this.movieService.getMovies(currentPage).subscribe((resp) =>{
            if(resp){
                this.movies = resp.results
                console.log("Todas las pelis", this.movies)
            }
        })
    }
    
    
    
    
    /* getMovies(page: number = this.currentPage) {
        this.movieService.getMovies(page).subscribe((resp) => {
            console.log("This is the value of resp", resp);
            if (resp) {
                this.allMovies = resp.results
                console.log('After calling getmovies:', this.allMovies.length);
                this.currentPage = resp.page
            }
        });
    } */
    
    
    
    
    
    
    
    
    
    /* goToNextPage() {
        this.currentPage++
        this.getMovies(this.currentPage)
    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getMovies(this.currentPage);
        }
    } */

}
