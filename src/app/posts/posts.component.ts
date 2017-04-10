import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: string[];
    isLoading = true;
    selectedPost;

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.postsService.getPosts()
            .subscribe(posts => {
                setTimeout(() => {
                    this.isLoading = false;
                    this.posts = posts;
                }, 500);
            });
    }
    
    onSelectPost(post) {
        this.selectedPost = post;
    }

}
