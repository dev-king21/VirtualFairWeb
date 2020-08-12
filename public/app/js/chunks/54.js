(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var _ContactItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactItem.vue */ "./resources/app/js/src/views/chat/ContactItem.vue");
/* harmony import */ var _MessageItem_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageItem.vue */ "./resources/app/js/src/views/chat/MessageItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContactItem: _ContactItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MessageItem: _MessageItem_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      chat_text: '',
      today_schedules: [],
      all_schedules: [],
      settings: {
        // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      }
    };
  },
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    psContactSectionScroll: function psContactSectionScroll() {
      var scroll_el = this.$refs.contactScrollPs.$el || this.$refs.contactScrollPs;
      this.showShadowBottom = scroll_el.scrollTop > 0;
    },
    psMessageSectionScroll: function psMessageSectionScroll() {
      var scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs;
      this.showShadowBottom = scroll_el.scrollTop > 0;
    }
  },
  created: function created() {
    var list = [];

    for (var i = 0; i < 9; i++) {
      list.push(i);
    }

    this.today_schedules = list.filter(function (it) {
      return it < 3;
    });
    this.all_schedules = list;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    expositor_name: {
      type: String,
      required: true
    },
    expositor_company: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    expositor_country: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
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
    received: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatting-main {\n  height: calc(var(--vh, 1vh) * 100 - 150px);\n}\n.chatting-main .page-content .contact-panel {\n  font-size: 0.8rem;\n  font-weight: 900;\n  color: #555;\n}\n[dir] .chatting-main .page-content .contact-panel {\n  padding: 0 !important;\n}\n[dir] .chatting-main .page-content .contact-panel .chevron-border {\n  border: 1px solid #f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.4rem;\n}\n.chatting-main .page-content .user-img {\n  width: 4rem;\n  height: 4rem;\n}\n[dir] .chatting-main .page-content .user-img {\n  border-radius: 50%;\n  border: 1px solid silver;\n}\n[dir=ltr] .chatting-main .page-content .border-contact {\n  border-left: 3px solid #123058;\n}\n[dir=rtl] .chatting-main .page-content .border-contact {\n  border-right: 3px solid #123058;\n}\n.chatting-main .page-content .message-item {\n  font-size: 1.1rem;\n  color: #333;\n}\n[dir] .chatting-main .page-content .message-item {\n  margin-top: 2rem;\n}\n[dir] .chatting-main .page-content .message-item .receive-item {\n  padding: 1.2rem 2rem;\n}\n[dir=ltr] .chatting-main .page-content .message-item .receive-item {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n[dir=rtl] .chatting-main .page-content .message-item .receive-item {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n[dir] .chatting-main .page-content .message-item .send-item {\n  padding: 1.2rem 2rem;\n}\n[dir=ltr] .chatting-main .page-content .message-item .send-item {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n[dir=rtl] .chatting-main .page-content .message-item .send-item {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n[dir] .chatting-main .page-content .msg-input {\n  border: 1px solid #efefef;\n}\n[dir] .chatting-main .page-content .msg-input .vs-input--input {\n  border: none !important;\n}\n[dir=ltr] .chatting-main .page-content .msg-input .vs-input--input {\n  padding-left: 0 !important;\n}\n[dir=rtl] .chatting-main .page-content .msg-input .vs-input--input {\n  padding-right: 0 !important;\n}\n[dir] .chatting-main .page-content .msg-input .vs-input--input:focus {\n  box-shadow: none !important;\n}\n[dir=ltr] .chatting-main .page-content .msg-input .vs-input--placeholder {\n  padding-left: 0 !important;\n}\n[dir=rtl] .chatting-main .page-content .msg-input .vs-input--placeholder {\n  padding-right: 0 !important;\n}\n.chatting-main .page-content .msg-input .send-btn {\n  width: 3.5rem !important;\n  height: 3.5rem !important;\n}\n[dir] .chatting-main .page-content .msg-input .send-btn {\n  border-radius: 50% !important;\n  padding: 1rem !important;\n}\n.chatting-main .page-content .contact-wrapper section.ps-container {\n  height: calc(var(--vh, 1vh) * 100 - 200px);\n}\n[dir=ltr] .chatting-main .page-content .contact-wrapper section.ps-container {\n  padding-right: 2rem !important;\n}\n[dir=rtl] .chatting-main .page-content .contact-wrapper section.ps-container {\n  padding-left: 2rem !important;\n}\n.chatting-main .page-content .message-wrapper section.ps-container {\n  height: calc(var(--vh, 1vh) * 100 - 390px);\n}\n[dir=ltr] .chatting-main .page-content .message-wrapper section.ps-container {\n  padding-right: 2rem !important;\n}\n[dir=rtl] .chatting-main .page-content .message-wrapper section.ps-container {\n  padding-left: 2rem !important;\n}\n[dir] .chatting-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .chatting-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chatting.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          icon: "MonitorIcon",
          text: "networking",
          avartar: true,
          user_img: "maintenance-2.png",
          user_name: "Felipe Alenso Guererro"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex w-full flex-col px-8 bg-white-grey chatting-main"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row page-content" }, [
            _c(
              "div",
              {
                staticClass:
                  "vx-col lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-1/3 contact-panel"
              },
              [
                _c(
                  "div",
                  { staticClass: "contact-wrapper" },
                  [
                    _c(
                      _vm.scrollbarTag,
                      {
                        ref: "contactScrollPs",
                        tag: "component",
                        staticClass: "scroll-area-v-nav-menu pt-2",
                        attrs: { settings: _vm.settings },
                        on: {
                          "ps-scroll-y": _vm.psContactSectionScroll,
                          scroll: _vm.psContactSectionScroll
                        }
                      },
                      _vm._l(_vm.all_schedules, function(item, index) {
                        return _c("contact-item", {
                          key: "message-item-" + index,
                          attrs: {
                            active: index === 1 ? true : false,
                            expositor_name: "Felipe Alenso Guererro",
                            expositor_company: "MFC",
                            expositor_profession:
                              "Especilista en estrategias de marcas",
                            expositor_country: "Costa Rica",
                            user_img: "maintenance-2.png"
                          }
                        })
                      }),
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vx-col w-2/3 content-panel" }, [
              _c(
                "div",
                { staticClass: "ml-12 my-3", staticStyle: { height: "100%" } },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-4" }, [
                    _c(
                      "div",
                      { staticClass: "message-wrapper" },
                      [
                        _c(
                          _vm.scrollbarTag,
                          {
                            ref: "messageScrollPs",
                            tag: "component",
                            staticClass: "scroll-area-v-nav-menu pt-2",
                            attrs: { settings: _vm.settings },
                            on: {
                              "ps-scroll-y": _vm.psMessageSectionScroll,
                              scroll: _vm.psMessageSectionScroll
                            }
                          },
                          _vm._l(_vm.all_schedules, function(item, index) {
                            return _c("message-item", {
                              key: "message-item-" + index,
                              attrs: {
                                received: index % 2 === 0 ? true : false,
                                content:
                                  "Lerem ipsum dolor sit amet, consectetuer adipiscing edit, sed diam nonum",
                                user_img: "maintenance-2.png"
                              }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-full flex flex-row px-4 py-3 items-center justify-between bg-white msg-input"
                      },
                      [
                        _c("vs-input", {
                          staticClass: "w-full inputx",
                          attrs: {
                            placeholder: "Enviar mensaje...",
                            size: "large"
                          },
                          model: {
                            value: _vm.chat_text,
                            callback: function($$v) {
                              _vm.chat_text = $$v
                            },
                            expression: "chat_text"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "ml-6" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "send-btn cyan-dark",
                                attrs: { type: "filled" }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    svgClasses: "w-6 h-6",
                                    icon: "SendIcon"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
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
    return _c("div", { staticClass: "pl-8 pt-6" }, [_c("h2", [_vm._v("CHAT")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-row w-full items-center bg-white py-3" },
      [
        _c("img", {
          staticClass: "user-img responsive mx-4",
          attrs: { src: __webpack_require__(/*! @assets/images/pages/maintenance-2.png */ "./resources/app/assets/images/pages/maintenance-2.png") }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-2" }, [
          _c("div", { staticClass: "font-bold" }, [
            _vm._v("Felipe Alenso Guererro")
          ]),
          _vm._v(" "),
          _c("div", [_vm._v("Online")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-4 my-3 w-full bg-white contact-item" }, [
    _c(
      "div",
      {
        staticClass: "flex flex-row w-full items-center",
        class: { "border-contact": _vm.active }
      },
      [
        _c("img", {
          staticClass: "user-img responsive mx-4",
          attrs: { src: __webpack_require__("./resources/app/assets/images/pages sync recursive ^\\.\\/.*$")("./" + _vm.user_img) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-2" }, [
          _c("div", { staticClass: "font-bold" }, [
            _vm._v(_vm._s(_vm.expositor_name))
          ]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.expositor_profession))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.expositor_company))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.expositor_country))])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "my-6 w-full message-item" },
    [
      _vm.received
        ? [
            _c(
              "div",
              { staticClass: "flex flex-row justify-start items-end" },
              [
                _c("img", {
                  staticClass: "user-img responsive mx-4",
                  attrs: {
                    src: __webpack_require__("./resources/app/assets/images/pages sync recursive ^\\.\\/.*$")("./" + _vm.user_img)
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/2 receive-item bg-white" }, [
                  _c("div", [_vm._v(_vm._s(_vm.content))])
                ])
              ]
            )
          ]
        : [
            _c("div", { staticClass: "flex flex-row justify-end items-end" }, [
              _c("div", { staticClass: "w-1/2 send-item bg-msg-send" }, [
                _c("div", [_vm._v(_vm._s(_vm.content))])
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "user-img responsive mx-4",
                attrs: { src: __webpack_require__("./resources/app/assets/images/pages sync recursive ^\\.\\/.*$")("./" + _vm.user_img) }
              })
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/chat/Chatting.vue":
/*!******************************************************!*\
  !*** ./resources/app/js/src/views/chat/Chatting.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chatting.vue?vue&type=template&id=f65ee85e& */ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e&");
/* harmony import */ var _Chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chatting.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatting.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/chat/Chatting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chatting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chatting.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e&":
/*!*************************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chatting.vue?vue&type=template&id=f65ee85e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/Chatting.vue?vue&type=template&id=f65ee85e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_template_id_f65ee85e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/chat/ContactItem.vue":
/*!*********************************************************!*\
  !*** ./resources/app/js/src/views/chat/ContactItem.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactItem.vue?vue&type=template&id=1b348cd0& */ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0&");
/* harmony import */ var _ContactItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactItem.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/chat/ContactItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0&":
/*!****************************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactItem.vue?vue&type=template&id=1b348cd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=template&id=1b348cd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_template_id_1b348cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/chat/MessageItem.vue":
/*!*********************************************************!*\
  !*** ./resources/app/js/src/views/chat/MessageItem.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageItem.vue?vue&type=template&id=644ebe7f& */ "./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f&");
/* harmony import */ var _MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageItem.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/chat/MessageItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f&":
/*!****************************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageItem.vue?vue&type=template&id=644ebe7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/MessageItem.vue?vue&type=template&id=644ebe7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageItem_vue_vue_type_template_id_644ebe7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);