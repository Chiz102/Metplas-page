import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HttpClient,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Pipe,
  Subject,
  __spreadProps,
  __spreadValues,
  catchError,
  concat,
  concatMap,
  defer,
  forkJoin,
  inject,
  isObservable,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  take,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-YDRPHY3P.js";

// node_modules/@ngx-translate/core/fesm2022/ngx-translate-core.mjs
var MissingTranslationHandler = class {
};
var DefaultMissingTranslationHandler = class _DefaultMissingTranslationHandler {
  handle(params) {
    return params.key;
  }
  static \u0275fac = function DefaultMissingTranslationHandler_Factory(t) {
    return new (t || _DefaultMissingTranslationHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultMissingTranslationHandler,
    factory: _DefaultMissingTranslationHandler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMissingTranslationHandler, [{
    type: Injectable
  }], null, null);
})();
var TranslateCompiler = class {
};
var TranslateNoOpCompiler = class _TranslateNoOpCompiler extends TranslateCompiler {
  compile(value, lang) {
    return value;
  }
  compileTranslations(translations, lang) {
    return translations;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateNoOpCompiler_BaseFactory;
    return function TranslateNoOpCompiler_Factory(t) {
      return (\u0275TranslateNoOpCompiler_BaseFactory || (\u0275TranslateNoOpCompiler_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateNoOpCompiler)))(t || _TranslateNoOpCompiler);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateNoOpCompiler,
    factory: _TranslateNoOpCompiler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpCompiler, [{
    type: Injectable
  }], null, null);
})();
var TranslateLoader = class {
};
var TranslateNoOpLoader = class _TranslateNoOpLoader extends TranslateLoader {
  getTranslation(lang) {
    return of({});
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateNoOpLoader_BaseFactory;
    return function TranslateNoOpLoader_Factory(t) {
      return (\u0275TranslateNoOpLoader_BaseFactory || (\u0275TranslateNoOpLoader_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateNoOpLoader)))(t || _TranslateNoOpLoader);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateNoOpLoader,
    factory: _TranslateNoOpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpLoader, [{
    type: Injectable
  }], null, null);
})();
function equals(o1, o2) {
  if (o1 === o2)
    return true;
  if (o1 === null || o2 === null)
    return false;
  if (o1 !== o1 && o2 !== o2)
    return true;
  const t1 = typeof o1, t2 = typeof o2;
  let length;
  if (t1 == t2 && t1 == "object") {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2))
        return false;
      if ((length = o1.length) == o2.length) {
        for (let key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key]))
            return false;
        }
        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }
      if (isDict(o1) && isDict(o2)) {
        const keySet = /* @__PURE__ */ Object.create(null);
        for (const key in o1) {
          if (!equals(o1[key], o2[key])) {
            return false;
          }
          keySet[key] = true;
        }
        for (const key in o2) {
          if (!(key in keySet) && typeof o2[key] !== "undefined") {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
}
function isDefinedAndNotNull(value) {
  return typeof value !== "undefined" && value !== null;
}
function isDefined(value) {
  return value !== void 0;
}
function isDict(value) {
  return isObject(value) && !isArray(value) && value !== null;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isArray(value) {
  return Array.isArray(value);
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function cloneDeep(value) {
  if (isArray(value)) {
    return value.map((item) => cloneDeep(item));
  } else if (isDict(value)) {
    const cloned = {};
    Object.keys(value).forEach((key) => {
      cloned[key] = cloneDeep(value[key]);
    });
    return cloned;
  } else {
    return value;
  }
}
function mergeDeep(target, source) {
  if (!isObject(target)) {
    return cloneDeep(source);
  }
  const output = cloneDeep(target);
  if (isObject(output) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isDict(source[key])) {
        if (key in target) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
function getValue(target, key) {
  const keys = key.split(".");
  key = "";
  do {
    key += keys.shift();
    const isLastKey = !keys.length;
    if (isDefinedAndNotNull(target)) {
      if (isDict(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || isLastKey)) {
        target = target[key];
        key = "";
        continue;
      }
      if (isArray(target)) {
        const index = parseInt(key, 10);
        if (isDefined(target[index]) && (isDict(target[index]) || isArray(target[index]) || isLastKey)) {
          target = target[index];
          key = "";
          continue;
        }
      }
    }
    if (isLastKey) {
      target = void 0;
      continue;
    }
    key += ".";
  } while (keys.length);
  return target;
}
function insertValue(target, key, value) {
  return mergeDeep(target, createNestedObject(key, value));
}
function createNestedObject(dotSeparatedKey, value) {
  return dotSeparatedKey.split(".").reduceRight((acc, key) => ({
    [key]: acc
  }), value);
}
var TranslateParser = class {
};
var TranslateDefaultParser = class _TranslateDefaultParser extends TranslateParser {
  templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  interpolate(expr, params) {
    if (isString(expr)) {
      return this.interpolateString(expr, params);
    } else if (isFunction(expr)) {
      return this.interpolateFunction(expr, params);
    }
    return void 0;
  }
  interpolateFunction(fn, params) {
    return fn(params);
  }
  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }
    return expr.replace(this.templateMatcher, (substring, key) => {
      const replacement = this.getInterpolationReplacement(params, key);
      return replacement !== void 0 ? replacement : substring;
    });
  }
  /**
   * Returns the replacement for an interpolation parameter
   * @params:
   */
  getInterpolationReplacement(params, key) {
    return this.formatValue(getValue(params, key));
  }
  /**
   * Converts a value into a useful string representation.
   * @param value The value to format.
   * @returns A string representation of the value.
   */
  formatValue(value) {
    if (isString(value)) {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return value.toString();
    }
    if (value === null) {
      return "null";
    }
    if (isArray(value)) {
      return value.join(", ");
    }
    if (isObject(value)) {
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
        return value.toString();
      }
      return JSON.stringify(value);
    }
    return void 0;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateDefaultParser_BaseFactory;
    return function TranslateDefaultParser_Factory(t) {
      return (\u0275TranslateDefaultParser_BaseFactory || (\u0275TranslateDefaultParser_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateDefaultParser)))(t || _TranslateDefaultParser);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateDefaultParser,
    factory: _TranslateDefaultParser.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDefaultParser, [{
    type: Injectable
  }], null, null);
})();
var TranslateStore = class _TranslateStore {
  _onTranslationChange = new Subject();
  _onLangChange = new Subject();
  _onFallbackLangChange = new Subject();
  fallbackLang = null;
  currentLang;
  translations = {};
  languages = [];
  getTranslations(language) {
    return this.translations[language];
  }
  setTranslations(language, translations, extend) {
    this.translations[language] = extend && this.hasTranslationFor(language) ? mergeDeep(this.translations[language], translations) : translations;
    this.addLanguages([language]);
    this._onTranslationChange.next({
      lang: language,
      translations: this.getTranslations(language)
    });
  }
  getLanguages() {
    return this.languages;
  }
  getCurrentLang() {
    return this.currentLang;
  }
  getFallbackLang() {
    return this.fallbackLang;
  }
  /**
   * Changes the fallback lang
   */
  setFallbackLang(lang, emitChange = true) {
    this.fallbackLang = lang;
    if (emitChange) {
      this._onFallbackLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  setCurrentLang(lang, emitChange = true) {
    this.currentLang = lang;
    if (emitChange) {
      this._onLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this._onTranslationChange.asObservable();
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this._onLangChange.asObservable();
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this._onFallbackLangChange.asObservable();
  }
  addLanguages(languages) {
    this.languages = Array.from(/* @__PURE__ */ new Set([...this.languages, ...languages]));
  }
  hasTranslationFor(lang) {
    return typeof this.translations[lang] !== "undefined";
  }
  deleteTranslations(lang) {
    delete this.translations[lang];
  }
  getTranslation(key) {
    let text = this.getValue(this.currentLang, key);
    if (text === void 0 && this.fallbackLang != null && this.fallbackLang !== this.currentLang) {
      text = this.getValue(this.fallbackLang, key);
    }
    return text;
  }
  getValue(language, key) {
    return getValue(this.getTranslations(language), key);
  }
  static \u0275fac = function TranslateStore_Factory(t) {
    return new (t || _TranslateStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateStore,
    factory: _TranslateStore.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateStore, [{
    type: Injectable
  }], null, null);
})();
var TRANSLATE_SERVICE_CONFIG = new InjectionToken("TRANSLATE_CONFIG");
var makeObservable = (value) => {
  return isObservable(value) ? value : of(value);
};
var TranslateService = class _TranslateService {
  loadingTranslations;
  pending = false;
  _translationRequests = {};
  lastUseLanguage = null;
  currentLoader = inject(TranslateLoader);
  compiler = inject(TranslateCompiler);
  parser = inject(TranslateParser);
  missingTranslationHandler = inject(MissingTranslationHandler);
  store = inject(TranslateStore);
  extend = false;
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this.store.onTranslationChange;
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this.store.onLangChange;
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this.store.onFallbackLangChange;
  }
  /**
   * @deprecated Use onFallbackLangChange() instead
   */
  get onDefaultLangChange() {
    return this.store.onFallbackLangChange;
  }
  constructor() {
    const config = __spreadValues({
      extend: false,
      fallbackLang: null
    }, inject(TRANSLATE_SERVICE_CONFIG, {
      optional: true
    }));
    if (config.lang) {
      this.use(config.lang);
    }
    if (config.fallbackLang) {
      this.setFallbackLang(config.fallbackLang);
    }
    if (config.extend) {
      this.extend = true;
    }
  }
  /**
   * Sets the fallback language to use if a translation is not found in the
   * current language
   */
  setFallbackLang(lang) {
    if (!this.getFallbackLang()) {
      this.store.setFallbackLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: () => {
          this.store.setFallbackLang(lang);
        },
        error: () => {
        }
      });
      return pending;
    }
    this.store.setFallbackLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Changes the lang currently used
   */
  use(lang) {
    this.lastUseLanguage = lang;
    if (!this.getCurrentLang()) {
      this.store.setCurrentLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: () => {
          this.changeLang(lang);
        },
        error: () => {
        }
      });
      return pending;
    }
    this.changeLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Retrieves the given translations
   */
  loadOrExtendLanguage(lang) {
    if (!this.store.hasTranslationFor(lang) || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.loadAndCompileTranslations(lang);
      return this._translationRequests[lang];
    }
    return void 0;
  }
  /**
   * Changes the current lang
   */
  changeLang(lang) {
    if (lang !== this.lastUseLanguage) {
      return;
    }
    this.store.setCurrentLang(lang);
  }
  getCurrentLang() {
    return this.store.getCurrentLang();
  }
  loadAndCompileTranslations(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
    this.loadingTranslations = loadingTranslations.pipe(map((res) => this.compiler.compileTranslations(res, lang)), shareReplay(1), take(1));
    this.loadingTranslations.subscribe({
      next: (res) => {
        this.store.setTranslations(lang, res, this.extend);
        this.pending = false;
      },
      error: (err) => {
        this.pending = false;
      }
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */
  setTranslation(lang, translations, shouldMerge = false) {
    const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
    this.store.setTranslations(lang, interpolatableTranslations, shouldMerge || this.extend);
  }
  getLangs() {
    return this.store.getLanguages();
  }
  /**
   * Add available languages
   */
  addLangs(languages) {
    this.store.addLanguages(languages);
  }
  getParsedResultForKey(key, interpolateParams) {
    const textToInterpolate = this.getTextToInterpolate(key);
    if (isDefinedAndNotNull(textToInterpolate)) {
      return this.runInterpolation(textToInterpolate, interpolateParams);
    }
    const res = this.missingTranslationHandler.handle(__spreadValues({
      key,
      translateService: this
    }, interpolateParams !== void 0 && {
      interpolateParams
    }));
    return res !== void 0 ? res : key;
  }
  /**
   * Gets the fallback language. null if none is defined
   */
  getFallbackLang() {
    return this.store.getFallbackLang();
  }
  getTextToInterpolate(key) {
    return this.store.getTranslation(key);
  }
  runInterpolation(translations, interpolateParams) {
    if (!isDefinedAndNotNull(translations)) {
      return;
    }
    if (isArray(translations)) {
      return this.runInterpolationOnArray(translations, interpolateParams);
    }
    if (isDict(translations)) {
      return this.runInterpolationOnDict(translations, interpolateParams);
    }
    return this.parser.interpolate(translations, interpolateParams);
  }
  runInterpolationOnArray(translations, interpolateParams) {
    return translations.map((translation) => this.runInterpolation(translation, interpolateParams));
  }
  runInterpolationOnDict(translations, interpolateParams) {
    const result = {};
    for (const key in translations) {
      const res = this.runInterpolation(translations[key], interpolateParams);
      if (res !== void 0) {
        result[key] = res;
      }
    }
    return result;
  }
  /**
   * Returns the parsed result of the translations
   */
  getParsedResult(key, interpolateParams) {
    return key instanceof Array ? this.getParsedResultForArray(key, interpolateParams) : this.getParsedResultForKey(key, interpolateParams);
  }
  getParsedResultForArray(key, interpolateParams) {
    const result = {};
    let observables = false;
    for (const k of key) {
      result[k] = this.getParsedResultForKey(k, interpolateParams);
      observables = observables || isObservable(result[k]);
    }
    if (!observables) {
      return result;
    }
    const sources = key.map((k) => makeObservable(result[k]));
    return forkJoin(sources).pipe(map((arr) => {
      const obj = {};
      arr.forEach((value, index) => {
        obj[key[index]] = value;
      });
      return obj;
    }));
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  get(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    if (this.pending) {
      return this.loadingTranslations.pipe(concatMap(() => {
        return makeObservable(this.getParsedResult(key, interpolateParams));
      }));
    }
    return makeObservable(this.getParsedResult(key, interpolateParams));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  getStreamOnTranslationChange(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  stream(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onLangChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages
   * will be used except any promise handling.
   */
  instant(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || key.length === 0) {
      throw new Error('Parameter "key" is required and cannot be empty');
    }
    const result = this.getParsedResult(key, interpolateParams);
    if (isObservable(result)) {
      if (Array.isArray(key)) {
        return key.reduce((acc, currKey) => {
          acc[currKey] = currKey;
          return acc;
        }, {});
      }
      return key;
    }
    return result;
  }
  /**
   * Sets the translated value of a key, after compiling it
   */
  set(key, translation, lang = this.getCurrentLang()) {
    this.store.setTranslations(lang, insertValue(this.store.getTranslations(lang), key, isString(translation) ? this.compiler.compile(translation, lang) : this.compiler.compileTranslations(translation, lang)), false);
  }
  /**
   * Allows reloading the lang file from the file
   */
  reloadLang(lang) {
    this.resetLang(lang);
    return this.loadAndCompileTranslations(lang);
  }
  /**
   * Deletes inner translation
   */
  resetLang(lang) {
    delete this._translationRequests[lang];
    this.store.deleteTranslations(lang);
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  static getBrowserLang() {
    if (typeof window === "undefined" || !window.navigator) {
      return void 0;
    }
    const browserLang = this.getBrowserCultureLang();
    return browserLang ? browserLang.split(/[-_]/)[0] : void 0;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  static getBrowserCultureLang() {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") {
      return void 0;
    }
    return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
  }
  getBrowserLang() {
    return _TranslateService.getBrowserLang();
  }
  getBrowserCultureLang() {
    return _TranslateService.getBrowserCultureLang();
  }
  /** Deprecations **/
  /**
   * @deprecated use `getFallbackLang()`
   */
  get defaultLang() {
    return this.getFallbackLang();
  }
  /**
   * The lang currently used
   * @deprecated use `getCurrentLang()`
   */
  get currentLang() {
    return this.store.getCurrentLang();
  }
  /**
   * @deprecated use `getLangs()`
   */
  get langs() {
    return this.store.getLanguages();
  }
  /**
   * Sets the  language to use as a fallback
   * @deprecated use setFallbackLanguage()
   */
  setDefaultLang(lang) {
    return this.setFallbackLang(lang);
  }
  /**
   * Gets the fallback language used
   * @deprecated use getFallbackLang()
   */
  getDefaultLang() {
    return this.getFallbackLang();
  }
  static \u0275fac = function TranslateService_Factory(t) {
    return new (t || _TranslateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateService,
    factory: _TranslateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateService, [{
    type: Injectable
  }], () => [], null);
})();
var TranslateDirective = class _TranslateDirective {
  translateService = inject(TranslateService);
  element = inject(ElementRef);
  _ref = inject(ChangeDetectorRef);
  key;
  lastParams;
  currentParams;
  onLangChangeSub;
  onFallbackLangChangeSub;
  onTranslationChangeSub;
  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }
  constructor() {
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((event) => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    }
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe((event) => {
        this.checkNodes(true, event.translations);
      });
    }
    if (!this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub = this.translateService.onFallbackLangChange.subscribe((event) => {
        this.checkNodes(true);
      });
    }
  }
  ngAfterViewChecked() {
    this.checkNodes();
  }
  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes;
    if (!nodes.length) {
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }
    nodes.forEach((n) => {
      const node = n;
      if (node.nodeType === 3) {
        let key;
        if (forceUpdate) {
          node.lastKey = null;
        }
        if (isDefinedAndNotNull(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          const content = this.getContent(node);
          const trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            if (content !== node.currentValue) {
              key = trimmedContent;
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              key = node.originalContent.trim();
            }
          }
        }
        this.updateValue(key, node, translations);
      }
    });
  }
  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }
      this.lastParams = this.currentParams;
      const onTranslation = (res) => {
        if (res !== key || !node.lastKey) {
          node.lastKey = key;
        }
        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }
        if (isString(res)) {
          node.currentValue = res;
        } else if (!isDefinedAndNotNull(res)) {
          node.currentValue = node.originalContent || key;
        } else {
          node.currentValue = JSON.stringify(res);
        }
        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
        this._ref.markForCheck();
      };
      if (isDefinedAndNotNull(translations)) {
        const res = this.translateService.getParsedResult(key, this.currentParams);
        if (isObservable(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }
  getContent(node) {
    return isDefinedAndNotNull(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefinedAndNotNull(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }
  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
    if (this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub.unsubscribe();
    }
    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }
  static \u0275fac = function TranslateDirective_Factory(t) {
    return new (t || _TranslateDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TranslateDirective,
    selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
    inputs: {
      translate: "translate",
      translateParams: "translateParams"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[translate],[ngx-translate]",
      standalone: true
    }]
  }], () => [], {
    translate: [{
      type: Input
    }],
    translateParams: [{
      type: Input
    }]
  });
})();
var TranslatePipe = class _TranslatePipe {
  translate = inject(TranslateService);
  _ref = inject(ChangeDetectorRef);
  value = "";
  lastKey = null;
  lastParams = [];
  onTranslationChange;
  onLangChange;
  onFallbackLangChange;
  updateValue(key, interpolateParams, translations) {
    const onTranslation = (res) => {
      this.value = res !== void 0 ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    };
    if (translations) {
      const res = this.translate.getParsedResult(key, interpolateParams);
      if (isObservable(res)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    }
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }
    let interpolateParams = void 0;
    if (isDefinedAndNotNull(args[0]) && args.length) {
      if (isString(args[0]) && args[0].length) {
        const validArgs = args[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (isDict(args[0])) {
        interpolateParams = args[0];
      }
    }
    this.lastKey = query;
    this.lastParams = args;
    this.updateValue(query, interpolateParams);
    this._dispose();
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe((event) => {
        if (this.lastKey && event.lang === this.translate.getCurrentLang() || event.lang === this.translate.getFallbackLang()) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe((event) => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onFallbackLangChange) {
      this.onFallbackLangChange = this.translate.onFallbackLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams);
        }
      });
    }
    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */
  _dispose() {
    if (typeof this.onTranslationChange !== "undefined") {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = void 0;
    }
    if (typeof this.onLangChange !== "undefined") {
      this.onLangChange.unsubscribe();
      this.onLangChange = void 0;
    }
    if (typeof this.onFallbackLangChange !== "undefined") {
      this.onFallbackLangChange.unsubscribe();
      this.onFallbackLangChange = void 0;
    }
  }
  ngOnDestroy() {
    this._dispose();
  }
  static \u0275fac = function TranslatePipe_Factory(t) {
    return new (t || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "translate",
    type: _TranslatePipe,
    pure: false,
    standalone: true
  });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslatePipe,
    factory: _TranslatePipe.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Injectable
  }, {
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
      // required to update the value when the promise is resolved
    }]
  }], null, null);
})();
function provideTranslateLoader(loader) {
  return {
    provide: TranslateLoader,
    useClass: loader
  };
}
function provideTranslateCompiler(compiler) {
  return {
    provide: TranslateCompiler,
    useClass: compiler
  };
}
function provideTranslateParser(parser) {
  return {
    provide: TranslateParser,
    useClass: parser
  };
}
function provideMissingTranslationHandler(handler) {
  return {
    provide: MissingTranslationHandler,
    useClass: handler
  };
}
function defaultProviders(config = {}, provideStore) {
  const providers = [];
  if (config.loader) {
    providers.push(config.loader);
  }
  if (config.compiler) {
    providers.push(config.compiler);
  }
  if (config.parser) {
    providers.push(config.parser);
  }
  if (config.missingTranslationHandler) {
    providers.push(config.missingTranslationHandler);
  }
  if (provideStore) {
    providers.push(TranslateStore);
  }
  if (config.useDefaultLang || config.defaultLanguage) {
    console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead.");
    if (config.useDefaultLang === true && config.defaultLanguage) {
      config.fallbackLang = config.defaultLanguage;
    }
  }
  const serviceConfig = {
    fallbackLang: config.fallbackLang ?? null,
    lang: config.lang,
    extend: config.extend ?? false
  };
  providers.push({
    provide: TRANSLATE_SERVICE_CONFIG,
    useValue: serviceConfig
  });
  providers.push({
    provide: TranslateService,
    useClass: TranslateService,
    deps: [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, TRANSLATE_SERVICE_CONFIG]
  });
  return providers;
}
var TranslateModule = class _TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(__spreadValues({
        compiler: provideTranslateCompiler(TranslateNoOpCompiler),
        parser: provideTranslateParser(TranslateDefaultParser),
        loader: provideTranslateLoader(TranslateNoOpLoader),
        missingTranslationHandler: provideMissingTranslationHandler(DefaultMissingTranslationHandler)
      }, config), true)]
    };
  }
  /**
   * Use this method in your other (non-root) modules to import the directive/pipe
   */
  static forChild(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(config, config.isolate ?? false)]
    };
  }
  static \u0275fac = function TranslateModule_Factory(t) {
    return new (t || _TranslateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TranslateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateModule, [{
    type: NgModule,
    args: [{
      imports: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  constructor(translate) {
    this.translate = translate;
    this.currentLanguage = signal("es");
    const savedLang = localStorage.getItem("language");
    const lang = savedLang === "es" || savedLang === "en" ? savedLang : "es";
    this.setLanguage(lang);
  }
  setLanguage(lang) {
    this.translate.use(lang);
    this.currentLanguage.set(lang);
    localStorage.setItem("language", lang);
  }
  getCurrentLanguage() {
    return this.currentLanguage();
  }
  static {
    this.\u0275fac = function LanguageService_Factory(t) {
      return new (t || _LanguageService)(\u0275\u0275inject(TranslateService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8000/api";
    this.languageService = inject(LanguageService);
  }
  /**
   * Agrega el parámetro de idioma a la URL
   */
  withLang(url) {
    const lang = this.languageService.getCurrentLanguage();
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}lang=${lang}`;
  }
  // Suppliers (Proveedores)
  getSuppliers() {
    return this.http.get(`assets/catalog/__metadata__.json`).pipe(
      catchError(() => of({ suppliers: {} })),
      // Map the suppliers object to an array of suppliers with slug
      // (slug is the key in the suppliers object)
      // Example: { suppliers: { zeigler: { ... } } } => [ { slug: 'zeigler', ... } ]
      // Use RxJS map operator
      map((data) => {
        if (!data || !data.suppliers)
          return [];
        return Object.entries(data.suppliers).map(([slug, supplier]) => __spreadValues({ slug }, supplier));
      })
    );
  }
  getSupplierBySlug(slug) {
    return this.http.get(`assets/catalog/__metadata__.json`).pipe(catchError(() => of({ suppliers: {} })), switchMap((data) => {
      if (!data || !data.suppliers)
        return of(null);
      const supplier = data.suppliers[slug];
      if (!supplier)
        return of(null);
      return this.getProductsBySupplier(slug).pipe(map((products) => __spreadProps(__spreadValues({
        slug
      }, supplier), {
        products,
        products_count: products.length
      })));
    }));
  }
  // Categories (para filtrado adicional)
  getCategories() {
    return this.http.get(this.withLang(`${this.apiUrl}/categories/`)).pipe(catchError(() => of([])));
  }
  getCategoryBySlug(slug) {
    return this.http.get(this.withLang(`${this.apiUrl}/categories/${slug}/`));
  }
  // Products - Carga desde archivos JSON locales
  getProducts(supplierSlug) {
    if (!supplierSlug) {
      return this.getSuppliers().pipe(switchMap((suppliers) => {
        if (suppliers.length === 0)
          return of([]);
        const requests = suppliers.map((s) => this.getProductsBySupplier(s.slug));
        return forkJoin(requests).pipe(map((results) => results.flat()));
      }));
    }
    return this.getProductsBySupplier(supplierSlug);
  }
  /**
   * Carga productos de un proveedor específico desde sus archivos JSON
   */
  getProductsBySupplier(supplierSlug) {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === "en";
    return this.http.get(`assets/catalog/__metadata__.json`).pipe(catchError(() => of({ suppliers: {} })), switchMap((metadata) => {
      const supplier = metadata.suppliers?.[supplierSlug];
      if (!supplier || !supplier.files)
        return of([]);
      const productRequests = supplier.files.map((file) => this.http.get(`assets/catalog/${supplierSlug}/${file}`).pipe(catchError(() => of([]))));
      if (productRequests.length === 0)
        return of([]);
      return forkJoin(productRequests).pipe(map((results) => {
        const allProducts = [];
        let id = 1;
        results.forEach((products) => {
          products.forEach((p) => {
            allProducts.push({
              id: id++,
              name: isEn ? p.item_name || p.item_name_es : p.item_name_es || p.item_name,
              slug: this.slugify(p.item_name || p.item_name_es),
              short_description: isEn ? p.description || p.category || "" : p.description_es || p.category_es || p.category || "",
              description: isEn ? p.description || "" : p.description_es || "",
              specifications: {},
              image: this.transformImagePath(p.image_path),
              video: p.video || "",
              gallery: (p.gallery || []).map((img) => this.transformImagePath(img)),
              is_featured: false,
              order: id,
              supplier_name: supplierSlug,
              category_name: isEn ? p.category : p.category_es || p.category
            });
          });
        });
        return allProducts;
      }));
    }));
  }
  /**
   * Transforma la ruta de imagen del JSON a la ruta correcta en assets
   */
  transformImagePath(imagePath) {
    if (!imagePath)
      return "";
    if (imagePath.startsWith("images/")) {
      return `assets/images/products/${imagePath.substring(7)}`;
    }
    return imagePath;
  }
  /**
   * Genera un slug a partir de un nombre
   */
  slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").trim();
  }
  getFeaturedProducts() {
    return this.getProducts().pipe(map((products) => products.slice(0, 6)), catchError(() => of([])));
  }
  getProductBySlug(slug) {
    return this.getProducts().pipe(map((products) => products.find((p) => p.slug === slug) || products[0]));
  }
  /**
   * Obtiene las categorías de un proveedor desde su metadata específico
   */
  getSupplierCategories(supplierSlug) {
    return this.http.get(`assets/catalog/${supplierSlug}/__metadata__.json`).pipe(catchError(() => of({ categories: [] })), map((data) => {
      if (!data || !data.categories)
        return [];
      return data.categories;
    }));
  }
  /**
   * Obtiene productos de una categoría específica de un proveedor
   */
  getProductsByCategory(supplierSlug, categorySlug) {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === "en";
    return this.http.get(`assets/catalog/${supplierSlug}/__metadata__.json`).pipe(catchError(() => of({ categories: [] })), switchMap((metadata) => {
      if (!metadata || !metadata.categories) {
        return of({ products: [], categoryName: categorySlug });
      }
      const category = metadata.categories.find((c) => {
        const catSlug = c.file.replace(".json", "").toLowerCase().replace(/\s+/g, "-");
        return catSlug === categorySlug;
      });
      if (!category) {
        return of({ products: [], categoryName: categorySlug });
      }
      const categoryName = isEn ? category.name_en : category.name_es;
      return this.http.get(`assets/catalog/${supplierSlug}/${category.file}`).pipe(catchError(() => of([])), map((products) => {
        let id = 1;
        const mappedProducts = products.map((p) => ({
          id: id++,
          name: isEn ? p.item_name || p.item_name_es : p.item_name_es || p.item_name,
          slug: this.slugify(p.item_name || p.item_name_es),
          short_description: isEn ? p.description || p.category || "" : p.description_es || p.category_es || p.category || "",
          description: isEn ? p.description || "" : p.description_es || "",
          specifications: {},
          image: this.transformImagePath(p.image_path),
          video: p.video || "",
          gallery: (p.gallery || []).map((img) => this.transformImagePath(img)),
          is_featured: false,
          order: id,
          supplier_name: supplierSlug,
          category_name: categoryName
        }));
        return { products: mappedProducts, categoryName };
      }));
    }));
  }
  // Contact
  sendContactMessage(message) {
    return this.http.post(`${this.apiUrl}/contact/`, message);
  }
  // Company Info
  getCompanyInfo() {
    return this.http.get(this.withLang(`${this.apiUrl}/company/`)).pipe(catchError(() => of(this.getDefaultCompanyInfo())));
  }
  // Categories by Supplier Slug
  getCategoriesBySupplierSlug(supplierSlug, lang = "esp") {
    const req = new XMLHttpRequest();
    req.open("GET", "assets/catalog/__metadata__.json", false);
    req.send(null);
    if (req.status === 200) {
      try {
        const data = JSON.parse(req.responseText);
        const supplier = data.suppliers?.[supplierSlug];
        if (supplier && supplier.available_categories && supplier.available_categories[lang]) {
          return supplier.available_categories[lang];
        }
      } catch (e) {
        return [];
      }
    }
    return [];
  }
  getDefaultCompanyInfo() {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === "en";
    return {
      name: "Metplastech Technologies SPA",
      slogan: isEn ? "Innovation and technology for industry" : "Innovaci\xF3n y tecnolog\xEDa para la industria",
      phone: "+569 9615 4315",
      whatsapp: "+56996154315",
      email: "contacto@metplastech.cl",
      address: isEn ? "Curic\xF3 \u2013 Maule Region \u2013 Chile" : "Curic\xF3 \u2013 Regi\xF3n del Maule \u2013 Chile"
    };
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  TranslateLoader,
  TranslateService,
  TranslatePipe,
  TranslateModule,
  LanguageService,
  ApiService
};
//# sourceMappingURL=chunk-LXXVMBGD.js.map
