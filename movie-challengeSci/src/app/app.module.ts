import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';

@NgModule({ // Con el decorador y NgModule puedes especificar...
    declarations: [
        AppComponent,// Define los componentes que pertenecen a este modulo. 
        MovieListComponent
    ],
    imports: [ // Otros modulos que este modulo necesita para funcionar
        BrowserModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forRoot([])

    ],
    providers: [MovieService], // Servicios que pertenecen a este modulo
    bootstrap: [AppComponent]
})
export class AppModule{}