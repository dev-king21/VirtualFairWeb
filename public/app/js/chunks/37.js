(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      stands: [],
      user: {},
      contact_text: '',
      accept: false,
      mail_available: false,
      phone_available: false,
      error_contact_text: false
    };
  },
  methods: {
    contactRequest: function contactRequest() {
      var _this = this;

      if (!this.accept) {
        return;
      }

      if (!this.contact_text) {
        this.error_contact_text = true;
        return;
      } else {
        this.error_contact_text = false;
      }

      var param = {
        stand_id: this.$route.params.stand_id,
        contact_text: this.contact_text,
        mail: this.mail_available,
        phone: this.phone_available
      };
      this.$loading.show(this);
      this.$http.post('/api/fair/sponsor/request', param).then(function (response) {
        _this.$loading.hide(_this);

        if (response.data.status === 'ok') {
          _this.$vs.notify({
            title: _this.$t('Success'),
            text: _this.$t('SuccessMessage'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        } else {
          _this.$vs.notify({
            title: _this.$t('Error'),
            text: _this.$t('FailMessage'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        }
      });
    }
  },
  created: function created() {
    var _this2 = this;

    var userInfo = localStorage.getItem('userInfo');

    if (!userInfo || !this.$route.params.stand_id) {
      return this.$router.push('/home');
    }

    this.user = JSON.parse(userInfo);
    this.$loading.show(this);
    this.$http.get('/api/fair/sponsor').then(function (response) {
      _this2.$loading.hide(_this2);

      _this2.stands = response.data.stands;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stand-contact-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n.stand-contact-main .contact-info div {\n  color: #777;\n}\n[dir] .stand-contact-main .contact-info div {\n  padding: 0.5rem 1rem;\n}\n[dir] .stand-contact-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .stand-contact-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("app-header", { attrs: { activeItem: "2" } }),
      _vm._v(" "),
      _c("bread-crumb", {
        attrs: { icon: "address-book", type: "svg", text: "contactar" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex w-full justify-center px-8 py-2 bg-white-grey stand-contact-main"
        },
        [
          _c(
            "div",
            {
              staticClass: "h4 mt-8 font-italic",
              staticStyle: { width: "500px" }
            },
            [
              _c("div", { staticClass: "contact-info" }, [
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Name")) +
                      ": " +
                      _vm._s(_vm.user.first_name) +
                      " " +
                      _vm._s(_vm.user.last_name)
                  )
                ]),
                _vm._v(" "),
                _c("div", [_vm._v("Email: " + _vm._s(_vm.user.email))]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Phone")) + ": " + _vm._s(_vm.user.phone)
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Position")) + ": " + _vm._s(_vm.user.address)
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Company")) + ": " + _vm._s(_vm.user.company)
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Country")) + ": " + _vm._s(_vm.user.country)
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    _vm._s(_vm.$t("Region")) + ": " + _vm._s(_vm.user.region)
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex" }, [
                  _c("div", [_vm._v(_vm._s(_vm.$t("InterestArea")) + ": ")]),
                  _vm._v(" "),
                  _c("div")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ml-4 mt-8", staticStyle: { width: "500px" } },
            [
              _c("h3", [_vm._v(_vm._s(_vm.$t("ContactMsg")))]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c("vs-textarea", {
                    staticClass: "mt-2",
                    staticStyle: { height: "120px" },
                    attrs: { placeholder: "Escriba el mensaje aquí" },
                    model: {
                      value: _vm.contact_text,
                      callback: function($$v) {
                        _vm.contact_text = $$v
                      },
                      expression: "contact_text"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.error_contact_text,
                          expression: "error_contact_text"
                        }
                      ],
                      staticClass: "ml-4",
                      staticStyle: { color: "#ee0000" }
                    },
                    [_vm._v(_vm._s(_vm.$t("MsgOption")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-4",
                      attrs: { color: "rgb(103, 179, 81)" },
                      model: {
                        value: _vm.accept,
                        callback: function($$v) {
                          _vm.accept = $$v
                        },
                        expression: "accept"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("AcceptTerm")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-4",
                      attrs: { color: "rgb(103, 179, 81)" },
                      model: {
                        value: _vm.mail_available,
                        callback: function($$v) {
                          _vm.mail_available = $$v
                        },
                        expression: "mail_available"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("EmailTerm")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mb-4",
                      attrs: { color: "rgb(103, 179, 81)" },
                      model: {
                        value: _vm.phone_available,
                        callback: function($$v) {
                          _vm.phone_available = $$v
                        },
                        expression: "phone_available"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("PhoneTerm")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center mt-12" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "cyan-dark",
                      on: { click: _vm.contactRequest }
                    },
                    [_vm._v(_vm._s(_vm.$t("Contact")))]
                  )
                ],
                1
              )
            ]
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

/***/ "./resources/app/js/src/views/contact/StandContact.vue":
/*!*************************************************************!*\
  !*** ./resources/app/js/src/views/contact/StandContact.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandContact.vue?vue&type=template&id=4bfcc996& */ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996&");
/* harmony import */ var _StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandContact.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/contact/StandContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandContact.vue?vue&type=template&id=4bfcc996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/contact/StandContact.vue?vue&type=template&id=4bfcc996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandContact_vue_vue_type_template_id_4bfcc996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);