import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterMovieComponent } from './filter/filter-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'movieList', component: MovieListComponent},
        {path: 'pagination', component: PaginationComponent },
        {path: 'filter', component: FilterMovieComponent }
        
    ,

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

