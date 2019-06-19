import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DetailsRowComponent } from './book-details/details-row/details-row.component';
import { BookActionsComponent } from './book-actions/book-actions.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BookDetailsComponent, DetailsRowComponent, BookActionsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
