import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlljewelleryComponent } from './alljewellery/alljewellery.component';
import { CategoryComponent } from './alljewellery/category/category.component';
import { PriceComponent } from './alljewellery/price/price.component';
import { OccasionComponent } from './alljewellery/occasion/occasion.component';
import { GenderComponent } from './alljewellery/gender/gender.component';
import { JewellerynavbarComponent } from './jewellerynavbar/jewellerynavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { OrdersComponent } from './user/orders/orders.component';
import { DetailsComponent } from './user/details/details.component';
import { ProductsComponent } from './user/products/products.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CartComponent } from './user/cart/cart.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    LoginpageComponent,
    AlljewelleryComponent,
    CartComponent,
    CategoryComponent,
    PriceComponent,
    OccasionComponent,
    GenderComponent,
    JewellerynavbarComponent,
    UsernavbarComponent,
    OrdersComponent,
    DetailsComponent,
    ProductsComponent,
    HomeComponent,
    AddproductsComponent,
    ViewproductsComponent,
    ManageproductsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
