import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {

  // Título del proyecto
  @Input() title!: string;

  // Descripción del proyecto
  @Input() description!: string;

  // Imagen del proyecto
  @Input() image!: string;

  // Tecnologías utilizadas en el proyecto
  @Input() techs: string[] = [];

  // Enlace al proyecto
  @Input() link!: string;

  // Atenuar tarjeta si es true
  @Input() isDimmed: boolean = false;

  // Eventos para hover
  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseLeave = new EventEmitter<void>();
}
