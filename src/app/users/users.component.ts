import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
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
    
    onDeleteClick(userToBeDeleted) {
        const confirmation = confirm(`Are you sure you want do delete ${userToBeDeleted.name}?`);
        if (confirmation) {
            this.usersService.deleteUser(userToBeDeleted.id)
                .subscribe(() => {
                    this.users = this.users.filter(user => {
                        return user.id !== userToBeDeleted.id;
                    });
                },
                error => {
                    console.log(error);
                });
        }
    }

}
