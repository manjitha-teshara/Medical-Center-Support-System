import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../../shared/medicine.service';
import { Medicine} from '../../../shared/medicine.model';

declare var M: any;

@Component({
  selector: 'app-restock-medicine',
  templateUrl: './restock-medicine.component.html',
  styleUrls: ['./restock-medicine.component.css'],
  providers: [MedicineService]
})

export class RestockMedicineComponent implements OnInit {

  constructor(private medicineService: MedicineService){}

  ngOnInit(){
    this.resetForm();
    this.refreshMedicineList();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.medicineService.selectedMedicine = {
      name:"",
      notes:"",
      type:"",
      dose:null,
      unit:"",
      price:null,
      qty:null
    }
    
  }
   
  onSubmit(med, _id){
    /** this.medicineService.postMedicine(form.value).subscribe(res => {
      this.resetForm(form);
      //M.toast({html: 'Saved successfully', classes: 'rounded'});
    });*/
    this.medicineService.restockMedicine(_id,this.medicineService.selectedMedicine.qty).subscribe(res => {
    this.refreshMedicineList();
    this.resetForm();
    });
    
  }

  refreshMedicineList(){
    this.medicineService.getMedicineList().subscribe((res) => {
      this.medicineService.medi = res as Medicine[];
    });
  }

  onAdd(med : Medicine){
    console.log("edit works");
    this.medicineService.selectedMedicine = med;
  }


}


