import { Component, OnInit, EventEmitter, Output } from "@angular/core"; //Output
import { MovieService } from "../services/movie.service";
import { Movie } from "../movie.interface";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

    @Output() nextPage = new EventEmitter<number>()
    @Output() previousPage = new EventEmitter<number>()


    currentPage = 1;
    itemsPerPage = 20;
    allMovies: Movie[] = []
    totalPages = 42002

    constructor(private movieService: MovieService) { }
    ngOnInit() {
        console.log('Initializing PaginationComponent');
        this.getMovies(this.currentPage)
        this.goToNextPage()
        this.goToPreviousPage()
    }
    getMovies(page: number) {
        // Llamas al servicio para obtener las pelis de la pagina actual
        this.movieService.getMovies(page).subscribe((resp) => {
            if (resp) {
                // this.totalPages = resp.totalPages
                this.movieService.totalPages = Math.ceil(resp.results.length / this.movieService.itemsPerPage)
            }
        })
    }
    goToNextPage() {
        const totalPages = this.movieService.totalPages

        if (this.currentPage < totalPages) {
            this.currentPage++
            // this.getMovies(this.currentPage)
        }  else {
             // this.currentPage++;
            // this.getMovies(this.currentPage)
        }
        this.movieService.nextPage.emit(this.currentPage)
        // this.getMovies(this.currentPage)
    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        this.movieService.previousPage.emit(this.currentPage)

    }
}
