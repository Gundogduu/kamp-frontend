import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  //1. yöntem, böyle bir şey yaptığınız zaman normalde new'lemeniz gerekiyor.Dolayısıyla class'ını oluşturmak gerekiyor.
  //dolayısıyla buradaki interface mantığı, bizim için typescript bizim için bu işi hallettiğinden dolayı genellikle model interfacelerini,classlarını ihtiyac olmadıkça oluşturmuyoruz.
  //2. yöntem, currentCategory: Category={categoryId:0,categoryName:""};
  //3.yöntem, tsconfig.json da initialize etmeyeceğimizi söylemek.Hoca bunu kullandı...
   currentCategory: Category; 
  constructor(private categoryService:CategoryService) { }
  
  
 

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  //eğer html'de for ile dönerken category benim currentCategory'me eşitse, o zaman onun css class'ını değiştir.
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
