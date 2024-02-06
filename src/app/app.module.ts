// MODULO RAIZ DE LA APLICACIÓN
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Se usa para configurar y definir un modulo en Angular 
import { BrowserModule } from '@angular/platform-browser'; // Proporciona funcionalidades para que una aplicación Angular se ejecute en un navegador web
import { HttpClientModule } from '@angular/common/http'; // Proporciona funcionalidades para realizar solicitudes HTTP 
import { CommonModule } from '@angular/common'; // Con este puedes acceder a NgFor, NgIf
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { GenreService } from './services/genre.service';
import { FilterMovieComponent } from './filter/filter-movie.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({ //La "Ng" representa "Angular"
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [ // Define los componentes que pertenecen a este modulo. 
        AppComponent,
        HomeComponent,
        FilterMovieComponent,
        PaginationComponent,
        MovieListComponent,
        HeaderComponent,
        
    ],

    imports: [ // Otros modulos que este modulo necesita para funcionar
        BrowserModule,
        HttpClientModule,
        CommonModule,
        AppRoutingModule
        
    ],
    providers: [MovieService, GenreService], // Servicios que pertenecen a este modulo
    bootstrap: [AppComponent]
})
export class AppModule{}