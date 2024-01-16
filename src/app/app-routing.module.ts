import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterMovieComponent } from './filter/filter-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
        {path: 'movieList', component: MovieListComponent},
        {path: 'pagination', component: PaginationComponent },
        ]
    },
    { path: 'filter', component: FilterMovieComponent }

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

