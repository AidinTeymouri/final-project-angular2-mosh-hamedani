import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {
    
    @Input() id;
    imgSrc = 'http://lorempixel.com/80/80/people?random=';
    comments = [];
    
    isLoading = true;

    constructor(private commentsService: CommentsService) {
    }
    
    getComments() {
        this.commentsService.getComments(this.id)
            .subscribe(comments => {
                this.comments = comments;
                this.isLoading = false;
            });
    }

    ngOnInit() {
        this.getComments();
    }

    ngOnChanges() {
        this.isLoading = true;
        this.getComments();
    }
    
}
