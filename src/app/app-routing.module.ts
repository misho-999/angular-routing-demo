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
    path: 'cars',
    loadChildren: () => import('./test-routing/car/car.module').then(m => m.CarModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./test-routing/person/person.module').then(m => m.PersonModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./test-routing/student/student.module').then(m => m.StudentModule)
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
