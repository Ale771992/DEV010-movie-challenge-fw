import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
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
        this.getMovies(this.currentPage)
    }
    getMovies(page: number = this.currentPage) {
        this.movieService.getMovies(page).subscribe((resp) => {
            if (resp) {
                // this.totalPages = Math.ceil(resp.results.length / this.itemsPerPage)
            }
        })
    }
    goToNextPage() {
        console.log(this.currentPage);

        const totalPages = Math.ceil(this.allMovies.length / this.itemsPerPage);

        if (this.currentPage < totalPages) {
            this.getMovies(this.currentPage)
        } else {
            this.currentPage++;
            this.getMovies(this.currentPage)
        }
        this.nextPage.emit(this.currentPage)

    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getMovies(this.currentPage)
        }
        this.previousPage.emit(this.currentPage)

    }
}
