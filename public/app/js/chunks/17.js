(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _layouts_components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/Footer.vue */ "./resources/app/js/src/layouts/components/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppFooter: _layouts_components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      fair: {},
      country: {},
      stand: {},
      stand_type: {},
      img_width: 0,
      img_height: 0,
      loading: false
    };
  },
  methods: {
    logoImage: function logoImage(logo) {
      if (logo === null) return '/fair_image/placeholder.png';
      return "/fair_image/".concat(logo, ".png");
    },
    goStandPage: function goStandPage(stand_id, is_empty) {
      if (is_empty) return this.$router.push({
        path: "/fair/stand/".concat(stand_id)
      });
      return this.$router.push({
        path: "/fair/stand/".concat(stand_id)
      });
    },
    onImgLoad: function onImgLoad() {
      this.img_width = this.$refs.refStandImg.clientWidth;
      this.img_height = this.$refs.refStandImg.clientHeight;
      this.loading = true;
    }
  },
  created: function created() {
    var _this = this;

    if (!this.$route.params.fair_id || !this.$route.params.country_id || !this.$route.params.stand_id) {
      return this.$router.push('/pages/error-404');
    }

    this.$http.get("/api/fair/show/".concat(this.$route.params.fair_id, "/").concat(this.$route.params.country_id, "/").concat(this.$route.params.stand_id)).then(function (response) {
      var data = response.data;
      _this.fair = data.fair;
      _this.country = data.country;
      _this.stand = data.stand;
      _this.stand_type = data.stand_type;
      _this.stand.gallerys = [{
        url: 'fair_building1.jpeg'
      }, {
        url: 'fair_building2.jpeg'
      }, {
        url: 'fair_building3.jpeg'
      }, {
        url: 'fair_building4.jpeg'
      }, {
        url: 'fair_building5.jpeg'
      }];
      console.log(data);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stand_img {\n  width: 150px;\n  height: 150px;\n}\n.logo_img {\n  max-width: 50px;\n  max-height: 50px;\n}\n[dir] .logo_img {\n  background: white;\n}\n[dir=ltr] .logo_img {\n  margin-left: 100px;\n  box-shadow: 1px 2px 3px #33333355;\n}\n[dir=rtl] .logo_img {\n  margin-right: 100px;\n  box-shadow: -1px 2px 3px #33333355;\n}\n.stand-contents {\n  height: 80px;\n  bottom: 0px;\n}\n[dir] .stand-contents {\n  background: #FFFFFF88;\n}\n.stand-contents .vs-button {\n  font-weight: 700;\n  font-size: 1.6rem;\n}\n[dir] .stand-contents .vs-button {\n  border-radius: 0 !important;\n  padding: 1rem 2rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairStandContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full", attrs: { id: "home" } },
    [
      _c("app-header", { attrs: { activeItem: "2" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full", staticStyle: { "padding-top": "100px" } },
        [
          _c(
            "div",
            { staticClass: "vx-row mx-20 mb-2" },
            [
              _c("vx-card", [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-start justify-between items-center flex-wrap ml-4"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "flex flex-start items-center flex-wrap" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "h2 font-bold text-success",
                            attrs: { to: "/fair/country/" + _vm.fair.id }
                          },
                          [_vm._v(_vm._s(_vm.fair.name))]
                        ),
                        _vm._v(" "),
                        _vm.country.code !== undefined
                          ? [
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to:
                                      "/fair/country/" +
                                      _vm.fair.id +
                                      "/" +
                                      _vm.country.id
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "ml-4 country_flag",
                                    attrs: {
                                      src:
                                        "https://www.countryflags.io/" +
                                        _vm.country.code +
                                        "/shiny/48.png"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to:
                                      "/fair/country/" +
                                      _vm.fair.id +
                                      "/" +
                                      _vm.country.id
                                  }
                                },
                                [
                                  _c(
                                    "h3",
                                    { staticClass: "text-warning ml-4" },
                                    [_vm._v(_vm._s(_vm.country.name))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.stand.user_id
                          ? [
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "ml-4 logo_img",
                                attrs: {
                                  src: "/fair_image/" + _vm.stand.logo + ".png"
                                }
                              }),
                              _vm._v(" "),
                              _c("h3", { staticClass: "text-warning ml-4" }, [
                                _vm._v(_vm._s(_vm.stand.company))
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", { staticClass: "mr-4 mt-4" }, [
                        _vm._v("Period: ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-warning" }, [
                        _vm._v(_vm._s(_vm.fair.start_date) + " ")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(" ~ ")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-warning" }, [
                        _vm._v(_vm._s(_vm.fair.end_date))
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mx-20" }, [
            _c(
              "div",
              { staticClass: "relative mt-base" },
              [
                _vm.stand_type !== undefined
                  ? [
                      _c("img", {
                        ref: "refStandImg",
                        staticClass: "relative responsive",
                        attrs: {
                          src: "/fair_image/" + _vm.stand_type.interior
                        },
                        on: { load: _vm.onImgLoad }
                      })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.stand.stand_contents, function(item, index) {
                  return [
                    _vm.loading
                      ? _c("img", {
                          key: "stand-" + index,
                          staticClass: "stand_img absolute",
                          style:
                            "top: " +
                            item.stand_type_item.top * 100 +
                            "%; left: " +
                            item.stand_type_item.left * 100 +
                            "%",
                          attrs: {
                            src: "/fair_image/" + item.content,
                            width:
                              "" + item.stand_type_item.width * _vm.$img_width,
                            height:
                              "" + item.stand_type_item.height * _vm.$img_height
                          }
                        })
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute w-full stand-contents flex items-center justify-center"
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-8 items-center",
                            attrs: {
                              type: "relief",
                              color: "success",
                              "icon-pack": "feather",
                              icon: "icon-image"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                Gallery\r\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-8",
                            attrs: {
                              type: "relief",
                              color: "success",
                              "icon-pack": "feather",
                              icon: "icon-layers"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                Portfolio\r\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-8",
                            attrs: {
                              type: "relief",
                              color: "success",
                              "icon-pack": "feather",
                              icon: "icon-download-cloud"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                Files\r\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-8",
                            attrs: {
                              type: "relief",
                              color: "success",
                              "icon-pack": "feather",
                              icon: "icon-airplay"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                Appointment\r\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "ml-8",
                            attrs: {
                              type: "relief",
                              color: "success",
                              "icon-pack": "feather",
                              icon: "icon-link"
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                Contact\r\n              "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-row mx-20" },
            [
              _c(
                "vx-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.stand.gallerys.length,
                      expression: "stand.gallerys.length"
                    }
                  ],
                  staticClass: "mt-base"
                },
                [
                  _c("div", { staticClass: "text-success h2 mb-base" }, [
                    _vm._v("Gallery")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "swiper",
                        {
                          key: _vm.$vs.rtl,
                          ref: "swiperTop",
                          staticClass: "gallery-top",
                          attrs: {
                            options: _vm.swiperOptionTop,
                            dir: _vm.$vs.rtl ? "rtl" : "ltr"
                          }
                        },
                        [
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-10.jpg */ "./resources/app/assets/images/pages/carousel/banner-10.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-16.jpg */ "./resources/app/assets/images/pages/carousel/banner-16.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-15.jpg */ "./resources/app/assets/images/pages/carousel/banner-15.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-13.jpg */ "./resources/app/assets/images/pages/carousel/banner-13.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass:
                              "swiper-button-next swiper-button-white",
                            attrs: { slot: "button-next" },
                            slot: "button-next"
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass:
                              "swiper-button-prev swiper-button-white",
                            attrs: { slot: "button-prev" },
                            slot: "button-prev"
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "swiper",
                        {
                          key: _vm.$vs.rtl,
                          ref: "swiperThumbs",
                          staticClass: "gallery-thumbs",
                          attrs: {
                            options: _vm.swiperOptionThumbs,
                            dir: _vm.$vs.rtl ? "rtl" : "ltr"
                          }
                        },
                        [
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-10.jpg */ "./resources/app/assets/images/pages/carousel/banner-10.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-16.jpg */ "./resources/app/assets/images/pages/carousel/banner-16.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-15.jpg */ "./resources/app/assets/images/pages/carousel/banner-15.jpg"),
                                alt: "banner"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("img", {
                              staticClass: "responsive",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/pages/carousel/banner-13.jpg */ "./resources/app/assets/images/pages/carousel/banner-13.jpg"),
                                alt: "banner"
                              }
                            })
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-row mx-10" },
                    _vm._l(_vm.stand.gallerys, function(gallery_item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
                        },
                        [
                          _c("img", {
                            staticClass: "responsive rounded-lg",
                            attrs: {
                              src: "/fair_image/" + gallery_item.url,
                              alt: "content-img"
                            }
                          })
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/assets/images/pages/carousel/banner-10.jpg":
/*!******************************************************************!*\
  !*** ./resources/app/assets/images/pages/carousel/banner-10.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-10.jpg?fb88ea4fc1468049dd947893d8e85df0";

/***/ }),

/***/ "./resources/app/assets/images/pages/carousel/banner-13.jpg":
/*!******************************************************************!*\
  !*** ./resources/app/assets/images/pages/carousel/banner-13.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-13.jpg?04939c53cf03053710410aae330a20dd";

/***/ }),

/***/ "./resources/app/assets/images/pages/carousel/banner-15.jpg":
/*!******************************************************************!*\
  !*** ./resources/app/assets/images/pages/carousel/banner-15.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-15.jpg?402f90acbcac3a73ef58183af2b1d644";

/***/ }),

/***/ "./resources/app/assets/images/pages/carousel/banner-16.jpg":
/*!******************************************************************!*\
  !*** ./resources/app/assets/images/pages/carousel/banner-16.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner-16.jpg?494b2830711b92086bda4ef504fbe2cb";

/***/ }),

/***/ "./resources/app/js/src/views/fair/FairStandContent.vue":
/*!**************************************************************!*\
  !*** ./resources/app/js/src/views/fair/FairStandContent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FairStandContent.vue?vue&type=template&id=6c0a3ac6& */ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6&");
/* harmony import */ var _FairStandContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairStandContent.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FairStandContent.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FairStandContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/fair/FairStandContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairStandContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairStandContent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairStandContent.vue?vue&type=template&id=6c0a3ac6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=template&id=6c0a3ac6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairStandContent_vue_vue_type_template_id_6c0a3ac6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);