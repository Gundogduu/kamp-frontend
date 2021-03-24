import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//rout'lar burada tanımlanır
const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"/products", component:ProductComponent}
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
//pathMatch:"full" bu bizim anasayfamızla eşit olacak daha sonrasında eklemeler yapılırsa