export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}





//Typescript'te C# daki public'in karşılığı export.
//buradaki interfaceler c# dakiler kadar güçlü değiller.
//referance tutarlar ama oradaki yapı kadar güçlü değil.
//soyutlamanın nimetlerinden backenddeki kadar yararlanamıyoruz.
//burada daha çok sınırlandırmaya yönelik. Yani hangi veriler olacak.
//mesela bir obje girilirse hangi alanlar girilecek onlardan yararlanıyoruz.
//buradaki interfacelerin önüne I koymuyoruz.
//C# daki "int" burada "number"
//Bu interface'i class'a bağlamak için 