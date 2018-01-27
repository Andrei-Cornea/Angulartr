import { Component, Input } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'movie-list',
    template: `
        <div>
            <movie-component
                *ngFor="let movie of movies; let index=index"
                [index] = "index"
                [movie] = "movie"
                [(rating)] ="movie.rating"
                (likeMovie)="likeMovie($event)"
                (saveComment)="saveComment($event)"
                (clearComment)="clearComment($event)"
                (movieComponentChanged)="updateMovies($event)"
            ></movie-component>
        </div>
    `
})
export class MovieListComponent {
    @Input() rate: number;

    movies = [
        {
          title: 'Star Wars: The Last Jedi',
          rating: 4,
          year: 2017,
          duration: '152 min',
          genre: 'Action, Adventure, Fantasy',
          plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
          isLiked: false,
          commentSaved: false,
          comment: ''
        },
        {
          title: 'Black Swan',
          rating: 0,
          year: 2010,
          duration: '108 min',
          genre: 'Drama, Thriller',
          plot: 'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg',
          isLiked: false,
          commentSaved: false,
          comment: ''
        },
        {
          title: 'Fight Club',
          rating: 0,
          year: 1999,
          duration: '139 min',
          genre: 'Drama',
          plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          isLiked: false,
          commentSaved: false,
          comment: ''
        },
        {
          title: 'The Godfather: Part II',
          rating: 0,
          year: 1974,
          duration: '202 min',
          genre: 'Crime, Drama',
          plot: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
          isLiked: false,
          commentSaved: false,
          comment: ''
        }
      ];

    saveComment($event) {
        console.log('like clicked', $event);
        const movie = this.movies[$event.index];
        movie.comment = $event.comment;
        movie.commentSaved =  movie.commentSaved ? movie.commentSaved : !movie.commentSaved;
        console.log(movie);
    }

    likeMovie($event) {
        console.log('like clicked', $event);
        const movie = this.movies[$event.index];
        movie.isLiked = !movie.isLiked;
        console.log(movie);
    }

    clearComment($event) {
        const movie = this.movies[$event.index];
        movie.comment = '' ;
        movie.commentSaved = !movie.commentSaved;
        console.log(movie);
    }

    updateMovies($event) {
        console.log(`movie List`, this.movies);
        // this.movies[$event.movieIndex].rating = $event.rating;
        console.log(this.movies[$event.movieIndex]);

    }
}
