import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProyectService} from "src/app/services/proyect.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Applicant} from "src/app/models/applicant.model";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
  view = 'personal';
  studiesView = 'general';
  workView = '1';
  
  currentApplicant: Applicant = {
    dpi: '',
    nombreCompleto: '',
    genero: '',
    telefono: '',
    celular: '',
    correo:'',
    fechaNacimiento: '',
    puestoAlQueAplica: '',

    estudiosMasAltos: '',
    otrosEstudios: '',

    doctoradoInstitucion: '',
    doctoradoEstudio: '',
    doctoradoGrado: '',

    maestriaInstitucion: '',
    maestriaEstudio: '',
    maestriaGrado: '',

    licenciaturaInstitucion: '',
    licenciaturaEstudio: '',
    licenciaturaGrado: '',

    tecnicoInstitucion: '',
    tecnicoEstudio: '',
    tecnicoGrado: '',

    colegioInstitucion: '',
    colegioEstudio: '',
    colegioGrado: '',


    empresa1: '',
    empresa1FechaInicio: '',
    empresa1FechaFin: '',
    empresa1Telefono: '',
    empresa1Direccion: '',
    empresa1Puesto: '',
    empresa1Jefe: '',
    empresa1JefeTelefono: '',
    empresa1Salario:'',
    empresa1MotivoSalida: '',
    empresa1Responsabilidades: '',

    empresa2: '',
    empresa2FechaInicio: '',
    empresa2FechaFin: '',
    empresa2Telefono: '',
    empresa2Direccion: '',
    empresa2Puesto: '',
    empresa2Jefe: '',
    empresa2JefeTelefono: '',
    empresa2Salario:'',
    empresa2MotivoSalida: '',
    empresa2Responsabilidades: '',

    empresa3: '',
    empresa3FechaInicio: '',
    empresa3FechaFin: '',
    empresa3Telefono: '',
    empresa3Direccion: '',
    empresa3Puesto: '',
    empresa3Jefe: '',
    empresa3JefeTelefono: '',
    empresa3Salario:'',
    empresa3MotivoSalida: '',
    empresa3Responsabilidades: '',

    empresa4: '',
    empresa4FechaInicio: '',
    empresa4FechaFin: '',
    empresa4Telefono: '',
    empresa4Direccion: '',
    empresa4Puesto: '',
    empresa4Jefe: '',
    empresa4JefeTelefono: '',
    empresa4Salario:'',
    empresa4MotivoSalida: '',
    empresa4Responsabilidades: ''
  };
  message = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ApplicantDetailsComponent>,
    private proyectService: ProyectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getApplicant(this.data.id);
  }

  getApplicant(id: any):void{
    this.proyectService.get(id)
      .subscribe({
        next: (data) => {
          this.currentApplicant = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateApplicant(): void{
    this.message = '';
    this.proyectService.update(this.currentApplicant.id, this.currentApplicant)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message: 'El candidato ha sido actualizado. ';
        }, error: (e) => console.error(e)
      });
  }

  deleteApplicant():void{
    this.proyectService.delete(this.currentApplicant.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/applicants']);
        }, error: (e) => console.error(e)
      });
  }

  changeView(view:string):void{
    this.view = view;
  }

  changeStudiesView(studiesView: string): void{
    this.studiesView = studiesView;
  }

  changeWorkView(workView: string): void{
    this.workView = workView;
  }

  close(){
    this.dialogRef.close();
  }

}
