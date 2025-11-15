import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';


import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { ProductsComponent } from './user/products/products.component';
import { OrdersComponent } from './user/orders/orders.component';
import { DetailsComponent } from './user/details/details.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CartComponent } from './user/cart/cart.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'login', component:LoginpageComponent },
   {path:'user',component:UsernavbarComponent,
    children:[
      {path:'products',component:ProductsComponent},
      {path:'cart',component:CartComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'orders',component:OrdersComponent},
      {path:'details/:pid',component:DetailsComponent}
    
    
    ]
  },
  {
    path: 'admin', component: AdminnavbarComponent,
    children: [
      {path:'add',component:AddproductsComponent},
      {path:'view',component:ViewproductsComponent},
      {path:'manage',component:ManageproductsComponent}






      //  { path: '', component: JewellerynavbarComponent },
      // {
      //   path: 'all', component: AlljewelleryComponent,
      //   children: [
      //     { path: 'category', component: CategoryComponent },
      //     { path: 'price', component: PriceComponent },
      //     { path: 'occasion', component: OccasionComponent },
      //     { path: 'gender', component: GenderComponent }
      //   ]
      // },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
