import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DetailsRowComponent } from './book-details/details-row/details-row.component';
import { BookActionsComponent } from './book-actions/book-actions.component';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { booksReducer } from './state/books.reducer';

export const routerStateConfig = {
  stateKey: 'router' // state-slice name for routing state
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    DetailsRowComponent,
    BookActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreRouterConnectingModule.forRoot(routerStateConfig),
    StoreModule.forRoot({
      router: routerReducer,
      books: booksReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'BookStore app',
      maxAge: 20,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
