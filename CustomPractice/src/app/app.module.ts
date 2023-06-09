import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RootComponent } from './root/root.component';
import { RightsComponent } from './admin/rights/rights.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DemoDropDownAnimatedComponent } from './demo-drop-down-animated/demo-drop-down-animated.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PrivacyComponent } from './user/profile/privacy/privacy.component';
import { DataComponent } from './user/profile/privacy/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    RootComponent,
    RightsComponent,
    ProfileComponent,
    DemoDropDownAnimatedComponent,
    PrivacyComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
