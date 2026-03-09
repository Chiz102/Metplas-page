import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface CarouselItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  isClone?: boolean;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div class="carousel-wrap">
      <div class="carousel-outer" (mouseenter)="onCarouselHover(true)" (mouseleave)="onCarouselHover(false)">
        <button class="carousel-nav carousel-nav-prev" (click)="carouselPrev()">
          <span class="material-icons-outlined">chevron_left</span>
        </button>
        
        <div class="carousel-viewport" #viewport>
          <div class="carousel-track"
               [style.transform]="'translateX(' + carouselOffset + ')'"
               [style.transition]="carouselTransition">
            @for (item of displayItems; track $index) {
              <div class="carousel-slide" [style.width.%]="100 / itemsVisible">
                <div class="carousel-card" [class.has-image]="!!item.image">
                  @if (item.image) {
                    <div class="card-bg">
                      <img [src]="item.image" [alt]="item.title | translate" loading="lazy">
                    </div>
                    <div class="card-overlay"></div>
                  }
                  <div class="card-content" [class.on-image]="!!item.image">
                    <div class="card-icon" [class.light]="!!item.image">
                      <span class="material-icons-outlined">{{ item.icon }}</span>
                    </div>
                    <h3>{{ item.title | translate }}</h3>
                    <p>{{ item.description | translate }}</p>
                    <div class="card-footer">
                      <a [routerLink]="item.link || '/catalogo'" class="card-link" [class.light]="!!item.image">
                        {{ 'carousel.viewMore' | translate }}
                        <span class="material-icons-outlined">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        
        <button class="carousel-nav carousel-nav-next" (click)="carouselNext()">
          <span class="material-icons-outlined">chevron_right</span>
        </button>
      </div>
      
      <div class="carousel-dots">
        @for (item of items; track item.id; let i = $index) {
          <span class="cdot" [class.active]="i === activeIndex" (click)="goTo(i)"></span>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    
    .carousel-wrap {
      width: 100%;
    }
    
    .carousel-outer {
      display: flex;
      align-items: center;
      gap: 0;
      position: relative;
      width: 100%;
    }
    
    .carousel-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: none;
      background: transparent;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.3s ease;
      padding: 0;
      
      .material-icons-outlined {
        font-size: 30px;
        color: #718096;
        transition: all 0.3s ease;
      }
      
      &:hover .material-icons-outlined {
        color: #2667A9;
        transform: scale(1.1);
      }
    }
    
    .carousel-viewport {
      flex: 1;
      overflow: hidden;
      border-radius: 16px;
    }
    
    .carousel-track {
      display: flex;
      transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
      will-change: transform;
    }
    
    .carousel-slide {
      flex-shrink: 0;
      padding: 4px;
      box-sizing: border-box;
    }
    
    /* ===== CARD ===== */
    .carousel-card {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 280px;
      border-radius: 14px;
      overflow: hidden;
      background: linear-gradient(145deg, #f0f7ff 0%, #e8f4fd 50%, #dbeafe 100%);
      border: 2px solid #e2e8f0;
      transition: all 0.4s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
      
      &.has-image {
        border: none;
        background: #204C81;
      }
      
      &:hover {
        box-shadow: 0 12px 35px rgba(16, 79, 142, 0.18);
        transform: translateY(-4px);
        
        .card-bg img {
          transform: scale(1.08);
        }
        
        .card-overlay {
          background: linear-gradient(
            180deg,
            rgba(32, 76, 129, 0.2) 0%,
            rgba(32, 76, 129, 0.75) 55%,
            rgba(32, 76, 129, 0.92) 100%
          );
        }

        .card-icon.light {
          background: rgba(79, 173, 71, 0.35);
          border-color: rgba(79, 173, 71, 0.5);
        }
      }
    }
    
    .card-bg {
      position: absolute;
      inset: 0;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
    }
    
    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(32, 76, 129, 0.15) 0%,
        rgba(32, 76, 129, 0.65) 50%,
        rgba(32, 76, 129, 0.88) 100%
      );
      transition: background 0.4s ease;
    }
    
    .card-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 1.25rem;
      
      &.on-image {
        justify-content: flex-end;
      }
    }
    
    .card-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(16, 79, 142, 0.08);
      border: 2px solid rgba(16, 79, 142, 0.15);
      border-radius: 12px;
      margin-bottom: 0.75rem;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 24px;
        color: #2667A9;
      }
      
      &.light {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.2);
        
        .material-icons-outlined {
          color: #fff;
        }
      }
    }
    
    .carousel-card h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: #204C81;
      margin-bottom: 0.4rem;
      text-transform: none;
      letter-spacing: 0;
    }

    .carousel-card.has-image h3 {
      color: #fff;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .carousel-card p {
      font-size: 0.85rem;
      color: #4a5568;
      flex: 0;
      margin-bottom: 0.6rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .carousel-card.has-image p {
      color: rgba(255, 255, 255, 0.9);
    }
    
    .card-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: auto;
      padding-top: 0.6rem;
      border-top: 1px solid rgba(16, 79, 142, 0.12);
      
      .has-image & {
        border-color: rgba(255, 255, 255, 0.15);
      }
    }
    
    .card-link {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #2667A9;
      text-decoration: none;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 18px;
        transition: transform 0.3s ease;
      }
      
      &.light {
        color: #fff;
        
        .material-icons-outlined { color: #fff; }
      }
      
      &:hover {
        color: #4FAD47;

        .material-icons-outlined {
          transform: translateX(4px);
          color: #4FAD47;
        }
      }

      &.light:hover {
        color: #5eca56;
        .material-icons-outlined { color: #5eca56; }
      }
    }
    
    /* ===== DOTS ===== */
    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 1rem;
    }
    
    .cdot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #cbd5e0;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &.active {
        background: #2667A9;
        width: 24px;
        border-radius: 4px;
      }
    }
    
    @media (max-width: 768px) {
      .carousel-card {
        height: 260px;
      }
      
      .carousel-nav {
        width: 28px;
        .material-icons-outlined { font-size: 24px; }
      }
    }
  `]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() itemsVisible: number = 1;
  @ViewChild('viewport') viewport!: ElementRef;

  currentIndex = 0;
  carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
  private autoInterval: any;
  private isHovered = false;

  constructor(private cdr: ChangeDetectorRef) {}

  /** Items to display: originals + clones for infinite loop */
  get displayItems(): CarouselItem[] {
    if (!this.items.length) return [];
    const clones = this.items.slice(0, this.itemsVisible).map(item => ({ ...item, isClone: true }));
    return [...this.items, ...clones];
  }

  get carouselOffset(): string {
    const pct = -(this.currentIndex * (100 / this.itemsVisible));
    return pct + '%';
  }

  get activeIndex(): number {
    return this.currentIndex % this.items.length;
  }

  ngOnInit() {
    this.startAutoRotate();
  }

  ngOnDestroy() {
    this.stopAutoRotate();
  }

  startAutoRotate() {
    this.autoInterval = setInterval(() => {
      if (!this.isHovered) this.carouselNext();
    }, 4500);
  }

  stopAutoRotate() {
    if (this.autoInterval) clearInterval(this.autoInterval);
  }

  onCarouselHover(hovered: boolean) {
    this.isHovered = hovered;
  }

  carouselNext() {
    this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
    this.currentIndex++;

    if (this.currentIndex >= this.items.length) {
      // After transitioning to the clone, snap back
      setTimeout(() => {
        this.carouselTransition = 'none';
        this.currentIndex = 0;
        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
            this.cdr.detectChanges();
          });
        });
      }, 520);
    }
  }

  carouselPrev() {
    if (this.currentIndex > 0) {
      this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
      this.currentIndex--;
    } else {
      // Jump to end clone-free
      this.carouselTransition = 'none';
      this.currentIndex = this.items.length - 1;
      this.cdr.detectChanges();
      requestAnimationFrame(() => {
        this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
        this.cdr.detectChanges();
      });
    }
  }

  goTo(index: number) {
    this.carouselTransition = 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)';
    this.currentIndex = index;
    this.restartAutoRotate();
  }

  private restartAutoRotate() {
    this.stopAutoRotate();
    this.startAutoRotate();
  }
}
