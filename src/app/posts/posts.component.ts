import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: string[];
    users = [];
    isLoading;
    selectedPost;

    constructor(private postsService: PostsService,
                private usersService: UsersService) {
    }
    
    ngOnInit() {
        this.loadPosts();
        this.loadUsers();
    }
    
    loadPosts(userId?) {
        this.isLoading = true;
        this.postsService.getPosts(userId)
            .subscribe(posts => {
                setTimeout(() => {
                    this.isLoading = false;
                    this.posts = posts;
                }, 500);
            });
    }
    
    loadUsers() {
        this.usersService.getUsers()
            .subscribe(users => this.users = users);
    }
    
    onSelectPost(post) {
        this.selectedPost = post;
    }
    
    onUserChange(event) {
        this.selectedPost = null;
        const id = Number(event.target.value);
        
        if (id === 0) {
            this.loadPosts();
            return;
        }
        this.loadPosts(id);
    }

}
