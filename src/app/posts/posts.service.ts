import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostsService {

    url = '';

    constructor(private http: Http) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPosts() {
        return this.http.get(this.url)
            .map(posts => posts.json());
    }

}
