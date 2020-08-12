(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      contacts: [],
      detailShow: false,
      active_item: null
    };
  },
  methods: {
    openDetail: function openDetail(idx) {
      this.active_item = this.contacts.find(function (it) {
        return it.id === idx;
      });
      this.detailShow = true;
    }
  },
  created: function created() {
    var list = [];

    for (var i = 0; i < 9; i++) {
      var item = {
        name: 'Karla Loazia Brenes',
        email: 'kibrenes@gropohouse.com',
        phone: '5064567-6789',
        profession: 'Jefa de Proyectors',
        company: 'Grupo House',
        country: 'Costa Rica',
        resion: 'San Jose',
        concern: 'Diseno del Espacio',
        active: i === 0,
        id: i
      };
      list.push(item);
    }

    this.contacts = list;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-contact-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 150px);\n}\n.setting-contact-main .link-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .setting-contact-main .link-btn {\n  padding: 0.4rem 0.6rem !important;\n  border-radius: 0.9rem !important;\n}\n[dir] .setting-contact-main .vs-con-table {\n  background: #8BAFB6;\n}\n[dir] .setting-contact-main .vs-con-table .vs-con-tbody {\n  border: 0 !important;\n}\n.setting-contact-main .vs-con-table .vs-con-tbody .vs-table--thead tr {\n  color: white;\n}\n[dir] .setting-contact-main .vs-con-table .vs-con-tbody .vs-table--thead tr {\n  background: #164A8B !important;\n}\n.setting-contact-main .vs-con-table .vs-con-tbody .vs-table--thead tr .vs-table-text {\n  justify-content: center;\n  font-size: 1rem !important;\n}\n[dir] .setting-contact-main .vs-con-table .vs-con-tbody .vs-table--thead tr .vs-table-text {\n  text-align: center;\n  padding: 0.6rem !important;\n}\n.setting-contact-main .vs-con-table .vs-con-tbody .tr-values {\n  /* border: 1px solid silver; */\n}\n[dir] .setting-contact-main .vs-con-table .vs-con-tbody .tr-values {\n  background: none !important;\n}\n[dir] .setting-contact-main .vs-con-table .vs-con-tbody .tr-values td {\n  text-align: center;\n  padding: 15px !important;\n}\n.contact-popup .vs-popup--header {\n  display: none !important;\n}\n.contact-popup .vs-popup--content {\n  width: 100% !important;\n}\n[dir] .contact-popup .vs-popup--content {\n  padding: 0 !important;\n  margin-top: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        attrs: {
          icon: "BookOpenIcon",
          text: "mis contactors",
          second: true,
          second_icon: "DownloadIcon",
          second_text: "Descargar todos los contactos"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex w-full flex-col bg-white-grey setting-contact-main"
        },
        [
          _c(
            "div",
            { staticClass: "bg-white" },
            [
              _c(
                "div",
                [
                  _c(
                    "vs-table",
                    {
                      attrs: { data: _vm.contacts },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var data = ref.data
                            return _vm._l(data, function(tr, indextr) {
                              return _c(
                                "vs-tr",
                                { key: indextr },
                                [
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].name } },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].name) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].email } },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].email) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].phone } },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].phone) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: { data: data[indextr].profession }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].profession) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].company } },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].company) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].country } },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(data[indextr].country) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: data[indextr].id } },
                                    [
                                      _c(
                                        "vs-button",
                                        {
                                          staticClass: "link-btn",
                                          class: data[indextr].active
                                            ? "cyan-dark"
                                            : "grey-real",
                                          attrs: { type: "filled" },
                                          on: {
                                            click: function($event) {
                                              return _vm.openDetail(
                                                data[indextr].id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            VER MAS\n                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          }
                        }
                      ])
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("NOMBRE")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("EMAIL")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("TEL")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("PUESTO")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("COMPANIA")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("PAIS")]),
                          _vm._v(" "),
                          _c("vs-th")
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-popup",
                {
                  staticClass: "contact-popup",
                  attrs: { title: "", active: _vm.detailShow },
                  on: {
                    "update:active": function($event) {
                      _vm.detailShow = $event
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex justify-end text-white text-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-cyan-dark",
                          staticStyle: { padding: "10px 24px" }
                        },
                        [_vm._v("CONTACTOR POR TELEFONO")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.active_item
                    ? _c("div", { staticClass: "px-20 mt-8" }, [
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Nombre: " + _vm._s(_vm.active_item.name))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Email: " + _vm._s(_vm.active_item.email))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Telefono: " + _vm._s(_vm.active_item.phone))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v(
                            "Posicion: " + _vm._s(_vm.active_item.profession)
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Compania: " + _vm._s(_vm.active_item.company))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Pais: " + _vm._s(_vm.active_item.country))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3 font-italic" }, [
                          _vm._v("Region: " + _vm._s(_vm.active_item.region))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-16 font-italic" }, [
                          _vm._v(
                            "Area de interes: " +
                              _vm._s(_vm.active_item.concern)
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                        Mensaje de contacto\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "m-10" }, [
                          _vm._v(
                            "\n                        Me gustaria que me contacten para que me den mas detalles del proyector que estan desarrollando en Moravia    \n                    "
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              )
            ],
            1
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

/***/ "./resources/app/js/src/views/setting/Contact.vue":
/*!********************************************************!*\
  !*** ./resources/app/js/src/views/setting/Contact.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=256182d5& */ "./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5&":
/*!***************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=256182d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Contact.vue?vue&type=template&id=256182d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_256182d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);