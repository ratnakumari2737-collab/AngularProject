import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   constructor(private router:Router){}
   goToLogin(){
     this.router.navigate(['/login']);
   }
   




  jewellery:any;
  sada="https://palmonas.com/cdn/shop/files/Festive_B1G1_Web_Banner_2.webp?crop=center&height=794&v=1760185267&width=2000";
  sada1="https://palmonas.com/cdn/shop/files/diwali_web_banner_3.webp?crop=center&height=794&v=1758894543&width=2000";
  sada2="https://palmonas.com/cdn/shop/files/B1G1_red_look_web_ban.jpg?crop=center&height=794&v=1755587291&width=2000";
  sada3="https://palmonas.com/cdn/shop/files/tennis_collection_web_ban_1.webp?crop=center&height=794&v=1755534357&width=2000";
  sada4="https://palmonas.com/cdn/shop/files/9kt_web_ban_5.webp?crop=center&height=794&v=1759490695&width=2000"
}
