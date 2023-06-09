import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path: 'root', component: RootComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
