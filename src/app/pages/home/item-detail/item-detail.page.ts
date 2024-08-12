import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
   IonHeader,
   IonTitle,
   IonToolbar,
   IonButton,
   IonButtons,
   IonBackButton,
   NavController, IonIcon, IonItem, IonLabel, IonText, IonFooter, IonBadge } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [IonBadge, IonFooter, IonText, IonLabel,
     IonItem,
     IonIcon,
     IonBackButton,
     IonButtons,
     IonButton,
     IonContent,
     IonHeader,
     IonTitle,
     IonToolbar,
     CommonModule,
     FormsModule,
     UpperCasePipe,
     RouterLink



    ]
})


export class ItemDetailPage implements OnInit, OnDestroy {

  id! :string;
  item :any;
  addToBag! :any;
  cartSub! :Subscription;
  totalItems = 0;
  private navCtrl = inject(NavController);
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);
  private cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }

    this.id = id;
    this.item = this.api.items.find((record) => record.id == id);
    console.log(this.item);

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }


  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }
    this.id = id;
    this.item = this.api.items.find((record) => record.id == id);
    console.log(this.item);
  }

  addItem(){
    const result = this.cartService.addQuantity(this.item);
    this.addedText();
  }

  addedText(){
    this.addToBag = 'Added to Bag';
    setTimeout(() => {
      this.addToBag = null;
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
