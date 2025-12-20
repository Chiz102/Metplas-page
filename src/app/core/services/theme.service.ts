import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'metplas:theme';
  private readonly defaultTheme = 'teal-red';

  list(): string[] {
    return ['teal-red', 'purple-gold', 'light', 'sunset'];
  }

  get(): string {
    try {
      return localStorage.getItem(this.storageKey) || this.defaultTheme;
    } catch (e) {
      return this.defaultTheme;
    }
  }

  set(name: string) {
    try {
      document.documentElement.setAttribute('data-theme', name);
      localStorage.setItem(this.storageKey, name);
    } catch (e) {
      // silent
    }
  }

  applySaved() {
    const t = this.get();
    this.set(t);
  }
}
