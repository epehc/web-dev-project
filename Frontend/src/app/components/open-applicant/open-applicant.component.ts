import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ApplicantDetailsComponent } from '../applicant-details/applicant-details.component';
import { Applicant } from 'src/app/models/applicant.model';

@Component({
  selector: 'app-open-applicant',
  templateUrl: './open-applicant.component.html',
  styleUrls: ['./open-applicant.component.css']
})
export class OpenApplicantComponent implements OnInit {

  @Input() currentApplicant: Applicant = {
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
  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    this.dialog.open(ApplicantDetailsComponent, {data : {id: this.currentApplicant.id}});
  }


  ngOnInit(): void {
  }

}
