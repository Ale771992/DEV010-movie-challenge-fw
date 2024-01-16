import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import {Movie, Genre} from "../movie.interface"

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
    title = 'movie-challengeSci'
    allMovies: Movie[] = []

    ngOnInit() {
        
    }
}