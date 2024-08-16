import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
export const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro_usuario', component: CadastroUsuarioComponent }
];
