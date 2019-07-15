import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaUpdateComponent } from './pizza/pizza-update/pizza-update.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { pizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    pizzaAddComponent,
    PizzaDeleteComponent,
    PizzaUpdateComponent,
    PizzaGetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }