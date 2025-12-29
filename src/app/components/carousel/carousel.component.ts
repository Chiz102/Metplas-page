import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface CarouselItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  isClone?: boolean;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section class="section carousel-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ 'carousel.featuredProducts' | translate }}</span>
          <h2 class="section-title">{{ 'carousel.ourSolutions' | translate }}</h2>
        </div>

        <div class="carousel-wrapper" (mouseenter)="onCarouselHover(true)" (mouseleave)="onCarouselHover(false)">
          <div class="carousel-container" [style.--carousel-items-visible]="itemsVisible">
            <div class="carousel-track" [style.transform]="'translateX(' + carouselOffset + ')'" [style.transition]="carouselTransition">
              @for (item of carouselItemsWithClones; track item.id + '-' + item.isClone; let i = $index) {
                <div class="carousel-item">
                  <div class="carousel-card">
                    <div class="carousel-icon">
                      <span class="material-icons-outlined">{{ item.icon }}</span>
                    </div>
                    <h3>{{ item.title | translate }}</h3>
                    <p>{{ item.description | translate }}</p>
                    <div class="carousel-footer">
                      <a routerLink="/catalogo" class="carousel-link">
                        {{ 'carousel.viewMore' | translate }}
                        <span class="material-icons-outlined">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    // Carousel Section
    .carousel-section {
      background: 
        linear-gradient(180deg, 
          #ffffff 0%, 
          #f0f9ff 30%,
          #e0f2fe 50%,
          #ccfbf1 70%,
          #ecfdf5 100%
        );
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 50% 30% at 0% 100%, rgba(34, 197, 94, 0.08) 0%, transparent 40%);
        pointer-events: none;
      }
    }
    
    .carousel-wrapper {
      display: flex;
      align-items: center;
      gap: 0;
      position: relative;
      width: 100%;
    }
    
    .carousel-container {
      flex: 1;
      overflow: hidden;
      border-radius: 0;
      background: transparent;
      border: none;
      height: 400px;
      --carousel-items-visible: 3;
      
      @media (max-width: 768px) {
        height: 300px;
      }
    }
    
    .carousel-track {
      display: flex;
      transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
      gap: 0;
      padding: 0;
      height: 100%;
    }
    
    .carousel-item {
      flex: 0 0 calc(100% / var(--carousel-items-visible));
      padding: var(--space-lg);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .carousel-card {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      height: 100%;
      padding: var(--space-xl);
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #f0f9ff 100%);
      border: 2px solid transparent;
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 2px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(34, 197, 94, 0.3) 50%, rgba(167, 139, 250, 0.2) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #06b6d4 0%, #22c55e 50%, #a855f7 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
      }
      
      &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 
          0 25px 50px rgba(6, 182, 212, 0.2),
          0 10px 20px rgba(34, 197, 94, 0.1);
        background: linear-gradient(145deg, #ecfeff 0%, #f0fdfa 50%, #ffffff 100%);
        
        &::before {
          opacity: 1;
        }
        
        &::after {
          transform: scaleX(1);
        }
        
        .carousel-icon {
          background: linear-gradient(135deg, #0891b2 0%, #059669 50%, #7c3aed 100%);
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
          
          .material-icons-outlined {
            color: #ffffff;
          }
        }
      }
    }
    
    .carousel-icon {
      width: 68px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(34, 197, 94, 0.1) 100%);
      border: 2px solid rgba(6, 182, 212, 0.25);
      border-radius: 16px;
      margin-bottom: var(--space-lg);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      .material-icons-outlined {
        font-size: 32px;
        background: linear-gradient(135deg, #0891b2 0%, #059669 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        transition: all 0.3s ease;
      }
    }
    
    .carousel-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: var(--space-sm);
      text-transform: none;
      letter-spacing: 0;
    }
    
    .carousel-card p {
      font-size: 0.95rem;
      color: var(--color-text-secondary);
      flex: 1;
      margin-bottom: var(--space-md);
      line-height: 1.7;
      max-width: 100%;
    }
    
    .carousel-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: var(--space-md);
      margin-top: var(--space-md);
      padding-top: var(--space-md);
      border-top: 1px solid rgba(6, 182, 212, 0.15);
    }
    
    .carousel-link {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      font-size: 0.9rem;
      font-weight: 700;
      background: linear-gradient(135deg, #0891b2 0%, #059669 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transition: all var(--transition-fast);
      text-decoration: none;
      
      .material-icons-outlined {
        font-size: 18px;
        color: #0891b2;
        transition: transform var(--transition-fast);
      }
      
      &:hover {
        .material-icons-outlined {
          transform: translateX(6px);
          color: #059669;
        }
      }
    }
    
    .carousel-indicators {
      display: none;
    }
    
    .indicator {
      display: none;
    }

    .section-header {
      margin-bottom: var(--space-3xl);
      text-align: center;
      position: relative;
      
      .section-label {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: 10px 24px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(34, 197, 94, 0.08) 100%);
        border: 2px solid rgba(6, 182, 212, 0.3);
        border-radius: var(--radius-full);
        font-size: 0.875rem;
        font-weight: 700;
        color: #0891b2;
        margin-bottom: var(--space-lg);
        
        &::before, &::after {
          content: '';
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4 0%, #22c55e 100%);
          border-radius: 2px;
        }
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: var(--space-md);
        background: linear-gradient(135deg, #0f172a 0%, #0891b2 50%, #059669 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .section-description {
        font-size: 1.125rem;
        color: var(--color-text-secondary);
        max-width: 600px;
        margin: 0 auto;
      }
    }
  `]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() itemsVisible: number = 3;

  carouselIndex = 0;
  carouselOffset = '0%';
  carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
  carouselAutoRotateInterval: any;
  carouselIsHovered = false;

  constructor(private cdr: ChangeDetectorRef) {}

  get translatePercent(): number {
    return 100 / this.itemsVisible;
  }

  get carouselItemsWithClones(): CarouselItem[] {
    return [...this.items, ...this.items.slice(0, this.itemsVisible).map(item => ({ ...item, isClone: true }))] as CarouselItem[];
  }

  ngOnInit() {
    this.startCarouselAutoRotate();
  }

  ngOnDestroy() {
    if (this.carouselAutoRotateInterval) {
      clearInterval(this.carouselAutoRotateInterval);
    }
  }

  startCarouselAutoRotate() {
    this.carouselAutoRotateInterval = setInterval(() => {
      if (!this.carouselIsHovered) {
        this.carouselNext();
      }
    }, 4000);
  }

  onCarouselHover(hovered: boolean) {
    this.carouselIsHovered = hovered;
  }

  carouselNext() {
    this.carouselIndex++;
    this.updateCarouselOffset();

    if (this.carouselIndex === (this.items.length / this.itemsVisible) + 2) {
      console.log('Reached end, waiting for animation to finish...');

      const track = document.querySelector('.carousel-track') as HTMLElement;
      if (track) {
        const resetCarousel = () => {
          console.log('Animation finished, resetting...');
          this.carouselTransition = 'none';
          this.carouselIndex = 0;
          this.updateCarouselOffset();
          this.cdr.markForCheck();

          setTimeout(() => {
            console.log('Re-enabling transition');
            this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
            this.cdr.markForCheck();
            track.removeEventListener('transitionend', resetCarousel);
          }, 10);
        };

        track.addEventListener('transitionend', resetCarousel, { once: true });
      }
    }
  }

  carouselPrev() {
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
      this.updateCarouselOffset();
    }
  }

  carouselGoTo(index: number) {
    this.carouselIndex = index;
    this.updateCarouselOffset();
  }

  private updateCarouselOffset() {
    console.log('Updating carousel offset for index:', this.carouselIndex);
    this.carouselOffset = (-this.carouselIndex * this.translatePercent) + '%';
  }
}
