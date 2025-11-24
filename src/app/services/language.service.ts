import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // Estado actual del idioma
  private currentLang = new BehaviorSubject<string>('en');

  // Observable público para suscribirse a cambios de idioma
  lang$ = this.currentLang.asObservable();

  constructor() {
    // Comprobar si hay idioma guardado en localStorage
    const saved = localStorage.getItem('lang');
    if (saved) {
      this.currentLang.next(saved);
    }
  }

  // Cambiar el idioma y guardarlo en localStorage
  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.currentLang.next(lang);
  }

  // Obtener el idioma actual
  getLanguage() {
    return this.currentLang.value;
  }
}
