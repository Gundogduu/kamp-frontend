import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//rout'lar burada tanımlanır
const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// [RouterModule.forRoot(routes)] dediğiniz zaman bu bizim için rout konfigürasyonunu yapıyor.
// index.html'de "<base href="/"> bizim uygulamamızın rout'udur. Yani "localhost:4200" mesela.Bu bizim rout'umuz anlamına geliyor.
// (routes) da, base için yani uygulamamız için bu rout'ları devreye al demek.
// {path:"", component:ProductComponent} rout'u obje oluşturarak bu şekilde veriyoruz.
// "",component: hiçbir şey yazılmazsa orada şunu aç demek.Kısacası Anasayfa.
//pathMatch:"full" bu bizim anasayfamızla eşit olacak daha sonrasında eklemeler yapılırsa sorun çıkarmayacak
//yani angular'ın kafası karışmayacak "" ve "products" a bağlı component aynı olduğundan eski versiyonlarda kafası karışıyordu.
//ama bu versiyonda sorunu çözmüşler gibi hata vermedi.Ama silmeyin dursun çünkü başka bir şirkete gittiğinizde eski versiyon kullanıyorlarsa ne yapacağını bilirsin.
 
// "products/category/:categoryId" de :categoryId dediğimiz angular için, biz 1 nolu kategoriyi seçersek veya 2 nolu'yu seçersek categoryId ye karşılık geliyor.
//Backend'de :categoryId için ProductController'a ek metod yazdık. Hata çözüldü.