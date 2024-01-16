/*Este es el componente que se usa para definir las rutas*/
/*Se encargar de cargar los componentes correspondientes segun la URL actual*/
import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-challengeSci';
}
