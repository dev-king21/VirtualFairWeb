(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    gopage: function gopage() {
      if (this.$props.to) this.$router.push(this.$props.to);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/NavBackButton.vue */ "./resources/app/js/src/views/custom/NavBackButton.vue");
/* harmony import */ var _views_custom_StandButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/custom/StandButton.vue */ "./resources/app/js/src/views/custom/StandButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    StandButton: _views_custom_StandButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user_list: [],
      all_schedules: []
    };
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

    this.user_list = list;
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
exports.push([module.i, "[dir] .layout--full-page .back-btn {\n  border-radius: 0 !important;\n  padding: 0.3rem 0.8rem !important;\n}[dir=ltr] .layout--full-page .back-btn {\n  border-bottom-right-radius: 0.8rem !important;\n}[dir=rtl] .layout--full-page .back-btn {\n  border-bottom-left-radius: 0.8rem !important;\n}\n.layout--full-page .back-btn .back-text {\n  font-size: 0.6rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stand-button {\n  font-size: 0.8rem !important;\n}[dir=ltr] .stand-button {\n  border-top-right-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}[dir=rtl] .stand-button {\n  border-top-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-stand-main {\n  height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n.setting-stand-main .stand-header {\n  z-index: 90;\n}\n.setting-stand-main .stand-header .breadcrumb2 {\n  width: 100%;\n}\n[dir] .setting-stand-main .stand-header .breadcrumb2 {\n  background: #ffffffee;\n}\n.setting-stand-main .stand-header .breadcrumb2 .user-img {\n  width: 2.6rem;\n  height: 2.6rem;\n}\n[dir] .setting-stand-main .stand-header .breadcrumb2 .user-img {\n  border-radius: 50%;\n  border: 1px solid silver;\n}\n.setting-stand-main .stand-header .breadcrumb2 .user-text {\n  font-size: 0.6rem !important;\n  color: #333;\n}\n.setting-stand-main .stand-footer {\n  bottom: 0;\n  z-index: 90;\n}\n[dir] .setting-stand-main .stand-footer {\n  background: #ffffff66;\n}\n.setting-stand-main .stand-wrapper {\n  z-index: 88;\n  height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n.setting-stand-main .stand-wrapper .stand-item-wrapper {\n  z-index: 100;\n}\n[dir] .setting-stand-main .stand-wrapper .stand-item-wrapper .stand-item {\n  border-radius: 0.3rem;\n  padding: 0.3rem 1rem !important;\n}\n[dir] .setting-stand-bg-img {\n  background-image: url(\"/app/images/pages/stand1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100vw calc(var(--vh, 1vh) * 100 - 86px) !important;\n}\n[dir] .stand-social-icons {\n  background: transparent;\n}\n.dropdown-userinfo .vs-dropdown--menu {\n  width: 250px;\n  font-size: 0.8rem;\n}\n[dir] .dropdown-userinfo .vs-dropdown--menu {\n  padding: 0.5rem 1rem !important;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "stand-button cursor-pointer bg-white flex items-center py-2 px-3",
      on: { click: _vm.gopage }
    },
    [
      _c("feather-icon", {
        staticClass: "text-cyan-dark",
        attrs: { svgClasses: "w-8 h-8", icon: _vm.icon }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "ml-2 font-bold uppercase" }, [
        _vm._v("\n        " + _vm._s(_vm.text) + "\n    ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            "flex w-full flex-col setting-stand-bg-img items-center justify-between setting-stand-main"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "absolute flex flex-col w-full justify-between stand-header"
            },
            [
              _c("div", { staticClass: "flex w-full" }, [
                _c(
                  "div",
                  { staticClass: "flex flex-row breadcrumb2" },
                  [
                    _c("nav-back-button"),
                    _vm._v(" "),
                    _vm._l(_vm.user_list, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "stand-user-" + index,
                          staticClass: "flex items-center ml-4"
                        },
                        [
                          _c(
                            "vs-dropdown",
                            {
                              attrs: {
                                "vs-custom-content": "",
                                "vs-trigger-click": ""
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { "href.prevent": "" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex flex-col items-center justify-center ml-2 cursor-pointer"
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "user-img responsive mx-4",
                                        attrs: {
                                          src: __webpack_require__(/*! @assets/images/pages/foto_expositores1.jpg */ "./resources/app/assets/images/pages/foto_expositores1.jpg")
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-black user-text" },
                                        [_vm._v("kuran Garbadono")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                { staticClass: "dropdown-userinfo" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [_vm._v("Nombre: " + _vm._s(item.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [_vm._v("Email: " + _vm._s(item.email))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [_vm._v("Telefono: " + _vm._s(item.phone))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        "Posicion: " + _vm._s(item.profession)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [
                                      _vm._v(
                                        "Compania: " + _vm._s(item.company)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [_vm._v("Pais: " + _vm._s(item.country))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mb-1 font-italic" },
                                    [_vm._v("Region: " + _vm._s(item.region))]
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
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-row items-center justify-between stand-social-icons mx-2"
                  },
                  [
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "mx-2",
                              attrs: { icon: "FacebookIcon" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(
                                "Para agregar su Facebook debe copiar el URL de su pagina"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v("Ejemplo")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [_c("vs-input", { staticClass: "w-full" })],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [
                                _c("vs-button", { staticClass: "cyan-dark" }, [
                                  _vm._v("GUARDAR")
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "mx-2",
                              attrs: { icon: "FacebookIcon" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(
                                "Para agregar su Facebook debe copiar el URL de su pagina"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v("Ejemplo")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [_c("vs-input")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [_c("vs-button", [_vm._v("GUARDAR")])],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "mx-2",
                              attrs: { icon: "InstagramIcon" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(
                                "Para agregar su Facebook debe copiar el URL de su pagina"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v("Ejemplo")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [_c("vs-input")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [_c("vs-button", [_vm._v("GUARDAR")])],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "mx-2",
                              attrs: { icon: "LinkedinIcon" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(
                                "Para agregar su Facebook debe copiar el URL de su pagina"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v("Ejemplo")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [_c("vs-input")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [_c("vs-button", [_vm._v("GUARDAR")])],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        attrs: {
                          "vs-custom-content": "",
                          "vs-trigger-click": ""
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "flex items-center",
                            attrs: { "href.prevent": "" }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "mx-2",
                              attrs: { icon: "YoutubeIcon" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticClass: "dropdown-userinfo" },
                          [
                            _c("div", { staticClass: "mb-1 font-bold" }, [
                              _vm._v(
                                "Para agregar su Facebook debe copiar el URL de su pagina"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb-1 font-italic" }, [
                              _vm._v("Ejemplo")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic" },
                              [_c("vs-input")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mb-1 font-italic text-center" },
                              [_c("vs-button", [_vm._v("GUARDAR")])],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute flex items-center justify-between w-full px-6 py-4 stand-footer"
            },
            [
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "ListIcon",
                  to: "/setting/stand/information",
                  text: "agregar information de la empresa"
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "ListIcon",
                  to: "/setting/stand/brochure",
                  text: "subir catalogosy brochures"
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "ListIcon",
                  to: "/setting/stand/video",
                  text: "subir fotos y videos"
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "ListIcon",
                  to: "/setting/stand/schedule",
                  text: "ver citas"
                }
              }),
              _vm._v(" "),
              _c("stand-button", {
                staticClass: "stand-button",
                attrs: {
                  icon: "ListIcon",
                  to: "/setting/stand/contact",
                  text: "subir tarjeta de presentacion"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "absolute stand-wrapper",
              staticStyle: { border: "1px solid red" }
            },
            [
              _c(
                "div",
                { staticClass: "absolute", staticStyle: { top: "64px" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col items-center justify-center text-white relative px-3 py-8",
                      staticStyle: {
                        background: "#ffffff88",
                        color: "#ffffffcc",
                        height: "3rem"
                      }
                    },
                    [
                      _c("div", [_vm._v("VISUALIZACION")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex ites-center" },
                        [
                          _c("feather-icon", { attrs: { icon: "EyeIcon" } }),
                          _vm._v(" "),
                          _c("div", { staticClass: "ml-2" }, [_vm._v("1234")])
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
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
    return _c(
      "div",
      {
        staticClass:
          "absolute stand-item-wrapper flex flex-col items-center justify-center text-white",
        staticStyle: {
          left: "30%",
          top: "20%",
          width: "10%",
          height: "10%",
          border: "1px solid green"
        }
      },
      [
        _c(
          "div",
          { staticClass: "stand-item text-center bg-blue-dark cursor-pointer" },
          [
            _c("div", [_vm._v("subir imagen")]),
            _vm._v(" "),
            _c("div", [_vm._v("115*152px")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute flex flex-col items-center justify-center text-white",
        staticStyle: {
          left: "40%",
          top: "30%",
          width: "10%",
          height: "10%",
          border: "1px solid green"
        }
      },
      [
        _c(
          "div",
          { staticClass: "stand-item text-center bg-blue-dark cursor-pointer" },
          [
            _c("div", { staticClass: "uppercase" }, [_vm._v("subir imagen")]),
            _vm._v(" "),
            _c("div", [_vm._v("115*152px")])
          ]
        )
      ]
    )
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

/***/ "./resources/app/js/src/views/custom/StandButton.vue":
/*!***********************************************************!*\
  !*** ./resources/app/js/src/views/custom/StandButton.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandButton.vue?vue&type=template&id=422f5786& */ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786&");
/* harmony import */ var _StandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandButton.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandButton.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/custom/StandButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandButton.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandButton.vue?vue&type=template&id=422f5786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/custom/StandButton.vue?vue&type=template&id=422f5786&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandButton_vue_vue_type_template_id_422f5786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue":
/*!****************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandHome.vue?vue&type=template&id=d1c42b1e& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&");
/* harmony import */ var _StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandHome.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Stand/StandHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandHome.vue?vue&type=template&id=d1c42b1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandHome.vue?vue&type=template&id=d1c42b1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandHome_vue_vue_type_template_id_d1c42b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);