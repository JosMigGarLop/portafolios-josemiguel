// Componente Archive
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './archive.component.html'
})
export class ArchiveComponent {
  // Lista de proyectos
  projects = [
    {
      year: '2025',
      title: 'MyOutfit',
      madeAt: '', 
      builtWith: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Tailwind CSS', 'JWT', 'Docker'],
      link: 'myoutfit.alixarblue.team'
    },
    {
      year: '2025',
      title: 'SessionTimer',
      madeAt: 'ADA',
      builtWith: ['Java', 'Swing'],
      link: '#'
    },
    {
      year: '2025',
      title: 'PEMA',
      madeAt: 'ADA',
      builtWith: ['Oracle APEX', 'PL/SQL', 'SQL'],
      link: '#'
    },
{
  year: '2024',
  title: 'Microservices Backend',
  madeAt: '', 
  builtWith: ['Spring Boot', 'Java', 'RabbitMQ', 'JWT', 'Docker', 'API Gateway', 'MariaDB', 'MongoDB', 'Microservices', 'REST API'],
  link: 'https://github.com/JosMigGarLop/MicroserviciosRabbitMQAPICloudGateway'
}

  ];
}
