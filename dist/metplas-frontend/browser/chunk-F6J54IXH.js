import {
  ActivatedRoute,
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

// src/app/pages/catalog/category-products/category-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalogo", a0];
var _c1 = (a0, a1) => ["/producto", a0, a1];
function CategoryProductsComponent_Conditional_29_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 18);
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r1.video, \u0275\u0275sanitizeUrl);
  }
}
function CategoryProductsComponent_Conditional_29_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl)("alt", product_r1.name);
  }
}
function CategoryProductsComponent_Conditional_29_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.supplier == null ? null : ctx_r1.supplier.icon) || "inventory_2");
  }
}
function CategoryProductsComponent_Conditional_29_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r1.short_description);
  }
}
function CategoryProductsComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 17);
    \u0275\u0275template(2, CategoryProductsComponent_Conditional_29_For_2_Conditional_2_Template, 1, 1, "video", 18)(3, CategoryProductsComponent_Conditional_29_For_2_Conditional_3_Template, 1, 2)(4, CategoryProductsComponent_Conditional_29_For_2_Conditional_4_Template, 3, 1);
    \u0275\u0275elementStart(5, "div", 19)(6, "span", 20)(7, "span", 10);
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 21)(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CategoryProductsComponent_Conditional_29_For_2_Conditional_14_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r3 * 60 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(9, _c1, ctx_r1.supplierSlug, product_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, product_r1.video ? 2 : product_r1.image ? 3 : 4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "catalog.viewProduct"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, product_r1.short_description ? 14 : -1);
  }
}
function CategoryProductsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, CategoryProductsComponent_Conditional_29_For_2_Template, 15, 12, "a", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function CategoryProductsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 10);
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
    \u0275\u0275elementStart(9, "a", 26)(10, "span", 10);
    \u0275\u0275text(11, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "catalog.noProducts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "catalog.noProductsDesc"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, ctx_r1.supplierSlug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "catalog.backToCategories"), " ");
  }
}
var CategoryProductsComponent = class _CategoryProductsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.supplier = null;
    this.products = [];
    this.supplierSlug = "";
    this.categorySlug = "";
    this.categoryName = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.supplierSlug = params["supplier"];
      this.categorySlug = params["category"];
      this.loadData();
    });
  }
  loadData() {
    this.api.getSupplierBySlug(this.supplierSlug).subscribe((supplier) => {
      this.supplier = supplier;
    });
    this.api.getProductsByCategory(this.supplierSlug, this.categorySlug).subscribe((result) => {
      this.products = result.products;
      this.categoryName = result.categoryName;
    });
  }
  static {
    this.\u0275fac = function CategoryProductsComponent_Factory(t) {
      return new (t || _CategoryProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryProductsComponent, selectors: [["app-category-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 20, consts: [[1, "breadcrumb"], [1, "container"], ["routerLink", "/catalogo"], [1, "sep"], [3, "routerLink"], [1, "current"], [1, "category-hero"], [1, "hero-deco-tl"], [1, "container", "hero-inner"], [1, "back-link", 3, "routerLink"], [1, "material-icons-outlined"], [1, "product-count"], [1, "deco-bar"], [1, "products-section"], [1, "products-grid"], [1, "product-card", 3, "routerLink", "animation-delay"], [1, "product-card", 3, "routerLink"], [1, "product-image"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "metadata", 3, "src"], [1, "overlay"], [1, "view-btn"], [1, "product-info"], [1, "description"], ["loading", "lazy", 3, "src", "alt"], [1, "placeholder"], [1, "empty-state"], [1, "btn-green", 3, "routerLink"]], template: function CategoryProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 3);
        \u0275\u0275text(10, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "section", 6);
        \u0275\u0275element(14, "div", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "a", 9)(17, "span", 10);
        \u0275\u0275text(18, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h1");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 11);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(26, "div", 12);
        \u0275\u0275elementStart(27, "section", 13)(28, "div", 1);
        \u0275\u0275template(29, CategoryProductsComponent_Conditional_29_Template, 3, 0, "div", 14)(30, CategoryProductsComponent_Conditional_30_Template, 14, 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "catalog.catalog"));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx.supplierSlug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.supplier == null ? null : ctx.supplier.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.categoryName);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, ctx.supplierSlug));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 12, "catalog.backToCategories"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.categoryName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.products.length, " ", \u0275\u0275pipeBind1(25, 14, "catalog.productsAvailable"), "");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, ctx.products.length > 0 ? 29 : 30);
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: calc(80px + 1rem) 0 1rem;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.breadcrumb[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #718096;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4FAD47;\n}\n.breadcrumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #204C81;\n  font-weight: 600;\n}\n.category-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.5rem 0;\n  background: #fff;\n  overflow: hidden;\n}\n.hero-deco-tl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47 0%,\n      #4FAD47 12%,\n      #2667A9 12%,\n      #2667A9 24%,\n      transparent 24%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .hero-deco-tl[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.deco-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #4FAD47 0%,\n      #2667A9 50%,\n      #4FAD47 100%);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #718096;\n  text-decoration: none;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  transition: color 0.2s ease;\n}\n.back-link[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #4FAD47;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #204C81;\n  margin-bottom: 0.5rem;\n}\n.product-count[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 1rem;\n  font-style: italic;\n}\n.products-section[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: #fff;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1200px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.product-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease forwards;\n  opacity: 0;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  border-color: #4FAD47;\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(38, 103, 169, 0.1);\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #cbd5e1;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(32, 76, 129, 0.8) 0%,\n      rgba(32, 76, 129, 0.3) 50%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 1rem;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 8px 18px;\n  background: #4FAD47;\n  color: white;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n.product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #204C81;\n  margin-bottom: 0.25rem;\n  line-height: 1.3;\n}\n.product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #718096;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  max-width: 100%;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #cbd5e1;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #204C81;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin-bottom: 1.5rem;\n}\n.btn-green[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47,\n      #5eca56);\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.btn-green[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-green[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(79, 173, 71, 0.3);\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=category-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryProductsComponent, { className: "CategoryProductsComponent", filePath: "src\\app\\pages\\catalog\\category-products\\category-products.component.ts", lineNumber: 315 });
})();
export {
  CategoryProductsComponent
};
//# sourceMappingURL=chunk-F6J54IXH.js.map
