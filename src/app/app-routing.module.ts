import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageContainerComponent} from "./image-container/image-container.component";

const routes: Routes = [
  { path: '', component: ImageContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
