// MODULO RAIZ DE LA APLICACIÓN
import { NgModule } from '@angular/core'; // Se usa para configurar y definir un modulo en Angular 
import { BrowserModule } from '@angular/platform-browser'; // Proporciona funcionalidades para que una aplicación Angular se ejecute en un navegador web
import { HttpClientModule } from '@angular/common/http'; // Proporciona funcionalidades para realizar solicitudes HTTP 
import { CommonModule } from '@angular/common'; // Con este puedes acceder a NgFor, NgIf
import { RouterModule } from '@angular/router'; // Proporciona funcionalidades para configurar y definir rutas

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './services/movie.service';

@NgModule({ //La "Ng" representa "Angular"
    declarations: [ // Define los componentes que pertenecen a este modulo. 
        AppComponent, 
        MovieListComponent
    ],
    imports: [ // Otros modulos que este modulo necesita para funcionar
        BrowserModule,
        HttpClientModule,
        CommonModule,
        //Recibe como argumento un array vacio para guardar las rutas 
        RouterModule.forRoot([]) // El metodo .forRoot([]) se utiliza para configurar y definir las rutas 

    ],
    providers: [MovieService], // Servicios que pertenecen a este modulo
    bootstrap: [AppComponent]
})
export class AppModule{}