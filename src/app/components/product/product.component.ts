import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  constructor() { };

  ngOnInit(): void {
  };

}
//ben aşağıdaki şekilde de değerlerimi verebilirim fakat tip güvenli olmaz.
//product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 }
//Kısacası API den gelen örüntüyü yani datayı karşılayacak bir modele ihtiyacımız var.
//hani c# ta entity,dto vardı ya, client tarafındada karşılığını bir Frontend'ci olarak yazacaksınız.
//app/models klasörü oluşturduk. burada bir class oluşturacağız ama class yerine aslında Typescript tarafında bu tip API'den gelen dataları sınırlandırmak için interface'lerden yararlanıyoruz.
//app/models/product.ts oluşturduk.
//products:Product[] --> Interface'i böyle ekliyoruz... Product[] interface array formatında Typescripte.

//DENEME
// product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5,unitsInStock:10 }
// product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5,unitsInStock:20 }
// product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5,unitsInStock:30 }
// product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5,unitsInStock:35 }
// product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5,unitsInStock:25 }

// products:Product[] = [this.product1, this.product2, this.product3, this.product4, this.product5]