import { Component } from '@angular/core';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrl: './occasion.component.css'
})
export class OccasionComponent {
  officeware=[
    {
      officewareName:  "Office Ware",
      officewareImage: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dwebf3e1cb/header-mega-menu/banner-images/office-wear.jpg"
    },
    {
     officewareName:"Modern Ware",
     officewareImage:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw14bd6553/header-mega-menu/banner-images/modern-wear.jpg"  
    },
     {
     officewareName:"Casual ware",
     officewareImage:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw3f2a4d2c/header-mega-menu/banner-images/casual-wear.jpg"  
    },
     {
     officewareName:"Traditional ware",
     officewareImage:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw9a08e4ad/header-mega-menu/banner-images/traditional-wear.jpg"  
    },
    {
      officewareName:"",
      officewareImage:""
    }

  ];

}
