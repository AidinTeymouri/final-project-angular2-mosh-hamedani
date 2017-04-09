import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    
    url = '';

    constructor(private http: Http) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }

    getUsers() {
        return this.http.get(this.url)
            .map(users => users.json());
    }
    
    saveUser(user) {
        return this.http.post(this.url, user)
            .map(data => data.json());
    }
    
    getUser(id) {
        console.log('...... id ....', id);
        return this.http.get(`${this.url}/${id}`)
            .map(data => data.json());
    }

}
