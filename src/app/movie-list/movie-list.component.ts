import { Component, OnInit } from "@angular/core"; // Decorador Component se usa para definir un componente 
import { MovieService } from "../services/movie.service";
import { Movie } from "../movie.interface";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
// Class = clase de componente. Dentro de esta clase, se definen métodos y propiedades relacionados con el componente.
export class MovieListComponent implements OnInit {
    // inicialización de las variables
   
    currentPage = 1
    itemsPerPage = 20;
    movies: Movie[] = []

     // El constructor se usa para inyectar una instancia del servicio. 
    constructor(private movieService: MovieService) { } // La inyección de dependecias es una tecnica de Angular donde las dependecias se pasan como argumentos al constructor

    ngOnInit() {
        console.log('Initializing MovieListComponent');
        this.getMovies() // this. se usa para hacer referencia a la instancia actual del objeto o clase.
        // Me suscribo a los eventos del paginador
        this.movieService.nextPage.subscribe(() => {
            console.log('Next page event received');
           this.goToNextPage()
           
        })
        this.movieService.previousPage.subscribe(() => {
            console.log('Previous page event received');
            this.goToPreviousPage()
        })
    }
    getMovies(){
       // const currentPage = this.movieService.currentPage
        // Llamo al servicio para obtener las peliculas de la pagina actual
        this.movieService.getMovies(this.currentPage).subscribe((resp) =>{
            console.log("Pelis", resp)
            if(resp){
                this.movies = resp.results
                this.movieService.totalPages = Math.ceil(resp.results.length / this.movieService.itemsPerPage)
                console.log("Todas las pelis", this.movies)
            }
        })
    }
    // Eventos del paginador
    goToNextPage(){
        console.log('Going to next page');
        this.currentPage++
        this.getMovies()
    }
    goToPreviousPage(){
        console.log('Going to previous page');
        if(this.currentPage > 1){
            this.currentPage--
            this.getMovies()
        }
    }

}
