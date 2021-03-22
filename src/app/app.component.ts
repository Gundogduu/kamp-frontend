import { Component } from '@angular/core';

//bu imkanı bize typescript veriyor.Aslında uygulamanızı build ettiğiniz anda arka planda javascripte çevriliyor.
//tamam sen bir class'sın ama aynı zamanda bir componentsin!
//bu C# daki Attribute. Angular'da Annotation deniyor.
//peki sen kimim componentisin?
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Hayri Gündoğdu";

}
//süslü parantez demek javaScript'te obje demek!
// ./ demek, aynı klasörde demek!
//selector: uygulamanızda, aynı li gibi ul gibi diğer html tagleri gibi
// bu componenti de <app-root> ile kullanabilirsin demek.
//yani html'in tanımasını sağlıyor app-root.
// [] javascript dünyasında array demek.

//DEĞİŞKEN TANIMLAMA
//string title = "nortwind"; C# ta
//title:string = 'nortwind'; TypeScript'te "tip güvenli"
//title = 'nortwind'; JavaScript yöntemi   "tip güvensiz"
//title:any görürseniz her veritipi olabilir demek.Yani C# daki object.
  