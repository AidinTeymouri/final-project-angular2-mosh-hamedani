import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {emailValidator} from '../email.validator';
import {FormInterface} from '../prevent-unsaved-changes-guard.service';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, FormInterface {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private usersService: UsersService,
        private router: Router
    ) {
        this.createForm();
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
