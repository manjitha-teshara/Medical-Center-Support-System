import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientRecordClass } from 'src/app/shared/patientRecords/patient-record-class.model';
import { PatientRecordsService } from 'src/app/shared/patientRecords/patient-records.service';

@Component({
  selector: 'app-pharmacist-details',
  templateUrl: './pharmacist-details.component.html',
  styleUrls: ['./pharmacist-details.component.css']
})

 
export class PharmacistDetailsComponent implements OnInit {

  // dataSource :any;
  public dataSource = new MatTableDataSource<PatientRecordClass>();
 
  constructor(private  patientRecordService:  PatientRecordsService,) {}
  displayedColumns: string[] = ['name','date','age','description','actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  
 
   ngOnInit() {

    this.getPatientRecord();
    //  this.patientRecordService.getPatientRecordList().subscribe((result)=>{    
    //   this.dataSource  =  result.body;
      
  }

  // getPatientRecord(){
  //   this.patientRecordService.getPatientRecordList().subscribe((res)=>{
  //     this.dataSource.data = res as PatientRecordClass[];
  //   })
  //   //   this.dataSource = res;
  //   //   console.log(this.dataSource);
  //   // },error =>{
  //   //   console.log(error);

  //   // })

  // }

  getPatientRecord() {
    this.patientRecordService.getPatientRecordList().subscribe((res) => {

      this.dataSource.data = res as PatientRecordClass[];
    });
  }



  deletePatientRecord(patientRecords: PatientRecordClass) {
    console.log(patientRecords);
    if (confirm('Are you sure to delete this record?') == true) {
      this.patientRecordService.deletePatientRecord(patientRecords).subscribe((res) => {
        this.getPatientRecord();
      });
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // onEdit(){
  //   this.dialog
  // }

}

export class CardOverviewExample {}
