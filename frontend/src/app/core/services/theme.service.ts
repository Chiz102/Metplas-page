import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'metplas:theme';
  private readonly modeStorageKey = 'metplas:theme-mode';
  // Default palette when no user selection exists
  private readonly defaultTheme = 'light';
  private readonly defaultMode = 'auto'; // 'auto', 'light', 'dark'

  private modeSubject = new BehaviorSubject<'light' | 'dark' | 'auto'>('auto');
  public mode$ = this.modeSubject.asObservable();

  constructor() {
    // Detect system preference on init
    this.initializeMode();
  }

  private initializeMode() {
    const savedMode = this.getSavedMode();
    this.modeSubject.next(savedMode);
    this.applyMode(savedMode);
  }

  private getSavedMode(): 'light' | 'dark' | 'auto' {
    try {
      const saved = localStorage.getItem(this.modeStorageKey);
      if (saved === 'light' || saved === 'dark' || saved === 'auto') {
        return saved;
      }
    } catch (e) {
      // silent
    }
    return this.defaultMode;
  }

  private getSystemMode(): 'light' | 'dark' {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  private applyMode(mode: 'light' | 'dark' | 'auto') {
    const actualMode = mode === 'auto' ? this.getSystemMode() : mode;
    document.documentElement.setAttribute('data-color-mode', actualMode);
  }

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

  getMode(): 'light' | 'dark' | 'auto' {
    return this.modeSubject.value;
  }

  setMode(mode: 'light' | 'dark' | 'auto') {
    try {
      this.modeSubject.next(mode);
      localStorage.setItem(this.modeStorageKey, mode);
      this.applyMode(mode);
      // Ensure the active palette matches the chosen mode so "light" actually uses the light palette
      if (mode === 'light') {
        this.set('light');
      } else if (mode === 'dark') {
        // If the currently selected palette is a light palette, switch to a dark-friendly one
        const current = this.get();
        if (current === 'light') {
          this.set('teal-red');
        }
      }
    } catch (e) {
      // silent
    }
  }

  toggleMode() {
    const current = this.getMode();
    let next: 'light' | 'dark' | 'auto';
    
    if (current === 'light') {
      next = 'dark';
    } else if (current === 'dark') {
      next = 'auto';
    } else {
      next = 'light';
    }
    
    this.setMode(next);
  }

  applySaved() {
    const t = this.get();
    this.set(t);
    this.initializeMode();
  }
}
