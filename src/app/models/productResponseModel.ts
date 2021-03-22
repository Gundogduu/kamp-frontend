import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Product[],
   
}

//bir frontendci olarak bana gelecek datayı karşılayacak bir model
//bunları API den yani json'dan geldiği gibi yapmalısınız aksi halde mapping yapmış olursunuz.
//success ve message response'larını ayrı bir interface'e attık tekrar tekrar yazmayalım diye "responseModel.ts".
//ResponseModel bizim base'imiz.
//extends: bir interface'i başka bir interface'e inherit ediyor. 