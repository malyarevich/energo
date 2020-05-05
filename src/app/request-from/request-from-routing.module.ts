import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

const routes: Routes = [
  { path: "", component: FormWrapperComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestFromRoutingModule { }
