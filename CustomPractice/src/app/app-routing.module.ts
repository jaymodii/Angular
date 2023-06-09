import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RootComponent } from './root/root.component';
import { DataComponent } from './user/profile/privacy/data/data.component';
import { PrivacyComponent } from './user/profile/privacy/privacy.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{   path: 'user',component:UserComponent},
{ path:'admin',component:AdminComponent},
{path:'root',component:RootComponent},
{path:'user/profile',component:ProfileComponent},
{path:'user/profile/privacy',component:PrivacyComponent},
{path:'user/data',component:DataComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
