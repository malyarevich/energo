import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RequestFromComponent } from './request-from.component';

const routes: Routes = [
  { path: "", component: RequestFromComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestFromRoutingModule { }
