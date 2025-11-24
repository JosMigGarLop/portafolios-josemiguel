import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CursorSpotlightComponent } from "./components/cursor/cursor-spotlight.component";

declare let gtag: Function; // Declarar gtag para TypeScript

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CursorSpotlightComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {
    // Escucha eventos de navegación en Angular
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Envía la ruta a Google Analytics
        gtag('config', 'G-514114936', {
          page_path: event.urlAfterRedirects
        });
      });
  }
}
