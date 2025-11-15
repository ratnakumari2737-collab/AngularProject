import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { product } from '../../service/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private service:WishlistService,private cart:CartService,private route:Router){}
  wishitems:product[]=[];
  ngOnInit(){
    this.wishitems=this.service.getwishlistitems();  
    }
    addnow(pro:any){
      this.cart.addtoCart(pro)
      this.route.navigateByUrl("/user/cart")
    }
    removeItem(index:any){
      this.service.removefromwishlist(index)
      this.wishitems=this.service.getwishlistitems();
    }


}
