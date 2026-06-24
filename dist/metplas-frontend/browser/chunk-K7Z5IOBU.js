import {
  ActivatedRoute,
  RouterLink
} from "./chunk-G3S5LBSE.js";
import {
  ApiService,
  LanguageService,
  TranslateModule,
  TranslatePipe
} from "./chunk-LXXVMBGD.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YDRPHY3P.js";

// src/app/pages/catalog/supplier-detail/supplier-detail.component.ts
var _forTrack0 = ($index, $item) => $item.file;
var _c0 = (a0, a1) => ["/catalogo", a0, a1];
function SupplierDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.supplier.logo, \u0275\u0275sanitizeUrl)("alt", ctx_r0.supplier.name);
  }
}
function SupplierDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.supplier == null ? null : ctx_r0.supplier.icon) || "business");
  }
}
function SupplierDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cleanUrl(ctx_r0.supplier.website));
  }
}
function SupplierDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 27);
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEnglish ? ctx_r0.supplier == null ? null : ctx_r0.supplier.country_en : ctx_r0.supplier == null ? null : ctx_r0.supplier.country, " ");
  }
}
function SupplierDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 27);
    \u0275\u0275text(2, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.supplier.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "catalog.visitWebsite"), " ");
  }
}
function SupplierDetailComponent_For_38_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", category_r2.productCount, " ", \u0275\u0275pipeBind1(2, 2, "catalog.products"), "");
  }
}
function SupplierDetailComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32)(1, "div", 33)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 34)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SupplierDetailComponent_For_38_Conditional_7_Template, 3, 4, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9, "arrow_forward_ios");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const i_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r3 * 80 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(6, _c0, ctx_r0.supplierSlug, ctx_r0.getCategorySlug(category_r2)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isEnglish ? category_r2.name_en : category_r2.name_es);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, category_r2.productCount ? 7 : -1);
  }
}
var SupplierDetailComponent = class _SupplierDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.languageService = inject(LanguageService);
    this.supplier = null;
    this.categories = [];
    this.supplierSlug = "";
  }
  get isEnglish() {
    return this.languageService.currentLanguage() === "en";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.supplierSlug = params["supplier"];
      this.loadSupplier();
    });
  }
  loadSupplier() {
    this.api.getSupplierBySlug(this.supplierSlug).subscribe((supplier) => {
      this.supplier = supplier;
    });
    this.api.getSupplierCategories(this.supplierSlug).subscribe((categories) => {
      this.categories = categories;
    });
  }
  getCategorySlug(category) {
    return category.file.replace(".json", "").toLowerCase().replace(/\s+/g, "-");
  }
  cleanUrl(url) {
    return url.replace(/^https?:\/\//, "");
  }
  static {
    this.\u0275fac = function SupplierDetailComponent_Factory(t) {
      return new (t || _SupplierDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierDetailComponent, selectors: [["app-supplier-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 25, consts: [[1, "breadcrumb"], [1, "container"], ["routerLink", "/catalogo"], [1, "sep"], [1, "current"], [1, "supplier-hero"], [1, "hero-blob", "hero-blob-left"], [1, "hero-blob", "hero-blob-right"], [1, "container", "hero-center"], [1, "logo-frame"], [1, "logo-img", 3, "src", "alt"], [1, "hero-name"], [1, "hero-url"], [1, "deco-bar"], [1, "info-section"], [1, "container", "info-center"], [1, "description"], [1, "meta-row"], [1, "meta-badge"], ["target", "_blank", 1, "website-link", 3, "href"], [1, "categories-section"], [1, "section-head"], [1, "categories-grid"], [1, "category-card", 3, "routerLink", "animation-delay"], [1, "cta-section"], [1, "cta-card"], [1, "cta-icon-wrap"], [1, "material-icons-outlined"], [1, "cta-label"], ["routerLink", "/contacto", 1, "cta-btn"], [1, "cta-desc"], [1, "material-icons-outlined", "logo-icon"], [1, "category-card", 3, "routerLink"], [1, "card-icon"], [1, "card-content"], [1, "product-count"], [1, "material-icons-outlined", "card-arrow"]], template: function SupplierDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "section", 5);
        \u0275\u0275element(10, "div", 6)(11, "div", 7);
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275template(14, SupplierDetailComponent_Conditional_14_Template, 1, 2, "img", 10)(15, SupplierDetailComponent_Conditional_15_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h1", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, SupplierDetailComponent_Conditional_18_Template, 2, 1, "p", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "div", 13);
        \u0275\u0275elementStart(20, "section", 14)(21, "div", 15)(22, "p", 16);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275template(25, SupplierDetailComponent_Conditional_25_Template, 4, 1, "div", 18)(26, SupplierDetailComponent_Conditional_26_Template, 5, 4, "a", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "section", 20)(28, "div", 1)(29, "div", 21)(30, "h2");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 22);
        \u0275\u0275repeaterCreate(37, SupplierDetailComponent_For_38_Template, 10, 9, "a", 23, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "section", 24)(40, "div", 1)(41, "div", 25)(42, "div", 26)(43, "span", 27);
        \u0275\u0275text(44, "support_agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "p", 28);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 29)(49, "span", 27);
        \u0275\u0275text(50, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 30);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "catalog.catalog"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.supplier == null ? null : ctx.supplier.name);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(14, (ctx.supplier == null ? null : ctx.supplier.logo) ? 14 : 15);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.supplier == null ? null : ctx.supplier.name);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, (ctx.supplier == null ? null : ctx.supplier.website) ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.isEnglish ? ctx.supplier == null ? null : ctx.supplier.description_en : ctx.supplier == null ? null : ctx.supplier.description);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(25, (ctx.supplier == null ? null : ctx.supplier.country) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, (ctx.supplier == null ? null : ctx.supplier.website) ? 26 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 15, "catalog.productCategories"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 17, "catalog.selectCategory"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 19, "catalog.needHelp"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 21, "catalog.contactUs"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 23, "catalog.needHelpDesc"));
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: calc(80px + 1rem) 0 1rem;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.breadcrumb[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #718096;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4FAD47;\n}\n.breadcrumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #204C81;\n  font-weight: 600;\n}\n.supplier-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 3.5rem 0;\n  background: #fff;\n  overflow: hidden;\n  text-align: center;\n}\n.hero-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-blob-left[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(38, 103, 169, 0.1) 0%,\n      transparent 65%);\n  left: -160px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.hero-blob-right[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 173, 71, 0.08) 0%,\n      transparent 65%);\n  right: -120px;\n  top: 20%;\n}\n.hero-center[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.logo-frame[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 2.5px solid #D5E9F9;\n  border-radius: 24px;\n  box-shadow: 0 8px 32px rgba(38, 103, 169, 0.12);\n}\n.logo-frame[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 78%;\n  height: 78%;\n  object-fit: contain;\n}\n.logo-frame[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #2667A9;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 900;\n  color: #204C81;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 0;\n}\n.hero-url[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #2667A9;\n  font-style: italic;\n  letter-spacing: 0.06em;\n}\n.deco-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #4FAD47 0%,\n      #2667A9 50%,\n      #4FAD47 100%);\n}\n.info-section[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 0;\n  background: #fff;\n}\n.info-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1.25rem;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #2667A9;\n  font-style: italic;\n  max-width: 560px;\n  line-height: 1.8;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.meta-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  background: #f0f6fc;\n  border: 1px solid #D5E9F9;\n  border-radius: 100px;\n  font-size: 0.85rem;\n  color: #4a5568;\n}\n.meta-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2667A9;\n}\n.website-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  color: #2667A9;\n  text-decoration: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: 1.5px solid #2667A9;\n  border-radius: 100px;\n  transition: all 0.2s ease;\n}\n.website-link[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.website-link[_ngcontent-%COMP%]:hover {\n  background: #2667A9;\n  color: #fff;\n}\n.categories-section[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: #fff;\n}\n.section-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 4vw, 2.5rem);\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #204C81;\n  margin-bottom: 0.5rem;\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4FAD47;\n  font-size: 1rem;\n  font-style: italic;\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.category-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1.25rem 1.5rem;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease forwards;\n  opacity: 0;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  border-color: #2667A9;\n  background: #f0f6fc;\n  transform: translateX(4px);\n  box-shadow: 0 6px 20px rgba(38, 103, 169, 0.12);\n}\n.category-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\n  background: #2667A9;\n}\n.category-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.category-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #2667A9;\n}\n.category-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #D5E9F9;\n  border-radius: 12px;\n  transition: all 0.25s ease;\n  flex-shrink: 0;\n}\n.category-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #2667A9;\n  transition: color 0.25s ease;\n}\n.category-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.category-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #204C81;\n  margin-bottom: 0.2rem;\n}\n.category-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .product-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #718096;\n}\n.category-card[_ngcontent-%COMP%]   .card-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #D5E9F9;\n  opacity: 0.5;\n  transition: all 0.25s ease;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 0 0 4rem;\n  background: #fff;\n}\n.cta-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2.5rem 2rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n  gap: 0.75rem;\n}\n.cta-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2.5px solid #2667A9;\n  border-radius: 50%;\n}\n.cta-icon-wrap[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #2667A9;\n}\n.cta-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #2667A9;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 28px;\n  color: #204C81;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border: 2px solid #204C81;\n  border-radius: 100px;\n  transition: all 0.2s ease;\n  letter-spacing: 0.04em;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: #204C81;\n  color: #fff;\n}\n.cta-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #718096;\n  font-style: italic;\n  max-width: 360px;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=supplier-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierDetailComponent, { className: "SupplierDetailComponent", filePath: "src\\app\\pages\\catalog\\supplier-detail\\supplier-detail.component.ts", lineNumber: 442 });
})();
export {
  SupplierDetailComponent
};
//# sourceMappingURL=chunk-K7Z5IOBU.js.map
