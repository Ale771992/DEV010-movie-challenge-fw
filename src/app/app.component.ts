/*Este es el componente que se usa para definir las rutas*/
/*Se encargar de cargar los componentes correspondientes segun la URL actual*/
import { Component, OnInit } from '@angular/core';
import { Movie } from "./movie.interface"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-challengeSci';
  allMovies: Movie[] = []

  ngOnInit(){

  }
}
