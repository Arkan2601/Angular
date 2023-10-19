import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  horaActual?: string = new Date().toLocaleTimeString();

  constructor() {
    setInterval(() => {
      this.horaActual = new Date()?.toLocaleTimeString();
    }, 1000);
  }
}
