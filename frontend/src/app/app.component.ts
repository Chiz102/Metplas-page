import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class AppComponent {}

