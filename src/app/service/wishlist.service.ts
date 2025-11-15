import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
   wishlistitems:product[]=[];
  
    addtowishlistitems(productobj:any){
      this.wishlistitems.push(productobj);
    }
    getwishlistitems(){
      return this.wishlistitems;
    }
    getwishlistlength(){
      return this.wishlistitems.length;
    }
    removefromwishlist(index:any){
      this.wishlistitems.splice(index,1)
    }
  
  
}
