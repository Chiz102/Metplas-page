import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-toggle"
      (click)="toggleTheme()"
      [title]="getTooltip()"
      aria-label="Toggle dark/light theme"
    >
      <span class="icon-wrapper">
        @switch(currentMode) {
          @case('light') {
            <span class="material-icons-outlined">light_mode</span>
          }
          @case('dark') {
            <span class="material-icons-outlined">dark_mode</span>
          }
          @case('auto') {
            <span class="material-icons-outlined">brightness_auto</span>
          }
        }
      </span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      background: var(--color-surface);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all var(--transition-fast);
      color: var(--color-text-primary);

      &:hover {
        background: var(--color-surface-elevated);
        border-color: var(--color-accent);
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        .material-icons-outlined {
          font-size: 20px;
          color: var(--color-accent);
        }
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  currentMode: 'light' | 'dark' | 'auto' = 'auto';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentMode = this.themeService.getMode();
    this.themeService.mode$.subscribe(mode => {
      this.currentMode = mode;
    });
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }

  getTooltip(): string {
    const modeNames = {
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'Auto (System)'
    };
    return `Current: ${modeNames[this.currentMode]} - Click to cycle`;
  }
}
