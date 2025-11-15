import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  productlist: product[] = [
    {
      productId: '1',
      productName: "Gold Earrings",
      productDescription: "Alluring Mesh Gold Drop Earrings",
      productPrice: "67979",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw273733f7/images/hi-res/513220DBNABA00_1.jpg?sw=480&sh=480",
      productCategory: "Earrings"
    },
    {
      productId: '2',
      productName: "Gold Earrings",
      productDescription: "Modish 22 Karat Yellow Gold Floral Drop Earrings",
      productPrice: "48279",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw485b984a/images/hi-res/511018DIFAGA00_1.jpg?sw=640&sh=640",
      productCategory: "Earrings"
    },
    {
      productId: '3',
      productName: "Gold Earrings",
      productDescription: "Timeless Radiance Stud Earrings",
      productPrice: "22429",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf98b929d/images/hi-res/51K3I2SDJAGA00_1.jpg?sw=640&sh=640",
      productCategory: "Earrings"
    },
    {
      productId: '4',
      productName: "Gold Earrings",
      productDescription: "Dolphin Delight Gold Stud Earrings for Kids",
      productPrice: "25193",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9a02d0c6/images/hi-res/51T051SLXAJA00_1.jpg?sw=640&sh=640",
      productCategory: "Earrings"
    },
    {
      productId: '5',
      productName: "Gold Earrings",
      productDescription: "Radiant Cage Gold Jhumka Earrings",
      productPrice: "93281",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2e138b7e/images/hi-res/51M5V2JJBAGA00_1.jpg?sw=480&sh=480",
      productCategory: "Earrings"
    },
    {
      productId: '6',
      productName: "Gold Earrings",
      productDescription: "Spiral Cascade Gold Drop Earrings",
      productPrice: "111035",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw43faf3ac/images/hi-res/51D5D1DDDABA00_1.jpg?sw=640&sh=640",
      productCategory: "Earrings"
    },
    {
      productId: "7",
      productName: "Diamond Earrings",
      productDescription: "Spectacular Floral Diamond stud earrings",
      productPrice: "48149",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3dfbccf9/images/hi-res/501002SFSAAA09_2.jpg?sw=480&sh=480",
      productCategory: "Earrings"
    },
    {
      productId: "8",
      productName: "Diamond Earrings",
      productDescription: "Artline Bloom Diamond Drop Earrings",
      productPrice: "47888",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d0afb85/images/hi-res/50D2PTDTPAGA02_2.jpg?sw=480&sh=480",
      productCategory: "Earrings"
    },

    {
      productId: "9",
      productName: "Diamond Earrings",
      productDescription: "Gleam Frame Diamond Drop Earrings",
      productPrice: "49154",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbac33077/images/hi-res/50D3DTDGPAAA09_1.jpg?sw=640&sh=640",
      productCategory: "Earrings"
    },
    {
      productId: "10",
      productName: "Diamond Earrings",
      productDescription: "Pearl Drop Diamond Jhumka Earrings for Kids",
      productPrice: "55831",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw60ff4859/images/hi-res/50K4I2JANAGA32_1.jpg?sw=480&sh=480"
,
      productCategory: "Earrings",
    },
    {
      productId: "11",
      productName: "Diamond Earrings",
      productDescription: "Twisted Radiance Diamond Drop Earrings",
      productPrice: "52782",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb6bb3660/images/hi-res/50D5H1DAJADA02_1.jpg?sw=640&sh=640"
,
      productCategory: "Earrings",
    },
    {
      productId: "12",
      productName: "Diamond Earrings",
      productDescription: "Pure Wonder Diamond Stud Earrings",
      productPrice: "68125",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca8b7694/images/hi-res/50D2P2SZIABA32_1.jpg?sw=640&sh=640"
,
      productCategory: "Earrings",
    },
    {
      productId: "13",
      productName: "Diamond Earrings",
      productDescription: "Stellar Hexa Diamond Drop Earrings",
      productPrice: "92104",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbb13bb6d/images/hi-res/50D5H2DSNADA02_1.jpg?sw=640&sh=640"
,
      productCategory: "Earrings",
    },
    {
      productId: "14",
      productName: "Diamond Earrings",
      productDescription: "Sparkling Path Diamond Hoop Earrings",
      productPrice: "61085",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbbb98793/images/hi-res/50D5H2HDOAAA02_1.jpg?sw=640&sh=640"
,
      productCategory: "Earrings",
    },
    {
      productId: "15",
      productName: "Diamond Earrings",
      productDescription: "Wave Crest Diamond Hoop Earrings",
      productPrice: "83367",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd6291bf/images/hi-res/50D5H2HQKAAA02_1.jpg?sw=640&sh=640"
,
      productCategory: "Earrings",
    },



    {

      productId: "16",
      productName: "Diamond Earrings",
      productDescription: "Romantic Diamond Necklace Set",
      productPrice: "193948",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe3f18489/images/hi-res/50D3B22ILABA02_2.jpg?sw=480&sh=480"
,
      productCategory: "Earrings",

    },
    {
      productId: "17",
      productName: "Diamond Ring",
      productDescription: "Sculpted Grace Diamond Finger Ring",
      productPrice: "37953",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw185b3ee9/images/hi-res/50D4I1FFWAA09_2.jpg?sw=480&sh=480",
      productCategory: "Rings",
    },
    {
      productId: "18",
      productName: "Diamond Ring",
      productDescription: "Ripple Line Gold Ring",
      productPrice: "44348",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw85340ea6/images/hi-res/51M5I1FEXAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    },
    {
      productId: "19",
      productName: "Diamond Ring",
      productDescription: "Dazzling Halo Diamond Finger Ring",
      productPrice: "51019",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0d15c996/images/hi-res/50D4I1FNLAA09_2.jpg?sw=640&sh=640"
,
      productCategory: "Rings",
    },
    {
      productId: "20",
      productName: "Diamond Ring",
      productDescription: "Timeless Blossom Diamond Finger Ring",
      productPrice: "62507",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw19f15c6b/images/hi-res/50D4B3FOUAA09_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    }, {
      productId: "21",
      productName: "Diamond Ring",
      productDescription: "Glorious 22 Karat Yellow Gold Floral Ring",
      productPrice: "29422",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw908fe0fa/images/hi-res/511920FCMAA00.jpg?sw=480&sh=480"
,
      productCategory: "Rings",

    },
    {
      productId: "22",
      productName: "Diamond Ring",
      productDescription: "Artline Radiance Diamond Ring",
      productPrice: "50588",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw441ccd0a/images/hi-res/50D5B3FDKAA02_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    }, {
      productId: "23",
      productName: "Diamond Ring",
      productDescription: "Sleek Rectangular Gold Ring",
      productPrice: "65113",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf5fd11dd/images/hi-res/51F5C1FCJAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    },
    {
      productId: "24",
      productName: "Diamond Ring",
      productDescription: "Grid Navaratna Diamond Ring For Men",
      productPrice: "118881",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw94ae6487/images/hi-res/51F5H2FBBAA32_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    },
     {
      productId: "25",
      productName: "Diamond Ring",
      productDescription: "Shri Ganesh Diamond Ring For Men",
      productPrice: "94349",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b6db3ef/images/hi-res/50F5GCFBOAA02_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    }, 
    {
      productId: "26",
      productName: "Diamond Ring",
      productDescription: "Sway Line Diamond Ring",
      productPrice: "34176",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw185b3ee9/images/hi-res/50D4I1FFWAA09_2.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    },
    {
      productId: "27",
      productName: "Diamond Ring",
      productDescription: "Ripple Line Gold Ring",
      productPrice: "44348",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw85340ea6/images/hi-res/51M5I1FEXAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Rings",
    },
     {
      productId: "28",
      productName: "Diamond Ring",
      productDescription: "Dazzling Halo Diamond Finger Ring",
      productPrice: "51019",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0d15c996/images/hi-res/50D4I1FNLAA09_2.jpg?sw=640&sh=640"
,
      productCategory: "Rings",
    },
    {
      productId: "29",
      productName: "Diamond Necklace ",
      productDescription: "Poppy Pink Diamond Necklace Set",
      productPrice: "158211",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6f037f6b/images/hi-res/50D5FF2AIEBA32_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
     {
      productId: "30",
      productName: "Diamond Necklace",
      productDescription: "Regal Bloom Diamond Necklace Set",
      productPrice: "307451",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1e4a962e/images/hi-res/50O5B12XPDBA09_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
      productId: "31",
      productName: "Diamond Necklace",
      productDescription: "Gleaming Grandeur Diamond Necklace set",
      productPrice: "278636",
      productImage: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf5d959e6/images/hi-res/50O5B12XLDGA09_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
       productId:"32",
      productName:"Diamond Necklace",
      productDescription:"Ethereal Rose Gold And Diamond Teardrop Necklace Set",
      productPrice:"458283",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0f011b13/images/hi-res/5040022RSABA02_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
       productId:"33",
      productName:"Diamond Necklace",
      productDescription:"Shimmering Minimal Diamond Necklace Set",
      productPrice:"248659",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5cd2991b/images/hi-res/50D4B32NWABA02_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
       productId:"34",
      productName:"Diamond Necklace",
      productDescription:"Radiant Bloom Diamond Necklace Set",
      productPrice:"755412",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw00d8a372/images/hi-res/50O5M22JEDBA09_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
       productId:"35",
      productName:"Diamond Necklace",
      productDescription:"Chiselled Elegance Diamond Necklace Set",
      productPrice:"948416",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca551f94/images/hi-res/50O5SW2ATDBB02_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
      productId:"36",
      productName:"Diamond Necklace",
      productDescription:"Imperial Blossom Diamond Necklace Set",
      productPrice:"2626693",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc0584da/images/hi-res/50W4M12BJCBA02_1.jpg?sw=480&sh=480"
,
      productCategory: "Necklaces",
    },
    {
      productId:"37",
      productName:"Gold Chain",
      productDescription:"Charming Gold Chain",
      productPrice:"145971",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw86fd0182/images/hi-res/512414CICAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"38",
      productName:"Gold Chain",
      productDescription:"Breeze Leaf Gold Chain",
      productPrice:"108036",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb6e5277/images/hi-res/51D5B1CCFAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"39",
      productName:"Gold Chain",
      productDescription:"Twinkle Dot Gold Chain",
      productPrice:"73389",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb7855c6b/images/hi-res/51M5B1CBDLA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    
    },
    {
       productId:"40",
      productName:"Gold Chain",
      productDescription:"Sophisticated Rava Ball Chain",
      productPrice:"72440",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwab0e2c76/images/hi-res/511920CMXAA00_1.jpg?sw=640&sh=640"
,
      productCategory: "Chains",
    },
    {
       productId:"41",
      productName:"Gold Chain",
      productDescription:"Layered Bead Gold Chain",
      productPrice:"181263",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5c309aa7/images/hi-res/51M5B1CIHAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"42",
      productName:"Gold Chain",
      productDescription:"Delicate Twisted Chain",
      productPrice:"126351",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc765c9a/images/hi-res/51D3A1CDKLA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"43",
      productName:"Gold Chain",
      productDescription:"Shining Hanging Bead Gold Chain",
      productPrice:"166204",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc76431de/images/hi-res/51D2A3CJKAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"44",
      productName:"Gold Chain",
      productDescription:"Broad Beaded Chain",
      productPrice:"140944",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwecce155a/images/hi-res/51D2A2CKCAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Chains",
    },
    {
       productId:"45",
      productName:"Diamond Bangles",
      productDescription:"Petal Arc Diamond Bangle",
      productPrice:"75030",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5b8d3320/images/hi-res/504015VMY1A09_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
       productId:"56",
      productName:"Diamond Bangles",
      productDescription:"Gleaming Rhythm Diamond Bangle",
      productPrice:"111642",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw18fb3f54/images/hi-res/50D5B2VIW1A02_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
       productId:"47",
      productName:"Diamond Bangles",
      productDescription:"Rosy Gleam Diamond Bangle",
      productPrice:"97492",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbef01776/images/hi-res/50D5B2VJA1A32_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
       productId:"48",
      productName:"Diamond Bangles",
      productDescription:"Luster of Legacy Diamond Bangle",
      productPrice:"294982",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7d800fc7/images/hi-res/50O5RVVDQ1A32_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
       productId:"49",
      productName:"Gold Mangalsutra",
      productDescription:"Floral Vati Mangalsutra",
      productPrice:"231714",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4ca8db06/images/hi-res/511720YXUAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Mangalsutra",
    },
    {
       productId:"50",
      productName:"Gold Mangalsutra",
      productDescription:"Everlasting Harmony Solitaire Mangalsutra",
      productPrice:"251399",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcf154ff4/images/hi-res/50S1I2YAKAP98_1.jpg?sw=480&sh=480"
,
      productCategory: "Mangalsutra",
    },
    {
       productId:"51",
      productName:"Gold Mangalsutra",
      productDescription:"Infinity Floral Diamond Mangalsutra",
      productPrice:"259999",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcda98055/images/hi-res/502999YCNAA32_1.jpg?sw=480&sh=480"
,
      productCategory: "Mangalsutra",
    },
    {
       productId:"52",
      productName:"Gold Mangalsutra",
      productDescription:"Stylish Knot Mangalsutra",
      productPrice:"226759",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc60b2685/images/hi-res/511517YIAAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Mangalsutra",

    },
    {
       productId:"53",
      productName:"Rivaah",
      productDescription:"Floral Enchantment Peacock Haram",
      productPrice:"861881",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw62d9ce7f/images/hi-res/51W3PTETW1AAP1_1.jpg?sw=480&sh=480"
,
      productCategory: "Rivaah",
    },
    {
       productId:"54",
      productName:"Rivaah",
      productDescription:"Enchanting Kemp Set Gold Necklace",
      productPrice:"583990",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3a79bec/images/hi-res/51W1D1NFVAAP1_1.jpg?sw=480&sh=480"
,
      productCategory: "Rivaah",
    },
    {
       productId:"55",
      productName:"Rivaah",
      productDescription:"Opulently Classic Necklace Set with Kundan Inlay Work",
      productPrice:"1462935",
      productImage:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw654229a7/images/hi-res/51O3DH2AS1BAP3_1.jpg"
,
      productCategory: "Rivaah",
    },
    {
       productId:"56",
      productName:"Rivaah",
      productDescription:"Regal Grandeur Choker Set",
      productPrice:"870883",
      productImage:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f55567f/images/hi-res/5150752BV1BAP5_1.jpg"
,
      productCategory: "Rivaah",
    },
    {
       productId:"57",
      productName:"Gold Bangle",
      productDescription:"Regal Gold Kada",
      productPrice:"1035526",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw36f6b7a9/images/hi-res/513719VBW2AP3_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
       productId:"2",
      productName:"Gold Bangle",
      productDescription:"Bengal Tiger Solid Bala Gold Bangles",
      productPrice:"1043802",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc60b2cc8/images/hi-res/51W5REVBB2A00_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },
    {
      productId:"3",
      productName:"Gold Bangle",
      productDescription:"Ethnic Charm Bangles",
      productPrice:"380658",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweb74db1d/images/hi-res/51D3C3VOP2A00_1.jpg?sw=480&sh=480"
,
      productCategory: "Bangles",
    },{
       productId:"4",
      productName:"Gold Bangle",
      productDescription:"Resplendent Leaf Bangle",
      productPrice:"140868",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa2638447/images/hi-res/51D3B2VBD1ACZ_1.jpg?sw=640&sh=640"
,
      productCategory: "Bangles",
    },
    {
       productId:"1",
      productName:"Silver Idols",
      productDescription:"Divine Lakshmi Silver Idol",
      productPrice:"5717",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1504e3b3/images/hi-res/ASR5P1IAHAAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Silver Idols",
    },
    {
       productId:"2",
      productName:"Silver Idols",
      productDescription:"Shri Ganesh Silver Idol",
      productPrice:"9829",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0142d35e/images/hi-res/A1R5P1IADAAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Silver Idols",
    },
    {
       productId:"3",
      productName:"Silver Idols",
      productDescription:"Sacred Ganesha and Lakshmi Silver Idol",
      productPrice:"15725",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe9554dc0/images/hi-res/A1R5P1IAJAAB00_1.jpg?sw=480&sh=480"
,
      productCategory: "Silver Idols",
    },
    {
       productId:"4",
      productName:"Silver Idols",
      productDescription:"Mahalakshmi Splendour Silver Idol",
      productPrice:"15894",
      productImage:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea5c7f4c/images/hi-res/A1R5P1IAEAAA00_1.jpg?sw=480&sh=480"
,
      productCategory: "Silver Idols",
    }
  ];












  getjewellery() {
    return of(this.productlist);
  }

  getjewelleryById(pid:any) {
    return this.productlist.find(i => i.productId == pid);
  }


  addjewellery(jewellery:any) {
    this.productlist.push(jewellery);
    return "product added successfully"
  }

  deletejewellery(pid: any) {
    const index = this.productlist.findIndex(i => i.productId == pid);
    if (index == -1) {
      return "product not found"
    }
    else {
      this.productlist.splice(index, 1);
      return "product delete"
    }

  }
  updatejewellery(updated: any) {
    const index = this.productlist.findIndex(i => i.productId = updated.productId);
    this.productlist.splice(index, 1, updated);
    return "product updated!..."
  }

}