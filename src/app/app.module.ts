import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {AppRoutingModule} from './routing/routing.module';
import {UsersService} from './users.service';
import {FormComponent} from './form/form.component';
import {PreventUnsavedChangesGuardService} from './prevent-unsaved-changes-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [UsersService, PreventUnsavedChangesGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
