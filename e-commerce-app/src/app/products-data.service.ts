import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  products: any[] = [
    {
      productName: 'Floral Print Blouse',
      category: 'Women',
      price: '799.00',
      description: 'A stylish floral print blouse with a relaxed fit and three-quarter sleeves.',
      imageUrl: 'assets/img/Product1.wepb',
    },
    {
      productName: 'Denim Shorts',
      category: 'Women',
      price: '899.00',
      description: 'Classic denim shorts with a distressed finish and frayed hem.',
      imageUrl: 'assets/img/Product2.jpg',
    },
    {
      productName: 'Striped Off-Shoulder Shirt',
      category: 'Women',
      price: '699.00',
      description: 'A trendy off-shoulder shirt with colorful stripes and elasticized neckline.',
      imageUrl: 'assets/img/Product3.jpg',
    },
    {
      productName: 'Pleated Midi Skirt',
      category: 'Women',
      price: '1,299.00',
      description: 'A chic pleated midi skirt in a solid color with a comfortable elastic waistband.',
      imageUrl: 'assets/img/Product4.jpg',
    },
    {
      productName: 'Knit Sweater',
      category: 'Women',
      price: '1,199.00',
      description: 'A cozy knit sweater with a relaxed fit and ribbed cuffs.',
      imageUrl: 'assets/img/Product5.jpg',
    },
    {
      productName: 'Printed Wrap Skirt',
      category: 'Women',
      price: '899.00',
      description: 'A printed wrap skirt with a tie closure and asymmetrical hemline.',
      imageUrl: 'assets/img/Product6.jpg',
    },
    {
      productName: 'Polo Shirt',
      category: 'Men',
      price:  '999.00',
      description: 'A classic short-sleeved polo shirt in a solid color with a button-up collar.',
      imageUrl: 'assets/img/Product7.webp',
    },
    {
      productName: 'Chino Pants',
      category: 'Men',
      price: '1,299.00',
      description: 'Stylish and versatile chino pants with a slim fit and flat-front design.',
      imageUrl: 'assets/img/Product8.jpg',
    },
    {
      productName: 'Graphic T-Shirt',
      category: 'Men',
      price: '599.00',
      description: 'A casual crew-neck t-shirt with a printed graphic design on the front.',
      imageUrl: 'assets/img/Product9.jpg',
    },
    {
      productName: 'Denim Jeans',
      category: 'Men',
      price: '1,499.00',
      description: 'Classic denim jeans with a straight leg and a timeless five-pocket design.',
      imageUrl: 'assets/img/Product10.jpg',
    },
    {
      productName: 'Button-Up Shirt',
      category: 'Men',
      price: '1,199.00',
      description: 'A smart button-up shirt with long sleeves and a modern pattern.',
      imageUrl: 'assets/img/Product11.webp',
    },
    {
      productName: 'Cargo Shorts',
      category: 'Men',
      price: '899.00',
      description: 'Comfortable cargo shorts with multiple pockets and a relaxed fit.',
      imageUrl: 'assets/img/Product12.webp',
    },
    {
      productName: 'Hooded Sweatshirt',
      category: 'Men',
      price: '1,299.00',
      description: 'A cozy hooded sweatshirt with a front kangaroo pocket and ribbed cuffs.',
      imageUrl: 'assets/img/Product13.jpg',
    },
    {
      productName: 'Track Pants',
      category: 'Men',
      price: '999.00',
      description: 'Sporty track pants with an elastic waistband and tapered leg for a comfortable fit.',
      imageUrl: 'assets/img/Product14.jpg',
    },
    {
      productName: 'Cartoon Print T-Shirt (Boys/Girls)',
      category: 'Kids',
      price: '399.00',
      description: 'A comfortable cotton t-shirt with a fun cartoon print.',
      imageUrl: 'assets/img/Product15.jpg',
    },
    {
      productName: 'Denim Shorts (Boys/Girls)',
      category: 'Kids',
      price: '499.00',
      description: 'Classic denim shorts with an elasticized waistband for easy wearing.',
      imageUrl: 'assets/img/Product16.jpg',
    },
    {
      productName: 'Graphic Print Hoodie (Boys/Girls)',
      category: 'Kids',
      price: '699.00',
      description: 'A cozy hoodie with a cool graphic print on the front.',
      imageUrl: 'assets/img/Product17.jpg',
    },
    {
      productName: 'Leggings (Girls)',
      category: 'Kids',
      price: '349.00',
      description: 'Soft and stretchy leggings perfect for everyday wear.',
      imageUrl: 'assets/img/Product18.jpg',
    },
    {
      productName: 'Polo Shirt (Boys/Girls)',
      category: 'Kids',
      price: '599.00',
      description: 'A stylish polo shirt with a button-up collar and short sleeves.',
      imageUrl: 'assets/img/Product19.jpg'
    },
    {
      productName: 'Jogger Pants (Boys/Girls)',
      category: 'Kids',
      price: '599.00',
      description: 'Comfy jogger pants with an elasticized waistband and ribbed cuffs.',
      imageUrl: 'assets/img/Product20.jpg',
    },
    {
      productName: 'Dress: Floral Print Sundress (Girls)',
      category: 'Kids',
      price: '799.00',
      description: 'A beautiful sundress with a vibrant floral print, sleeveless design, and a flowy skirt.',
      imageUrl: 'assets/img/Product21.jpg',
    }
  ];
}
