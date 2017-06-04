import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [ 
        CommonModule, 
        MoviesRoutingModule, 
        MaterialModule 
    ],
    declarations: [ 
        MoviesListComponent, 
        MovieComponent 
    ],
    providers: [ 
        MoviesService 
    ]
})

export class MoviesModule { }