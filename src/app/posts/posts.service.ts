import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostsService {

    url = '';

    constructor(private http: Http) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPosts(userId?) {
        if (userId) {
            return this.http.get(`${this.url}?userId=${userId}`)
                .map(posts => posts.json());
        }
        return this.http.get(this.url)
            .map(posts => posts.json());
    }
    
}
