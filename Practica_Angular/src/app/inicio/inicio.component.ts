import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
  
})
export class InicioComponent {
  horaActual?: string = new Date().toLocaleTimeString();

  constructor() {
    setInterval(() => {
      this.horaActual = new Date()?.toLocaleTimeString();
    }, 1000);
  }
}
