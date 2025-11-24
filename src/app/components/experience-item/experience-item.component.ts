import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-item.component.html'
})
export class ExperienceItemComponent {
  
  // Propiedades de entrada

  @Input() period!: string;          // Fecha/periodo de la experiencia
  @Input() role!: string;            // Rol desempeñado
  @Input() company!: string;         // Empresa/organización
  @Input() description!: string;     // Descripción de la experiencia
  @Input() techs: string[] = [];     // Tecnologías utilizadas

  @Input() isDimmed: boolean = false; // Apagar tarjeta si es true
}
