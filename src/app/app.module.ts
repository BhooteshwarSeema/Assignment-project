import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    UserComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
