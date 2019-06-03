import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor/doctor.service';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/shared/doctor/doctor.model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})



export class DoctorDetailComponent implements OnInit {

 
   public dataSource = new MatTableDataSource< Doctor >();
 
  constructor(private doctorservice: DoctorService ) {}
     displayedColumns: string[] = ['name','shedule','check','cost','actions'];
  

  
 
   ngOnInit() {

    this.getDoctor();
    
      
  }
  getDoctor(){
    this.doctorservice.getDoctorsList().subscribe(res =>{
      this.dataSource.data = res as Doctor[];
    })
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    // },error =>{
    //   console.log(error);

    // })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  

 
}
export class CardOverviewExample {}

 
 
