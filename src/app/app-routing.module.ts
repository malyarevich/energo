import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "energo",
    children: [
      {
        path: "request-from",
        loadChildren: () => import("~/app/request-from/request-from.module").then((m) => m.RequestFromModule),
      },
      {
        path: '**',
        redirectTo: "request-from",
        pathMatch: "full"
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'energo',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
