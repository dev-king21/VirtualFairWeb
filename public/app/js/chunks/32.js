(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
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
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      webinar_list: []
    };
  },
  methods: {
    getDescription: function getDescription(text) {
      return text.replace(/\n/g, '<br>');
    }
  },
  created: function created() {
    var _this = this;

    this.$http.post('/api/home/webinar').then(function (res) {
      _this.webinar_list = res.data.webinars;
      console.log(_this.webinar_list);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-webinar-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n.home-webinar-main .webinar-title {\n  font-size: 3rem !important;\n}\n[dir] .home-webinar-main .webinar-card {\n  margin-top: 1rem !important;\n}\n.home-webinar-main .webinar-card .description {\n  font-size: 0.9rem;\n}\n[dir=ltr] .home-webinar-main .vx-row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .home-webinar-main .vx-row {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n[dir] .home-webinar-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "w-full" },
    [
      _c("app-header", { attrs: { activeItem: "1" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex justify-end home-weinar-bg-img home-webinar-main"
        },
        [
          _c(
            "div",
            { staticClass: "w-3/4 p-10" },
            [
              _c(
                "div",
                { staticClass: "webinar-title text-white font-bold my-6" },
                [_vm._v(_vm._s(_vm.$t("ReserveWebinar")))]
              ),
              _vm._v(" "),
              _vm._l(_vm.webinar_list, function(webinar, index) {
                return _c(
                  "div",
                  {
                    key: "home-webinar-item-" + index,
                    staticClass: "vx-row bg-white webinar-card"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-row w-2/5 flex items-center" },
                      [
                        _c("div", { staticClass: "w-full h-full p-4" }, [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: {
                              src:
                                "/fair_image/" +
                                (webinar.user.avatar
                                  ? webinar.user.avatar
                                  : "placeholder.png")
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-row flex flex-col justify-between w-3/5"
                      },
                      [
                        _c("div", { staticClass: "font-bold" }, [
                          _c("div", { staticClass: "vx-row mt-10 fs-11" }, [
                            _c("div", { staticClass: "vx-col w-3/5" }, [
                              _c("div", [_vm._v(_vm._s(_vm.$t("When")) + "?")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex items-end" },
                                [
                                  _c("feather-icon", {
                                    attrs: { icon: "CalendarIcon" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "ml-2" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$date.dateFormatWithoutYear(
                                          webinar.talk_date
                                        )
                                      )
                                    )
                                  ])
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "vx-col w-2/5" }, [
                              _c("div", [
                                _vm._v(_vm._s(_vm.$t("Where")) + "?")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "flex items-end" },
                                [
                                  _c("feather-icon", {
                                    attrs: { icon: "MapPinIcon" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "ml-2" }, [
                                    _vm._v(_vm._s(webinar.room.name))
                                  ])
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "font-italic mt-4" }, [
                            _vm._v(
                              "\n                          " +
                                _vm._s(_vm.$t("Who")) +
                                "?\n                      "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "fs-11" }, [
                            _vm._v(
                              "\n                          Lic. " +
                                _vm._s(webinar.user.first_name) +
                                " " +
                                _vm._s(webinar.user.last_name) +
                                " " +
                                _vm._s(webinar.user.address)
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                          " +
                                _vm._s(webinar.exhibitor_profession)
                            )
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-bold my-4" }, [
                            _vm._v(
                              "\n                          " +
                                _vm._s(webinar.title) +
                                "\n                          "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "font-bold font-italic mb-2" },
                            [_vm._v(_vm._s(_vm.$t("GeneralInfo")) + ":")]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "description mb-4",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.getDescription(webinar.description)
                              )
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-right" },
                          [
                            _c("vs-button", { staticClass: "yellow-light" }, [
                              _vm._v(_vm._s(_vm.$t("MyInterest")))
                            ]),
                            _vm._v(" "),
                            _c("vs-button", { staticClass: "cyan-dark" }, [
                              _vm._v(_vm._s(_vm.$t("Register")))
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/Webinar.vue":
/*!************************************************!*\
  !*** ./resources/app/js/src/views/Webinar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Webinar.vue?vue&type=template&id=5a304f44& */ "./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44&");
/* harmony import */ var _Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Webinar.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/Webinar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44&":
/*!*******************************************************************************!*\
  !*** ./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=template&id=5a304f44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/Webinar.vue?vue&type=template&id=5a304f44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_5a304f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);