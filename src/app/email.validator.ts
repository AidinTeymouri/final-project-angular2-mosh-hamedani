import {AbstractControl, ValidatorFn} from '@angular/forms';

export function emailValidator(): ValidatorFn {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (control: AbstractControl): {[key: string]: any} => {
        const email = control.value;
        const yes = reg.test(email);
        return yes ? null : {'wrongEmail': email};
    };
}

