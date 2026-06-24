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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YDRPHY3P.js";

// src/app/pages/catalog/product-detail/product-detail.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalogo", a0];
var _c1 = (a0, a1) => ["/producto", a0, a1];
function ProductDetailComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.product.video, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.currentImage || ctx_r0.product.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.supplier == null ? null : ctx_r0.supplier.icon) || "inventory_2");
  }
}
function ProductDetailComponent_Conditional_15_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_15_Conditional_6_For_2_Template_button_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectImage(img_r3));
    });
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.currentImage === img_r3);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r3, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_15_Conditional_6_For_2_Template, 2, 4, "button", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getAllImages());
  }
}
function ProductDetailComponent_Conditional_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.category_name);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.short_description);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275element(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "product.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.description);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_17_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const spec_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r4.value);
  }
}
function ProductDetailComponent_Conditional_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275element(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 27);
    \u0275\u0275repeaterCreate(6, ProductDetailComponent_Conditional_15_Conditional_17_For_7_Template, 5, 2, "div", 28, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "product.specifications"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getSpecifications());
  }
}
function ProductDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, ProductDetailComponent_Conditional_15_Conditional_3_Template, 1, 1, "video", 11)(4, ProductDetailComponent_Conditional_15_Conditional_4_Template, 1, 2)(5, ProductDetailComponent_Conditional_15_Conditional_5_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProductDetailComponent_Conditional_15_Conditional_6_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14)(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProductDetailComponent_Conditional_15_Conditional_14_Template, 2, 1, "span", 17)(15, ProductDetailComponent_Conditional_15_Conditional_15_Template, 2, 1, "p", 18)(16, ProductDetailComponent_Conditional_15_Conditional_16_Template, 7, 4, "div", 19)(17, ProductDetailComponent_Conditional_15_Conditional_17_Template, 8, 3, "div", 19);
    \u0275\u0275elementStart(18, "div", 20)(19, "a", 21)(20, "span", 15);
    \u0275\u0275text(21, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r0.product.video ? 3 : ctx_r0.currentImage || ctx_r0.product.image ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(6, ctx_r0.getAllImages().length > 1 ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.supplier == null ? null : ctx_r0.supplier.icon) || "business");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.supplier == null ? null : ctx_r0.supplier.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r0.product.category_name ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r0.product.short_description ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r0.product.description ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r0.product.specifications && ctx_r0.hasSpecifications() ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 10, "product.contactUs"), " ");
  }
}
function ProductDetailComponent_Conditional_16_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 34);
  }
  if (rf & 2) {
    const related_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", related_r5.video, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_Conditional_16_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const related_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", related_r5.image, \u0275\u0275sanitizeUrl)("alt", related_r5.name);
  }
}
function ProductDetailComponent_Conditional_16_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "inventory_2");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32)(1, "div", 33);
    \u0275\u0275template(2, ProductDetailComponent_Conditional_16_For_8_Conditional_2_Template, 1, 1, "video", 34)(3, ProductDetailComponent_Conditional_16_For_8_Conditional_3_Template, 1, 2)(4, ProductDetailComponent_Conditional_16_For_8_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const related_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r6 * 80 + "ms");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c1, ctx_r0.supplierSlug, related_r5.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, related_r5.video ? 2 : related_r5.image ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(related_r5.name);
  }
}
function ProductDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 1)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275repeaterCreate(7, ProductDetailComponent_Conditional_16_For_8_Template, 7, 8, "a", 31, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "product.relatedProducts"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.relatedProducts);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.product = null;
    this.supplier = null;
    this.relatedProducts = [];
    this.supplierSlug = "";
    this.currentImage = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.supplierSlug = params["supplier"];
      const productSlug = params["slug"];
      this.loadProduct(productSlug);
    });
  }
  loadProduct(slug) {
    this.api.getSupplierBySlug(this.supplierSlug).subscribe((supplier) => {
      this.supplier = supplier;
      if (supplier?.products) {
        this.product = supplier.products.find((p) => p.slug === slug) || null;
        if (this.product?.image) {
          this.currentImage = this.product.image;
        }
        this.relatedProducts = supplier.products.filter((p) => p.slug !== slug && p.category_name === this.product?.category_name).slice(0, 5);
      }
    });
  }
  selectImage(img) {
    this.currentImage = img;
  }
  getAllImages() {
    if (!this.product)
      return [];
    const images = [];
    if (this.product.image)
      images.push(this.product.image);
    if (this.product.gallery)
      images.push(...this.product.gallery);
    return images;
  }
  hasSpecifications() {
    return this.product?.specifications ? Object.keys(this.product.specifications).length > 0 : false;
  }
  getSpecifications() {
    if (!this.product?.specifications)
      return [];
    return Object.entries(this.product.specifications).map(([key, value]) => ({ key, value }));
  }
  getWhatsAppMessage() {
    const msg = `Hola, me interesa el producto: ${this.product?.name} (${this.supplier?.name})`;
    return encodeURIComponent(msg);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 10, consts: [[1, "breadcrumb"], [1, "container"], ["routerLink", "/catalogo"], [1, "sep"], [3, "routerLink"], [1, "current"], [1, "product-section"], [1, "product-layout"], [1, "related-section"], [1, "product-gallery"], [1, "main-image"], ["controls", "", "autoplay", "", "muted", "", "loop", "", "playsinline", "", 3, "src"], [1, "thumbnail-strip"], [1, "product-info"], [1, "supplier-badge"], [1, "material-icons-outlined"], [1, "product-title"], [1, "category-tag"], [1, "short-description"], [1, "detail-block"], [1, "product-actions"], ["routerLink", "/contacto", 1, "btn-outline-blue"], [3, "src", "alt"], [1, "placeholder"], [1, "thumbnail", 3, "active"], [1, "thumbnail", 3, "click"], [1, "bar"], [1, "spec-list"], [1, "spec-item"], [1, "deco-bar-sm"], [1, "related-grid"], [1, "related-card", 3, "routerLink", "animation-delay"], [1, "related-card", 3, "routerLink"], [1, "related-image"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "metadata", 3, "src"], [1, "related-name"]], template: function ProductDetailComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(13, "section", 6)(14, "div", 1);
        \u0275\u0275template(15, ProductDetailComponent_Conditional_15_Template, 24, 12, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, ProductDetailComponent_Conditional_16_Template, 9, 3, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "catalog.catalog"));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, ctx.supplierSlug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.supplier == null ? null : ctx.supplier.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.product == null ? null : ctx.product.name);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(15, ctx.product ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.relatedProducts.length > 0 ? 16 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  padding: calc(80px + 1rem) 0 1rem;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.breadcrumb[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #718096;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4FAD47;\n}\n.breadcrumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #204C81;\n  font-weight: 600;\n}\n.product-section[_ngcontent-%COMP%] {\n  padding: 3rem 0 4rem;\n  background: #fff;\n}\n.product-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .product-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.product-gallery[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 100px;\n}\n.product-gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.product-gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000;\n}\n.product-gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-gallery[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #cbd5e1;\n}\n.product-gallery[_ngcontent-%COMP%]   .thumbnail-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n}\n.product-gallery[_ngcontent-%COMP%]   .thumbnail-strip[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n  background: transparent;\n  padding: 0;\n}\n.product-gallery[_ngcontent-%COMP%]   .thumbnail-strip[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover, .product-gallery[_ngcontent-%COMP%]   .thumbnail-strip[_ngcontent-%COMP%]   .thumbnail.active[_ngcontent-%COMP%] {\n  border-color: #4FAD47;\n}\n.product-gallery[_ngcontent-%COMP%]   .thumbnail-strip[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 900px) {\n  .product-gallery[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.product-info[_ngcontent-%COMP%]   .supplier-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #f0f9ff;\n  border: 1px solid #e2e8f0;\n  border-radius: 100px;\n  font-size: 0.85rem;\n  color: #2667A9;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n}\n.product-info[_ngcontent-%COMP%]   .supplier-badge[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #204C81;\n  margin-bottom: 0.75rem;\n  line-height: 1.2;\n}\n.product-info[_ngcontent-%COMP%]   .category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  color: #718096;\n  margin-bottom: 1.25rem;\n}\n.product-info[_ngcontent-%COMP%]   .short-description[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #4a5568;\n  margin-bottom: 1.5rem;\n  line-height: 1.7;\n}\n.detail-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detail-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n  color: #204C81;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 20px;\n  background: #4FAD47;\n  border-radius: 2px;\n  display: inline-block;\n}\n.detail-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5568;\n  line-height: 1.7;\n  max-width: 100%;\n}\n.spec-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.spec-list[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n}\n.spec-list[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4a5568;\n  flex: 1;\n}\n.spec-list[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #204C81;\n  font-weight: 700;\n  margin: 0;\n}\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 2px solid #e2e8f0;\n  margin-top: 1.5rem;\n}\n@media (max-width: 540px) {\n  .product-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn-green[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n  padding: 14px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4FAD47,\n      #2ecc71);\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.btn-green[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-green[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(34, 148, 67, 0.3);\n  color: #fff;\n}\n.btn-outline-blue[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n  padding: 14px 24px;\n  background: transparent;\n  color: #2667A9;\n  font-size: 1rem;\n  font-weight: 700;\n  text-decoration: none;\n  border: 2px solid #2667A9;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.btn-outline-blue[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-outline-blue[_ngcontent-%COMP%]:hover {\n  background: #2667A9;\n  color: #fff;\n  transform: translateY(-2px);\n}\n.related-section[_ngcontent-%COMP%] {\n  padding: 0 0 4rem;\n  background: #fff;\n}\n.related-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-top: 3rem;\n  color: #204C81;\n}\n.deco-bar-sm[_ngcontent-%COMP%] {\n  height: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #4FAD47 0%,\n      #2667A9 50%,\n      #4FAD47 100%);\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1000px) {\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.related-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: transform 0.2s ease;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease forwards;\n  opacity: 0;\n}\n.related-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.related-card[_ngcontent-%COMP%]:hover   .related-image[_ngcontent-%COMP%] {\n  border-color: #4FAD47;\n}\n.related-card[_ngcontent-%COMP%]   .related-image[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.2s ease;\n}\n.related-card[_ngcontent-%COMP%]   .related-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .related-card[_ngcontent-%COMP%]   .related-image[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.related-card[_ngcontent-%COMP%]   .related-image[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #cbd5e1;\n}\n.related-card[_ngcontent-%COMP%]   .related-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #4a5568;\n  text-align: center;\n  line-height: 1.3;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\catalog\\product-detail\\product-detail.component.ts", lineNumber: 451 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-ZH63WXU3.js.map
