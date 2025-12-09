import {
  RouterLink
} from "./chunk-WODVFAUY.js";
import {
  ApiService,
  TranslateModule,
  TranslatePipe
} from "./chunk-ULP7W4R3.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JDEMAJAT.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalogo", a0];
function HomeComponent_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55)(1, "div", 56)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", i_r2 * 100 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, category_r1.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r1.icon || "category");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "home.explore"), " ");
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.api = inject(ApiService);
    this.categories = [];
  }
  ngOnInit() {
    this.api.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 177, vars: 84, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-gradient"], [1, "hero-pattern"], [1, "hero-glow"], [1, "container", "hero-content"], [1, "hero-text"], [1, "hero-badge", "animate-fade-in-up"], [1, "material-icons-outlined"], [1, "animate-fade-in-up", "delay-1"], [1, "text-gradient"], [1, "hero-description", "animate-fade-in-up", "delay-2"], [1, "hero-actions", "animate-fade-in-up", "delay-3"], ["routerLink", "/catalogo", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "/contacto", 1, "btn", "btn-secondary", "btn-lg"], [1, "hero-stats", "animate-fade-in-up", "delay-4"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "hero-visual", "animate-fade-in", "delay-2"], [1, "hero-card"], [1, "card-inner"], [1, "floating-elements"], [1, "float-element", "float-1"], [1, "float-element", "float-2"], [1, "float-element", "float-3"], [1, "scroll-indicator"], [1, "section", "section-blue", "categories-section"], [1, "container"], [1, "section-header"], [1, "section-label"], [1, "section-title"], [1, "section-description"], [1, "categories-grid"], [1, "category-card", 3, "routerLink", "animation-delay"], [1, "section", "features-section"], [1, "features-grid"], [1, "feature-content"], [1, "features-list"], [1, "feature-item"], [1, "feature-icon"], ["routerLink", "/somos", 1, "btn", "btn-secondary"], [1, "feature-visual"], [1, "visual-card"], [1, "visual-bg"], [1, "visual-content"], [1, "visual-text"], [1, "section", "cta-section"], [1, "cta-card"], [1, "cta-content"], [1, "cta-actions"], ["routerLink", "/contacto", 1, "btn", "btn-cta", "btn-lg"], ["href", "tel:+56996154315", 1, "btn", "btn-secondary", "btn-lg"], [1, "cta-decoration"], [1, "decoration-circle"], [1, "category-card", 3, "routerLink"], [1, "category-icon"], [1, "category-link"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7)(8, "span", 8);
        \u0275\u0275text(9, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h1", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275element(15, "br");
        \u0275\u0275elementStart(16, "span", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "br");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 11);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12)(26, "a", 13)(27, "span", 8);
        \u0275\u0275text(28, "grid_view");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 14)(32, "span", 8);
        \u0275\u0275text(33, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "span", 17);
        \u0275\u0275text(39, "10+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 18);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 16)(44, "span", 17);
        \u0275\u0275text(45, "500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 18);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 16)(50, "span", 17);
        \u0275\u0275text(51, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 18);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 19)(56, "div", 20)(57, "div", 21)(58, "span", 8);
        \u0275\u0275text(59, "precision_manufacturing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span");
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 22)(64, "div", 23)(65, "span", 8);
        \u0275\u0275text(66, "settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 24)(68, "span", 8);
        \u0275\u0275text(69, "engineering");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 25)(71, "span", 8);
        \u0275\u0275text(72, "lightbulb");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "div", 26)(74, "span", 8);
        \u0275\u0275text(75, "expand_more");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "section", 27)(77, "div", 28)(78, "div", 29)(79, "span", 30);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "h2", 31);
        \u0275\u0275text(83);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 32);
        \u0275\u0275text(86);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 33);
        \u0275\u0275repeaterCreate(89, HomeComponent_For_90_Template, 13, 11, "a", 34, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "section", 35)(92, "div", 28)(93, "div", 36)(94, "div", 37)(95, "span", 30);
        \u0275\u0275text(96);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "h2");
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementStart(101, "span", 10);
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "p");
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 38)(108, "div", 39)(109, "span", 40)(110, "span", 8);
        \u0275\u0275text(111, "verified");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div")(113, "h4");
        \u0275\u0275text(114);
        \u0275\u0275pipe(115, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p");
        \u0275\u0275text(117);
        \u0275\u0275pipe(118, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(119, "div", 39)(120, "span", 40)(121, "span", 8);
        \u0275\u0275text(122, "support_agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div")(124, "h4");
        \u0275\u0275text(125);
        \u0275\u0275pipe(126, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "p");
        \u0275\u0275text(128);
        \u0275\u0275pipe(129, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div", 39)(131, "span", 40)(132, "span", 8);
        \u0275\u0275text(133, "local_shipping");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div")(135, "h4");
        \u0275\u0275text(136);
        \u0275\u0275pipe(137, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "p");
        \u0275\u0275text(139);
        \u0275\u0275pipe(140, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(141, "a", 41);
        \u0275\u0275text(142);
        \u0275\u0275pipe(143, "translate");
        \u0275\u0275elementStart(144, "span", 8);
        \u0275\u0275text(145, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "div", 42)(147, "div", 43);
        \u0275\u0275element(148, "div", 44);
        \u0275\u0275elementStart(149, "div", 45)(150, "span", 8);
        \u0275\u0275text(151, "hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "span", 46);
        \u0275\u0275text(153, "METPLASTECH");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(154, "section", 47)(155, "div", 28)(156, "div", 48)(157, "div", 49)(158, "h2");
        \u0275\u0275text(159);
        \u0275\u0275pipe(160, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "p");
        \u0275\u0275text(162);
        \u0275\u0275pipe(163, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 50)(165, "a", 51)(166, "span", 8);
        \u0275\u0275text(167, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(168);
        \u0275\u0275pipe(169, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "a", 52)(171, "span", 8);
        \u0275\u0275text(172, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275text(173, " +569 9615 4315 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "div", 53);
        \u0275\u0275element(175, "div", 54)(176, "div", 54);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, "home.badge"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "home.title"), "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 32, "home.titleHighlight"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "home.titleEnd"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 36, "home.description"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 38, "home.viewCatalog"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 40, "home.contactUs"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 42, "home.yearsExperience"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 44, "home.satisfiedClients"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 46, "home.guaranteedQuality"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 48, "home.industrialPrecision"));
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 50, "home.solutions"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 52, "home.fullCatalog"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 54, "home.catalogDescription"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 56, "home.whyChooseUs"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(100, 58, "home.excellenceCommitment"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 60, "home.excellence"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 62, "home.excellenceDescription"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 64, "home.certifiedQuality"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 66, "home.certifiedQualityDesc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 68, "home.technicalSupport"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 70, "home.technicalSupportDesc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 72, "home.nationalDelivery"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 74, "home.nationalDeliveryDesc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(143, 76, "home.learnMore"), " ");
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 78, "home.readyToOptimize"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(163, 80, "home.readyDescription"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(169, 82, "home.requestQuote"), " ");
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  padding: var(--space-4xl) 0;\n  overflow: hidden;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n}\n.hero-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #1e40af 40%,\n      #3b82f6 100%),\n    radial-gradient(\n      ellipse 100% 80% at 70% 20%,\n      rgba(30, 64, 175, 0.25) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse 80% 60% at 20% 80%,\n      rgba(59, 130, 246, 0.2) 0%,\n      transparent 40%);\n  opacity: 0.98;\n}\n.hero-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(34, 197, 94, 0.05) 1px,\n      transparent 1px);\n  background-size: 80px 80px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse 80% 70% at 50% 30%,\n      black 30%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse 80% 70% at 50% 30%,\n      black 30%,\n      transparent 70%);\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  right: 10%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(34, 197, 94, 0.15) 0%,\n      transparent 60%);\n  filter: blur(60px);\n  animation: pulse-glow 4s ease-in-out infinite;\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4xl);\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n@media (max-width: 1024px) {\n  .hero-text[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-sm);\n  padding: var(--space-md) var(--space-lg);\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-full);\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: var(--space-xl);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-xl);\n  color: #ffffff;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\nh1[_ngcontent-%COMP%]   .text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #dbeafe 50%,\n      #bfdbfe 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.95);\n  margin-bottom: var(--space-2xl);\n  max-width: 500px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 1024px) {\n  .hero-description[_ngcontent-%COMP%] {\n    margin: 0 auto var(--space-2xl);\n  }\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-md);\n  margin-bottom: var(--space-3xl);\n}\n@media (max-width: 1024px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2xl);\n}\n@media (max-width: 1024px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--space-lg);\n  }\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  line-height: 1;\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin-top: var(--space-xs);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-card[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface) 0%,\n      var(--color-surface-elevated) 100%);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-xl);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-elevated);\n}\n.hero-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-md);\n}\n.hero-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: var(--color-accent);\n}\n.hero-card[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n.floating-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -40px;\n}\n.float-element[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-card);\n  animation: float 3s ease-in-out infinite;\n}\n.float-element[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--color-accent);\n}\n.float-element.float-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: -10%;\n  animation-delay: 0s;\n}\n.float-element.float-2[_ngcontent-%COMP%] {\n  top: 50%;\n  right: -15%;\n  animation-delay: 1s;\n}\n.float-element.float-3[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 10%;\n  animation-delay: 2s;\n}\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--space-xl);\n  left: 50%;\n  transform: translateX(-50%);\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.scroll-indicator[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-text-muted);\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  40% {\n    transform: translateX(-50%) translateY(-10px);\n  }\n  60% {\n    transform: translateX(-50%) translateY(-5px);\n  }\n}\n.categories-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-blue-bg) 0%,\n      var(--color-blue-bg-light) 50%,\n      rgba(59, 130, 246, 0.06) 100%);\n  position: relative;\n}\n.categories-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-blue-light) 20%,\n      var(--color-blue) 50%,\n      var(--color-blue-light) 80%,\n      transparent 100%);\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-xl);\n}\n@media (max-width: 1024px) {\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.category-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-xl);\n  background: #ffffff;\n  border: 2px solid var(--color-blue);\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-base);\n  animation: fadeInUp 0.6s ease forwards;\n  box-shadow: 0 4px 16px rgba(30, 64, 175, 0.12);\n  position: relative;\n  overflow: hidden;\n  opacity: 0;\n}\n.category-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--color-blue-gradient-light);\n  transform: scaleX(0);\n  transition: transform var(--transition-base);\n}\n.category-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-glow);\n}\n.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-accent-secondary) 100%);\n}\n.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.category-card[_ngcontent-%COMP%]:hover   .category-link[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  gap: var(--space-md);\n}\n.category-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(34, 197, 94, 0.1);\n  border-radius: var(--radius-lg);\n  margin-bottom: var(--space-lg);\n  transition: all var(--transition-base);\n}\n.category-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-accent);\n  transition: color var(--transition-base);\n}\n.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: var(--space-sm);\n}\n.category-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  flex: 1;\n  margin-bottom: var(--space-lg);\n}\n.category-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  transition: all var(--transition-fast);\n}\n.category-link[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4xl);\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-lg);\n}\n.feature-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-accent-secondary) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.feature-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: var(--space-2xl);\n}\n.features-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-xl);\n  margin-bottom: var(--space-2xl);\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-lg);\n}\n.feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  flex-shrink: 0;\n}\n.feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--color-accent);\n}\n.feature-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: var(--space-xs);\n}\n.feature-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.feature-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 1024px) {\n  .feature-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.visual-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.visual-card[_ngcontent-%COMP%]   .visual-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface) 0%,\n      var(--color-surface-elevated) 100%);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-xl);\n  transform: rotate(-5deg);\n}\n.visual-card[_ngcontent-%COMP%]   .visual-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-md);\n  padding: var(--space-3xl);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-xl);\n}\n.visual-card[_ngcontent-%COMP%]   .visual-content[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: var(--color-accent);\n}\n.visual-card[_ngcontent-%COMP%]   .visual-content[_ngcontent-%COMP%]   .visual-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: var(--color-text-primary);\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  background: var(--color-blue-gradient);\n  color: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 100% 80% at 50% 20%,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse 80% 60% at 100% 80%,\n      rgba(59, 130, 246, 0.25) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.cta-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: var(--space-4xl);\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .cta-card[_ngcontent-%COMP%] {\n    padding: var(--space-2xl);\n  }\n}\n.cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-md);\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: var(--space-2xl);\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-md);\n  flex-wrap: wrap;\n}\n.cta-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 50%;\n  pointer-events: none;\n}\n.cta-decoration[_ngcontent-%COMP%]   .decoration-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n}\n.cta-decoration[_ngcontent-%COMP%]   .decoration-circle[_ngcontent-%COMP%]:first-child {\n  width: 400px;\n  height: 400px;\n  right: -100px;\n  top: -100px;\n}\n.cta-decoration[_ngcontent-%COMP%]   .decoration-circle[_ngcontent-%COMP%]:last-child {\n  width: 300px;\n  height: 300px;\n  right: 50px;\n  bottom: -50px;\n  border-color: var(--color-accent);\n  opacity: 0.2;\n}\n@media (max-width: 768px) {\n  .cta-decoration[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 817 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-C6VKSN2B.js.map
