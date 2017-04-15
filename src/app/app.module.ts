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
import {UsersService} from './users/users.service';
import {FormComponent} from './form/form.component';
import {PreventUnsavedChangesGuardService} from './prevent-unsaved-changes-guard.service';
import {PostsService} from './posts/posts.service';
import {SpinnerComponent} from './spinner/spinner.component';
import {CommentsComponent} from './comments/comments.component';
import {CommentsService} from './comments/comments.service';
import {PaginationComponent} from './pagination/pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent,
        FormComponent,
        SpinnerComponent,
        CommentsComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        UsersService,
        PostsService,
        PreventUnsavedChangesGuardService,
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
