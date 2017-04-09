import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UsersComponent} from '../users/users.component';
import {PostsComponent} from '../posts/posts.component';
import {FormComponent} from '../form/form.component';
import {PreventUnsavedChangesGuardService} from '../prevent-unsaved-changes-guard.service';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {
        path: 'users/new',
        component: FormComponent,
        canDeactivate: [PreventUnsavedChangesGuardService]
    },
    {path: 'posts', component: PostsComponent},
    {path: '**', redirectTo: '/home'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
