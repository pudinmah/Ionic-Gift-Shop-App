import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star,bagHandleOutline, bagHandle, trashOutline, remove, add, arrowBackOutline, ticketOutline } from 'ionicons/icons'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
      trashOutline,
      add,
      remove,
      arrowBackOutline,
      ticketOutline

    });
  }
}
