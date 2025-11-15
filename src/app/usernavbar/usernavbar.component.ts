import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrl: './usernavbar.component.css'
})
export class UsernavbarComponent {
  user:any; 
  username:any; 
  cartlen:any;
  
  constructor(private router:Router, private cart:CartService) { }
  
  logout() {
    localStorage.removeItem("userloggedin")
    this.router.navigateByUrl("")
  }
  
  ngDoCheck(){
    this.cartlen = this.cart.getCartLength();
  }
  
  ngOnInit() {
    if (localStorage.getItem("userloggedin")) {
      this.user = localStorage.getItem("userloggedin");
      this.user = JSON.parse(this.user)
      this.username = this.user.username;
    }
    else {
      this.router.navigateByUrl("")
    }
  }
}


