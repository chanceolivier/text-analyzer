import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomComponent }       from './custom.component';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  { path: '', redirectTo: '/custom', pathMatch: 'full' },
  { path: 'custom',  component: CustomComponent },
  { path: 'presentation',  component: PresentationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
