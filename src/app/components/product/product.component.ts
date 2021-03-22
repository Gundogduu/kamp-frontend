import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  dataLoaded = false;
  //servisi kullanmak için yapman gereken bu. Angular senin yerine enjekte ediyor.
  constructor(private productodService:ProductService) { };

  ngOnInit(): void {
    this.getProducts();
    //console.log("init çalıştı");
  };

  getProducts(){
    this.productodService.getProducts().subscribe(response=>{
      this.products = response.data; 
      this.dataLoaded = true;
    })
  }

}

//CODE REFACTORING YAPILDI! service'e taşındı...
//eğer yazdığınız service ile ilgili component bazlı uygulamalar varsa
//subscribe'ı componente geçirirz.Ama yoksa subscribe'ı direkt service'de yazıp hiç observable ile uğraşmadan burayada geçiş yapabilirsin.
//ama genellikle bu tip çalışmalar olduğu için buraya aktarırız.


//api'den gelen datayı karşılamaya çalışacağız.
//onInit'i implement ettiği için onInit'i yazmak zorundasın!
//bu ngonInit sizin componentiniz dom'a yerleştiğinde yani açıldığında çalışan koddur. 
//API den data getirmek için ngOnInit'i kullanabilirsiniz bu birinci yöntem
//ama direkt buraya yazarsanız burası spagettiye döner.
//O yüzden biz her işi yapacak nesne için bir metod yazıyoruz.Aynı c# ve javada olduğu gibi.

//HttpClient ile apicall yani api çağrısı yapabiliyoruz...
//import {HttpClient}from "@angular/common/http"; --> bir BACKEND'e bu şekilde istekte bulunabiliyorsunuz.
//React'te bu olmadığı için javascript kütüphanelerinden axios,fetch yararlanıyoruz.
//bu HTTPCLİENT'i kullanabilmen için onu enjecte etmen gerekiyor.
//constructor ile enjecte ediyoruz.
//  constructor(private httpClient:HttpClient) { };
//normalde C# da constructor'a böyle birşey yazarsanız buna asla erişemezsiniz.
//ama javascript dünyasında erişebilirsiniz.
//Sizin TypeScript'te constructor'da verdiğiniz değişken sanki class'ın içinde tanımlanmış bir değişken gibi.
//o yüzden sen getProducts() da this.httpClient diyebilirsin. Dediğinizde bildiğimiz metodlar gelecek...

//C# ta injection için hem kendi içinde olan hemde autofac vs. kullanmıştık erişebilmek için.
//ama Angularda injection hazır geliyor.
//private yaptık çünkü dışardan birisi class'ı çağırdığında httpclient'da gelir.Ama private dersen sadece bu classta geçerli olur.

//JAVASCRIPT'in özünde CLASS diye bir şey yok! ES6 ve sonrasıyla gelen class'lar var.Aslında onlarda arka planda class değil.
// JAVASCRIPT'de her şey Fonksiyon'dur!
//metodun içinde this olmadan tanımlayabilirsin ama yukarda tanımladığını this ile çağırmak zorundasın.
//  apiUrl = "https://localhost:44314/api/products/getall"; bu bizim postmande denediğimiz adresin aynısı...
//  this.httpClient.get(this.apiUrl) bu apiUrl bana bir data verecek.Bu şekilde gelen datayı "any" olarak kabul ediyor.
//httpClient'ın generic çok güxel bir özelliği var.
//  this.httpClient.get<ProductResponseModel>(this.apiUrl) dediğinizde gelen datayı ProductResponseModel modeline map edecek!
// .subscribe(response=>{ }); yanıt başarılı bir şekilde geldiğinde ne yapması gerektiğini buraya yazıyoruz.
//bir metoda ulaşmak için this. diyorsun!

//import {HttpClientModule} from "@angular/common/http";
//imports: HttpClientModule bu ikisini ekledik çünkü Http istekleri yapabilmemiz için o HttpClient injection'ını sağlıyan
//bir HttpClienModule modülü var. Kısacası bir API'ye istekte bulunabilmek için app.module'ünüzde bu arkadaşın olması gerekiyor.
//kendi component'lerimizi, directive'lerimizi vs. kendi projemizdekileri declerations'a koyuyoruz.
//dışardan, bizim yazmadığımız modülleride imports'a koyuyoruz.

//eğer bir api'den istek yapmaya çalıştığınızda CORS hatası alıyorsanız anlayın ki o api'nin backend'cileri sizin
//o API'ye erişebilmeniz için gerekli konfigrasyonu yapmamış demektir.
//CORS : origin request demek, yani bir yerden origin'den istek gelmesi.

//----BU OLAYA NEDEN İHTİYAÇ VAR!!!
//Yani bu neden getirmiyor?? => getProducts(){ this.productodService.getProducts();}
//----BURAYA DİKKAT EDİN BELKİDE ANGULAR'IN EN ÖNEMLİ BİLGİSİNİ ŞU AN SANA VERECEĞİM!
// getProducts(){
//   console.log("api request başladı")
//   this.productodService.getProducts().subscribe(response=>{
//     this.products = response.data; 
//   console.log("api request bitti")
//   })
//   console.log("Metod bitti");
// }
//Angularda ilişkisel verileri yönetmek React ve Vue'ya göre çok daha kolay bu yapıyla beraber.
//başta diğerlerine göre çok daha fazla iş yapılıypr gibi görünüyor ama ilişkisel yapıyı baştan kurmuş oluyorsunuz.
//peki ne oluyor burada?
// getProducts().subscribe() asenkron çalışıyor.
//normalde C# da asenkron bir yapı kurmadığınız müddetçe sıralı çalışırken bu kendiliğinden asenkron zaten!
//kısa olan işlem çalışmak için uzun işlemi beklemiyor. Javascript dünyasında genelde böyledir.
//O yüzden bizde bu işleri kontrol edebilmek için bu hareketi yapıyoruz.
//dataLoaded = false;  diye bir değişken tanımlayıp subscribe() metodunun içindeki işlemin sonuna
//this.dataLoaded = true;  bunu eklersek subscribe bizim için bu işlemleri sıralı yapıyor!!!
// getProducts(){
//   this.productodService.getProducts().subscribe(response=>{
//     this.products = response.data; 
//   })
// }
//şimdi backend'den data gelirken daha yüklenmediği zaman yüklendiğini göstermek adına spinner çalışsın.
//bootstrap doc'dan spinner kodunu product.component.html'deki table kodunun başına koy kaydet.
//şimdi ben html'de bu koda diyorum ki eğer data yüklenmediyse bu spin'i göster.
//bunun için Angularda güzel bir directive var *ngIf .

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