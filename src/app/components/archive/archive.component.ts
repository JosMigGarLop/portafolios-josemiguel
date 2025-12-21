
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
      title: 'OrderPro - Backend',
      madeAt: '',
      builtWith: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Swagger', 'Docker', 'JUnit 5'],
      link: 'https://github.com/JosMigGarLop/backend_order_manager',
      live: 'https://frontendordermanager.vercel.app/' 
    },
    {
      year: '2025',
      title: 'OrderPro - Frontend',
      madeAt: '',
      builtWith: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Karma & Jasmine', 'Node.js'],
      link: 'https://github.com/JosMigGarLop/frontend_order_manager',
      live: 'https://frontendordermanager.vercel.app/' 
    },
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