import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/models/applicant.model';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  applicants?: Applicant[];
  currentApplicant: Applicant = {};
  currentIndex = -1;
  dpi = '';

  constructor(private proyectService: ProyectService) { }

  ngOnInit(): void {
    this.retrieveApplicants();
  }

  retrieveApplicants():void{
    this.proyectService.getAll()
      .subscribe({
        next: (data) => {
          this.applicants = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList():void {
    this.retrieveApplicants();
    this.currentApplicant = {};
    this.currentIndex = -1;
  }

  setActiveApplicant(applicant: Applicant, index:number):void {
    this.currentApplicant = applicant;
    this.currentIndex = index;
  }

  removeAllApplicants():void{
    this.proyectService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchDpi():void{
    this.currentApplicant = {};
    this.currentIndex = -1;
    this.proyectService.findByDpi(this.dpi)
      .subscribe({
        next: (data) => {
          this.applicants = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
