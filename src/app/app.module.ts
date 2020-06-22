import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersListComponent } from './components/beers-list/beers-list.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

@NgModule({
  declarations: [AppComponent, BeersListComponent, BeerDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
