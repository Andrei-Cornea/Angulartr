import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie.list.component';
import { RatingComponent } from './rating.component';

@NgModule({
    declarations: [
        MovieComponent,
        MovieListComponent,
        RatingComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        MovieListComponent
    ]
})
export class MoviesModule {}
