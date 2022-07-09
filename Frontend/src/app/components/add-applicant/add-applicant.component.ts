import { Component } from '@angular/core';
import {Applicant} from "src/app/models/applicant.model";
import {ProyectService} from "src/app/services/proyect.service";

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent {
  view = 'personal';
  studiesView = 'general';
  workView = '1';
  
  applicant: Applicant = {
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
  submitted = false;

  constructor(private projectService: ProyectService) { }

  saveApplicant():void {
    const data = {
      dpi: this.applicant.dpi,
      nombreCompleto: this.applicant.nombreCompleto,
      genero: this.applicant.genero,
      telefono: this.applicant.telefono,
      celular: this.applicant.celular,
      correo:this.applicant.correo,
      fechaNacimiento: this.applicant.fechaNacimiento,
      puestoAlQueAplica: this.applicant.puestoAlQueAplica,
      estudiosMasAltos: this.applicant.estudiosMasAltos,
      otrosEstudios: this.applicant.otrosEstudios,
      doctoradoInstitucion: this.applicant.doctoradoInstitucion,
      doctoradoEstudio: this.applicant.doctoradoEstudio,
      doctoradoGrado: this.applicant.doctoradoGrado,
      maestriaInstitucion: this.applicant.maestriaInstitucion,
      maestriaEstudio: this.applicant.maestriaEstudio,
      maestriaGrado: this.applicant.maestriaGrado,
      licenciaturaInstitucion: this.applicant.licenciaturaInstitucion,
      licenciaturaEstudio: this.applicant.licenciaturaEstudio,
      licenciaturaGrado: this.applicant.licenciaturaGrado,
      tecnicoInstitucion: this.applicant.tecnicoInstitucion,
      tecnicoEstudio: this.applicant.tecnicoEstudio,
      tecnicoGrado: this.applicant.tecnicoGrado,
      colegioInstitucion: this.applicant.colegioInstitucion,
      colegioEstudio: this.applicant.colegioEstudio,
      colegioGrado: this.applicant.colegioGrado,
      empresa1: this.applicant.empresa1,
      empresa1FechaInicio: this.applicant.empresa1FechaInicio,
      empresa1FechaFin: this.applicant.empresa1FechaFin,
      empresa1Telefono: this.applicant.empresa1Telefono,
      empresa1Direccion: this.applicant.empresa1Direccion,
      empresa1Puesto: this.applicant.empresa1Puesto,
      empresa1Jefe: this.applicant.empresa1Jefe,
      empresa1JefeTelefono: this.applicant.empresa1JefeTelefono,
      empresa1Salario:this.applicant.empresa1Salario,
      empresa1MotivoSalida: this.applicant.empresa1MotivoSalida,
      empresa1Responsabilidades: this.applicant.empresa1Responsabilidades,
      empresa2: this.applicant.empresa2,
      empresa2FechaInicio: this.applicant.empresa2FechaInicio,
      empresa2FechaFin: this.applicant.empresa2FechaFin,
      empresa2Telefono: this.applicant.empresa2Telefono,
      empresa2Direccion: this.applicant.empresa2Direccion,
      empresa2Puesto: this.applicant.empresa2Puesto,
      empresa2Jefe: this.applicant.empresa2Jefe,
      empresa2JefeTelefono: this.applicant.empresa2JefeTelefono,
      empresa2Salario:this.applicant.empresa2Salario,
      empresa2MotivoSalida: this.applicant.empresa2MotivoSalida,
      empresa2Responsabilidades: this.applicant.empresa2Responsabilidades,
      empresa3: this.applicant.empresa3,
      empresa3FechaInicio: this.applicant.empresa3FechaInicio,
      empresa3FechaFin: this.applicant.empresa3FechaFin,
      empresa3Telefono: this.applicant.empresa3Telefono,
      empresa3Direccion: this.applicant.empresa3Direccion,
      empresa3Puesto: this.applicant.empresa3Puesto,
      empresa3Jefe: this.applicant.empresa3Jefe,
      empresa3JefeTelefono: this.applicant.empresa3JefeTelefono,
      empresa3Salario:this.applicant.empresa3Salario,
      empresa3MotivoSalida: this.applicant.empresa3MotivoSalida,
      empresa3Responsabilidades: this.applicant.empresa3Responsabilidades,
      empresa4: this.applicant.empresa4,
      empresa4FechaInicio: this.applicant.empresa4FechaInicio,
      empresa4FechaFin: this.applicant.empresa4FechaFin,
      empresa4Telefono: this.applicant.empresa4Telefono,
      empresa4Direccion: this.applicant.empresa4Direccion,
      empresa4Puesto: this.applicant.empresa4Puesto,
      empresa4Jefe: this.applicant.empresa4Jefe,
      empresa4JefeTelefono: this.applicant.empresa4JefeTelefono,
      empresa4Salario:this.applicant.empresa4Salario,
      empresa4MotivoSalida: this.applicant.empresa4MotivoSalida,
      empresa4Responsabilidades: this.applicant.empresa4Responsabilidades,
    };
    this.projectService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newApplicant(): void{
    this.submitted = false;
    this.applicant = {
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
  }

  changeView(view: string): void{
    this.view = view;
  }

  changeStudiesView(studiesView: string):void{
    this.studiesView = studiesView;
  }

  changeWorkView(workView:string): void{
    this.workView = workView;
  }

}
