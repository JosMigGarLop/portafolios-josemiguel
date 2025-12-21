import { Injectable } from '@angular/core';

declare function gtag(command: 'config' | 'event', targetId: string, params?: any): void;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {

  constructor() {}

  // Configuración inicial de GA (opcional)
  public config(trackingId: string, params?: any) {
    gtag('config', trackingId, params);
  }

  // Registrar eventos personalizados
  public event(eventName: string, params?: any) {
    gtag('event', eventName, params);
  }
}
