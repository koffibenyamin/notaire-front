import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ListUserComponent } from './list-user/list-user.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientProfilComponent } from './client/client-profil/client-profil.component';
import { DossierListComponent } from './dossier/dossier-list/dossier-list.component';
import { DossierCreerComponent } from './dossier/dossier-creer/dossier-creer.component';
import { DossierDetailComponent } from './dossier/dossier-detail/dossier-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ClientModifComponent } from './client/client-modif/client-modif.component';
import { ConfigComponent } from './config/config.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ListUserComponent,
    ClientComponent,
    ClientListComponent,
    ClientProfilComponent,
    DossierListComponent,
    DossierCreerComponent,
    DossierDetailComponent,
    ClientModifComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    //RouterModule
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
