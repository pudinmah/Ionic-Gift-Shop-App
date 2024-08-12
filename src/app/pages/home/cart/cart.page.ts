import { DecimalPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonCard,
  IonImg,
  IonThumbnail, IonText, IonCol, IonRow, IonListHeader, IonList, IonItemGroup, IonFooter, IonModal, IonItemDivider } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { CouponsComponent } from './components/coupons/coupons.component';
import { Strings } from 'src/app/enum/strings.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonItemDivider, IonModal, IonFooter, IonItemGroup, IonList, IonListHeader, IonRow, IonCol, IonText,
    IonImg,
    IonCard,
    IonIcon,
    IonButton,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonThumbnail,
    DecimalPipe,
    CouponsComponent
  ],
})
export class CartPage implements OnInit, OnDestroy {

  // @ViewChild('coupon_modal') coupon_modal!: IonModal;
  previous!: string;
  cartSub!: Subscription;
  selectedCoupon!: any;
  applyCoupon = false;
  model: any = null;
  currency = Strings.CURRENCY;
  private router = inject(Router);
  public cartService = inject(CartService);

  constructor() {}

  ngOnInit() {
    this.checkUrl();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });
  }

  checkUrl() {
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    urlParts.pop(); // Remove the last segment
    console.log(urlParts);
    this.previous = urlParts.join('/');
    console.log('url: ', this.previous);
  }

  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: any) {
    this.cartService.subtractQuantity(item);
  }

  closeCouponModal(coupon: any, couponModal: IonModal) {
    console.log('coupon data: ', coupon);
    if (coupon) {
      this.selectedCoupon = coupon;
      this.model.grandTotal -= this.selectedCoupon?.saved;
    }
    couponModal.dismiss();
  }

  removeCoupon() {

  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
