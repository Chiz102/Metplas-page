import {
  ActivatedRoute,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JDEMAJAT.js";

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalogo", a0];
function CatalogComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r1.currentCategory == null ? null : ctx_r1.currentCategory.slug) === cat_r1.slug);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, cat_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r1.icon || "category");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r1.name, " ");
  }
}
function CatalogComponent_Conditional_25_Conditional_10_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const sub_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", sub_r3.image, \u0275\u0275sanitizeUrl)("alt", sub_r3.name);
  }
}
function CatalogComponent_Conditional_25_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentCategory.icon || "category");
  }
}
function CatalogComponent_Conditional_25_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275template(2, CatalogComponent_Conditional_25_Conditional_10_For_2_Conditional_2_Template, 1, 2, "img", 27)(3, CatalogComponent_Conditional_25_Conditional_10_For_2_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    const i_r4 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", i_r4 * 100 + "ms");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, sub_r3.image ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(sub_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sub_r3.description || "Productos de alta calidad");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", sub_r3.products_count || 0, " ", \u0275\u0275pipeBind1(11, 7, "catalog.productsAvailable"), " ");
  }
}
function CatalogComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_25_Conditional_10_For_2_Template, 12, 9, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.currentCategory.subcategories);
  }
}
function CatalogComponent_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 3);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 31)(10, "span", 3);
    \u0275\u0275text(11, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "catalog.comingSoon"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "catalog.comingSoonDesc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "catalog.contact"), " ");
  }
}
function CatalogComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 21)(2, "div", 22)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, CatalogComponent_Conditional_25_Conditional_10_Template, 3, 0, "div", 23)(11, CatalogComponent_Conditional_25_Conditional_11_Template, 14, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentCategory.icon || "category");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentCategory.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentCategory.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.currentCategory.subcategories && ctx_r1.currentCategory.subcategories.length > 0 ? 10 : 11);
  }
}
function CatalogComponent_Conditional_26_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span")(2, "span", 3);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Equipos Trimmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span")(6, "span", 3);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Rectificadores");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_26_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span")(2, "span", 3);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Agujas Inyectoras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span")(6, "span", 3);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " EPP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span")(10, "span", 3);
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Cuchillos de Empu\xF1adura");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34)(1, "div", 35)(2, "div", 36)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CatalogComponent_Conditional_26_For_2_Conditional_12_Template, 9, 0, "div", 38)(13, CatalogComponent_Conditional_26_For_2_Conditional_13_Template, 13, 0);
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 3);
    \u0275\u0275text(18, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", i_r6 * 100 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, cat_r5.slug));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cat_r5.icon || "category");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", cat_r5.subcategories_count || 0, " ", \u0275\u0275pipeBind1(7, 10, "catalog.subcategories"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, cat_r5.slug === "equipos" ? 12 : cat_r5.slug === "insumos" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "catalog.viewCategory"), " ");
  }
}
function CatalogComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_26_For_2_Template, 19, 16, "a", 33, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.categories = [];
    this.currentCategory = null;
  }
  ngOnInit() {
    this.api.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
    this.route.params.subscribe((params) => {
      const categorySlug = params["category"];
      if (categorySlug) {
        this.api.getCategoryBySlug(categorySlug).subscribe({
          next: (cat) => this.currentCategory = cat,
          error: () => this.currentCategory = null
        });
      } else {
        this.currentCategory = null;
      }
    });
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 24, consts: [[1, "page-hero"], [1, "container"], [1, "hero-label", "animate-fade-in-up"], [1, "material-icons-outlined"], [1, "animate-fade-in-up", "delay-1"], [1, "hero-description", "animate-fade-in-up", "delay-2"], [1, "filter-section"], [1, "filter-tabs"], ["routerLink", "/catalogo", 1, "filter-tab"], [1, "filter-tab", 3, "routerLink", "active"], [1, "section"], [1, "category-detail"], [1, "section", "cta-section"], [1, "cta-card"], [1, "cta-icon"], [1, "cta-actions"], ["routerLink", "/contacto", 1, "btn", "btn-primary", "btn-lg"], ["href", "https://wa.me/56996154315", "target", "_blank", 1, "btn", "btn-secondary", "btn-lg"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "20", "height", "20"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"], [1, "filter-tab", 3, "routerLink"], [1, "category-header"], [1, "category-icon"], [1, "subcategories-grid"], [1, "subcategory-card", 3, "animation-delay"], [1, "subcategory-card"], [1, "subcategory-image"], [3, "src", "alt"], [1, "subcategory-content"], [1, "product-count"], [1, "empty-state"], ["routerLink", "/contacto", 1, "btn", "btn-primary"], [1, "categories-overview"], [1, "category-overview-card", 3, "routerLink", "animation-delay"], [1, "category-overview-card", 3, "routerLink"], [1, "card-header"], [1, "card-icon"], [1, "card-badge"], [1, "subcategory-preview"], [1, "card-link"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2)(3, "span", 3);
        \u0275\u0275text(4, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "section", 6)(14, "div", 1)(15, "div", 7)(16, "a", 8)(17, "span", 3);
        \u0275\u0275text(18, "grid_view");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(21, CatalogComponent_For_22_Template, 4, 7, "a", 9, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "section", 10)(24, "div", 1);
        \u0275\u0275template(25, CatalogComponent_Conditional_25_Template, 12, 4, "div", 11)(26, CatalogComponent_Conditional_26_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "section", 12)(28, "div", 1)(29, "div", 13)(30, "div", 14)(31, "span", 3);
        \u0275\u0275text(32, "support_agent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "h2");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 15)(40, "a", 16)(41, "span", 3);
        \u0275\u0275text(42, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 18);
        \u0275\u0275element(47, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " WhatsApp ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.currentCategory ? ctx.currentCategory.name : \u0275\u0275pipeBind1(6, 10, "catalog.ourProducts"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.currentCategory ? ctx.currentCategory.name : \u0275\u0275pipeBind1(9, 12, "catalog.catalog"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", (ctx.currentCategory == null ? null : ctx.currentCategory.description) || \u0275\u0275pipeBind1(12, 14, "catalog.catalogDescription"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", !ctx.currentCategory);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "catalog.all"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(25, ctx.currentCategory ? 25 : 26);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 18, "catalog.cantFind"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 20, "catalog.cantFindDesc"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 22, "catalog.requestConsultation"), " ");
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  padding: calc(80px + var(--space-4xl)) 0 var(--space-2xl);\n  text-align: center;\n  background:\n    radial-gradient(\n      ellipse 80% 50% at 50% 0%,\n      rgba(34, 197, 94, 0.1) 0%,\n      transparent 60%);\n}\n.hero-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-sm);\n  padding: var(--space-sm) var(--space-md);\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-full);\n  font-size: 0.875rem;\n  color: var(--color-accent);\n  margin-bottom: var(--space-lg);\n}\n.hero-label[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-md);\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text-secondary);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-section[_ngcontent-%COMP%] {\n  padding: var(--space-lg) 0;\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 70px;\n  background: rgba(10, 22, 40, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  z-index: 100;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-sm);\n  overflow-x: auto;\n  padding-bottom: var(--space-sm);\n}\n.filter-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  padding: var(--space-sm) var(--space-lg);\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  text-decoration: none;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n  transition: all var(--transition-fast);\n}\n.filter-tab[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      #10b981 100%);\n  border-color: var(--color-accent);\n  color: var(--color-primary);\n}\n.category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-xl);\n  margin-bottom: var(--space-3xl);\n  padding-bottom: var(--space-xl);\n  border-bottom: 1px solid var(--color-border);\n}\n.category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-accent-secondary) 100%);\n  border-radius: var(--radius-xl);\n}\n.category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--color-primary);\n}\n.category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n}\n.category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n@media (max-width: 640px) {\n  .category-detail[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.subcategories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--space-xl);\n}\n@media (max-width: 1024px) {\n  .subcategories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .subcategories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.subcategory-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: all var(--transition-base);\n  animation: fadeInUp 0.6s ease forwards;\n  opacity: 0;\n}\n.subcategory-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-glow);\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-image[_ngcontent-%COMP%] {\n  height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface-elevated) 0%,\n      var(--color-surface) 100%);\n  border-bottom: 1px solid var(--color-border);\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-image[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--color-accent);\n  opacity: 0.5;\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-content[_ngcontent-%COMP%] {\n  padding: var(--space-xl);\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: var(--space-sm);\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  margin-bottom: var(--space-md);\n}\n.subcategory-card[_ngcontent-%COMP%]   .subcategory-content[_ngcontent-%COMP%]   .product-count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-accent);\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-4xl) var(--space-xl);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: var(--color-accent);\n  opacity: 0.5;\n  margin-bottom: var(--space-lg);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-md);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto var(--space-xl);\n}\n.categories-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--space-xl);\n}\n@media (max-width: 768px) {\n  .categories-overview[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.category-overview-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-2xl);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n  text-decoration: none;\n  transition: all var(--transition-base);\n  animation: fadeInUp 0.6s ease forwards;\n  opacity: 0;\n}\n.category-overview-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-glow);\n}\n.category-overview-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-accent-secondary) 100%);\n}\n.category-overview-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.category-overview-card[_ngcontent-%COMP%]:hover   .card-link[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  gap: var(--space-md);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-lg);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(34, 197, 94, 0.1);\n  border-radius: var(--radius-lg);\n  transition: all var(--transition-base);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-accent);\n  transition: color var(--transition-base);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: var(--space-xs) var(--space-sm);\n  background: var(--color-surface-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-full);\n  color: var(--color-text-muted);\n}\n.category-overview-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-text-primary);\n  margin-bottom: var(--space-sm);\n}\n.category-overview-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-bottom: var(--space-lg);\n}\n.category-overview-card[_ngcontent-%COMP%]   .subcategory-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-sm);\n  margin-bottom: var(--space-lg);\n  padding: var(--space-md);\n  background: var(--color-surface-elevated);\n  border-radius: var(--radius-md);\n}\n.category-overview-card[_ngcontent-%COMP%]   .subcategory-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-size: 0.9rem;\n  color: var(--color-text-secondary);\n}\n.category-overview-card[_ngcontent-%COMP%]   .subcategory-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-accent);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  margin-top: auto;\n  transition: all var(--transition-fast);\n}\n.category-overview-card[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.cta-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-4xl);\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-surface) 0%,\n      var(--color-surface-elevated) 100%);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-xl);\n}\n.cta-card[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-accent) 0%,\n      var(--color-accent-secondary) 100%);\n  border-radius: var(--radius-xl);\n  margin: 0 auto var(--space-xl);\n}\n.cta-card[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--color-primary);\n}\n.cta-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-md);\n}\n.cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  max-width: 500px;\n  margin: 0 auto var(--space-2xl);\n}\n@media (max-width: 768px) {\n  .cta-card[_ngcontent-%COMP%] {\n    padding: var(--space-2xl);\n  }\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--space-md);\n  flex-wrap: wrap;\n}\n.cta-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: var(--space-sm);\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src\\app\\pages\\catalog\\catalog.component.ts", lineNumber: 569 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=chunk-Y2B6QKCI.js.map
