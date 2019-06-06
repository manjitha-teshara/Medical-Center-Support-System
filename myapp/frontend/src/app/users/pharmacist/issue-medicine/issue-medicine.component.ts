import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../../shared/medicine.service';
import { Medicine} from '../../../shared/medicine.model';

declare var M: any;
@Component({
  selector: 'app-issue-medicine',
  templateUrl: './issue-medicine.component.html',
  styleUrls: ['./issue-medicine.component.css'],
  providers: [MedicineService]
})
export class IssueMedicineComponent implements OnInit {

  issuedMedicine = [];
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
   
  /** 
  onprint(){
    this.router.navigateByUrl('/bill', { med: issuedMedicine });

  }
  */

  onSubmit(med, _id){
    /** this.medicineService.postMedicine(form.value).subscribe(res => {
      this.resetForm(form);
      //M.toast({html: 'Saved successfully', classes: 'rounded'});
    });*/
    //console.log("MEDICIEN",med);
    this.medicineService.issueMedicine(_id,this.medicineService.selectedMedicine.qty).subscribe(res => {
      console.log("MEDICINE LOL", this.medicineService.selectedMedicine);
      this.issuedMedicine.push(this.medicineService.selectedMedicine);
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

  total(){
    var tot=0;
    for(var i=0;i<this.issuedMedicine.length;i++){
       tot+= (this.issuedMedicine[i].price)*(this.issuedMedicine[i].qty);
    }
    return tot;

  }

}


