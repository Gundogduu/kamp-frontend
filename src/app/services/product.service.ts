import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44314/api/";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
//17.ders
// @Injectable: eğer böyle bir şey görürseniz bu bir enjekte edilecek servis.
//Angular'da siz bu productServis'ide enjekte etmek için aynen httpclient'ı nasıl enjekte ettiyseniz
//bunuda o kadar basit bir şekilde enjekte ediyorsunuz.
//bir component HttpClient'ı kullanmaz!
// return this.httpClient.get<ProductResponseModel>(this.apiUrl); bu bir observable, o yüzden dönüş tipini observable verdik.
// Observable<ProductResponseModel> => subscribe olunabilir bir response model döneceksin demek!

//Bir service'den api isteği yapmak için yapmanız gereken çalışma bu!
//bu ne yapıyor? çok basit bir serviste bir apiUrl var,httpcliet'ı enjecte ettim ve bir metod vasıtasıyla bunu döndürdüm.

//18.ders Listresponsemodel refactorin yaptık.
//----Not
// apiUrl = "https://localhost:44314/api/products/getall" yerine  apiUrl = "https://localhost:44314/api/"; yaparak sadece sabit adresi yazdık.
//çünkü biz başka sorgularda yazmamız gerekiyor.Örneğin categoryId için.
//bunu daha sonra Environment diye bir yapıya taşıyacağız.

//----Bilgi
//bir fonksiyon içinde değişken tanımlamak istiyorsanız "let" keyword'ünden yararlanıyoruz.
//let, değişkenlerin yaşam döndüsünü bizim javadaki c# daki gibi kullanabilmemizi sağlıyor.
//aksi durumda değişkenler karma karışık bir yapı haline geliyor.

//(newPath) => fonksiyonun içindeki değişkeni direkt kullanabiliyorsunuz.


