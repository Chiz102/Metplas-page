import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<string>('es');
  
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language');
    const lang = (savedLang === 'es' || savedLang === 'en') ? savedLang : 'es';
    this.setLanguage(lang);
  }
  
  setLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }
  
  getCurrentLanguage(): string {
    return this.currentLanguage();
  }
}

