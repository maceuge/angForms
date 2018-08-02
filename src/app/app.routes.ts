import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroslistComponent } from './components/heroslist/heroslist.component';

const routes: Routes = [
    { path: 'template', component: TemplateFormComponent },
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'users', component: UserListComponent},
    { path: 'hero', component: HeroComponent},
    { path: 'herolist', component: HeroslistComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'template' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
