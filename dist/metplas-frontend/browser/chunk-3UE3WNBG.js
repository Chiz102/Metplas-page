import {
  RouterLink
} from "./chunk-G3S5LBSE.js";
import {
  ApiService,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YDRPHY3P.js";

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.slug;
var _c0 = (a0) => ["/catalogo", a0];
function CatalogComponent_For_39_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const supplier_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", supplier_r1.logo, \u0275\u0275sanitizeUrl)("alt", supplier_r1.name);
  }
}
function CatalogComponent_For_39_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(supplier_r1.icon || "business");
  }
}
function CatalogComponent_For_39_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31)(1, "span", 5);
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
function CatalogComponent_For_39_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function CatalogComponent_For_39_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r2.getSupplierCategories(supplier_r1).length - 3, "");
  }
}
function CatalogComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "div", 29);
    \u0275\u0275template(5, CatalogComponent_For_39_Conditional_5_Template, 1, 2, "img", 30)(6, CatalogComponent_For_39_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CatalogComponent_For_39_Conditional_7_Template, 4, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 33);
    \u0275\u0275repeaterCreate(14, CatalogComponent_For_39_For_15_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(16, CatalogComponent_For_39_Conditional_16_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 36)(18, "span", 37)(19, "span", 5);
    \u0275\u0275text(20, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 38);
    \u0275\u0275text(23, " Ver cat\xE1logo ");
    \u0275\u0275elementStart(24, "span", 5);
    \u0275\u0275text(25, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    const i_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", i_r4 * 80 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, supplier_r1.slug));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, supplier_r1.logo ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, supplier_r1.country ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getSupplierCategories(supplier_r1).slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, ctx_r2.getSupplierCategories(supplier_r1).length > 3 ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", supplier_r1.products_count || "10", " productos ");
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor() {
    this.api = inject(ApiService);
    this.suppliers = [];
  }
  ngOnInit() {
    this.api.getSuppliers().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }
  getTotalProducts() {
    return this.suppliers.reduce((sum, s) => sum + (s.products_count || 10), 0);
  }
  getSupplierCategories(supplier) {
    return supplier.available_categories?.esp || [];
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 8, consts: [[1, "page-hero"], [1, "hero-deco-tl"], [1, "hero-deco-br"], [1, "container", "hero-inner"], [1, "hero-badge", "animate-in"], [1, "material-icons-outlined"], [1, "animate-in", "d1"], [1, "accent"], [1, "hero-desc", "animate-in", "d2"], [1, "hero-stats", "animate-in", "d3"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "stat-divider"], [1, "deco-bar"], [1, "suppliers-section"], [1, "container"], [1, "suppliers-grid"], [1, "supplier-card", 3, "routerLink", "animation-delay"], [1, "cta-section"], [1, "cta-card"], [1, "cta-icon-wrapper"], [1, "cta-content"], [1, "cta-buttons"], ["routerLink", "/contacto", 1, "btn-green"], [1, "supplier-card", 3, "routerLink"], [1, "card-top-accent"], [1, "card-inner"], [1, "card-header"], [1, "logo-wrapper"], [3, "src", "alt"], [1, "country-badge"], [1, "card-body"], [1, "tags-wrapper"], [1, "tag"], [1, "tag", "tag-more"], [1, "card-footer"], [1, "products-count"], [1, "view-btn"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "storefront");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 6);
        \u0275\u0275text(10, " CAT\xC1LOGO DE ");
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12, "PROVEEDORES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "span", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275text(21, "Marcas Aliadas");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(22, "div", 13);
        \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Productos");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "div", 13);
        \u0275\u0275elementStart(29, "div", 10)(30, "span", 11);
        \u0275\u0275text(31, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 12);
        \u0275\u0275text(33, "Pa\xEDses");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(34, "div", 14);
        \u0275\u0275elementStart(35, "section", 15)(36, "div", 16)(37, "div", 17);
        \u0275\u0275repeaterCreate(38, CatalogComponent_For_39_Template, 26, 11, "a", 18, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "section", 19)(41, "div", 16)(42, "div", 20)(43, "div", 21)(44, "span", 5);
        \u0275\u0275text(45, "support_agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 22)(47, "h2");
        \u0275\u0275text(48, "\xBFNecesitas asesor\xEDa personalizada?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Nuestro equipo de expertos est\xE1 listo para ayudarte a encontrar la soluci\xF3n perfecta.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 23)(52, "a", 24)(53, "span", 5);
        \u0275\u0275text(54, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " Solicitar Asesor\xEDa ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "catalog.ourSuppliers"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 6, "catalog.catalogDescription"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.suppliers.length);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.getTotalProducts(), "+");
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.suppliers);
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: calc(100px + 3rem) 0 3rem;\n  text-align: center;\n  background: #fff;\n  overflow: hidden;\n}\n.hero-deco-tl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 180px;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47 0%,\n      #4FAD47 8%,\n      #2667A9 8%,\n      #2667A9 16%,\n      transparent 16%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .hero-deco-tl[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-deco-br[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 180px;\n  height: 100%;\n  background:\n    linear-gradient(\n      -45deg,\n      #4FAD47 0%,\n      #4FAD47 8%,\n      #2667A9 8%,\n      #2667A9 16%,\n      transparent 16%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .hero-deco-br[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background: #f0f9ff;\n  border: 2px solid #2667A9;\n  border-radius: 100px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #2667A9;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 1.5rem;\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #4FAD47;\n}\nh1[_ngcontent-%COMP%] {\n  color: #204C81;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #4FAD47;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #4a5568;\n  font-style: italic;\n  max-width: 550px;\n  margin: 0 auto 2rem;\n  line-height: 1.7;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 1.25rem 2.5rem;\n  background: #f8fafc;\n  border: 2px solid #4FAD47;\n  border-radius: 16px;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  color: #2667A9;\n  line-height: 1;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #718096;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: #e2e8f0;\n}\n@media (max-width: 640px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.25rem;\n  }\n  .hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 1px;\n  }\n}\n.suppliers-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: #fff;\n}\n.suppliers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .suppliers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 350px) {\n  .suppliers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n.supplier-card[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease forwards;\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.supplier-card[_ngcontent-%COMP%]   .card-top-accent[_ngcontent-%COMP%] {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #4FAD47 0%,\n      #2667A9 100%);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s ease;\n}\n.supplier-card[_ngcontent-%COMP%]:hover {\n  border-color: #4FAD47;\n  box-shadow: 0 12px 40px rgba(16, 79, 142, 0.12);\n  transform: translateY(-4px);\n}\n.supplier-card[_ngcontent-%COMP%]:hover   .card-top-accent[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n.supplier-card[_ngcontent-%COMP%]:hover   .logo-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.supplier-card[_ngcontent-%COMP%]:hover   .view-btn[_ngcontent-%COMP%] {\n  color: #4FAD47;\n}\n.supplier-card[_ngcontent-%COMP%]:hover   .view-btn[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.card-inner[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.logo-wrapper[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n}\n.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 55%;\n  object-fit: contain;\n}\n.logo-wrapper[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #2667A9;\n}\n.country-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  background: #f0f9ff;\n  border: 1px solid #e2e8f0;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #2667A9;\n}\n.country-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card-body[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #204C81;\n  margin-bottom: 0.5rem;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #718096;\n  line-height: 1.6;\n  margin-bottom: 0.75rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  max-width: 100%;\n}\n.tags-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tags-wrapper[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #4a5568;\n}\n.tags-wrapper[_ngcontent-%COMP%]   .tag-more[_ngcontent-%COMP%] {\n  background: rgba(34, 148, 67, 0.1);\n  border-color: #4FAD47;\n  color: #4FAD47;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1.25rem;\n  border-top: 1px solid #e2e8f0;\n}\n.card-footer[_ngcontent-%COMP%]   .products-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #718096;\n}\n.card-footer[_ngcontent-%COMP%]   .products-count[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #4FAD47;\n}\n.card-footer[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #2667A9;\n  transition: all 0.3s ease;\n}\n.card-footer[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: #f8fafc;\n}\n.cta-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2.5rem;\n  background: #fff;\n  border: 2px solid #4FAD47;\n  border-radius: 16px;\n  box-shadow: 0 8px 30px rgba(16, 79, 142, 0.08);\n}\n@media (max-width: 900px) {\n  .cta-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.cta-icon-wrapper[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47,\n      #2667A9);\n  border-radius: 16px;\n  flex-shrink: 0;\n}\n.cta-icon-wrapper[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n}\n.cta-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #204C81;\n  margin-bottom: 0.5rem;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin: 0;\n  max-width: 100%;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n}\n.btn-green[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47,\n      #2ecc71);\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.btn-green[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-green[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(34, 148, 67, 0.3);\n  color: #fff;\n}\n.btn-whatsapp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 20px;\n  background: transparent;\n  color: #25D366;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border: 2px solid #25D366;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.btn-whatsapp[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-whatsapp[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  color: white;\n  transform: translateY(-2px);\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.7s ease forwards;\n  opacity: 0;\n  transform: translateY(25px);\n}\n.d1[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.d2[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.d3[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src\\app\\pages\\catalog\\catalog.component.ts", lineNumber: 554 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=chunk-3UE3WNBG.js.map
