import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'pacientes', component: PacientesComponent }
];
