import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  isClone?: boolean;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section carousel-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Productos Destacados</span>
          <h2 class="section-title">Nuestras Soluciones</h2>
        </div>

        <div class="carousel-wrapper" (mouseenter)="onCarouselHover(true)" (mouseleave)="onCarouselHover(false)">
          <div class="carousel-container" [style.--carousel-items-visible]="itemsVisible">
            <div class="carousel-track" [style.transform]="'translateX(' + carouselOffset + ')'" [style.transition]="carouselTransition">
              @for (item of carouselItemsWithClones; track item.id + '-' + item.isClone; let i = $index) {
                <div class="carousel-item">
                  <div class="carousel-image-wrap">
                    <img class="carousel-image" src="{{ item.image }}" alt="{{ item.title }}" />
                    <div class="carousel-caption">
                      <h3>{{ item.title }}</h3>
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
      background: transparent;
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
      padding: 0;
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    .carousel-image-wrap {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-lg);
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-caption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: var(--space-md);
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%);
      color: #fff;
    }
    
    /* old card styles removed - images used instead */
    
    .carousel-indicators {
      display: none;
    }
    
    .indicator {
      display: none;
    }

    .section-header {
      margin-bottom: var(--space-3xl);
      text-align: center;
      
      .section-label {
        display: inline-block;
        padding: var(--space-xs) var(--space-md);
        background: var(--color-accent-light);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-accent);
        margin-bottom: var(--space-lg);
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: var(--space-md);
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
