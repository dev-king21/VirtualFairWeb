(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
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
  watch: {},
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      card_list: [],
      card_show: false,
      card_file: null,
      stand_id: null
    };
  },
  methods: {
    browseBusinessCard: function browseBusinessCard() {
      this.$refs.refBusinessCardFile.click();
    },
    cardChanged: function cardChanged(e) {
      var files = e.target.files;
      this.validateAndUpload(files);
    },
    validateAndUpload: function validateAndUpload(files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Error - Too Many Files',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 500 KB y tener el formato jpg, pdf',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.card_show = true;
      this.card_file = rawFile;
    },
    isValidExt: function isValidExt(file) {
      return /\.(jpg|pdf)$/.test(file.name);
    },
    getBusinessCards: function getBusinessCards() {
      var _this = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/businesscard').then(function (response) {
        _this.$loading.hide(_this);

        var data = response.data;

        if (!data.stand || !data.stand.id) {
          _this.$vs.notify({
            title: 'error',
            text: 'primero debe comprar el soporte.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          setTimeout(function () {
            _this.$router.push('/setting/home');
          }, 3000);
          return;
        }

        _this.card_show = false;
        _this.stand_id = data.stand.id;
        _this.card_list = data.stand.business_cards;
      });
    },
    saveBusinessCard: function saveBusinessCard() {
      var _this2 = this;

      if (!this.card_file || this.card_file.size > 500 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 500 KB y tener el formato jpg, pdf',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('stand_id', this.stand_id);
      formData.append('card_file', this.card_file);
      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/businesscard/save', formData, headers).then(function (response) {
        _this2.$loading.hide(_this2);

        if (response.data.status === 'ok') {
          _this2.$vs.notify({
            title: 'éxito',
            text: 'Folleto registrado con éxito',
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this2.getBusinessCards();
        }
      });
    },
    removeBusinessCard: function removeBusinessCard(id) {
      var _this3 = this;

      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/businesscard/remove', {
        _id: id
      }).then(function (response) {
        _this3.$loading.hide(_this3);

        if (response.data.status === 'ok') {
          _this3.$vs.notify({
            title: 'éxito',
            text: 'Folleto registrado con éxito',
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this3.getBusinessCards();
        }
      });
    },
    showBusinessCard: function showBusinessCard(id) {
      console.log(id);
    }
  },
  created: function created() {
    this.getBusinessCards();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-stand-contact {\n  min-height: calc(var(--vh, 1vh) * 100 - 160px);\n}\n[dir] .setting-stand-contact .vx-row {\n  margin: 0 !important;\n}\n[dir] .setting-stand-contact .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("app-header", { attrs: { activeItem: "0" } }),
      _vm._v(" "),
      _c("bread-crumb", {
        attrs: { icon: "address-book", type: "svg", text: "contacto" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "w-full setting-stand-contact bg-white-grey" }, [
        _c("div", { staticClass: "w-full px-10" }, [
          _c(
            "div",
            { staticClass: "vx-row w-full pt-8" },
            [
              _vm._l(_vm.card_list, function(item, index) {
                return _c(
                  "div",
                  { key: "catalog-item-" + index, staticClass: "vx-col w-1/4" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex flex-col justify-between mx-3 my-3 bg-white",
                        staticStyle: {
                          border: "1px solid #e2e2e2",
                          "border-radius": "0.8rem"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex flex-col items-center w-full px-3 my-4"
                          },
                          [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: { src: "/fair_image/" + item.url }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex items-center justify-center text-white mt-2 py-2 yellow-dark w-full cursor-pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.removeBusinessCard(item.id)
                                  }
                                }
                              },
                              [
                                _c("svg-icon", {
                                  attrs: { size: "w-5 h-5", icon: "erase" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "ml-2",
                                    staticStyle: { "font-size": "0.9rem" }
                                  },
                                  [_vm._v("BORRAR")]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              !_vm.card_show
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col w-1/4 flex flex-col items-center justify-center"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "mt-4 blue-dark flex items-center justify-center text-white",
                            staticStyle: {
                              "border-radius": "50%",
                              width: "4rem",
                              height: "4rem"
                            }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                svgClases: "w-10 h-10",
                                icon: "PlusIcon"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.browseBusinessCard()
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ]
                    )
                  ]
                : [
                    _c("div", { staticClass: "vx-col w-1/4" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-col justify-between mx-3 my-3 bg-white",
                          staticStyle: {
                            border: "1px solid #e2e2e2",
                            "border-radius": "0.8rem"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex flex-col items-center w-full px-3 mt-8"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "my-4 text-center h3" },
                                [
                                  _vm._v(
                                    "\n                                    Nuevo Contacto\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "my-4 blue-dark flex items-center justify-center text-white",
                                  staticStyle: {
                                    "border-radius": "50%",
                                    width: "4rem",
                                    height: "4rem"
                                  }
                                },
                                [
                                  _c("svg-icon", {
                                    attrs: {
                                      size: "w-10 h-10",
                                      icon: "address-book"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex items-center justify-center text-white py-2 my-4 cyan-dark w-full cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.saveBusinessCard()
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "w-5 h-5", icon: "SaveIcon" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-2",
                                      staticStyle: { "font-size": "0.9rem" }
                                    },
                                    [_vm._v("GUARDAR")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ],
              _vm._v(" "),
              _c("input", {
                ref: "refBusinessCardFile",
                staticClass: "hidden",
                attrs: { type: "file", accept: ".jpg, .pdf" },
                on: { change: _vm.cardChanged }
              })
            ],
            2
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 text-center" }, [
      _vm._v("\n                            SUBIR TARJETA "),
      _c("br"),
      _vm._v("\n                            DE PRESENTACION "),
      _c("br"),
      _vm._v("\n                            FORMATO JPG O PDF"),
      _c("br"),
      _vm._v(
        " \n                            (Peso maximo 500kb)\n                        "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandContact.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandContact.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandContact.vue?vue&type=template&id=64bf9c04& */ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04&");
/* harmony import */ var _StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandContact.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Stand/StandContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=template&id=64bf9c04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandContact.vue?vue&type=template&id=64bf9c04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_64bf9c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);