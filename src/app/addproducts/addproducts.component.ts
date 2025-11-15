import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
   productForm: FormGroup = new FormGroup("");
  constructor(private fb: FormBuilder,private service:ProductService) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
    })
  }
  result:any;
  addnow(){
   this.result= this.service.addjewellery(this.productForm.value)
   alert(this.result)
   this.productForm.reset();
  }
  jewellery:any;
  photo="https://manubhai.in/SocialMedia/post_artworks/DBBE01435.jpg"
  photo1="https://cdn.orra.co.in/media/catalog/product/cache/10238651d5f95594b9023f998383bb67/2/0/2024-10-23_15-14-08_c_s2_.jpg"

}
