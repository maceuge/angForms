import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app.routes';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroslistComponent } from './components/heroslist/heroslist.component';
import { UserDataService } from './services/user-data.service';
import { HeroService } from './services/hero.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { HeroListPipe } from './pipes/hero-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    UserListComponent,
    HeroComponent,
    HeroslistComponent,
    HeroListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UserDataService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
