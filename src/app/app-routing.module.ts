import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomNotificationComponent } from './components/custom-notification/custom-notification.component';

const routes: Routes = [
  { path: '', component: CustomNotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
