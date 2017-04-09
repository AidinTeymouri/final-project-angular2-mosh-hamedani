import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    getUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url)
            .map(users => users.json());
    }

}
