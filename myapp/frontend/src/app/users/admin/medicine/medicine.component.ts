import { Component, OnInit } from '@angular/core';
import { Med } from '../med';
import { NgForm }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../../shared/medicine.service';

declare var M: any;
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
  providers: [MedicineService]
})

export class MedicineComponent implements OnInit{
  constructor(private medicineService: MedicineService){}

  ngOnInit(){
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.medicineService.selectedMedicine = {
      name:"",
      notes:""
    }
    
  }
   
  onsubmit(form : NgForm){
    this.medicineService.postMedicine(form.value).subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Saved successfully', classes: 'rounded'});
    });
  }

}

