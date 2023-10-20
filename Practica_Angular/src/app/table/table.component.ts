import {Component} from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12762, name: 'Jonathan', weight: 81281712131, symbol: 'COPJ0401HVZRRNA4'},
  {position: 12761, name: 'Manuel', weight: 6761141373, symbol: 'COLC010315HCHRPRA2'},
  {position: 12755, name: 'Gustavo', weight: 8211202886, symbol: 'BORG040523HNLRMSA7'},
  {position: 12781, name: 'Brandon', weight: 8211110434, symbol: 'SAGB990213HNLRNR06'},
  {position: 12753, name: 'Alberto', weight: 8443107971, symbol: 'AAMC041101HNLLNRA0'},
  {position: 12772, name: 'Alejandra', weight: 8212116688, symbol: 'LUZA010301MNLCXLA2'},
  {position: 12780, name: 'Yaretzi', weight: 5628414013, symbol: 'SAVY040926MNLNZRA0'},
  {position: 12754, name: 'Felipe', weight: 8341303508, symbol: 'BEGF040906HTSRZLA1'},
  {position: 12782, name: 'Reynaldo', weight: 8261542697, symbol: 'SIGR040605HNLLRYA8'},
  {position: 12765, name: 'Jose', weight: 8135585770, symbol: 'FUIM050817HNLNRNA0'},
  {position: 12763, name: 'Bryan', weight: 8211028403, symbol: 'ROMB041124HNLSDRA9'},
  {position: 12752, name: 'Karen', weight: 8211066839, symbol: 'AAMK030619MNLLRRB6'},
  {position: 12753, name: 'Carlos', weight: 8443107971, symbol: 'AAMC041101HNLLNRA0'},
  
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
