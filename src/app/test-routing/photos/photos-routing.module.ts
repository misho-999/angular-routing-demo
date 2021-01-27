import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PhotosComponent
  },
  {
    path: ':id',
    component: PhotoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }