import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ClientComponent } from './client/client.component';
import { ClientProfilComponent } from './client/client-profil/client-profil.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientModifComponent } from './client/client-modif/client-modif.component';
import { DossierListComponent } from './dossier/dossier-list/dossier-list.component';
import { ConfigComponent } from './config/config.component';
import { DossierDetailComponent} from './dossier/dossier-detail/dossier-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listuser', component: ListUserComponent },
  { path: 'listclients', component: ClientListComponent },
  { path: 'clientDetail/:id', component: ClientProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'listdossiers', component: DossierListComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'clientModif/:id', component: ClientModifComponent },
  { path: 'dossierDetail/:id', component: DossierDetailComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
