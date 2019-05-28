import { Component, OnInit } from '@angular/core';

import 'rxjs/add/observable/of';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MedicineService } from '../../shared/medicine.service';
import { Medicine} from '../../shared/medicine.model';
import { NgForm } from '@angular/forms';


export class TabGroupDynamicHeightExample {}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})


export class AdminComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  displayedColumns: string[] = ['position','name','weight','symbol','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
   ngOnInit() {
  
  }
}
 
  export class CardOverviewExample {}



  export class MedicineComponent implements OnInit{
    constructor(private medicineService: MedicineService){}
  
    ngOnInit(){
     
      this.refreshMedicineList();
    }
  
    refreshMedicineList(){
      this.medicineService.getMedicineList().subscribe((res) => {
        this.medicineService.medi = res as Medicine[];
      })
    }
  
  }
  
  

