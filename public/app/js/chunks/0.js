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
  data: function data() {
    return {
      search: ''
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.auth.loggedIn;
      /*let userInfo = localStorage.getItem('userInfo')
      if (userInfo) {
        userInfo = JSON.parse(userInfo)
        if (userInfo.id !== 0 && userInfo.email && userInfo.email !== '') {
          return true
        }
      }
      return false*/
    }
  },
  methods: {
    logout: function logout() {
      if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
        this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
      }

      this.$store.dispatch('auth/logout');
    }
  },
  created: function created() {
    if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }
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
exports.push([module.i, ".vs-navbar {\n  height: 86px;\n}[dir] .vs-navbar {\n  background: #FFFFFFDD !important;\n}\n[dir=ltr] .vs-navbar .vs-button {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[dir=rtl] .vs-navbar .vs-button {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n[dir=ltr] .vs-navbar .vs-input {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n[dir=rtl] .vs-navbar .vs-input {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.vs-navbar .logo {\n  position: relative;\n  width: 120px;\n  height: auto;\n}\n[dir] .vs-navbar .logo {\n  margin: 10px 20PX;\n}\n.vs-navbar .vs-con-items {\n  width: 100%;\n  /* margin-right: 100px; */\n  justify-content: flex-end;\n}\n[dir] .vs-navbar .vs-con-items .circleIcon {\n  border-radius: 50%;\n  background: #333;\n}\n.vs-navbar .vs-con-items .is-active-item a {\n  color: white;\n}\n[dir] .vs-navbar .vs-con-items .is-active-item a {\n  background-color: #333;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item {\n  margin: 0;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a {\n  padding: 2.5rem 1.5rem;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a span {\n  text-transform: uppercase;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a:hover {\n  color: white !important;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a:hover {\n  background-color: #333;\n}\n.vs-navbar .vs-con-items .vs-navbar--item a.setting-nav {\n  color: white;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item a.setting-nav {\n  background-color: #123058;\n  padding: 1.5rem;\n}\n[dir] .vs-navbar .vs-con-items .vs-navbar--item .feather-icon {\n  margin: 0 0.2rem;\n}\n[dir] .vs-dropdown--menu {\n  border-radius: 0px !important;\n}\n.vs-dropdown--menu .vs-dropdown--item-link {\n  text-transform: uppercase;\n  font-size: 0.8rem !important;\n}\n.vs-dropdown--menu .vs-dropdown--item-link:hover {\n  color: white !important;\n}\n[dir] .vs-dropdown--menu .vs-dropdown--item-link:hover {\n  background: #333 !important;\n}", ""]);

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
    {
      staticClass: "flex flex-end",
      model: {
        value: _vm.activeItem,
        callback: function($$v) {
          _vm.activeItem = $$v
        },
        expression: "activeItem"
      }
    },
    [
      _c(
        "div",
        { attrs: { slot: "title" }, slot: "title" },
        [
          _c(
            "vs-navbar-title",
            [
              _c("router-link", { attrs: { to: "/home" } }, [
                _c("img", {
                  staticClass: "logo cursor-pointer",
                  attrs: { src: __webpack_require__(/*! @assets/images/logo/logo-color.png */ "./resources/app/assets/images/logo/logo-color.png") }
                })
              ])
            ],
            1
          )
        ],
        1
      ),
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
                        _vm._v("\r\n            Registrarme\r\n            "),
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
                              "\r\n              Registro Participante\r\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          { attrs: { to: "/auth/register/expositor" } },
                          [
                            _vm._v(
                              "\r\n              Registro Expositor\r\n            "
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
                  { staticClass: "h3", attrs: { href: "/app/home/webinar" } },
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
                attrs: { index: "3" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h3", attrs: { href: "/app/home/contact" } },
                  [_vm._v("Contactenos")]
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
                    value: !_vm.hideNavbar,
                    expression: "!hideNavbar"
                  }
                ],
                attrs: { index: "0" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "h3",
                    attrs: { href: "/app/home/sustainability" }
                  },
                  [_vm._v("sostenibilidad")]
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
                attrs: { index: "1" }
              },
              [
                _c(
                  "a",
                  { staticClass: "h3", attrs: { href: "/app/home/sponsor" } },
                  [_vm._v("patrocinadores")]
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
                  { staticClass: "h3", attrs: { href: "/app/home/contact" } },
                  [_vm._v("Contacteons")]
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
                    staticClass: "h3 flex items-center cursor-pointer",
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
                    _c("span", [_vm._v("Cerrar Session")])
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
                    staticClass: "h3 setting-nav text-center",
                    attrs: { href: "/app/setting" }
                  },
                  [
                    _c("svg-icon", {
                      attrs: { size: "w-8 h-8", icon: "profile" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "h6 text-white" }, [
                      _vm._v("Mi Cuenta")
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

/***/ "./resources/app/assets/images/logo/logo-color.png":
/*!*********************************************************!*\
  !*** ./resources/app/assets/images/logo/logo-color.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-color.png?aa8ad8b3a558848b927a8a1b26d2bba1";

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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
          resolve(response);
        } else {
          reject({
            message: 'Wrong Email or Password'
          });
        }
      })["catch"](function (error) {
        reject(error);
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
      console.log(user);
      var formData = new FormData();

      for (var key in user) {
        formData.append(key, user[key]);
      }

      formData.append('avatar_file', payload.avatar_file);
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
  loggedIn: false
});

/***/ })

}]);