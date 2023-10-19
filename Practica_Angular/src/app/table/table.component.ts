import {Component} from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12762, name: 'Jonathan', weight: 81281712131, symbol: 'COPJ0401HVZRRNA4'},
  {position: 12761, name: 'Carlos', weight: 4.0026, symbol: 'He'},
  {position: 12755, name: 'Gustavo', weight: 6.941, symbol: 'Li'},
  {position: 12781, name: 'Brando', weight: 9.0122, symbol: 'Be'},
  {position: 12753, name: 'Alberto', weight: 8443107971, symbol: 'AAMC041101HNLLNRA0'},
  {position: 12772, name: 'Alejandra', weight: 8212116688, symbol: 'LUZA010301MNLCXLA2'},
  {position: 12780, name: 'Yaretzi', weight: 5628414013, symbol: 'SAVY040926MNLNZRA0'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

    horaActual?: string = new Date().toLocaleTimeString();
  constructor() {
    setInterval(() => {
      this.horaActual = new Date()?.toLocaleTimeString();
    }, 1000);
  }


}
