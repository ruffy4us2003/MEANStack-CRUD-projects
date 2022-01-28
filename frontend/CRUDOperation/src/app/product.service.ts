import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  storeProductDetailsInfo(productRef:any){
    this.http.post("localhost:9999/product/storeProductDetails", productRef).
    subscribe(result=>console.log(result), error=>console.log(error)
    )
  }
}
