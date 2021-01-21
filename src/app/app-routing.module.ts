import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './test-routing/home/home.component';
import { PageNotFoundComponent } from './test-routing/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthenticationGuard],
    resolve: {
      // i18nBundlesLoaded: I18nResolverService
    },
  },
  {
    path: 'albums',
    loadChildren: () => import('./test-routing/albums/albums.module').then(m => m.AlbumsModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./test-routing/todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./test-routing/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
