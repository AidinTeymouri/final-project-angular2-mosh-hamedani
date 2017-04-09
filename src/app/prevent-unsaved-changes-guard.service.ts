import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

export interface FormInterface {
    hasUnsavedChanges(): Boolean;
}

@Injectable()
export class PreventUnsavedChangesGuardService implements CanDeactivate<FormInterface> {

    constructor() {
    }
    
    canDeactivate(component: FormInterface) {
        if (component.hasUnsavedChanges()) {
            return confirm('Are you sure?');
        }
        return true;
    }

}
