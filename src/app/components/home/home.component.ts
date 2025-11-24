import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { LanguageService } from '../../services/language.service';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ExperienceItemComponent,
    RouterModule,
    FormsModule
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  sections = [
    { key: 'about', label: { en: 'About', es: 'Acerca de' } },
    { key: 'experience', label: { en: 'Experience', es: 'Experiencia' } },
    { key: 'projects', label: { en: 'Projects', es: 'Proyectos' } }
  ];

  activeSection = 'about';
  hoveredSection: string | null = null;
  experiencesDisplayed: any[] = [];
  projectsDisplayed: any[] = [];
  currentLang: 'en' | 'es' = 'es';
  hoveredExp: any = null;
  hoveredProject: any = null;

  sidebarTitle = 'José Miguel García López';
  sidebarRole = 'Full Stack Developer';
  sidebarDescription = '';

  // EXPERIENCIA PROFESIONAL
  private rawExperiences = [
    {
      period: { en: 'Mar 2025 — Jun 2025', es: 'Mar 2025 — Jun 2025' },
      role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      company: { en: 'Agencia Digital de Andalucía', es: 'Agencia Digital de Andalucía' },
      description: {
        en: 'Developed SessionTimer, a Java desktop application using Swing to monitor session usage across public digital systems. Contributed to PEMA (Oracle APEX) with frontend/backend improvements and optimized queries using SQL and PL/SQL. Gained practical exposure to modern web development technologies such as Spring Boot and Angular, and hands-on experience in DevSecOps and CI/CD using Docker, Jenkins, and Git.',
        es: 'Desarrollé SessionTimer, una aplicación de escritorio en Java usando Swing para monitorizar el uso de sesiones en sistemas digitales públicos. Colaboré en PEMA (Oracle APEX) con mejoras en frontend/backend y consultas optimizadas usando SQL y PL/SQL. Adquirí exposición práctica a tecnologías modernas de desarrollo web como Spring Boot y Angular, y experiencia en DevSecOps y CI/CD usando Docker, Jenkins y Git.'
      },
      techs: ['Java', 'Swing', 'Oracle APEX', 'SQL', 'PL/SQL', 'Docker', 'Jenkins', 'Git', 'Spring Boot', 'Angular']
    },
    {
      period: { en: 'Sep 2023 — Jun 2025', es: 'Sep 2023 — Jun 2025' },
      role: { en: 'Higher Technician in Web Application Development', es: 'Técnico Superior en Desarrollo de Aplicaciones Web' },
      company: { en: 'IES ALIXAR', es: 'IES ALIXAR' },
      description: {
        en: 'Completed full stack development training with focus on Java Spring Boot, Angular, microservices, and database design.',
        es: 'Completé formación en desarrollo Full Stack con enfoque en Java Spring Boot, Angular, microservicios y diseño de bases de datos.'
      },
      techs: [
        'Java', 'Spring Boot', 'Angular', 'TypeScript', 'JavaScript',
        'SQL', 'MySQL', 'MongoDB', 'REST APIs', 'Docker',
        'Tailwind CSS', 'Bootstrap', 'Git', 'JUnit', 'Microservices'
      ]
    },
    {
      period: { en: 'Oct 2014 — Sept 2024', es: 'Oct 2014 — Sept 2024' },
      role: { en: 'Chef', es: 'Chef' },
      company: { en: 'Notable Hotels & Restaurants', es: 'Hoteles y Restaurantes Destacados' },
      description: {
        en: 'Worked in high-level kitchens both nationally and internationally, maintaining strict quality standards in fast-paced environments.',
        es: 'Trabajé en cocinas de alto nivel, tanto a nivel nacional como internacional, manteniendo estrictos estándares de calidad en entornos exigentes.'
      },
      techs: []
    }
  ];

  // PROYECTOS
  private rawProjects = [
    {
      title: { en: 'MyOutfit', es: 'MyOutfit' },
      description: {
        en: 'Full Stack web application for creating and managing personalized outfits. Implemented JWT authentication, complete CRUD functionality, image upload and management, and responsive design with Tailwind CSS. Deployed with Docker for scalability and portability.',
        es: 'Aplicación web Full-Stack para crear y gestionar outfits personalizados. Implementé autenticación JWT, CRUD completo, carga y gestión de imágenes, y diseño responsive con Tailwind CSS. Desplegada con Docker para escalabilidad y portabilidad.'
      },
      image: 'assets/MyOutfitLight.JPG',
      techs: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Tailwind CSS', 'JWT', 'Docker'],
      link: 'https://myoutfit.alixarblue.team'
    },
    {
      title: { en: 'SessionTimer', es: 'SessionTimer' },
      description: {
        en: 'Desktop application in Java using Swing to monitor user activity for the Junta de Andalucía, designed for deployment with JRE/JDK on Windows 10/11 machines, including technical documentation.',
        es: 'Aplicación de escritorio en Java con Swing para monitorizar la actividad de usuarios en la Junta de Andalucía, diseñada para desplegarse con JRE/JDK en equipos con Windows 10/11, incluyendo documentación técnica.'
      },
      image: 'assets/SesionTimer.png',
      techs: ['Java', 'Swing'],
      link: '#'
    },
    {
      title: { en: 'PEMA', es: 'PEMA' },
      description: {
        en: 'Web application for managing internal IT purchases across Andalusian public offices, developed with Oracle APEX, PL/SQL for backend logic, and SQL for reporting and data management.',
        es: 'Aplicación web para la gestión de compras internas de material informático en las sedes de la Junta de Andalucía, desarrollada con Oracle APEX, PL/SQL para la lógica de backend y SQL para informes y gestión de datos.'
      },
      image: 'assets/pema.png',
      techs: ['Oracle APEX', 'PL/SQL', 'SQL'],
      link: '#'
    },
    {
      title: { en: 'Microservices Backend', es: 'Backend con Microservicios' },
      description: {
        en: 'Microservices backend implemented with Spring Boot for managing supermarket tickets. Features asynchronous communication with RabbitMQ, JWT authentication with RS256, MongoDB for notifications, MariaDB for relational data, API Gateway, and Docker deployment. Includes modular services for users, tickets, notifications, and supermarkets with secure and scalable architecture.',
        es: 'Backend con microservicios en Spring Boot para la gestión de tickets de supermercados. Implementa comunicación asíncrona con RabbitMQ, autenticación JWT con RS256, MongoDB para notificaciones, MariaDB para datos relacionales, API Gateway y despliegue con Docker. Incluye servicios modulares para usuarios, tickets, notificaciones y supermercados con arquitectura segura y escalable.'
      },
      image: 'assets/DWESMicroservices2.jpg',
      techs: ['Spring Boot', 'Java', 'RabbitMQ', 'JWT', 'Docker', 'API Gateway', 'MariaDB', 'MongoDB', 'Microservices', 'REST API'],
      link: 'https://github.com/JosMigGarLop/MicroserviciosRabbitMQAPICloudGateway'
    }
  ];

  constructor(
    public languageService: LanguageService,
    private ga: GoogleAnalyticsService
  ) {
    // Inicializar idioma
    this.currentLang = this.languageService.getLanguage() as 'en' | 'es';
    this.updateLanguage(this.currentLang);
    this.updateSidebarText(this.currentLang);

    // Suscribirse a cambios de idioma
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang as 'en' | 'es';
      this.updateLanguage(this.currentLang);
      this.updateSidebarText(this.currentLang);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.onScroll(), 100);
  }

  /** MÉTODO PARA DESCARGAR CV CON GOOGLE ANALYTICS */
  downloadCV() {
    this.ga.event('download_cv', { method: 'PDF' });
    setTimeout(() => {
      window.open('assets/JoseMiguelGarciaLopez_CV_DesarrolladorWeb.pdf', '_blank');
    }, 100);
    return false;
  }

  updateLanguage(lang: 'en' | 'es') {
    this.experiencesDisplayed = this.rawExperiences.map(e => ({
      period: e.period[lang],
      role: e.role[lang],
      company: e.company[lang],
      description: e.description[lang],
      techs: e.techs
    }));

    this.projectsDisplayed = this.rawProjects.map(p => ({
      title: p.title[lang],
      description: p.description[lang],
      image: p.image,
      techs: p.techs,
      link: p.link
    }));
  }

  updateSidebarText(lang: 'en' | 'es') {
    this.sidebarRole = lang === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer';
    this.sidebarDescription = lang === 'es'
      ? 'Diseño y desarrollo aplicaciones web completas y escalables.'
      : 'I design and develop complete, scalable web applications.';
  }

  scrollToSection(sectionId: string) {
    if (sectionId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 120;
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    this.activeSection = sectionId;
  }

  isSectionActive(sectionKey: string) {
    return this.activeSection === sectionKey || this.hoveredSection === sectionKey;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const viewportCenter = window.innerHeight / 2;
    let closestSection = this.activeSection;
    let closestDistance = Infinity;

    for (const section of this.sections) {
      const element = document.getElementById(section.key);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section.key;
      }
    }

    if (closestDistance < 600) {
      this.activeSection = closestSection;
    }

    if (window.scrollY < 150) {
      this.activeSection = 'about';
    } else if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      this.activeSection = 'projects';
    }
  }
}
