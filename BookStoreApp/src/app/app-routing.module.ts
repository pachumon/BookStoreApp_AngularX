import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookActionsComponent } from './book-actions/book-actions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bookDetails/:bookId', component: BookDetailsComponent },
  { path: 'bookActions/:bookId', component: BookActionsComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
