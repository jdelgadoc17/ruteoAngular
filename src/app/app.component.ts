import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CursosComponent } from './pages/cursos/cursos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, CursosComponent, PerfilComponent, DetallesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto4';
}
