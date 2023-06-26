import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ProductComponent } from './product/product.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInOutComponent } from './sign-in-out/sign-in-out.component';
import { CartComponent } from './cart/cart.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { OriginComponent } from './about-us/origin/origin.component';
import { DescriptionComponent } from './about-us/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignInOutComponent,
    CartComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    OriginComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
