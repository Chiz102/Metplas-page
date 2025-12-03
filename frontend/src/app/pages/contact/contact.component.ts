import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ContactMessage, CompanyInfo } from '../../core/models/catalog.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="hero-label animate-fade-in-up">
          <span class="material-icons-outlined">mail</span>
          Contáctanos
        </span>
        <h1 class="animate-fade-in-up delay-1">¿Cómo podemos <span class="text-gradient">ayudarte</span>?</h1>
        <p class="hero-description animate-fade-in-up delay-2">
          Estamos aquí para responder tus preguntas y brindarte la mejor asesoría.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <div class="form-header">
              <h2>Envíanos un mensaje</h2>
              <p>Completa el formulario y te responderemos a la brevedad.</p>
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
                  <label for="name">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Tu nombre">
                </div>
                
                <div class="form-group">
                  <label for="email">Correo electrónico *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    placeholder="tu@email.com">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    [(ngModel)]="formData.phone"
                    placeholder="+56 9 1234 5678">
                </div>
                
                <div class="form-group">
                  <label for="company">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    [(ngModel)]="formData.company"
                    placeholder="Nombre de tu empresa">
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Asunto *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="¿En qué podemos ayudarte?">
              </div>

              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  placeholder="Cuéntanos más detalles..."></textarea>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary btn-lg submit-btn"
                [disabled]="isSubmitting() || !contactForm.valid">
                @if (isSubmitting()) {
                  <span class="material-icons-outlined spinning">sync</span>
                  Enviando...
                } @else {
                  <span class="material-icons-outlined">send</span>
                  Enviar mensaje
                }
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card">
              <h3>Información de contacto</h3>
              <p>También puedes comunicarte con nosotros directamente:</p>

              <div class="info-items">
                <a [href]="'tel:' + (company?.phone?.replace(' ', '') || '+56996154315')" class="info-item">
                  <span class="info-icon">
                    <span class="material-icons-outlined">phone</span>
                  </span>
                  <div>
                    <span class="info-label">Teléfono</span>
                    <span class="info-value">{{ company?.phone || '+569 9615 4315' }}</span>
                  </div>
                </a>

                <a [href]="'mailto:' + (company?.email || 'contacto@metplastech.cl')" class="info-item">
                  <span class="info-icon">
                    <span class="material-icons-outlined">mail</span>
                  </span>
                  <div>
                    <span class="info-label">Email</span>
                    <span class="info-value">{{ company?.email || 'contacto@metplastech.cl' }}</span>
                  </div>
                </a>

                <a [href]="whatsappUrl" target="_blank" class="info-item whatsapp">
                  <span class="info-icon whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <div>
                    <span class="info-label">WhatsApp</span>
                    <span class="info-value">Escríbenos directo</span>
                  </div>
                </a>

                <div class="info-item">
                  <span class="info-icon">
                    <span class="material-icons-outlined">location_on</span>
                  </span>
                  <div>
                    <span class="info-label">Ubicación</span>
                    <span class="info-value">{{ company?.address || 'Curicó – Región del Maule – Chile' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="hours-card">
              <h4>
                <span class="material-icons-outlined">schedule</span>
                Horario de atención
              </h4>
              <div class="hours-list">
                <div class="hours-row">
                  <span>Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div class="hours-row">
                  <span>Sábado</span>
                  <span>9:00 - 13:00</span>
                </div>
                <div class="hours-row">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: calc(80px + var(--space-4xl)) 0 var(--space-2xl);
      text-align: center;
      background: 
        radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.1) 0%, transparent 60%);
    }
    
    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      color: var(--color-accent);
      margin-bottom: var(--space-lg);
      
      .material-icons-outlined {
        font-size: 16px;
      }
    }
    
    h1 {
      margin-bottom: var(--space-md);
      
      .text-gradient {
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
      max-width: 500px;
      margin: 0 auto;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: var(--space-3xl);
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .contact-form-wrapper {
      padding: var(--space-2xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      .form-header {
        margin-bottom: var(--space-2xl);
        
        h2 {
          margin-bottom: var(--space-sm);
        }
        
        p {
          color: var(--color-text-muted);
        }
      }
    }
    
    .alert {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-lg);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-xl);
      
      .material-icons-outlined {
        font-size: 24px;
      }
      
      &-success {
        background: rgba(0, 255, 157, 0.1);
        border: 1px solid rgba(0, 255, 157, 0.3);
        color: var(--color-accent-secondary);
      }
      
      &-error {
        background: rgba(255, 68, 68, 0.1);
        border: 1px solid rgba(255, 68, 68, 0.3);
        color: #ff4444;
      }
    }
    
    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .form-group {
      margin-bottom: var(--space-lg);
      
      label {
        display: block;
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      input, textarea {
        width: 100%;
        padding: var(--space-md);
        font-family: var(--font-primary);
        font-size: 1rem;
        color: var(--color-text-primary);
        background: var(--color-surface-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        
        &::placeholder {
          color: var(--color-text-muted);
        }
        
        &:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-accent-glow);
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }
    
    .submit-btn {
      width: 100%;
      
      .spinning {
        animation: spin 1s linear infinite;
      }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }
    
    .info-card {
      padding: var(--space-2xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      h3 {
        margin-bottom: var(--space-sm);
      }
      
      > p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
      }
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-md);
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
      
      &:hover {
        background: var(--color-surface-elevated);
      }
      
      .info-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        
        .material-icons-outlined {
          font-size: 24px;
          color: var(--color-accent);
        }
        
        &.whatsapp-icon {
          background: rgba(37, 211, 102, 0.1);
          border-color: rgba(37, 211, 102, 0.3);
          
          svg {
            width: 24px;
            height: 24px;
            color: #25d366;
          }
        }
      }
      
      div {
        display: flex;
        flex-direction: column;
      }
      
      .info-label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      
      .info-value {
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-text-primary);
      }
      
      &.whatsapp:hover {
        background: rgba(37, 211, 102, 0.1);
      }
    }
    
    .hours-card {
      padding: var(--space-xl);
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      
      h4 {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 1.1rem;
        margin-bottom: var(--space-lg);
        
        .material-icons-outlined {
          color: var(--color-accent);
        }
      }
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
    
    .hours-row {
      display: flex;
      justify-content: space-between;
      padding: var(--space-sm) 0;
      border-bottom: 1px solid var(--color-border);
      
      &:last-child {
        border-bottom: none;
      }
      
      span:first-child {
        color: var(--color-text-secondary);
      }
      
      span:last-child {
        font-weight: 500;
        color: var(--color-text-primary);
      }
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
        this.formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        };
        this.isSubmitting.set(false);
      },
      error: () => {
        this.errorMessage.set('Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
        this.isSubmitting.set(false);
      }
    });
  }
}

