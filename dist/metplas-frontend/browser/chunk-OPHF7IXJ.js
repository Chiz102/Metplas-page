import {
  RouterLink
} from "./chunk-G3S5LBSE.js";
import {
  ApiService,
  TranslateModule,
  TranslatePipe
} from "./chunk-LXXVMBGD.js";
import {
  ChangeDetectorRef,
  CommonModule,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YDRPHY3P.js";

// src/app/components/carousel/carousel.component.ts
var _c0 = ["viewport"];
var _forTrack0 = ($index, $item) => $item.id;
function CarouselComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "video", 19, 1);
    \u0275\u0275listener("loadstart", function CarouselComponent_For_9_Conditional_2_Template_video_loadstart_1_listener() {
      \u0275\u0275restoreView(_r2);
      const cv_r3 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(cv_r3.muted = true);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "div", 20);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.video, \u0275\u0275sanitizeUrl)("muted", true);
  }
}
function CarouselComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 20);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.image, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 2, item_r4.title));
  }
}
function CarouselComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275template(2, CarouselComponent_For_9_Conditional_2_Template, 4, 2)(3, CarouselComponent_For_9_Conditional_3_Template, 4, 4);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "a", 17);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", 100 / ctx_r4.itemsVisible, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("has-image", !!item_r4.image || !!item_r4.video);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r4.video ? 2 : item_r4.image ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on-image", !!item_r4.image || !!item_r4.video);
    \u0275\u0275advance();
    \u0275\u0275classProp("light", !!item_r4.image);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, item_r4.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 18, item_r4.description));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("light", !!item_r4.image);
    \u0275\u0275property("routerLink", item_r4.link || "/catalogo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, "carousel.viewMore"), " ");
  }
}
function CarouselComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275listener("click", function CarouselComponent_For_15_Template_span_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goTo(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r7 === ctx_r4.activeIndex);
  }
}
var CarouselComponent = class _CarouselComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.items = [];
    this.itemsVisible = 1;
    this.currentIndex = 0;
    this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
    this.isHovered = false;
  }
  /** Items to display: originals + clones for infinite loop */
  get displayItems() {
    if (!this.items.length)
      return [];
    const clones = this.items.slice(0, this.itemsVisible).map((item) => __spreadProps(__spreadValues({}, item), { isClone: true }));
    return [...this.items, ...clones];
  }
  get carouselOffset() {
    const pct = -(this.currentIndex * (100 / this.itemsVisible));
    return pct + "%";
  }
  get activeIndex() {
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
      if (!this.isHovered)
        this.carouselNext();
    }, 4500);
  }
  stopAutoRotate() {
    if (this.autoInterval)
      clearInterval(this.autoInterval);
  }
  onCarouselHover(hovered) {
    this.isHovered = hovered;
  }
  carouselNext() {
    this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
    this.currentIndex++;
    if (this.currentIndex >= this.items.length) {
      setTimeout(() => {
        this.carouselTransition = "none";
        this.currentIndex = 0;
        this.cdr.detectChanges();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
            this.cdr.detectChanges();
          });
        });
      }, 520);
    }
  }
  carouselPrev() {
    if (this.currentIndex > 0) {
      this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
      this.currentIndex--;
    } else {
      this.carouselTransition = "none";
      this.currentIndex = this.items.length - 1;
      this.cdr.detectChanges();
      requestAnimationFrame(() => {
        this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
        this.cdr.detectChanges();
      });
    }
  }
  goTo(index) {
    this.carouselTransition = "transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)";
    this.currentIndex = index;
    this.restartAutoRotate();
  }
  restartAutoRotate() {
    this.stopAutoRotate();
    this.startAutoRotate();
  }
  static {
    this.\u0275fac = function CarouselComponent_Factory(t) {
      return new (t || _CarouselComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewport = _t.first);
      }
    }, inputs: { items: "items", itemsVisible: "itemsVisible" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 4, consts: [["viewport", ""], ["cv", ""], [1, "carousel-wrap"], [1, "carousel-outer", 3, "mouseenter", "mouseleave"], [1, "carousel-nav", "carousel-nav-prev", 3, "click"], [1, "material-icons-outlined"], [1, "carousel-viewport"], [1, "carousel-track"], [1, "carousel-slide", 3, "width"], [1, "carousel-nav", "carousel-nav-next", 3, "click"], [1, "carousel-dots"], [1, "cdot", 3, "active"], [1, "carousel-slide"], [1, "carousel-card"], [1, "card-content"], [1, "card-icon"], [1, "card-footer"], [1, "card-link", 3, "routerLink"], [1, "card-bg"], ["autoplay", "", "loop", "", "playsinline", "", "preload", "metadata", 3, "loadstart", "src", "muted"], [1, "card-overlay"], ["loading", "lazy", 3, "src", "alt"], [1, "cdot", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275listener("mouseenter", function CarouselComponent_Template_div_mouseenter_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCarouselHover(true));
        })("mouseleave", function CarouselComponent_Template_div_mouseleave_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCarouselHover(false));
        });
        \u0275\u0275elementStart(2, "button", 4);
        \u0275\u0275listener("click", function CarouselComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.carouselPrev());
        });
        \u0275\u0275elementStart(3, "span", 5);
        \u0275\u0275text(4, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6, 0)(7, "div", 7);
        \u0275\u0275repeaterCreate(8, CarouselComponent_For_9_Template, 20, 22, "div", 8, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275listener("click", function CarouselComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.carouselNext());
        });
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275repeaterCreate(14, CarouselComponent_For_15_Template, 1, 2, "span", 11, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275styleProp("transform", "translateX(" + ctx.carouselOffset + ")")("transition", ctx.carouselTransition);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.displayItems);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.items);
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.carousel-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.carousel-outer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  position: relative;\n  width: 100%;\n}\n.carousel-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n.carousel-nav[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #718096;\n  transition: all 0.3s ease;\n}\n.carousel-nav[_ngcontent-%COMP%]:hover   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #2667A9;\n  transform: scale(1.1);\n}\n.carousel-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  border-radius: 16px;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n.carousel-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px;\n  box-sizing: border-box;\n}\n.carousel-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 280px;\n  border-radius: 14px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      #f0f7ff 0%,\n      #e8f4fd 50%,\n      #dbeafe 100%);\n  border: 2px solid #e2e8f0;\n  transition: all 0.4s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);\n}\n.carousel-card.has-image[_ngcontent-%COMP%] {\n  border: none;\n  background: #204C81;\n}\n.carousel-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 35px rgba(16, 79, 142, 0.18);\n  transform: translateY(-4px);\n}\n.carousel-card[_ngcontent-%COMP%]:hover   .card-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .carousel-card[_ngcontent-%COMP%]:hover   .card-bg[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.carousel-card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(32, 76, 129, 0.2) 0%,\n      rgba(32, 76, 129, 0.75) 55%,\n      rgba(32, 76, 129, 0.92) 100%);\n}\n.carousel-card[_ngcontent-%COMP%]:hover   .card-icon.light[_ngcontent-%COMP%] {\n  background: rgba(79, 173, 71, 0.35);\n  border-color: rgba(79, 173, 71, 0.5);\n}\n.card-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.card-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card-bg[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s ease;\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(32, 76, 129, 0.15) 0%,\n      rgba(32, 76, 129, 0.65) 50%,\n      rgba(32, 76, 129, 0.88) 100%);\n  transition: background 0.4s ease;\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1.25rem;\n}\n.card-content.on-image[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(16, 79, 142, 0.08);\n  border: 2px solid rgba(16, 79, 142, 0.15);\n  border-radius: 12px;\n  margin-bottom: 0.75rem;\n  transition: all 0.3s ease;\n}\n.card-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #2667A9;\n}\n.card-icon.light[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.card-icon.light[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.carousel-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #204C81;\n  margin-bottom: 0.4rem;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.carousel-card.has-image[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.carousel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4a5568;\n  flex: 0;\n  margin-bottom: 0.6rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.carousel-card.has-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 0.6rem;\n  border-top: 1px solid rgba(16, 79, 142, 0.12);\n}\n.has-image[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #2667A9;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.card-link[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n  transition: transform 0.3s ease;\n}\n.card-link.light[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.card-link.light[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  color: #4FAD47;\n}\n.card-link[_ngcontent-%COMP%]:hover   .material-icons-outlined[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: #4FAD47;\n}\n.card-link.light[_ngcontent-%COMP%]:hover {\n  color: #5eca56;\n}\n.card-link.light[_ngcontent-%COMP%]:hover   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #5eca56;\n}\n.carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 1rem;\n}\n.cdot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #cbd5e0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cdot.active[_ngcontent-%COMP%] {\n  background: #2667A9;\n  width: 24px;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .carousel-card[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n  .carousel-nav[_ngcontent-%COMP%] {\n    width: 28px;\n  }\n  .carousel-nav[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=carousel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "src\\app\\components\\carousel\\carousel.component.ts", lineNumber: 357 });
})();

// src/app/pages/home/home.component.ts
var _forTrack02 = ($index, $item) => $item.slug;
var _forTrack1 = ($index, $item) => $item.name;
var _c02 = (a0) => ["/catalogo", a0];
function HomeComponent_For_110_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 92);
  }
  if (rf & 2) {
    const supplier_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", supplier_r1.logo, \u0275\u0275sanitizeUrl)("alt", supplier_r1.name);
  }
}
function HomeComponent_For_110_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "business");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_110_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 14);
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", supplier_r1.country, " ");
  }
}
function HomeComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50)(1, "div", 91);
    \u0275\u0275template(2, HomeComponent_For_110_Conditional_2_Template, 1, 2, "img", 92)(3, HomeComponent_For_110_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HomeComponent_For_110_Conditional_4_Template, 4, 1, "span", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c02, supplier_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, supplier_r1.logo ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, supplier_r1.country ? 4 : -1);
  }
}
function HomeComponent_For_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275listener("click", function HomeComponent_For_117_Template_span_click_0_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToSupplierPage($index_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", $index_r3 === ctx_r3.supplierPage);
  }
}
function HomeComponent_For_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 95)(1, "div", 96);
    \u0275\u0275element(2, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    \u0275\u0275classProp("center", i_r6 === 1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c02, product_r5.supplierSlug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r5.image, \u0275\u0275sanitizeUrl)("alt", product_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.supplier);
  }
}
function HomeComponent_For_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275listener("click", function HomeComponent_For_152_Template_span_click_0_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToFeaturedPage($index_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", $index_r8 === ctx_r3.featuredPage);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.api = inject(ApiService);
    this.categories = [];
    this.clients = [
      { name: "Agrosuper", logo: "assets/images/clients/agrosuper.png" },
      { name: "Sopraval", logo: "assets/images/clients/sopraval.png" },
      { name: "Comafri", logo: "assets/images/clients/Logo_Comafri-1.png" }
    ];
    this.suppliers = [];
    this.featuredProducts = [
      {
        name: "Trimmer Neum\xE1tico IBEX",
        image: "assets/images/products/IBEX-Pneumatic-Trimmers-with-EBC-35-128-Heads.jpg",
        category: "Equipos de Corte",
        supplier: "IBEX",
        supplierSlug: "ibex"
      },
      {
        name: "Guante Euroflex Standard",
        image: "assets/images/products/Euroflex Standard.jpg",
        category: "Seguridad",
        supplier: "Euroflex",
        supplierSlug: "ziegler"
      },
      {
        name: "Afilador Profesional",
        image: "assets/images/products/B SHARP grinding sharpener.jpg",
        category: "Afilado",
        supplier: "Bobet",
        supplierSlug: "bobet"
      },
      {
        name: "Desescamadora ST600",
        image: "assets/images/products/automatic-fish-skinner-st600v-long-model.png",
        category: "Equipos para Pescado",
        supplier: "STEEN",
        supplierSlug: "steen"
      },
      {
        name: "Fusil Profesional Dassaud",
        image: "assets/images/products/dassaud-fils-fusils-D82-0A-30.png",
        category: "Afilado",
        supplier: "DASSAUD",
        supplierSlug: "dassaud"
      },
      {
        name: "Delantal Malla Met\xE1lica",
        image: "assets/images/products/Ecomesh Apron.jpg",
        category: "Protecci\xF3n",
        supplier: "Euroflex",
        supplierSlug: "ziegler"
      }
    ];
    this.carouselItems = [
      {
        id: 1,
        icon: "precision_manufacturing",
        title: "carousel.item1.title",
        description: "carousel.item1.description",
        image: "assets/images/products/IBEX-Pneumatic-Trimmers-with-EBC-35-128-Heads.jpg",
        link: "/catalogo/ibex"
      },
      {
        id: 2,
        icon: "content_cut",
        title: "carousel.item2.title",
        description: "carousel.item2.description",
        image: "assets/images/products/dassaud-fils-fusils-D82-0A-30.png",
        link: "/catalogo/dassaud"
      },
      {
        id: 3,
        icon: "security",
        title: "carousel.item3.title",
        description: "carousel.item3.description",
        image: "assets/images/products/Euroflex Standard.jpg",
        link: "/catalogo/ziegler"
      },
      {
        id: 4,
        icon: "auto_fix_high",
        title: "carousel.item4.title",
        description: "carousel.item4.description",
        image: "assets/images/products/B SHARP grinding sharpener.jpg",
        link: "/catalogo/bobet"
      },
      {
        id: 5,
        icon: "engineering",
        title: "carousel.item5.title",
        description: "carousel.item5.description",
        image: "assets/images/products/automatic-fish-skinner-st600v-long-model.png",
        link: "/catalogo/steen"
      },
      {
        id: 6,
        icon: "handyman",
        title: "carousel.item6.title",
        description: "carousel.item6.description",
        image: "assets/images/products/IBEX-EBC-Modular-Trimmer-Heads-35-to-180.jpg",
        link: "/catalogo/ibex"
      },
      {
        id: 7,
        icon: "air",
        title: "Desinfecci\xF3n de Aire UVC",
        description: "sterilAir: elimina virus, bacterias y hongos en suspensi\xF3n, mejorando la calidad del aire sin qu\xEDmicos.",
        video: "assets/Videos/Filtro_de_aire.mp4",
        link: "/catalogo/sterilair"
      },
      {
        id: 8,
        icon: "water_drop",
        title: "Desinfecci\xF3n de Agua UVC",
        description: "sterilAir: agua microbiol\xF3gicamente segura mediante luz ultravioleta UVC, sin a\xF1adir qu\xEDmicos.",
        video: "assets/Videos/Filtro_de_agua.mp4",
        link: "/catalogo/sterilair"
      },
      {
        id: 9,
        icon: "wb_sunny",
        title: "Desinfecci\xF3n de Superficies UVC",
        description: "sterilAir: descontaminaci\xF3n continua de superficies y cintas transportadoras, sin detener la producci\xF3n.",
        video: "assets/Videos/Barreras_UCV_para_superficies.mp4",
        link: "/catalogo/sterilair"
      }
    ];
    this.scrollY = 0;
    this.featuredPage = 0;
    this.supplierPage = 0;
    this.suppliersPerPage = 6;
    this.productsPerPage = 3;
  }
  onScroll() {
    this.scrollY = window.scrollY;
  }
  get visibleProducts() {
    const start = this.featuredPage * this.productsPerPage;
    return this.featuredProducts.slice(start, start + this.productsPerPage);
  }
  get featuredPages() {
    return new Array(Math.ceil(this.featuredProducts.length / this.productsPerPage));
  }
  get visibleSuppliers() {
    const start = this.supplierPage * this.suppliersPerPage;
    return this.suppliers.slice(start, start + this.suppliersPerPage);
  }
  get supplierPages() {
    return new Array(Math.max(1, Math.ceil(this.suppliers.length / this.suppliersPerPage)));
  }
  prevFeatured() {
    this.featuredPage = this.featuredPage > 0 ? this.featuredPage - 1 : this.featuredPages.length - 1;
  }
  nextFeatured() {
    this.featuredPage = this.featuredPage < this.featuredPages.length - 1 ? this.featuredPage + 1 : 0;
  }
  goToFeaturedPage(idx) {
    this.featuredPage = idx;
  }
  prevSupplier() {
    this.supplierPage = this.supplierPage > 0 ? this.supplierPage - 1 : this.supplierPages.length - 1;
  }
  nextSupplier() {
    this.supplierPage = this.supplierPage < this.supplierPages.length - 1 ? this.supplierPage + 1 : 0;
  }
  goToSupplierPage(idx) {
    this.supplierPage = idx;
  }
  ngOnInit() {
    this.api.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
    this.api.getSuppliers().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }
  ngAfterViewInit() {
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function HomeComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 228, vars: 23, consts: [[1, "hero"], [1, "hero-deco-tl"], [1, "hero-deco-br"], [1, "container", "hero-content"], [1, "hero-text"], [1, "hero-badge", "animate-in"], [1, "badge-dot"], [1, "animate-in", "d1"], [1, "line-1"], [1, "line-2"], [1, "line-3"], [1, "hero-desc", "animate-in", "d2"], [1, "hero-actions", "animate-in", "d3"], ["routerLink", "/catalogo", 1, "btn-primary-green"], [1, "material-icons-outlined"], ["routerLink", "/contacto", 1, "btn-outline-dark"], [1, "hero-visual", "animate-in", "d2"], [1, "showcase"], [1, "ring", "ring-1"], [1, "ring", "ring-2"], [1, "ring", "ring-3"], [1, "ring-center"], ["src", "assets/images/logo.png", "alt", "Metplastech", 1, "showcase-logo"], [1, "float-badge", "fb-1"], [1, "float-badge", "fb-2"], [1, "float-badge", "fb-3"], [1, "stats-section"], [1, "container"], [1, "stats-frame"], [1, "stat-item"], [1, "stat-num"], [1, "stat-txt"], [1, "stat-divider"], [1, "clients-solutions"], [1, "container", "cs-centered"], [1, "cs-header-box"], [1, "cs-small"], [3, "items", "itemsVisible"], [1, "suppliers-section"], [1, "container", "sup-layout"], [1, "sup-left"], [1, "globe-wrap"], [1, "globe-circle"], [1, "sup-title"], [1, "sup-desc"], [1, "sup-right"], [1, "sup-badge"], [1, "sup-carousel"], [1, "nav-arrow", "nav-prev", "sup-nav", 3, "click"], [1, "sup-grid"], [1, "sup-card", 3, "routerLink"], [1, "nav-arrow", "nav-next", "sup-nav", 3, "click"], [1, "sup-footer"], [1, "pagination-dots"], [1, "dot", 3, "active"], ["routerLink", "/catalogo", 1, "btn-outline-dark"], [1, "deco-bar"], [1, "featured-section"], [1, "featured-logo"], ["src", "assets/images/logo.png", "alt", "Metplas Technologies"], [1, "feat-badge"], [1, "feat-title"], [1, "feat-bar"], [1, "feat-desc-pill"], [1, "feat-desc"], [1, "products-carousel"], [1, "nav-arrow", "nav-prev", 3, "click"], [1, "products-row"], [1, "prod-card", 3, "routerLink", "center"], [1, "nav-arrow", "nav-next", 3, "click"], [1, "feat-cta"], ["routerLink", "/catalogo", 1, "btn-outline-white"], [1, "why-section"], [1, "container", "why-layout"], [1, "why-content"], [1, "why-badge"], [1, "why-intro"], [1, "why-features"], [1, "wf-item"], [1, "wf-icon", "green"], [1, "wf-icon", "blue"], [1, "why-visual"], [1, "diamond-frame"], ["src", "assets/images/logo.png", "alt", "Metplastech"], ["routerLink", "/somos", 1, "btn-outline-dark", "why-link"], [1, "cta-section"], [1, "container", "cta-inner"], [1, "cta-ready-badge"], [1, "cta-buttons"], ["routerLink", "/contacto", 1, "btn-cta-green"], ["href", "tel:+56996154315", 1, "btn-cta-white"], [1, "sup-logo"], [3, "src", "alt"], [1, "sup-country"], [1, "dot", 3, "click"], [1, "prod-card", 3, "routerLink"], [1, "prod-img"], ["loading", "lazy", 3, "src", "alt"], [1, "prod-info"], [1, "prod-brand"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "span", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "h1", 7)(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "p", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 12)(24, "a", 13)(25, "span");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 14);
        \u0275\u0275text(29, "arrow_forward");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "a", 15)(31, "span", 14);
        \u0275\u0275text(32, "chat_bubble_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 16)(37, "div", 17);
        \u0275\u0275element(38, "div", 18)(39, "div", 19)(40, "div", 20);
        \u0275\u0275elementStart(41, "div", 21);
        \u0275\u0275element(42, "img", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 23)(44, "span", 14);
        \u0275\u0275text(45, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47, "Certificado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 24)(49, "span", 14);
        \u0275\u0275text(50, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "Env\xEDo Nacional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 25)(54, "span", 14);
        \u0275\u0275text(55, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span");
        \u0275\u0275text(57, "Soporte 24/7");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(58, "section", 26)(59, "div", 27)(60, "div", 28)(61, "div", 29)(62, "span", 30);
        \u0275\u0275text(63, "7+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span", 31);
        \u0275\u0275text(65, "MARCAS ALIADAS");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(66, "div", 32);
        \u0275\u0275elementStart(67, "div", 29)(68, "span", 30);
        \u0275\u0275text(69, "100+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 31);
        \u0275\u0275text(71, "PRODUCTOS");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(72, "div", 32);
        \u0275\u0275elementStart(73, "div", 29)(74, "span", 30);
        \u0275\u0275text(75, "15+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span", 31);
        \u0275\u0275text(77, "A\xD1OS DE EXPERIENCIA");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(78, "section", 33)(79, "div", 34)(80, "div", 35)(81, "span", 36);
        \u0275\u0275text(82, "PRODUCTOS DESTACADOS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "strong");
        \u0275\u0275text(84, "NUESTRAS SOLUCIONES");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(85, "app-carousel", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "section", 38)(87, "div", 39)(88, "div", 40)(89, "div", 41)(90, "div", 42)(91, "span", 14);
        \u0275\u0275text(92, "public");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "h2", 43);
        \u0275\u0275text(94, "MARCAS L\xCDDERES");
        \u0275\u0275element(95, "br");
        \u0275\u0275elementStart(96, "strong");
        \u0275\u0275text(97, "MUNDIALES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "p", 44);
        \u0275\u0275text(99, "Trabajamos con los fabricantes m\xE1s reconocidos de la industria para garantizar productos de la m\xE1s alta calidad.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 45)(101, "div", 46);
        \u0275\u0275element(102, "span", 6);
        \u0275\u0275text(103, " NUESTROS PROVEEDORES ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 47)(105, "button", 48);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_105_listener() {
          return ctx.prevSupplier();
        });
        \u0275\u0275elementStart(106, "span", 14);
        \u0275\u0275text(107, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 49);
        \u0275\u0275repeaterCreate(109, HomeComponent_For_110_Template, 5, 5, "a", 50, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "button", 51);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_111_listener() {
          return ctx.nextSupplier();
        });
        \u0275\u0275elementStart(112, "span", 14);
        \u0275\u0275text(113, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "div", 52)(115, "div", 53);
        \u0275\u0275repeaterCreate(116, HomeComponent_For_117_Template, 1, 2, "span", 54, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "a", 55);
        \u0275\u0275text(119, " VER CAT\xC1LOGO COMPLETO ");
        \u0275\u0275elementStart(120, "span", 14);
        \u0275\u0275text(121, "arrow_forward");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(122, "div", 56);
        \u0275\u0275elementStart(123, "section", 57)(124, "div", 58);
        \u0275\u0275element(125, "img", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 27)(127, "div", 60)(128, "span", 14);
        \u0275\u0275text(129, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(130, " PRODUCTOS DESTACADOS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "h2", 61);
        \u0275\u0275text(132, "EQUIPOS DE");
        \u0275\u0275element(133, "br");
        \u0275\u0275elementStart(134, "strong");
        \u0275\u0275text(135, "ALTA CALIDAD");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(136, "div", 62);
        \u0275\u0275elementStart(137, "div", 63)(138, "p", 64);
        \u0275\u0275text(139, "Descubre nuestra selecci\xF3n de productos industriales de marcas l\xEDderes mundiales.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 65)(141, "button", 66);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_141_listener() {
          return ctx.prevFeatured();
        });
        \u0275\u0275elementStart(142, "span", 14);
        \u0275\u0275text(143, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 67);
        \u0275\u0275repeaterCreate(145, HomeComponent_For_146_Template, 8, 9, "a", 68, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "button", 69);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_147_listener() {
          return ctx.nextFeatured();
        });
        \u0275\u0275elementStart(148, "span", 14);
        \u0275\u0275text(149, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "div", 53);
        \u0275\u0275repeaterCreate(151, HomeComponent_For_152_Template, 1, 2, "span", 54, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 70)(154, "a", 71);
        \u0275\u0275text(155, " VER TODOS LOS PRODUCTOS ");
        \u0275\u0275elementStart(156, "span", 14);
        \u0275\u0275text(157, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(158, "section", 72)(159, "div", 73)(160, "div", 74)(161, "div", 75)(162, "span", 14);
        \u0275\u0275text(163, "lightbulb");
        \u0275\u0275elementEnd();
        \u0275\u0275text(164, " \xBFPor qu\xE9 Elegirnos? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "h2")(166, "em");
        \u0275\u0275text(167, "Compromiso con la");
        \u0275\u0275elementEnd();
        \u0275\u0275element(168, "br");
        \u0275\u0275elementStart(169, "strong");
        \u0275\u0275text(170, "EXCELENCIA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "p", 76);
        \u0275\u0275text(172, "M\xC1S DE 15 A\xD1OS PROPORCIONANDO SOLUCIONES DE ALTA CALIDAD A EMPRESAS L\xCDDERES EN CHILE.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 77)(174, "div", 78)(175, "div", 79)(176, "span", 14);
        \u0275\u0275text(177, "verified");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(178, "div")(179, "h4");
        \u0275\u0275text(180, "Calidad Certificada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "p");
        \u0275\u0275text(182, "Productos con certificaciones internacionales que garantizan los m\xE1s altos est\xE1ndares.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(183, "div", 78)(184, "div", 80)(185, "span", 14);
        \u0275\u0275text(186, "support_agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(187, "div")(188, "h4");
        \u0275\u0275text(189, "Soporte Especializado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "p");
        \u0275\u0275text(191, "Equipo t\xE9cnico capacitado para asesorarte en cada etapa de tu proyecto.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div", 78)(193, "div", 79)(194, "span", 14);
        \u0275\u0275text(195, "local_shipping");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div")(197, "h4");
        \u0275\u0275text(198, "Distribuci\xF3n Nacional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "p");
        \u0275\u0275text(200, "Entrega a todo Chile con tiempos optimizados y seguimiento en tiempo real.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(201, "div", 81)(202, "div", 82);
        \u0275\u0275element(203, "img", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "a", 84);
        \u0275\u0275text(205, " CONOCE M\xC1S SOBRE NOSOTROS ");
        \u0275\u0275elementStart(206, "span", 14);
        \u0275\u0275text(207, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(208, "section", 85)(209, "div", 86)(210, "div", 87);
        \u0275\u0275text(211, "\xBFLISTO PARA COMENZAR?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "h2");
        \u0275\u0275text(213, "OPTIMIZA TU OPERACI\xD3N");
        \u0275\u0275element(214, "br");
        \u0275\u0275elementStart(215, "span");
        \u0275\u0275text(216, "CON LOS MEJORES EQUIPOS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "p");
        \u0275\u0275text(218, "Cont\xE1ctanos hoy y descubre c\xF3mo podemos ayudarte a mejorar la eficiencia de tu negocio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "div", 88)(220, "a", 89)(221, "span", 14);
        \u0275\u0275text(222, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(223, " Solicitar Cotizaci\xF3n ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "a", 90)(225, "span", 14);
        \u0275\u0275text(226, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275text(227, " +569 9615 4315 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "home.badge"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "home.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "home.titleHighlight"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "home.titleEnd"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "home.description"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 19, "home.viewCatalog"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 21, "home.contactUs"));
        \u0275\u0275advance(51);
        \u0275\u0275property("items", ctx.carouselItems)("itemsVisible", 1);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.visibleSuppliers);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.supplierPages);
        \u0275\u0275advance(29);
        \u0275\u0275repeater(ctx.visibleProducts);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.featuredPages);
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe, CarouselComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.deco-bar[_ngcontent-%COMP%] {\n  height: 14px;\n  background:\n    linear-gradient(\n      to bottom,\n      #4FAD47 0%,\n      #4FAD47 22%,\n      #2667A9 22%,\n      #2667A9 78%,\n      #4FAD47 78%,\n      #4FAD47 100%);\n  position: relative;\n  z-index: 5;\n  box-shadow: 0 2px 8px rgba(38, 103, 169, 0.2);\n}\n.deco-bar-angle[_ngcontent-%COMP%] {\n  height: 50px;\n  position: relative;\n  z-index: 5;\n  overflow: hidden;\n}\n.deco-bar-angle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      #4FAD47 0%,\n      #4FAD47 22%,\n      #2667A9 22%,\n      #2667A9 78%,\n      #4FAD47 78%,\n      #4FAD47 100%);\n  clip-path: polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 85vh;\n  display: flex;\n  align-items: center;\n  padding: 100px 0 60px;\n  background:\n    linear-gradient(\n      160deg,\n      #daeefa 0%,\n      #edf6fd 35%,\n      #f5faff 65%,\n      #ffffff 100%);\n  overflow: hidden;\n}\n.hero-deco-tl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 260px;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47 0%,\n      #4FAD47 10%,\n      #204C81 10%,\n      #204C81 21%,\n      rgba(32, 76, 129, 0.07) 21%,\n      transparent 38%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .hero-deco-tl[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-deco-br[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 260px;\n  height: 100%;\n  background:\n    linear-gradient(\n      -45deg,\n      #4FAD47 0%,\n      #4FAD47 10%,\n      #204C81 10%,\n      #204C81 21%,\n      rgba(32, 76, 129, 0.07) 21%,\n      transparent 38%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .hero-deco-br[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 18px;\n  background: transparent;\n  border: none;\n  border-radius: 100px;\n  margin-bottom: 1.25rem;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #4FAD47;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  flex-shrink: 0;\n}\n.hero-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4FAD47;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(79, 173, 71, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(79, 173, 71, 0);\n  }\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%] {\n  color: #204C81;\n  font-size: clamp(2.5rem, 6vw, 4.2rem);\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: -0.01em;\n  line-height: 1.05;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2667A9;\n  font-style: italic;\n  line-height: 1.7;\n  max-width: 520px;\n  margin-bottom: 2rem;\n}\n@media (max-width: 1024px) {\n  .hero-desc[_ngcontent-%COMP%] {\n    margin: 0 auto 2rem;\n  }\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 1024px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn-primary-green[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  background: #204C81;\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(32, 76, 129, 0.25);\n}\n.btn-primary-green[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-primary-green[_ngcontent-%COMP%]:hover {\n  background: #2667A9;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(38, 103, 169, 0.35);\n  color: #fff;\n}\n.btn-outline-dark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  background: transparent;\n  border: 2px solid #204C81;\n  color: #204C81;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  transition: all 0.3s ease;\n}\n.btn-outline-dark[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:hover {\n  background: #204C81;\n  color: #fff;\n  transform: translateY(-2px);\n}\n@media (max-width: 1024px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.showcase[_ngcontent-%COMP%] {\n  position: relative;\n  width: 380px;\n  height: 380px;\n  margin: 0 auto;\n}\n.ring[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid;\n}\n.ring.ring-1[_ngcontent-%COMP%] {\n  inset: 0;\n  border-color: rgba(213, 233, 249, 0.8);\n  background: rgba(213, 233, 249, 0.25);\n}\n.ring.ring-2[_ngcontent-%COMP%] {\n  inset: 35px;\n  border-color: rgba(38, 103, 169, 0.2);\n  background: rgba(213, 233, 249, 0.35);\n  border-style: dashed;\n  animation: _ngcontent-%COMP%_spinRing 18s linear infinite;\n}\n.ring.ring-3[_ngcontent-%COMP%] {\n  inset: 70px;\n  border-color: rgba(38, 103, 169, 0.3);\n  background: rgba(213, 233, 249, 0.45);\n}\n@keyframes _ngcontent-%COMP%_spinRing {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ring-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border-radius: 50%;\n  border: 3px solid rgba(38, 103, 169, 0.2);\n  box-shadow: 0 10px 40px rgba(38, 103, 169, 0.15), 0 4px 15px rgba(0, 0, 0, 0.06);\n}\n.ring-center[_ngcontent-%COMP%]   .showcase-logo[_ngcontent-%COMP%] {\n  width: 75%;\n  height: auto;\n  object-fit: contain;\n}\n.float-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: #fff;\n  border: 1px solid #D5E9F9;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #204C81;\n  box-shadow: 0 4px 12px rgba(38, 103, 169, 0.1);\n  animation: _ngcontent-%COMP%_floatBadge 4s ease-in-out infinite;\n}\n.float-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #4FAD47;\n}\n.float-badge.fb-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: -15%;\n  animation-delay: 0s;\n}\n.float-badge.fb-2[_ngcontent-%COMP%] {\n  top: 55%;\n  right: -20%;\n  animation-delay: 1.3s;\n}\n.float-badge.fb-3[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: -5%;\n  animation-delay: 2.6s;\n}\n@keyframes _ngcontent-%COMP%_floatBadge {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.stats-section[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 3rem;\n  background: #204C81;\n}\n.stats-frame[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  padding: 1.5rem 0;\n  max-width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .stats-frame[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    padding: 1.5rem;\n  }\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.25);\n}\n@media (max-width: 768px) {\n  .stat-divider[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 1px;\n    background: rgba(255, 255, 255, 0.25);\n  }\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 3.5rem;\n  font-weight: 900;\n  color: #ffffff;\n  line-height: 1;\n}\n.stat-txt[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4FAD47;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.clients-solutions[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background:\n    linear-gradient(\n      180deg,\n      #eaf4fd 0%,\n      #d8ecf8 40%,\n      #e8f4fc 100%);\n  border-top: 3px solid #D5E9F9;\n  border-bottom: 3px solid #D5E9F9;\n}\n.cs-centered[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 860px;\n  margin: 0 auto;\n}\n.cs-centered[_ngcontent-%COMP%]   .cs-header-box[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.cs-header-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 14px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #204C81 0%,\n      #2667A9 100%);\n  border: none;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  text-align: center;\n  box-shadow: 0 4px 15px rgba(32, 76, 129, 0.2);\n}\n.cs-header-box[_ngcontent-%COMP%]   .cs-small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4FAD47;\n  letter-spacing: 0.08em;\n}\n.cs-header-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #fff;\n  letter-spacing: 0.05em;\n}\n.cs-header-box.right[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #204C81 0%,\n      #204C81 100%);\n}\n.cs-header-box.right[_ngcontent-%COMP%]   .cs-small[_ngcontent-%COMP%] {\n  color: #4FAD47;\n}\n.cs-header-box.right[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.suppliers-section[_ngcontent-%COMP%] {\n  padding: 4rem 0 5rem;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f0f7ff 60%,\n      #e8f4fd 100%);\n}\n.sup-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 3rem;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .sup-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.globe-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n.globe-circle[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 40% 40%,\n      #5eca56 0%,\n      #4FAD47 30%,\n      #3d9136 60%,\n      #2d6e28 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid #4FAD47;\n  box-shadow: 0 8px 30px rgba(79, 173, 71, 0.25);\n  position: relative;\n  overflow: hidden;\n}\n.globe-circle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 35% 45% at 35% 40%,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 100%),\n    radial-gradient(\n      ellipse 25% 30% at 70% 65%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 100%);\n}\n.globe-circle[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #fff;\n  opacity: 0.5;\n  position: relative;\n  z-index: 1;\n}\n.sup-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.8rem;\n  color: #204C81;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.sup-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2667A9;\n  font-size: 2.2rem;\n  display: block;\n}\n.sup-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: #4a5568;\n  font-style: italic;\n  line-height: 1.6;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.sup-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #204C81 0%,\n      #2667A9 100%);\n  border: none;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.1em;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 12px rgba(32, 76, 129, 0.2);\n}\n.sup-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #4FAD47;\n  border-radius: 50%;\n}\n.sup-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  flex: 1;\n}\n@media (max-width: 640px) {\n  .sup-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sup-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sup-card[_ngcontent-%COMP%]:hover {\n  border-color: #2667A9;\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(38, 103, 169, 0.12);\n  background: #f0f9ff;\n}\n.sup-logo[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 50px;\n  max-width: 140px;\n  object-fit: contain;\n}\n.sup-logo[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #2667A9;\n}\n.sup-country[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.sup-country[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sup-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.sup-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.featured-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background:\n    linear-gradient(\n      180deg,\n      #204C81 0%,\n      #204C81 50%,\n      #204C81 100%);\n  text-align: center;\n  position: relative;\n}\n.featured-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 0 1rem;\n}\n.featured-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: auto;\n  filter: brightness(0) invert(1) brightness(1.2);\n  opacity: 0.3;\n}\n.feat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 100px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.1em;\n  margin-bottom: 1.5rem;\n}\n.feat-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #4FAD47;\n}\n.feat-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-style: italic;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n}\n.feat-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  display: block;\n}\n.feat-bar[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  height: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #4FAD47 0%,\n      #2667A9 50%,\n      #4FAD47 100%);\n  border-radius: 3px;\n  margin: 0 auto 1.5rem;\n}\n.feat-desc-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 30px;\n  background: rgba(79, 173, 71, 0.15);\n  border: 1px solid rgba(79, 173, 71, 0.35);\n  border-radius: 100px;\n  margin-bottom: 3rem;\n}\n.feat-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.95rem;\n  font-style: italic;\n  margin: 0;\n}\n.products-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .products-carousel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.nav-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.nav-arrow[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: #4FAD47;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.nav-arrow[_ngcontent-%COMP%]:hover   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #5eca56;\n  transform: scale(1.15);\n}\n.nav-arrow.sup-nav[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #718096;\n  filter: none;\n}\n.nav-arrow.sup-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(38, 103, 169, 0.08);\n}\n.nav-arrow.sup-nav[_ngcontent-%COMP%]:hover   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #2667A9;\n}\n@media (max-width: 768px) {\n  .nav-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n.pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.pagination-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #4FAD47;\n  width: 12px;\n  height: 12px;\n}\n.sup-footer[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #cbd5e0;\n}\n.sup-footer[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #2667A9;\n}\n.products-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  flex: 1;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .products-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 100%;\n    margin: 0 auto;\n  }\n}\n.prod-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 2px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  overflow: hidden;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.prod-card.center[_ngcontent-%COMP%] {\n  transform: none;\n  border-color: rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.1);\n}\n@media (min-width: 769px) {\n  .prod-card.center[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n  }\n}\n.prod-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.03);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n}\n.prod-img[_ngcontent-%COMP%] {\n  height: 200px;\n  background: rgba(255, 255, 255, 0.88);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.prod-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.prod-info[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.06);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.prod-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.prod-info[_ngcontent-%COMP%]   .prod-brand[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4FAD47;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.feat-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n.btn-outline-white[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  background: transparent;\n  border: 2px solid #fff;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transition: all 0.3s ease;\n}\n.btn-outline-white[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-outline-white[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #204C81;\n  transform: translateY(-2px);\n}\n.why-section[_ngcontent-%COMP%] {\n  padding: 4rem 0 5rem;\n  background: #f0f7ff;\n  border-top: 3px solid #D5E9F9;\n}\n.why-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .why-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.why-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  background: rgba(79, 173, 71, 0.15);\n  border: 1.5px solid rgba(79, 173, 71, 0.55);\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4FAD47;\n  letter-spacing: 0.06em;\n  margin-bottom: 1.5rem;\n}\n.why-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #4FAD47;\n}\n.why-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #1b3f6e 0%,\n      #204C81 60%,\n      #2a6aad 100%);\n  border-radius: 24px;\n  padding: 3rem 2.5rem;\n  box-shadow: 0 16px 48px rgba(32, 76, 129, 0.22);\n}\n.why-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  color: #fff;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  line-height: 1.1;\n}\n.why-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n}\n.why-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #D5E9F9;\n  font-size: clamp(2.5rem, 5vw, 3.5rem);\n}\n.why-intro[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.65);\n  letter-spacing: 0.03em;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n}\n.why-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.wf-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.2rem 1.4rem;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1.5px solid rgba(255, 255, 255, 0.14);\n  border-left: 4px solid #4FAD47;\n  border-radius: 16px;\n  transition: all 0.3s ease;\n}\n.wf-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.25);\n  border-left-color: #5eca56;\n  transform: translateX(6px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.wf-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 4px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.wf-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-style: italic;\n  margin: 0;\n  line-height: 1.5;\n  max-width: 100%;\n}\n.wf-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.wf-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.wf-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3d9136,\n      #4FAD47);\n}\n.wf-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #163560,\n      #2667A9);\n}\n.why-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  background: #fff;\n  border-radius: 24px;\n  padding: 3rem 2rem;\n  box-shadow: 0 8px 32px rgba(38, 103, 169, 0.1);\n  border: 2px solid #D5E9F9;\n}\n@media (max-width: 1024px) {\n  .why-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.why-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 12px 24px;\n}\n.diamond-frame[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.diamond-frame[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border: 3px solid #4FAD47;\n  transform: rotate(45deg);\n  border-radius: 16px;\n}\n.diamond-frame[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 12px;\n  border: 3px solid #2667A9;\n  transform: rotate(45deg);\n  border-radius: 12px;\n}\n.diamond-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55%;\n  height: auto;\n  object-fit: contain;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_subtleFloat 5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_subtleFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 0 4rem;\n  background: #204C81;\n  text-align: center;\n  border-top: 4px solid #4FAD47;\n}\n.cta-ready-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 28px;\n  background: rgba(79, 173, 71, 0.2);\n  border: 1px solid rgba(79, 173, 71, 0.45);\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4FAD47;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  margin-bottom: 1.25rem;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: clamp(1.8rem, 4vw, 2.5rem);\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.cta-section[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .cta-inner[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n  font-style: italic;\n  margin-bottom: 2.5rem;\n  max-width: 100%;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.btn-cta-green[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 28px;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47 0%,\n      #5eca56 100%);\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 12px;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  box-shadow: 0 6px 20px rgba(79, 173, 71, 0.3);\n}\n.btn-cta-green[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-cta-green[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(79, 173, 71, 0.4);\n  color: #fff;\n}\n.btn-cta-white[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 28px;\n  background: #fff;\n  color: #204C81;\n  font-size: 1rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 12px;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n}\n.btn-cta-white[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-cta-white[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.7s ease forwards;\n  opacity: 0;\n  transform: translateY(25px);\n}\n.d1[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.d2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.d3[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 1447 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-OPHF7IXJ.js.map
