(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/fair/FairStandContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-image-lightbox/dist/vue-image-lightbox.min.css */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css");
/* harmony import */ var vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _layouts_components_Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/components/Footer.vue */ "./resources/app/js/src/layouts/components/Footer.vue");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-image-lightbox */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.js");
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_image_lightbox__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppFooter: _layouts_components_Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_4__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_4__["swiperSlide"],
    LightBox: vue_image_lightbox__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      fair: {},
      country: {},
      stand: {},
      stand_type: {},
      img_width: 0,
      img_height: 0,
      loading: false,
      swiperOptionTop: {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      center: {
        lat: 10.0,
        lng: 10.0
      },
      markers: [{
        position: {
          lat: 10.0,
          lng: 10.0
        }
      }, {
        position: {
          lat: 11.0,
          lng: 11.0
        }
      }],
      media: []
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
    },
    openPortfolio: function openPortfolio(index) {
      this.$refs.lightbox.showImage(index);
    },
    "goto": function goto(refName) {
      var element = this.$refs[refName];
      console.log(element.offsetTop);
      window.scrollTo(0, element.offsetTop);
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
      _this.stand.portfolios = [{
        url: 'fair_building1.jpeg',
        name: 'portfolio name 1',
        description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
      }, {
        url: 'fair_building2.jpeg',
        name: 'portfolio name 2',
        description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
      }, {
        url: 'fair_building3.jpeg',
        name: 'portfolio name 3',
        description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
      }, {
        url: 'fair_building4.jpeg',
        name: 'portfolio name 4',
        description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
      }, {
        url: 'fair_building5.jpeg',
        name: 'portfolio name 5',
        description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
      }];
      _this.stand.files = _this.stand.portfolios;

      _this.stand.portfolios.forEach(function (element) {
        _this.media.push({
          thumb: "/fair_image/".concat(element.url),
          src: "/fair_image/".concat(element.url),
          caption: element.name
        });
      });

      console.log(data);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var swiperTop = _this2.$refs.swiperTop.swiper;
      var swiperThumbs = _this2.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
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
exports.push([module.i, ".stand_img {\n  width: 150px;\n  height: 150px;\n}\n.logo_img {\n  max-width: 50px;\n  max-height: 50px;\n}\n[dir] .logo_img {\n  background: white;\n}\n[dir=ltr] .logo_img {\n  margin-left: 100px;\n  box-shadow: 1px 2px 3px #33333355;\n}\n[dir=rtl] .logo_img {\n  margin-right: 100px;\n  box-shadow: -1px 2px 3px #33333355;\n}\n.stand-contents {\n  height: 80px;\n  bottom: 0px;\n}\n[dir] .stand-contents {\n  background: #FFFFFF88;\n}\n.stand-contents .vs-button {\n  font-weight: 700;\n  font-size: 1.6rem;\n}\n[dir] .stand-contents .vs-button {\n  border-radius: 0 !important;\n  padding: 1rem 2rem !important;\n}\n.hover-card .card-img-wrapper {\n  overflow: hidden;\n}\n[dir] .hover-card .card-img-wrapper:hover {\n  background: #333;\n}\n[dir=ltr] .hover-card .card-img-wrapper:hover {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n[dir=rtl] .hover-card .card-img-wrapper:hover {\n  border-top-right-radius: 0.5rem;\n  border-top-left-radius: 0.5rem;\n}\n.hover-card .card-img-top {\n  transition: all 0.4s ease-in-out;\n}\n[dir] .hover-card .card-img-top {\n  cursor: pointer;\n}\n.hover-card .card-img-top:hover {\n  opacity: 0.8;\n  overflow: hidden;\n}\n[dir] .hover-card .card-img-top:hover {\n  transform: scale(1.2);\n  transform-origin: 50% 50%;\n}\n.social-icon {\n  width: 50px;\n  height: 50px;\n}\n[dir=ltr] .social-icon {\n  margin-left: 10px;\n}\n[dir=rtl] .social-icon {\n  margin-right: 10px;\n}\n[dir] .swiper-container {\n  background-color: #000;\n}\n.gallery-top {\n  height: 80% !important;\n  width: 100%;\n}\n.gallery-thumbs {\n  height: 20% !important;\n  box-sizing: border-box;\n}\n[dir] .gallery-thumbs {\n  padding: 10px 0;\n}\n.gallery-thumbs .swiper-slide {\n  width: 25%;\n  height: 100%;\n  opacity: 0.4;\n}\n.gallery-thumbs .swiper-slide-active {\n  opacity: 1;\n}\n.vue-lb-container {\n  z-index: 10001 !important;\n}\n.vue-lb-container .vue-lb-info {\n  height: 60px !important;\n  font-size: 20px;\n  color: #FFAA00;\n}\n[dir] .vue-lb-container .vue-lb-info {\n  padding-top: 20px !important;\n}", ""]);

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
        { staticClass: "w-full" },
        [
          _c(
            "div",
            {
              staticClass: "vx-row",
              staticStyle: { margin: "0", padding: "0" }
            },
            [
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
                                "" +
                                item.stand_type_item.width * _vm.$img_width,
                              height:
                                "" +
                                item.stand_type_item.height * _vm.$img_height
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
                              },
                              on: {
                                click: function($event) {
                                  return _vm.goto("card-gallery")
                                }
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
            ]
          ),
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
                      value: _vm.stand.gallerys && _vm.stand.gallerys.length,
                      expression: "stand.gallerys && stand.gallerys.length"
                    }
                  ],
                  ref: "card-gallery",
                  staticClass: "mt-base"
                },
                [
                  _c("div", { staticClass: "text-success h2 mb-4" }, [
                    _vm._v("Gallery")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { height: "800px" } },
                    [
                      _c(
                        "swiper",
                        {
                          key: "swiper-main",
                          ref: "swiperTop",
                          staticClass: "gallery-top",
                          attrs: {
                            options: _vm.swiperOptionTop,
                            dir: _vm.$vs.rtl ? "rtl" : "ltr"
                          }
                        },
                        [
                          _vm._l(_vm.stand.gallerys, function(
                            gallery_item,
                            index
                          ) {
                            return _c(
                              "swiper-slide",
                              { key: "gallery-main-" + index },
                              [
                                _c("img", {
                                  staticClass: "responsive",
                                  attrs: {
                                    src: "/fair_image/" + gallery_item.url,
                                    alt: "banner"
                                  }
                                })
                              ]
                            )
                          }),
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
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "swiper",
                        {
                          key: "swiper-thumb",
                          ref: "swiperThumbs",
                          staticClass: "gallery-thumbs",
                          attrs: {
                            options: _vm.swiperOptionThumbs,
                            dir: _vm.$vs.rtl ? "rtl" : "ltr"
                          }
                        },
                        _vm._l(_vm.stand.gallerys, function(
                          gallery_item,
                          index
                        ) {
                          return _c(
                            "swiper-slide",
                            { key: "gallery-thumb-" + index },
                            [
                              _c("img", {
                                staticClass: "responsive",
                                attrs: {
                                  src: "/fair_image/" + gallery_item.url,
                                  alt: "banner"
                                }
                              })
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vx-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.stand.portfolios && _vm.stand.portfolios.length,
                      expression: "stand.portfolios && stand.portfolios.length"
                    }
                  ],
                  staticClass: "mt-base"
                },
                [
                  _c("div", { staticClass: "text-success h2 mb-10" }, [
                    _vm._v("Portfolio")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-row mx-5" },
                    _vm._l(_vm.stand.portfolios, function(
                      portfolio_item,
                      index
                    ) {
                      return _c(
                        "div",
                        {
                          key: "portfolio-item-" + index,
                          staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
                        },
                        [
                          _c("vx-card", { staticClass: "hover-card" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-img-wrapper",
                                attrs: { slot: "no-body" },
                                slot: "no-body"
                              },
                              [
                                _c("img", {
                                  staticClass: "responsive card-img-top",
                                  attrs: {
                                    src: "/fair_image/" + portfolio_item.url
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.openPortfolio(index)
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex justify-between items-center flex-wrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "text-warning h3 mb-3" },
                                  [_vm._v(_vm._s(portfolio_item.name))]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    "\r\n                    " +
                                      _vm._s(portfolio_item.description) +
                                      "\r\n                  "
                                  )
                                ])
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vx-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.stand.files && _vm.stand.files.length,
                      expression: "stand.files && stand.files.length"
                    }
                  ],
                  staticClass: "mt-base"
                },
                [
                  _c("div", { staticClass: "text-success h2 mb-10" }, [
                    _vm._v("Files")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.stand.files, function(file_item, index) {
                    return _c(
                      "div",
                      { key: "file-item-" + index },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/fire_image/" + file_item.url } },
                          [
                            _c("feather-icon", {
                              staticClass: "ml-2",
                              attrs: { icon: "DownloadCloudIcon" }
                            }),
                            _vm._v(
                              "\r\n            " +
                                _vm._s(file_item.name) +
                                "\r\n          "
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
              _c("vx-card", { staticClass: "mt-base" }, [
                _c("div", { staticClass: "text-success h2 mb-10" }, [
                  _vm._v("Contact")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row mx-5" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full xs:w-full sm:w-full md-1/2 lg:w-1/2 mb-base"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "flex flex-start items-center flex-wrap"
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "w-5 h-5 mr-2",
                            attrs: { icon: "MailIcon" }
                          }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("email: ")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-start items-center flex-wrap mt-3"
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "w-5 h-5 mr-2",
                            attrs: { icon: "PhoneIcon" }
                          }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Phone: ")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-start items-center flex-wrap mt-3"
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "w-5 h-5 mr-2",
                            attrs: { icon: "MapPinIcon" }
                          }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Address: ")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-start mt-10" }, [
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/google_plus_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/facebook_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Twitter_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/You_Tube_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/instagram_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Skype_icon-128.png"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "social-icon",
                          attrs: {
                            src:
                              "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Pinterest_icon-128.png"
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
                        "vx-col w-full xs:w-full sm:w-full md-1/2 lg:w-1/2 mb-base"
                    },
                    [
                      _c(
                        "GmapMap",
                        {
                          staticStyle: { width: "100%", height: "250px" },
                          attrs: {
                            center: _vm.center,
                            zoom: 7,
                            "map-type-id": "terrain"
                          }
                        },
                        _vm._l(_vm.markers, function(m, index) {
                          return _c("GmapMarker", {
                            key: index,
                            attrs: {
                              position: m.position,
                              clickable: true,
                              draggable: true
                            }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("LightBox", {
            ref: "lightbox",
            attrs: {
              media: _vm.media,
              "show-caption": true,
              "show-light-box": false
            }
          })
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