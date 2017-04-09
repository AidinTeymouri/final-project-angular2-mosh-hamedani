import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {emailValidator} from '../email.validator';
import {FormInterface} from '../prevent-unsaved-changes-guard.service';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, FormInterface {
    form: FormGroup;
    title;
    user = new User();

    constructor(private fb: FormBuilder,
                private usersService: UsersService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, emailValidator()]],
            phone: '',
            address: this.fb.group({
                street: '',
                suite: '',
                city: '',
                zipcode: ''
            })
        });
    }

    ngOnInit() {
        this.createForm();
        this.route.params.subscribe(params => {
            if (!params['id']) {
                this.title = 'Add user';
                return;
            } else {
                const id = params['id'];
                this.usersService.getUser(id)
                    .subscribe(user => {
                            this.user = user;
                            this.title = 'Edit user';
                        },
                        response => {
                            if (response.status === 404) {
                                this.router.navigate(['/home']);
                            }
                        });
            }
            
        });
    }

    hasUnsavedChanges() {
        return this.form.dirty;
    }

    onSubmit(form) {
        this.usersService.saveUser(form.value)
            .subscribe(data => {
                console.log(data);
                this.form.markAsPristine();
                setTimeout(() => {
                    this.router.navigate(['/users']);
                }, 2000);
            });
    }

}
