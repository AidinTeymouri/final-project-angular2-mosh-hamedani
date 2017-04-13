import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CommentsService {
    
    jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private http: Http) {
    }
    
    getComments(id) {
        return this.http.get(`${this.jsonPlaceholderUrl}${id}/comments`)
            .map(data => data.json());
    }
}
