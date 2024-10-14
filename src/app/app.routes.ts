import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { EnrollComponent } from './pages/enroll/enroll.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cursos/:id', component: DetallesComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'enroll/:id', component: EnrollComponent},
    {path: '**', redirectTo: ''}



];
