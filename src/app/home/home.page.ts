import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCol, IonRow, IonButton, IonThumbnail, IonImg, IonCard, IonItem, IonText, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonItem, IonCard, IonImg, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonIcon,
    IonCol,
    IonRow,
    IonThumbnail,
    IonLabel,
    IonSearchbar

  ],
})
export class HomePage {
  private api = inject(ApiService);
  allItems :any[] = [];
  items :any[] = [];
  query! :string;

  ngOnInit() {
    this.getItems();
    console.log('ngonInit homepage');
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
}
