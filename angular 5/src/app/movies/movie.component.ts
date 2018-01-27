import { Component, Input, Output, EventEmitter} from '@angular/core';
import { log } from 'util';


@Component({
    selector: 'movie-component',
    template: `
    <div class="container movieCard" [ngClass]="Classes(movie?.isLiked)" >
        <div class="row section">
            <div class="col s6">
                <img [src]="movie?.poster">
                <div>
                    <button
                        class="btn"
                        *ngIf="!movie.isLiked"
                        [style.background-color] = "likeButton(movie?.isLiked).color"
                        (click)="onLike()"
                    > {{ likeButton(movie?.isLiked).name }} </button>
                    <rating-component
                        *ngIf="movie.isLiked"
                        (ratingChanged)="onRatingChanged($event)"
                        [rating]="movieRating"
                    ></rating-component>
                </div>
            </div>
            <div class="col s6">
                <h1>{{movie?.title}}</h1>
                <p> ({{movie?.year}}) </p>
                <p> {{movie?.duration}} | {{movie?.genre}} </p>
                <div class="divider"></div>
                <p> {{movie?.plot}}</p>
                <div>
                    <p>
                        <b>Comments:</b>
                    </p>
                    <p class="showComment"  >
                        {{movie.comment}}
                    </p>
                    <br>
                    <div class="addComment"  >
                        <textarea  cols="30" rows="10" [(ngModel)]="comment"></textarea>
                        <div> {{getWords(comment)}} words </div>
                        <br />
                        <button class="btn" (click)="onSave(index)" [disabled]="!comment">Save</button>
                        <button class="btn" (click)="onClear(index)" [disabled]="!movie.commentSaved">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./movie.component.css'],

})
export class MovieComponent {
    comment: string;
    movieRating: number;
    @Input() movie: object;
    @Input() index: number;
    // my implementation
    // @Input() rating: number;
     get rating() {
        return this.movieRating;
    }
    @Input() set rating(val) {
        console.log("value", this.movie);
        this.movieRating = val;
    }

    @Output() likeMovie = new EventEmitter();
    @Output() saveComment = new EventEmitter();
    @Output() clearComment = new EventEmitter();
    @Output() movieComponentChanged = new EventEmitter();

    likeButton = (isLiked) => ({
        color: isLiked ? '' : 'blue',
        name : isLiked ? 'Liked' : ' Like'
    })

    Classes = (isLiked) => ({ border : isLiked });

    getWords = (comment) => comment ? comment.trim().split(' ').length : 0 ;

    onLike() {
        this.likeMovie.emit({index: this.index});
    }

    onClear(index) {
        this.clearComment.emit({index: this.index});
        this.comment = '';
    }

    onSave() {
        this.saveComment.emit({ index: this.index, comment: this.comment });
        this.comment = '';
    }

    onRatingChanged($event) {
        this.rating = $event.rating;
        console.log('movie component', this.movie);
        this.movieComponentChanged.emit({
            rating: $event.rating,
            // movieIndex : this.index
        });

    }

}
