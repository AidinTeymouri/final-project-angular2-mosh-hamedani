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
        return this.http.get(`${this.url}/${id}`)
            .map(data => data.json());
    }
    
    updateUser(user, id) {
        return this.http.put(`${this.url}/${id}`, user)
            .map(data => data.json());
    }
    
    deleteUser(id) {
        return this.http.delete(`${this.url}/${id}`)
            .map(data => data.json());
    }

}
