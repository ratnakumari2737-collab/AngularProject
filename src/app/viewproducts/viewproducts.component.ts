import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
   jewellery:any;
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getjewellery().subscribe((data)=>{
        this.jewellery=data;
        console.log(this.jewellery)
    })
  }
 
}
