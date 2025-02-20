import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent, 
    ProductComponent 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }