import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {emailValidator} from '../email.validator';
import {FormInterface} from '../prevent-unsaved-changes-guard.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, FormInterface {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, emailValidator()]],
            phone: '',
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        });
    }

    ngOnInit() {
    }
    
    hasUnsavedChanges() {
        return this.form.dirty;
    }

}
