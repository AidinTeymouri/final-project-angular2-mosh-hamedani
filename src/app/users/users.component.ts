import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users;

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

    onEditClick(user) {
        this.router.navigate(['/users', user.id]);
    }

}
