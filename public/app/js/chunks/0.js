(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/auth/moduleAuth.js */ "./resources/app/js/src/store/auth/moduleAuth.js");
/* harmony import */ var _navbar_components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/components/I18n.vue */ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeItem: {
      type: String,
      required: false
    },
    hideNavbar: {
      type: Boolean,
      required: false
    }
  },
  components: {
    i18n: _navbar_components_I18n_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      active_item: 0,
      fair_logo: null,
      fair_title: ''
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.auth.loggedIn;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
        this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
      }

      this.$loading.show(this);
      this.$store.dispatch('auth/logout').then(function () {
        _this.$loading.hide(_this);

        _this.$router.push('/home')["catch"](function () {});
      })["catch"](function () {});
    }
  },
  created: function created() {
    var _this2 = this;

    if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.active_item = this.activeItem;
    this.$http.get('/api/fair/now').then(function (res) {
      if (res.data.fair) {
        _this2.isFairExist = true;
        _this2.fair_logo = res.data.fair.logo;
        _this2.fair_title = res.data.fair.name;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/auth/moduleAuth.js */ "./resources/app/js/src/store/auth/moduleAuth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lang: 'en'
    };
  },
  computed: {
    i18n_locale_img: function i18n_locale_img() {
      // Use below code to dynamically fetch image instead of if-else
      // NOTE: We used if-else because laravel throws error in 'yarn prod'.
      // If you are not using laravel + Vue, you can use below code to dynamically get image
      // return require(`@assets/images/flags/${this.$i18n.locale}.png`)
      var lang = localStorage.getItem("language");
      var locale = lang ? lang : 'en';
      this.$i18n.locale = locale;
      if (locale === 'en') return __webpack_require__(/*! @assets/images/flags/en.png */ "./resources/app/assets/images/flags/en.png");else if (locale === 'es') return __webpack_require__(/*! @assets/images/flags/es.png */ "./resources/app/assets/images/flags/es.png");else return __webpack_require__(/*! @assets/images/flags/en.png */ "./resources/app/assets/images/flags/en.png");
    },
    getCurrentLocaleData: function getCurrentLocaleData() {
      var lang = localStorage.getItem("language");
      var locale = lang ? lang : 'en';
      this.$i18n.locale = locale;
      if (locale === 'en') return {
        flag: 'us',
        lang: 'English'
      };else if (locale === 'es') return {
        flag: 'es',
        lang: 'Spanish'
      };
    }
  },
  methods: {
    updateLocale: function updateLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("language", locale);
      this.$router.go();
    }
  },
  created: function created() {
    var lang = localStorage.getItem('language');
    this.lang = lang ? lang : 'en';
    this.$i18n.locale = lang;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-navbar {\n  height: 86px;\n}[dir] .vs-navbar {\n  background: #FFFFFFDD !important;\n}\n[dir=ltr] .vs-navbar .vs-button {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[dir=rtl] .vs-navbar .vs-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n[dir=ltr] .vs-navbar .vs-input {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[dir=rtl] .vs-navbar .vs-input {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.vs-navbar .logo {\n  position: relative;\n  width: 120px;\n  height: auto;\n}\n[dir] .vs-navbar .logo {\n  margin: 10px 40PX;\n}\n.vs-navbar .fair_logo {\n  height: 60px;\n  width: auto;\n}\n[dir] .vs-navbar .fair_logo {\n  border-radius: 10% !important;\n}\n[dir=ltr] .vs-navbar .fair_logo {\n  box-shadow: 1px 5px 5px #33333322;\n}\n[dir=rtl] .vs-navbar .fair_logo {\n  box-shadow: -1px 5px 5px #33333322;\n}\n.vs-navbar .vs-con-items {\n  /*width: 100%;*/\n  /* margin-right: 100px; */\n  justify-content: flex-end;\n}\n[dir] .vs-navbar .vs-con-items .circleIcon {\n  border-radius: 50%;\n  background: #151515;\n}\n.vs-navbar .vs-con-items .is-active-item a {\n  color: white;\n}\n[dir] .vs-navbar .vs-con-items .is-active-item a {\n  background-color: #151515;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item {\n  margin: 0;\n  cursor: pointer;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family: \"Lato\";\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a {\n  padding: 2.5rem 1.2rem;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a span {\n  text-transform: uppercase;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a:hover {\n  color: white !important;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a:hover {\n  background-color: #151515;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a.setting-nav {\n  color: white;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a.setting-nav {\n  background-color: #123058;\n  padding: 1.2rem;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item .feather-icon {\n  margin: 0 0.2rem;\n}\n[dir] .vs-dropdown--menu {\n  border-radius: 0px !important;\n  border: none !important;\n}\n.vs-dropdown--menu .vs-dropdown--item {\n  width: 100% !important;\n}\n[dir] .vs-dropdown--menu .vs-dropdown--item {\n  margin: 0 !important;\n}\n.vs-dropdown--menu .vs-dropdown--item-link {\n  text-transform: uppercase;\n  font-size: 0.9rem !important;\n}\n[dir] .vs-dropdown--menu .vs-dropdown--item-link {\n  padding: 0.8rem !important;\n}\n.vs-dropdown--menu .vs-dropdown--item-link:hover {\n  color: white !important;\n}\n[dir] .vs-dropdown--menu .vs-dropdown--item-link:hover {\n  background: black !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vs-navbar",
    { staticClass: "flex flex-end" },
    [
      _c(
        "div",
        { attrs: { slot: "title" }, slot: "title" },
        [
          _c(
            "vs-navbar-title",
            { staticClass: "flex items-center" },
            [
              _c("router-link", { attrs: { to: "/home" } }, [
                _c("img", {
                  staticClass: "logo cursor-pointer",
                  attrs: { src: __webpack_require__(/*! @assets/images/logo/logo-color.png */ "./resources/app/assets/images/logo/logo-color.png") }
                })
              ]),
              _vm._v(" "),
              [
                _c("div", { staticClass: "flex items-center ml-8" }, [
                  _c("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.fair_logo,
                        expression: "fair_logo"
                      }
                    ],
                    staticClass: "fair_logo",
                    attrs: { src: "/fair_image/" + _vm.fair_logo }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "h2 ml-4 uppercase" }, [
                    _vm._v(_vm._s(_vm.fair_title))
                  ])
                ])
              ]
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("i18n", { staticClass: "mr-8" }),
      _vm._v(" "),
      !_vm.loggedIn
        ? [
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                staticClass: "ml-4",
                attrs: { index: "0" }
              },
              [
                _c(
                  "vs-dropdown",
                  [
                    _c(
                      "a",
                      { staticClass: "a-icon", attrs: { href: "#" } },
                      [
                        _vm._v(
                          "\r\n            " +
                            _vm._s(_vm.$t("SignUp")) +
                            "\r\n            "
                        ),
                        _c("vs-icon", { attrs: { icon: "expand_more" } })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      [
                        _c(
                          "vs-dropdown-item",
                          { attrs: { to: "/auth/register/participant" } },
                          [
                            _vm._v(
                              "\r\n            " +
                                _vm._s(_vm.$t("Register")) +
                                " " +
                                _vm._s(_vm.$t("Competitor")) +
                                " \r\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          { attrs: { to: "/auth/register/expositor" } },
                          [
                            _vm._v(
                              "\r\n              " +
                                _vm._s(_vm.$t("Register")) +
                                " " +
                                _vm._s(_vm.$t("Exhibitor")) +
                                " \r\n            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "1" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h2", attrs: { href: "/app/home/webinar" } },
                  [_vm._v("Webinars")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "2" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h2", attrs: { href: "/app/home/contact" } },
                  [_vm._v(_vm._s(_vm.$t("ContactUs")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                staticClass: "px-4",
                attrs: { index: "4" }
              },
              [
                _c("svg-icon", {
                  attrs: { icon: "facebook", size: "w-8 h-8" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "instagram", size: "w-8 h-8" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "linkedin", size: "w-8 h-8" }
                }),
                _vm._v(" "),
                _c("svg-icon", {
                  attrs: { icon: "whatsapp", size: "w-8 h-8" }
                }),
                _vm._v(" "),
                _c("svg-icon", { attrs: { icon: "youtube", size: "w-8 h-8" } })
              ],
              1
            )
          ]
        : [
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar && _vm.loggedIn,
                    expression: "!hideNavbar&&loggedIn"
                  }
                ],
                staticClass: "ml-4",
                attrs: { index: "0" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "h2",
                    attrs: { href: "/app/home/sustainability" }
                  },
                  [_vm._v(_vm._s(_vm.$t("Sustainability")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar && !_vm.loggedIn,
                    expression: "!hideNavbar&&!loggedIn"
                  }
                ],
                attrs: { index: "1" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h2", attrs: { href: "/app/home/sponsor" } },
                  [_vm._v(_vm._s(_vm.$t("Sponsors")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "2" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h2", attrs: { href: "/app/home/contact" } },
                  [_vm._v(_vm._s(_vm.$t("ContactUs")))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "3" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "h2 flex items-center cursor-pointer",
                    attrs: { "href.prevent": "" },
                    on: {
                      click: function($event) {
                        return _vm.logout()
                      }
                    }
                  },
                  [
                    _c("feather-icon", {
                      attrs: { svgClasses: "w-5 h-5", icon: "LogOutIcon" }
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.$t("LogOut")))])
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-navbar-item",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "4" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "setting-nav text-center",
                    attrs: { href: "/app/setting" }
                  },
                  [
                    _c("svg-icon", {
                      attrs: { size: "w-8 h-8", icon: "profile" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "fs-10 text-white" }, [
                      _vm._v(_vm._s(_vm.$t("MyAccount")))
                    ])
                  ],
                  1
                )
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vs-dropdown",
    {
      staticClass: "cursor-pointer",
      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
    },
    [
      _c(
        "span",
        { staticClass: "cursor-pointer flex items-center i18n-locale" },
        [
          _c("img", {
            staticClass: "h-4 w-5",
            attrs: { src: _vm.i18n_locale_img, alt: _vm.$i18n.locale }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "hidden sm:block ml-2" }, [
            _vm._v(_vm._s(_vm.getCurrentLocaleData.lang))
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-dropdown-menu",
        { staticClass: "w-48 i18n-dropdown vx-navbar-dropdown" },
        [
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.updateLocale("en")
                }
              }
            },
            [
              _c("img", {
                staticClass: "h-4 w-5 mr-1",
                attrs: {
                  src: __webpack_require__(/*! @assets/images/flags/en.png */ "./resources/app/assets/images/flags/en.png"),
                  alt: "en"
                }
              }),
              _vm._v("  English")
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.updateLocale("es")
                }
              }
            },
            [
              _c("img", {
                staticClass: "h-4 w-5 mr-1",
                attrs: {
                  src: __webpack_require__(/*! @assets/images/flags/es.png */ "./resources/app/assets/images/flags/es.png"),
                  alt: "pt"
                }
              }),
              _vm._v("  Spanish")
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/assets/images/flags/en.png":
/*!**************************************************!*\
  !*** ./resources/app/assets/images/flags/en.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/en.png?83b065848d14d33c0d10a13e01862f34";

/***/ }),

/***/ "./resources/app/assets/images/flags/es.png":
/*!**************************************************!*\
  !*** ./resources/app/assets/images/flags/es.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/es.png?1817004ca5ac952f74b3bdbe81b27326";

/***/ }),

/***/ "./resources/app/assets/images/logo/logo-color.png":
/*!*********************************************************!*\
  !*** ./resources/app/assets/images/logo/logo-color.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-color.png?aa8ad8b3a558848b927a8a1b26d2bba1";

/***/ }),

/***/ "./resources/app/js/src/http/axios/index.js":
/*!**************************************************!*\
  !*** ./resources/app/js/src/http/axios/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios.js */ "./resources/app/js/src/axios.js");

/* harmony default export */ __webpack_exports__["default"] = (_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/app/js/src/layouts/components/Header.vue":
/*!************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/Header.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=07c95f16& */ "./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/layouts/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=07c95f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/Header.vue?vue&type=template&id=07c95f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_07c95f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/navbar/components/I18n.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./I18n.vue?vue&type=template&id=70d0b440& */ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440&");
/* harmony import */ var _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18n.vue?vue&type=script&lang=js& */ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__["render"],
  _I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/layouts/components/navbar/components/I18n.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./I18n.vue?vue&type=template&id=70d0b440& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/components/navbar/components/I18n.vue?vue&type=template&id=70d0b440&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_I18n_vue_vue_type_template_id_70d0b440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuth.js":
/*!*******************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuth.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleAuthState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleAuthState.js */ "./resources/app/js/src/store/auth/moduleAuthState.js");
/* harmony import */ var _moduleAuthMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleAuthMutations.js */ "./resources/app/js/src/store/auth/moduleAuthMutations.js");
/* harmony import */ var _moduleAuthActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleAuthActions.js */ "./resources/app/js/src/store/auth/moduleAuthActions.js");
/* harmony import */ var _moduleAuthGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleAuthGetters.js */ "./resources/app/js/src/store/auth/moduleAuthGetters.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: _moduleAuthState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleAuthMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleAuthActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleAuthGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthActions.js":
/*!**************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthActions.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../http/axios/index.js */ "./resources/app/js/src/http/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(_ref, payload) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/login', JSON.parse(JSON.stringify(payload))).then(function (response) {
        if (response.data.user) {
          localStorage.setItem('accessToken', response.data.access_token);
          commit('UPDATE_USER_INFO', response.data.user);
          commit('SET_BEARER', response.data.access_token);
          resolve();
        } else {
          console.log(response.data);
          if (response.data.status === 'unmatched_fair') reject({
            message: 'unregistered_current_fair'
          });else reject({
            message: 'wrong_credentials'
          });
        }
      })["catch"](function () {
        reject({
          message: 'wrong_credentials'
        });
      });
    });
  },
  register: function register(_ref2, payload) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      var user = JSON.parse(JSON.stringify(payload));
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      var formData = new FormData();

      for (var key in user) {
        if (key === 'category_interest') {
          if (user[key].length > 0) {
            for (var i = 0; i < user[key].length; i++) {
              formData.append("".concat(key, "[").concat(i, "]"), user[key][i]);
            }
          }
        } else {
          formData.append(key, user[key]);
        }
      }

      if (payload.avatar_file) formData.append('avatar_file', payload.avatar_file);
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/register', formData, headers).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  logout: function logout(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/logout').then(function () {
        commit('REMOVE_BEARER');
        localStorage.removeItem('userInfo');
        resolve();
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  logged: function logged(_ref4) {
    var commit = _ref4.commit;
    commit('SET_BEARER');
  },
  fetchAccessToken: function fetchAccessToken() {
    return new Promise(function (resolve) {
      return _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/refresh-token', {
        accessToken: localStorage.getItem('accessToKen')
      }).then(function (response) {
        resolve(response);
      });
    });
  }
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthGetters.js":
/*!**************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthGetters.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthMutations.js":
/*!****************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthMutations.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_BEARER: function SET_BEARER(state) {
    state.loggedIn = true;
  },
  SET_LANG: function SET_LANG(state, payload) {
    console.log(payload);
    state.lang = payload;
  },
  REMOVE_BEARER: function REMOVE_BEARER(state) {
    state.loggedIn = false;
  },
  UPDATE_USER_INFO: function UPDATE_USER_INFO(state, payload) {
    // Get Data localStorage
    //const userInfo = JSON.parse(localStorage.getItem('userInfo')) //|| state.AppActiveUser
    var userInfo = {};

    for (var _i = 0, _Object$keys = Object.keys(payload); _i < _Object$keys.length; _i++) {
      var property = _Object$keys[_i];

      if (payload[property] !== null) {
        userInfo[property] = payload[property];
      }
    } // Store data in localStorage


    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthState.js":
/*!************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthState.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  loggedIn: false,
  lang: 'en'
});

/***/ })

}]);