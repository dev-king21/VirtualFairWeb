(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/NavBackButton.vue */ "./resources/app/js/src/views/custom/NavBackButton.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NavBackButton: _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      input1: '',
      countries: [],
      regions: [],
      selected: {},
      user: {},
      repeat_password: ''
    };
  },
  methods: {
    saveProfile: function saveProfile() {
      var _this = this;

      this.$http.post('/api/auth/save', this.user).then(function (response) {
        localStorage.setItem('userInfo', JSON.stringify(response.data.user));

        _this.$router.push('/setting/profile')["catch"](function () {});
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.countries = this.regions = [{
      countryCode: 'DE',
      countryName: 'Germany'
    }, {
      countryCode: 'AUS',
      countryName: 'Australia'
    }, {
      countryCode: 'CA',
      countryName: 'Canada'
    }];
    var userInfo = localStorage.getItem('userInfo');

    if (!userInfo) {
      return this.$router.push('/home');
    }

    userInfo = JSON.parse(userInfo);

    if (!userInfo.id || !userInfo.email || userInfo.email === '') {
      return this.$router.push('/home');
    }

    this.$http.post('/api/auth/profile').then(function (response) {
      _this2.user = response.data;
    })["catch"](function (error) {
      return console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout--full-page .back-btn {\n  height: 3.6rem !important;\n}[dir] .layout--full-page .back-btn {\n  border-radius: 0 !important;\n  padding: 0.3rem 0.8rem !important;\n}[dir=ltr] .layout--full-page .back-btn {\n  border-bottom-right-radius: 0.8rem !important;\n}[dir=rtl] .layout--full-page .back-btn {\n  border-bottom-left-radius: 0.8rem !important;\n}\n.layout--full-page .back-btn .back-text {\n  font-size: 0.6rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-profile-main {\n  height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n.setting-profile-main .setting-wrapper {\n  width: 65%;\n  height: 100%;\n}\n.setting-profile-main .user-img {\n  width: 3rem;\n  height: 3rem;\n}\n[dir] .setting-profile-main .user-img {\n  border-radius: 50%;\n  border: 1px solid silver;\n}\n[dir] .setting-profile-main .vs__dropdown-toggle {\n  background: white !important;\n  border-radius: 0 !important;\n}\n[dir] .setting-profile-main .vs-input--input {\n  border-radius: 0 !important;\n}\n.setting-profile-main .vs-input--input.hasValue + .vs-placeholder-label, .setting-profile-main .vs-input--input:focus + .vs-placeholder-label {\n  font-size: 0.9rem !important;\n}\n[dir] .setting-profile-main .vs-input--input.hasValue + .vs-placeholder-label, [dir] .setting-profile-main .vs-input--input:focus + .vs-placeholder-label {\n  padding: 0.4rem !important;\n}\n.setting-profile-main .frm-button {\n  font-size: 0.85rem !important;\n  min-width: 10rem;\n  min-height: 2.6rem;\n}\n[dir] .setting-profile-main .frm-button {\n  padding: 0.6rem 1.2rem !important;\n}\n[dir] .setting-profile-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .setting-profile-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBackButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c& ***!
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
    "vs-button",
    {
      staticClass: "back-btn mb-6 text-center text-white",
      attrs: { color: "black" },
      on: {
        click: function($event) {
          return _vm.$router.back()
        }
      }
    },
    [
      _c("feather-icon", {
        attrs: { svgClasses: "w-6 h-6", icon: "ArrowLeftIcon" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "back-text" }, [_vm._v("VOLVER")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde& ***!
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
      _c(
        "div",
        {
          staticClass:
            "flex w-full items-start justify-between setting-bg-img setting-profile-main"
        },
        [
          _c("nav-back-button"),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col setting-wrapper" }, [
            _c(
              "div",
              { staticClass: "flex items-center bg-blue-dark pt-4 pb-2" },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center ml-8 cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.$router.push("/setting/profile")
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "user-img responsive mx-4",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/pages/foto_expositores1.jpg */ "./resources/app/assets/images/pages/foto_expositores1.jpg")
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex px-12",
                staticStyle: { background: "#ffffffDD", height: "100%" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex flex-col py-12 px-20 w-full items-center"
                  },
                  [
                    _c("div", [
                      _c("h4", { staticClass: "font-bold mb-6" }, [
                        _vm._v("Datos Personales")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row w-full" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Nombre",
                                name: "Nombre",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.first_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "first_name", $$v)
                                },
                                expression: "user.first_name"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Apellido",
                                name: "Apellido",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.last_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "last_name", $$v)
                                },
                                expression: "user.last_name"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|email",
                                  expression: "'required|email'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Email",
                                name: "Email",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "email", $$v)
                                },
                                expression: "user.email"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|min:8",
                                  expression: "'required|min:8'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Telefono",
                                name: "Telefono",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.phone,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "phone", $$v)
                                },
                                expression: "user.phone"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Compania",
                                name: "Compania",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.company,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "company", $$v)
                                },
                                expression: "user.company"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                color: "success",
                                "label-placeholder": "Posicion",
                                name: "Posicion",
                                "data-vv-validate-on": "blur"
                              },
                              model: {
                                value: _vm.user.address,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "address", $$v)
                                },
                                expression: "user.address"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("div", { staticClass: "ml-1" }, [
                              _vm._v("Seleccione un Pais")
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              staticClass: "w-4/5",
                              attrs: {
                                label: "countryName",
                                options: _vm.countries
                              },
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("div", { staticClass: "ml-1" }, [
                              _vm._v("Seleccione la Region")
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              staticClass: "w-4/5",
                              attrs: {
                                label: "countryName",
                                options: _vm.regions
                              },
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-col w-full my-3" }, [
                          _c(
                            "div",
                            { staticClass: "flex items-center" },
                            [
                              _c("div", [
                                _vm._v("Agregar Fotografia o combiarla")
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                { staticClass: "ml-4 cyan-light frm-button" },
                                [_vm._v("Adjuntar foto")]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                type: "password",
                                color: "success",
                                name: "Contrasena",
                                "data-vv-validate-on": "blur",
                                "label-placeholder":
                                  "Seleccione una constrasena"
                              },
                              model: {
                                value: _vm.user.password,
                                callback: function($$v) {
                                  _vm.$set(_vm.user, "password", $$v)
                                },
                                expression: "user.password"
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
                              "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2"
                          },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-4/5",
                              attrs: {
                                type: "password",
                                color: "success",
                                name: "Apellido",
                                "data-vv-validate-on": "blur",
                                "label-placeholder": "Repita la contrasena"
                              },
                              model: {
                                value: _vm.repeat_password,
                                callback: function($$v) {
                                  _vm.repeat_password = $$v
                                },
                                expression: "repeat_password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col w-full text-center mt-base" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "yellow-dark frm-button",
                                attrs: { to: "/setting/home" }
                              },
                              [
                                _vm._v(
                                  "\n                                    CANCELAR\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "cyan-dark frm-button ml-8",
                                on: {
                                  click: function($event) {
                                    return _vm.saveProfile()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    GUARDAR CAMBIOS\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "user-name h4 text-white" }, [
        _vm._v("MI PERFIL")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-col items-center mx-24", staticStyle: {} },
      [
        _c("h3", { staticClass: "text-center text-white " }, [
          _vm._v("iHola! Felipe Alonso Guerrero")
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "text-center text-white mt-2" }, [
          _vm._v("Que deseas hacer?")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vx-col w-full" }, [
      _c("h4", { staticClass: "font-bold" }, [_vm._v("Cambiar contrasena")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/assets/images/pages/foto_expositores1.jpg":
/*!*****************************************************************!*\
  !*** ./resources/app/assets/images/pages/foto_expositores1.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/foto_expositores1.jpg?56e7cc859a4536a3d69babdd0779d7fd";

/***/ }),

/***/ "./resources/app/js/src/views/custom/NavBackButton.vue":
/*!*************************************************************!*\
  !*** ./resources/app/js/src/views/custom/NavBackButton.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBackButton.vue?vue&type=template&id=bc180c4c& */ "./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c&");
/* harmony import */ var _NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBackButton.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/custom/NavBackButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBackButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBackButton.vue?vue&type=template&id=bc180c4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/NavBackButton.vue?vue&type=template&id=bc180c4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBackButton_vue_vue_type_template_id_bc180c4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/setting/Profile.vue":
/*!********************************************************!*\
  !*** ./resources/app/js/src/views/setting/Profile.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=2d88fbde& */ "./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde&":
/*!***************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=2d88fbde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Profile.vue?vue&type=template&id=2d88fbde&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_2d88fbde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);