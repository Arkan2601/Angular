import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  horaActual?: string = new Date().toLocaleTimeString();

  constructor() {
    setInterval(() => {
      this.horaActual = new Date()?.toLocaleTimeString();
    }, 1000);
  }
}
