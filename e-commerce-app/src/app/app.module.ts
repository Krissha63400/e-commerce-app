import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
=======
import { HomeComponent } from './home/home.component';
>>>>>>> member
=======
import { ProductComponent } from './product/product.component';
>>>>>>> f69d3bc979e46c64c1b677716445885d578bc09c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    HeaderComponent
=======
    HomeComponent
>>>>>>> member
=======
    HeaderComponent,
    ProductComponent
>>>>>>> f69d3bc979e46c64c1b677716445885d578bc09c
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
