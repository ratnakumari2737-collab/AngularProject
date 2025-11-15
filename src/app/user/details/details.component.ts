import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 pid:any;jewellery:any;
  constructor(private bs:ActivatedRoute,private service:ProductService,private cart:CartService,private wish:WishlistService){}
  
  addnow(){
    this.cart.addtoCart(this.jewellery);
    alert("added to cart");
  }
  addtowishlist(){
    this.wish.addtowishlistitems(this.jewellery);
    alert("added to wishlist")
  }
  
  
  ngOnInit(){
    this.pid=this.bs.snapshot.paramMap.get("pid")
    if(this.pid){
      this.jewellery=this.service.getjewelleryById(this.pid);
      console.log(this.jewellery)
    }
  }
}
