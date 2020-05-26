import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("~/app/request-from/request-from.module").then((m) => m.RequestFromModule),
      },
      {
        path: '**',
        redirectTo: "",
      },
    ]
  },

  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: './'}]
})
export class AppRoutingModule { }
