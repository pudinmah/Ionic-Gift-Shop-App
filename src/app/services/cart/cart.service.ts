import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>(null);

  get cart(){
    return this._cart.asObservable();
  }

  constructor() { }

  addQuantity(item :any){
    const data = this._cart.value;
    const totalItem = (data?.totalItem || 0) + 1;
    this._cart.next({totalItem});
  }
}
