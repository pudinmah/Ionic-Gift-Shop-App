import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCol, IonRow, IonButton, IonThumbnail, IonImg, IonCard, IonItem, IonText, IonLabel, IonSearchbar, IonButtons, IonBadge } from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { cart } from 'ionicons/icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonBadge, IonButtons, IonText, IonItem, IonCard, IonImg, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonIcon,
    IonCol,
    IonRow,
    IonThumbnail,
    IonLabel,
    IonSearchbar,
    RouterLink

  ],
})
export class HomePage implements OnInit, OnDestroy {
  allItems :any[] = [];
  items :any[] = [];
  query! :string;
  cartSub! :Subscription;
  totalItems = 1;
  private api = inject(ApiService);
  private cartService = inject(CartService);

  ngOnInit() {
    console.log('ngonInit homepage');
    this.getItems();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  constructor() {

  }

  onSearchChange(event :any) {
    console.log(event.detail.value);
    this.query  = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch(){
    this.items = [];
    if (this.query.length >0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems]
    }
  }

  searchItems(){
    this.items = this.api.items.filter((item)=>
    item.name.toLowerCase().includes(this.query)
    );
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}
