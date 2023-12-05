import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'movie-challengeSci';
  /* movies: Movie[] = [] // Esta propiedad es para almacenar las peliculas
  private subscription: Subscription = new Subscription()

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies()
  }
  getMovies(page: number = 1) {
    this.movieService.getMovies(page).subscribe((resp) => {
      console.log(resp)
    this.movies = resp.results
    }) */

    /* this.subscription = this.movieService.getMovies(page).subscribe({
      next: movies => {
        this.movies = [...this.movies, ...movies.results]
        console.log(movies)
        if(page < movies.total_pages){
          this.getMovies(page + 1) // Realizar la solicitud recursivamente
        }
      },
      error: (error) => {
        console.error(error)
      }
  }) */
}
  /* ngOnDestroy() {
    this.subscription.unsubscribe();
  }
} */


