import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm }   from '@angular/forms';
//import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormGroup, FormControl } from '@angular/forms';

import { MedicineService } from '../../../shared/medicine.service';
import { Medicine} from '../../../shared/medicine.model';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRecordsService } from 'src/app/shared/patientRecords/patient-records.service';

declare var M: any;
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers: [MedicineService, PatientRecordsService]
})

export class MedicineListComponent implements OnInit {
 patientRecords = {
   records:[]
 }
 tableData;
    
  constructor(private medicineService: MedicineService, private patientsRecordService: PatientRecordsService){}
   
  

  ngOnInit(){
   // this.resetForm();
    this.refreshPatientsRecordList();
    this.patientsRecordService.getPatientRecordList().subscribe(res => {
      console.log(res);
      this.tableData =res;
      //this.resetForm();
    });

  }

 
 /* resetForm(form?:NgForm){
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
    
  }*/
   
  onSubmit(form : NgForm){
    /** this.medicineService.postMedicine(form.value).subscribe(res => {
      this.resetForm(form);
      //M.toast({html: 'Saved successfully', classes: 'rounded'});
    });*/
    this.medicineService.editMedicine(form.value).subscribe(res => {

      //this.resetForm();
    });
  }

  refreshPatientsRecordList(){
    this.patientsRecordService.getPatientRecordList().subscribe(res=>{
     // this.dataSource.data = res as Medicine[];
    // this.resetForm();
    });
  }


  onEdit(med : Medicine){
    console.log("edit works");
    this.medicineService.selectedMedicine = med;
  }

  /*onDelete(_id:string, form:NgForm){
    console.log("delete works");
    if(confirm('Are you sure to delete this record?')==true){
      this.medicineService.deleteMedicine(_id).subscribe((res) => {
      this.refreshMedicineList();
      this.resetForm(form);
      });
    }
  }
  */


  

}


