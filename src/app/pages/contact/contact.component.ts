import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { ContactMessage, CompanyInfo } from '../../core/models/catalog.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-deco-tl"></div>
      <div class="hero-deco-br"></div>
      
      <div class="container hero-inner">
        <div class="hero-badge animate-in">
          <span class="material-icons-outlined">mail</span>
          {{ 'contact.contactUs' | translate }}
        </div>
        <h1 class="animate-in d1">{{ 'contact.howCanWeHelp' | translate }} <span class="accent">{{ 'contact.help' | translate }}</span>?</h1>
        <p class="hero-desc animate-in d2">{{ 'contact.helpDescription' | translate }}</p>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="container contact-grid">
        <!-- Contact Form -->
        <div class="form-wrapper">
          <div class="form-header">
            <h2>{{ 'contact.sendMessage' | translate }}</h2>
            <p>{{ 'contact.formDescription' | translate }}</p>
          </div>

          @if (successMessage()) {
            <div class="alert alert-success">
              <span class="material-icons-outlined">check_circle</span>
              {{ successMessage() }}
            </div>
          }

          @if (errorMessage()) {
            <div class="alert alert-error">
              <span class="material-icons-outlined">error</span>
              {{ errorMessage() }}
            </div>
          }

          <form (ngSubmit)="submitForm()" #contactForm="ngForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">{{ 'contact.fullName' | translate }}*</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" required
                       [placeholder]="'contact.namePlaceholder' | translate">
              </div>
              <div class="form-group">
                <label for="email">{{ 'contact.email' | translate }}*</label>
                <input type="email" id="email" name="email" [(ngModel)]="formData.email" required
                       [placeholder]="'contact.emailPlaceholder' | translate">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">{{ 'contact.phone' | translate }}</label>
                <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone"
                       [placeholder]="'contact.phonePlaceholder' | translate">
              </div>
              <div class="form-group">
                <label for="company">{{ 'contact.company' | translate }}</label>
                <input type="text" id="company" name="company" [(ngModel)]="formData.company"
                       [placeholder]="'contact.companyPlaceholder' | translate">
              </div>
            </div>

            <div class="form-group">
              <label for="subject">{{ 'contact.subject' | translate }}*</label>
              <input type="text" id="subject" name="subject" [(ngModel)]="formData.subject" required
                     [placeholder]="'contact.subjectPlaceholder' | translate">
            </div>

            <div class="form-group">
              <label for="message">{{ 'contact.message' | translate }}*</label>
              <textarea id="message" name="message" [(ngModel)]="formData.message" required rows="5"
                        [placeholder]="'contact.messagePlaceholder' | translate"></textarea>
            </div>

            <button type="submit" class="submit-btn" [disabled]="isSubmitting() || !contactForm.valid">
              @if (isSubmitting()) {
                <span class="material-icons-outlined spinning">sync</span>
                {{ 'contact.sending' | translate }}
              } @else {
                <span class="material-icons-outlined">send</span>
                {{ 'contact.send' | translate }}
              }
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-card">
            <h3>{{ 'contact.contactInfo' | translate }}</h3>
            <p class="info-subtitle">{{ 'contact.contactInfoDesc' | translate }}</p>

            <div class="info-items">
              <a [href]="'tel:' + (company?.phone?.replace(' ', '') || '+56996154315')" class="info-item">
                <span class="info-icon blue">
                  <span class="material-icons-outlined">phone</span>
                </span>
                <div>
                  <span class="info-label">{{ 'common.phone' | translate }}</span>
                  <span class="info-value">{{ company?.phone || '+569 9615 4315' }}</span>
                </div>
              </a>

              <a [href]="'mailto:' + (company?.email || 'contacto@metplastech.cl')" class="info-item">
                <span class="info-icon blue">
                  <span class="material-icons-outlined">mail</span>
                </span>
                <div>
                  <span class="info-label">{{ 'common.email' | translate }}</span>
                  <span class="info-value">{{ company?.email || 'contacto@metplastech.cl' }}</span>
                </div>
              </a>

              <a [href]="whatsappUrl" target="_blank" class="info-item">
                <span class="info-icon green">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <div>
                  <span class="info-label">WhatsApp</span>
                  <span class="info-value">{{ 'contact.writeUsDirect' | translate }}</span>
                </div>
              </a>

              <div class="info-item">
                <span class="info-icon blue">
                  <span class="material-icons-outlined">location_on</span>
                </span>
                <div>
                  <span class="info-label">{{ 'contact.location' | translate }}</span>
                  <span class="info-value">{{ company?.address || 'Curicó – Región del Maule – Chile' }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hours-card">
            <h4>
              <span class="material-icons-outlined">schedule</span>
              {{ 'contact.businessHours' | translate }}
            </h4>
            <div class="hours-list">
              <div class="hours-row">
                <span>{{ 'contact.mondayFriday' | translate }}</span>
                <span>9:00 - 18:00</span>
              </div>
              <div class="hours-row">
                <span>{{ 'contact.saturday' | translate }}</span>
                <span>9:00 - 13:00</span>
              </div>
              <div class="hours-row">
                <span>{{ 'contact.sunday' | translate }}</span>
                <span>{{ 'contact.closed' | translate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    
    .deco-bar {
      height: 12px;
      background: linear-gradient(to bottom,
        #229443 0%, #229443 25%,
        #104F8E 25%, #104F8E 75%,
        #229443 75%, #229443 100%
      );
    }

    /* ===== HERO ===== */
    .page-hero {
      position: relative;
      padding: calc(100px + 3rem) 0 3rem;
      text-align: center;
      background: #fff;
      overflow: hidden;
    }
    
    .hero-deco-tl {
      position: absolute;
      top: 0; left: 0;
      width: 180px; height: 100%;
      background: linear-gradient(135deg, #229443 0%, #229443 8%, #104F8E 8%, #104F8E 16%, transparent 16%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-deco-br {
      position: absolute;
      bottom: 0; right: 0;
      width: 180px; height: 100%;
      background: linear-gradient(-45deg, #229443 0%, #229443 8%, #104F8E 8%, #104F8E 16%, transparent 16%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-inner { position: relative; z-index: 1; }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      background: #f0f9ff;
      border: 2px solid #104F8E;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #104F8E;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      
      .material-icons-outlined { font-size: 18px; color: #229443; }
    }
    
    h1 {
      color: #0a2540;
      margin-bottom: 1rem;
      
      .accent {
        color: #229443;
      }
    }
    
    .hero-desc {
      font-size: 1.1rem;
      color: #4a5568;
      font-style: italic;
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    /* ===== CONTACT SECTION ===== */
    .contact-section {
      padding: 4rem 0;
      background: #fff;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 3rem;
      
      @media (max-width: 1024px) { grid-template-columns: 1fr; }
    }
    
    .form-wrapper {
      padding: 2rem;
      background: #f8fafc;
      border: 2px solid #229443;
      border-radius: 16px;
      
      .form-header {
        margin-bottom: 2rem;
        
        h2 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          color: #0a2540;
        }
        
        p {
          color: #718096;
          font-style: italic;
          max-width: 100%;
        }
      }
    }
    
    .alert {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 10px;
      margin-bottom: 1.5rem;
      
      .material-icons-outlined { font-size: 24px; }
      
      &-success {
        background: rgba(34, 148, 67, 0.1);
        border: 1px solid #229443;
        color: #229443;
      }
      
      &-error {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid #ef4444;
        color: #ef4444;
      }
    }
    
    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      
      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }
    
    .form-group {
      margin-bottom: 1rem;
      
      label {
        display: block;
        font-size: 0.9rem;
        font-weight: 700;
        color: #0a2540;
        margin-bottom: 0.5rem;
      }
      
      input, textarea {
        width: 100%;
        padding: 12px 16px;
        font-family: inherit;
        font-size: 0.95rem;
        color: #0a2540;
        background: #fff;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        transition: all 0.2s ease;
        
        &::placeholder { color: #a0aec0; }
        
        &:focus {
          outline: none;
          border-color: #104F8E;
          box-shadow: 0 0 0 3px rgba(16, 79, 142, 0.1);
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }
    
    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #229443, #2ecc71);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(34, 148, 67, 0.3);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      .spinning { animation: spin 1s linear infinite; }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* Info Card */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .info-card {
      padding: 2rem;
      background: #fff;
      border: 2px solid #229443;
      border-radius: 16px;
      
      h3 {
        margin-bottom: 0.25rem;
        font-size: 1.3rem;
        color: #0a2540;
      }
      
      .info-subtitle {
        color: #718096;
        font-style: italic;
        margin-bottom: 1.5rem;
        max-width: 100%;
      }
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem;
      text-decoration: none;
      border-radius: 10px;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      
      &:hover {
        background: #f0f9ff;
        border-color: #e2e8f0;
      }
      
      .info-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        flex-shrink: 0;
        
        .material-icons-outlined { font-size: 22px; color: #fff; }
        svg { width: 22px; height: 22px; color: #fff; }
        
        &.blue { background: #e0f2fe; .material-icons-outlined { color: #104F8E; } }
        &.green { background: #dcfce7; svg { color: #229443; } }
      }
      
      div {
        display: flex;
        flex-direction: column;
      }
      
      .info-label {
        font-size: 0.8rem;
        color: #718096;
        font-weight: 500;
      }
      
      .info-value {
        font-size: 0.95rem;
        font-weight: 700;
        color: #0a2540;
      }
    }
    
    .hours-card {
      padding: 1.5rem;
      background: #f0f9ff;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      
      h4 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1rem;
        margin-bottom: 1rem;
        color: #0a2540;
        
        .material-icons-outlined { color: #104F8E; }
      }
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .hours-row {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #e2e8f0;
      
      &:last-child { border-bottom: none; }
      
      span:first-child { color: #4a5568; font-weight: 600; }
      span:last-child { font-weight: 700; color: #0a2540; }
    }
    
    /* Animations */
    .animate-in {
      animation: slideUp 0.7s ease forwards;
      opacity: 0;
      transform: translateY(25px);
    }
    .d1 { animation-delay: 0.1s; }
    .d2 { animation-delay: 0.2s; }
    
    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactComponent {
  private api = inject(ApiService);
  
  company: CompanyInfo | null = null;
  whatsappUrl = 'https://wa.me/56996154315?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n';
  
  formData: ContactMessage = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  constructor() {
    this.api.getCompanyInfo().subscribe(info => {
      this.company = info;
      if (info?.whatsapp) {
        const phone = info.whatsapp.replace(/\D/g, '');
        this.whatsappUrl = `https://wa.me/${phone}?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n`;
      }
    });
  }

  submitForm() {
    this.isSubmitting.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    this.api.sendContactMessage(this.formData).subscribe({
      next: (response) => {
        this.successMessage.set(response.message);
        this.formData = { name: '', email: '', phone: '', company: '', subject: '', message: '' };
        this.isSubmitting.set(false);
      },
      error: () => {
        this.errorMessage.set('Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
        this.isSubmitting.set(false);
      }
    });
  }
}
