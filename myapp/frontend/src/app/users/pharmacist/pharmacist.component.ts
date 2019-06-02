import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../shared/medicine.service';
import { Medicine} from '../../shared/medicine.model';

declare var M: any;
@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css'],
  providers: [MedicineService]
})
export class PharmacistComponent implements OnInit {

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
   
  onSubmit(form : NgForm){
    /** this.medicineService.postMedicine(form.value).subscribe(res => {
      this.resetForm(form);
      //M.toast({html: 'Saved successfully', classes: 'rounded'});
    });*/
    this.medicineService.editMedicine(form.value).subscribe(res => {
      this.resetForm();
    });
  }

  refreshMedicineList(){
    this.medicineService.getMedicineList().subscribe((res) => {
      this.medicineService.medi = res as Medicine[];
    });
  }



}


