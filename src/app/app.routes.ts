import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
    { path: 'template', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'users', component: UserListComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'template' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
