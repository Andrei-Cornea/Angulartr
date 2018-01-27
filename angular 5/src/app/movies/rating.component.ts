import {
    Component,
    Output,
    Input,
    EventEmitter,
    OnInit,
    OnChanges } from '@angular/core';
import { log } from 'util';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
    selector: 'rating-component',
    template: `
        <p style="margin-bottom:5px">User rating:</p>
        <i class="star material-icons"
        *ngFor="let rating of ratings; let i = index"
        [ngClass]="rating ? 'active': '' "
            (click)="ratingChanges(i)"
        >star</i>
    `,
    styles: ['.active{ color:red; } .star{cursor:pointer;}']
})
export class RatingComponent implements OnInit, OnChanges {
    ratings = [false, false, false, false, false];

    @Input() rating: number;
    @Output() ratingChanged = new EventEmitter();

    ngOnChanges(changes) {
        console.log(changes);
        this.updateRating(changes.rating.currentValue - 1);
    }

    ngOnInit() {
        this.updateRating(this.rating - 1);
    }

    updateRating(newRating) {
       this.ratings = this.ratings.map( (rating, i) => (i <= newRating) );
    }

    ratingChanges(index) {
        this.ratingChanged.emit({rating: index + 1});
        // console.log("rating index", index);
    }
}
//    console.log("update rating triggerd", this.ratings);
   //    return this.ratings = this.ratings.map( (rating, i) => (i <= newRating) );

// one way binding implemetation
    // getRatings() {
    //     console.log("rating component", this.rating);
    //     return this.updateRating(this.rating - 1);
    // }