import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {

  
  jewellery: any;
  constructor(private service:ProductService) { }

  result: any;
  deleteit(pid: any) {
    this.result = this.service.deletejewellery(pid);
    alert(this.result);

  }
   ngOnInit() {
    this.service.getjewellery().subscribe((data) => {
      this.jewellery = data;
      console.log(this.jewellery)
    })
  }
  updated = {
    productId:'',
    productName: '',
    productDescription:'',
    productPrice:'',
    productImage:'' 
  }
  updatenow(product: any) {
    console.log(product)
    this.updated={
      ...product
    }
  }
  
  submitproduct(){
  this.result=this.service.updatejewellery(this.updated);
  alert(this.result);
}


}


