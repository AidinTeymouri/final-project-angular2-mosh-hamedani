import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts = [];
    postsCount: number;
    pagedPosts = [];
    users = [];
    isLoading;
    selectedPost;
    pageSize = 10;

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
                    this.pagedPosts = this.getPostsInPage(1);
                    this.postsCount = posts.length;
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
    
    onPageChanged(page) {
        this.pagedPosts = this.getPostsInPage(page);
    }
    
    getPostsInPage(page) {
        const startIndex = (page - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, this.posts.length);
        
        return this.posts.slice(startIndex, endIndex);
    }

}
