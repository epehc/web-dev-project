import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicantDetailsComponent} from "./components/applicant-details/applicant-details.component";
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {path: '', redirectTo: 'applicants', pathMatch:'full'},
  {path: 'applicants', component: ListComponent },
  {path: 'applicants/:id', component: ApplicantDetailsComponent },
  {path: 'add', component: AddApplicantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
