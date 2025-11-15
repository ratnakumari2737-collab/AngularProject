import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

 jewellery:any;
 filteredJewellery:any;
 selectedCategory: string = 'All';
 categories = ['All', 'Earrings', 'Rings', 'Necklaces', 'Chains', 'Bangles', 'Mangalsutra', 'Rivaah', 'Silver Idols'];

constructor(private service:ProductService,private router:Router){}

filterByCategory(category: string) {
  this.selectedCategory = category;
  if (category === 'All') {
    this.filteredJewellery = this.jewellery;
  } else {
    this.filteredJewellery = this.jewellery.filter((product: any) => {
      const categoryLower = category.toLowerCase();
      
      // First check if product has productCategory field
      if (product.productCategory) {
        return product.productCategory.toLowerCase() === categoryLower;
      }
      
      // Fallback: Determine category from product name
      const productName = product.productName.toLowerCase();
      
      if (categoryLower === 'earrings' && productName.includes('earring')) return true;
      if (categoryLower === 'rings' && productName.includes('ring')) return true;
      if (categoryLower === 'necklaces' && productName.includes('necklace')) return true;
      if (categoryLower === 'chains' && productName.includes('chain')) return true;
      if (categoryLower === 'bangles' && (productName.includes('bangle') || productName.includes('kada'))) return true;
      if (categoryLower === 'mangalsutra' && productName.includes('mangalsutra')) return true;
      if (categoryLower === 'rivaah' && productName.includes('rivaah')) return true;
      if (categoryLower === 'silver idols' && productName.includes('silver idol')) return true;
      
      return false;
    });
  }
}

opendetails(proid:any){
  this.router.navigateByUrl(`/user/details/${proid}`)
}
ngOnInit(){
  this.service.getjewellery().subscribe((data)=>{
  this.jewellery=data;
  this.filteredJewellery = data;
})
}


}
