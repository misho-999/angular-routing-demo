import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums.component';




const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    children: [
     
      {
        path: 'create',
        component: AddAlbumComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: ':id',
        component: AlbumComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AlbumsRoutingModule { }

