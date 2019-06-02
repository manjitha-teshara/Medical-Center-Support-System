import { Component, OnInit } from '@angular/core';
import { Med } from '../med';
import { NgForm }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../../shared/medicine.service';
import { Medicine} from '../../../shared/medicine.model';

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
    this.refreshMedicineList();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.medicineService.selectedMedicine = {
      name:"",
      notes:"",
      type:"",
      dose:"",
      unit:"",
      price:"",
      qty:""
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

  onEdit(med : Medicine){
    console.log("edit works");
    this.medicineService.selectedMedicine = med;
  }

  onDelete(_id:string, form:NgForm){
    console.log("delete works");
    if(confirm('Are you sure to delete this record?')==true){
      this.medicineService.deleteMedicine(_id).subscribe((res) => {
      this.refreshMedicineList();
      this.resetForm(form);
      });
    }
  }

}


