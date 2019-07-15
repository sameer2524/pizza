import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class piService {
  uri='http://localhost:4000/pizza';
  constructor(private httpClient:HttpClient) { }
  //http://localhost:4000/emp/allEmp
  getPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/allPizza');
  }

  addPizza(id,name,number){
    let p={
      pizzaId:id,
    pizzaName:name,
    price:number,
 };
 return this.httpClient.post(`${this.uri}`+'/addPizza',p)
 .subscribe(res=>console.log("successful"));
  }
 //'http://localhost:4000/delete/:pizzaId'
 deletePizza(pizzaId:number):any
 {
   this.httpClient.delete(`${this.uri}`+'/delete/'+`${pizzaId}`)
   .subscribe(res=>console.log(" deleted Successfully"));
 }
 updatePizza(id,price):any {
 return this.httpClient.put(`${this.uri}`+'/update/'+id+'/'+price,{})
 .subscribe(res=>console.log("updated successfully"));
  }

}


