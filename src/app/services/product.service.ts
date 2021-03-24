import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44314/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}

// @Injectable: eğer böyle bir şey görürseniz bu bir enjekte edilecek servis.
//Angular'da siz bu productServis'ide enjekte etmek için aynen httpclient'ı nasıl enjekte ettiyseniz
//bunuda o kadar basit bir şekilde enjekte ediyorsunuz.
//bir component HttpClient'ı kullanmaz!
// return this.httpClient.get<ProductResponseModel>(this.apiUrl); bu bir observable, o yüzden dönüş tipini observable verdik.
// Observable<ProductResponseModel> => subscribe olunabilir bir response model döneceksin demek!

//Bir service'den api isteği yapmak için yapmanız gereken çalışma bu!
//bu ne yapıyor? çok basit bir serviste bir apiUrl var,httpcliet'ı enjecte ettim ve bir metod vasıtasıyla bunu döndürdüm.

//18.ders Listresponsemodel refactorin yaptık.
