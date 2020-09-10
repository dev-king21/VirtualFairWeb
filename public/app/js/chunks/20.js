(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/NavBackButton.vue */ "./resources/app/js/src/views/custom/NavBackButton.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var _WebinarCard_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebinarCard.vue */ "./resources/app/js/src/views/room/WebinarCard.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    WebinarCard: _WebinarCard_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_7__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_7__["swiperSlide"]
  },
  data: function data() {
    return {
      categories: [],
      types: [],
      exhibitors: [{
        id: 0,
        label: this.$t('Everyone')
      }],
      selected_type: {
        id: 0,
        label: this.$t('Everyone')
      },
      selected_category: {
        id: 0,
        label: this.$t('Everyone')
      },
      selected_exhibitor: {
        id: 0,
        label: this.$t('Everyone')
      },
      webinars: [],
      ads_list: [],
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination2',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  computed: {
    webinar_count: function webinar_count() {
      var _this = this;

      var count = 0;

      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.webinars) {
        if (this.selected_type_id === 0) {
          count += this.webinars.filter(function (it) {
            return _this.selected_exhibitor_id === 0 ? true : it.user_id === _this.selected_exhibitor_id;
          }).length;
        } else {
          count += this.webinars.filter(function (it) {
            return it.live === _this.selected_type_id && (_this.selected_exhibitor_id === 0 ? true : it.user_id === _this.selected_exhibitor_id);
          }).length;
        }
      }

      return count;
    },
    filtered_webinars: function filtered_webinars() {
      var _this2 = this;

      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.webinars) {
        if (this.selected_type_id === 0) {
          return this.webinars.filter(function (it) {
            return _this2.selected_exhibitor_id === 0 ? true : it.user_id === _this2.selected_exhibitor_id;
          });
        } else {
          return this.webinars.filter(function (it) {
            return it.live === _this2.selected_type_id && (_this2.selected_exhibitor_id === 0 ? true : it.user_id === _this2.selected_exhibitor_id);
          });
        }
      }

      return [];
    },
    selected_cat_id: function selected_cat_id() {
      if (this.selected_category) return this.selected_category.id;
      return 0;
    },
    selected_type_id: function selected_type_id() {
      if (this.selected_type) return this.selected_type.id;
      return 0;
    },
    selected_exhibitor_id: function selected_exhibitor_id() {
      console.log(this.selected_exhibitor);
      if (this.selected_exhibitor) return this.selected_exhibitor.id;
      return 0;
    }
  },
  methods: {
    period: function period(start_time, end_time) {
      if (start_time === null || end_time === null) return '';
      var sd = this.$date.timeFormat(start_time);
      var ed = this.$date.timeFormat(end_time);
      return "".concat(sd, " - ").concat(ed);
    },
    show: function show(id) {
      this.$router.push("/room/webinar/".concat(id));
    },
    addToBoard: function addToBoard(id) {
      var _this3 = this;

      this.$loading.show(this);
      this.$http.post('/api/room/webinar/add_to_board', {
        _id: id
      }).then(function (response) {
        _this3.$loading.hide(_this3);

        if (response.data.status === 'ok') {
          _this3.$vs.notify({
            title: _this3.$t('Success'),
            text: _this3.$t('SuccessMessage'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        } else {
          _this3.$vs.notify({
            title: _this3.$t('Error'),
            text: _this3.$t('FailMessage'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        }
      });
    }
  },
  created: function created() {
    var _this4 = this;

    this.categories = [{
      id: 0,
      label: this.$t('Everyone')
    }, {
      id: 1,
      label: this.$t('Reserved')
    }, {
      id: 2,
      label: this.$t('Seen')
    }];
    this.types = [{
      id: 0,
      label: this.$t('Everyone')
    }, {
      id: 1,
      label: this.$t('Live')
    }, {
      id: 2,
      label: this.$t('Recorded')
    }];
    this.$loading.show(this);
    this.$http.post('/api/room/webinar').then(function (response) {
      _this4.$loading.hide(_this4);

      var data = response.data;
      _this4.webinars = data.webinars;

      var _loop = function _loop(wc) {
        // console.log(this.exhibitors, this.webinars[wc].user_id, this.exhibitors.lastIndexOf((ex) => ex.id === this.webinars[wc].user_id))
        if (!_this4.exhibitors.find(function (ex) {
          return ex.id === _this4.webinars[wc].user_id;
        })) {
          _this4.exhibitors.push({
            id: _this4.webinars[wc].user_id,
            label: _this4.webinars[wc].exhibitor_name
          });
        }
      };

      for (var wc in _this4.webinars) {
        _loop(wc);
      } // console.log(this.exhibitors)

    });
    this.$http.post('/api/stand/ads/get').then(function (res) {
      _this4.ads_list = res.data.ads;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    webinarType: {
      type: Number,
      required: true
    },
    expositor_name: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    user_img: {
      type: String,
      required: true
    },
    noborder: {
      type: Boolean,
      required: false
    },
    workdate: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    show: {
      type: Function,
      required: false
    },
    add: {
      type: Function,
      required: false
    }
  },
  methods: {
    showWebinar: function showWebinar() {
      if (this.show && this.id) this.show(this.id);
    },
    addToBoard: function addToBoard() {
      if (this.add && this.id) this.add(this.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .room-webinar-main .page-content {\n  background: white;\n}\n.room-webinar-main .page-content .event-panel {\n  font-size: 0.8rem;\n  font-weight: 900;\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n[dir] .room-webinar-main .page-content .event-panel {\n  padding: 0 !important;\n}\n[dir] .room-webinar-main .page-content .event-panel .chevron-border {\n  border: 1px solid #f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.4rem;\n}\n.room-webinar-main .page-content .event-los-panel {\n  font-size: 0.8rem;\n  font-weight: 900;\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n[dir] .room-webinar-main .page-content .event-los-panel {\n  padding: 0 !important;\n}\n[dir] .room-webinar-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .room-webinar-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".room-webinar-card {\n  font-size: 1rem;\n  font-weight: normal;\n}[dir] .room-webinar-card {\n  background: white;\n  margin: 1rem;\n}\n.room-webinar-card .user-img {\n  height: 5rem !important;\n  width: 5rem !important;\n}\n[dir] .room-webinar-card .user-img {\n  border-radius: 50%;\n  background-color: #33333399;\n}\n.room-webinar-card .event-btn {\n  font-size: 0.85rem !important;\n}\n[dir] .room-webinar-card .event-btn {\n  padding: 0.8rem 1.2rem !important;\n}\n[dir] .room-webinar-card .event-btn.p-big {\n  padding: 0.8rem 2rem !important;\n}\n.room-webinar-card .desc-info {\n  font-size: 0.9rem;\n  font-style: italic;\n}\n[dir] .room-webinar-card .desc-info {\n  padding: 0 1rem;\n}\n.room-webinar-card .user-info {\n  font-size: 0.9rem;\n}\n.room-webinar-card .card-over {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  bottom: 0;\n}\n[dir=ltr] .room-webinar-card .card-over {\n  left: 0;\n}\n[dir=rtl] .room-webinar-card .card-over {\n  right: 0;\n}\n[dir] .room-webinar-card .card-over .card-title {\n  background: #33333399;\n  padding: 0.6rem;\n}\n[dir] .card-border {\n  border: 1px solid #F2F2F2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebinarCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        { staticClass: "w-full room-webinar-main" },
        [
          _c("bread-crumb", {
            attrs: { icon: "webinar", type: "svg", text: "webinar" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "w-full bg-white-grey" }, [
            _c("div", { staticClass: "vx-row page-content" }, [
              _c(
                "div",
                {
                  staticClass:
                    "vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white"
                },
                [
                  _c(
                    "div",
                    { staticClass: "p-6 pb-2 flex flex-row items-center" },
                    [
                      _c("span", { staticClass: "h6 font-bold" }, [
                        _vm._v(
                          "(" +
                            _vm._s(_vm.webinar_count) +
                            " " +
                            _vm._s(_vm.$t("Available")) +
                            ")"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "h6 ml-10 flex flex-row items-center ml-2"
                        },
                        [
                          _c("v-select", {
                            staticStyle: { width: "200px" },
                            attrs: { options: _vm.categories },
                            model: {
                              value: _vm.selected_category,
                              callback: function($$v) {
                                _vm.selected_category = $$v
                              },
                              expression: "selected_category"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "h6 ml-4 flex flex-row items-center ml-2"
                        },
                        [
                          _c("v-select", {
                            staticStyle: { width: "160px" },
                            attrs: { options: _vm.types },
                            model: {
                              value: _vm.selected_type,
                              callback: function($$v) {
                                _vm.selected_type = $$v
                              },
                              expression: "selected_type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "h6 ml-4 flex flex-row items-center ml-2"
                        },
                        [
                          _c("v-select", {
                            staticStyle: { width: "160px" },
                            attrs: { options: _vm.exhibitors },
                            model: {
                              value: _vm.selected_exhibitor,
                              callback: function($$v) {
                                _vm.selected_exhibitor = $$v
                              },
                              expression: "selected_exhibitor"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-row" },
                    _vm._l(_vm.filtered_webinars, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "all-schedule-" + index,
                          staticClass: "vx-col w-1/3"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "px-2" },
                            [
                              _c("webinar-card", {
                                attrs: {
                                  workdate: item.talk_date,
                                  time: _vm.period(
                                    item.start_time,
                                    item.end_time
                                  ),
                                  title: item.title,
                                  webinarType: item.live,
                                  expositor_name: "" + item.exhibitor_name,
                                  expositor_profession:
                                    "" + item.exhibitor_profession,
                                  background: item.background,
                                  user_img: "" + item.user.avatar,
                                  id: item.id,
                                  show: _vm.show,
                                  add: _vm.addToBoard
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/4 event-los-panel bg-white-grey" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "ml-8 bg-white",
                      staticStyle: { height: "100%" }
                    },
                    [
                      _c("div", { staticClass: "p-6 fs-11 font-bold" }, [
                        _vm._v(
                          "\n                          " +
                            _vm._s(_vm.$t("Ads")) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "px-4" },
                        [
                          _c(
                            "swiper",
                            { attrs: { options: _vm.swiperOption } },
                            [
                              _vm._l(_vm.ads_list, function(item, index) {
                                return _c(
                                  "swiper-slide",
                                  { key: "swiper-item-" + index },
                                  [
                                    _c("img", {
                                      staticClass: "responsive",
                                      attrs: {
                                        src:
                                          "/fair_image/" +
                                          (item.url
                                            ? item.url
                                            : "placeholder.png"),
                                        alt: ""
                                      }
                                    })
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticClass:
                                  "swiper-pagination swiper-pagination2",
                                attrs: { slot: "pagination" },
                                slot: "pagination"
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "swiper-button-prev",
                                  attrs: { slot: "button-prev" },
                                  slot: "button-prev"
                                },
                                [
                                  _c("feather-icon", {
                                    staticStyle: { color: "black" },
                                    attrs: {
                                      svgClasses: "w-6 h-6 mt-3 ml-3",
                                      icon: "ChevronLeftIcon"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "swiper-button-next",
                                  attrs: { slot: "button-next" },
                                  slot: "button-next"
                                },
                                [
                                  _c("feather-icon", {
                                    staticStyle: { color: "black" },
                                    attrs: {
                                      svgClasses: "w-6 h-6 mt-3 ml-3",
                                      icon: "ChevronRightIcon"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ])
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c& ***!
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
    {
      staticClass: "room-webinar-card card-border",
      class: { "card-border": !_vm.noborder }
    },
    [
      _c("div", { staticClass: "relative card-img" }, [
        _c("img", {
          staticClass: "relative responsive",
          attrs: { src: "/fair_image/" + _vm.background }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "card-over text-white flex flex-col w-full justify-between"
          },
          [
            _c("div", [
              _c(
                "span",
                {
                  staticClass: "text-white absolute py-4 px-6 bg-cyan-light",
                  staticStyle: { "font-size": ".9rem" }
                },
                [_vm._v(_vm._s(_vm.$date.dateFormatWithoutYear(_vm.workdate)))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-title" }, [
              _c(
                "div",
                { staticClass: "flex flex-row items-center" },
                [
                  _c("svg-icon", { attrs: { size: "w-8 h-8", icon: "live" } }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "ml-2 text-white font-bold uppercase" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.webinarType === 1
                            ? _vm.$t("Live")
                            : _vm.$t("Recorded")
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { "font-style": "italic" } }, [
                _vm._v(_vm._s(_vm.title))
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-3 center" }, [
        _c(
          "span",
          { staticClass: "flex items-center justify-center ml-4" },
          [
            _c("feather-icon", {
              staticClass: "text-cyan-dark",
              attrs: { svgClasses: "w-6 h-6", icon: "ClockIcon" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "ml-4" }, [_vm._v(_vm._s(_vm.time))])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-row items-center mt-3 px-4" }, [
        _c("img", {
          staticClass: "user-img",
          attrs: {
            src:
              "/fair_image/" + (_vm.user_img ? _vm.user_img : "placeholder.png")
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-4 user-info" }, [
          _c("div", { staticClass: "fs-10 font-bold" }, [
            _vm._v("Lic. " + _vm._s(_vm.expositor_name))
          ]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.expositor_profession))])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-row justify-between items-center mt-6" },
        [
          _c(
            "vs-button",
            {
              staticClass: "cyan-dark event-btn uppercase font-bold",
              on: {
                click: function($event) {
                  return _vm.addToBoard()
                }
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.$t("AddBoard")) + "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "blue-dark event-btn p-big uppercase font-bold",
              on: {
                click: function($event) {
                  return _vm.showWebinar()
                }
              }
            },
            [_vm._v("\n            " + _vm._s(_vm.$t("See")) + "\n        ")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/room/Webinar.vue":
/*!*****************************************************!*\
  !*** ./resources/app/js/src/views/room/Webinar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Webinar.vue?vue&type=template&id=3982d09c& */ "./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c&");
/* harmony import */ var _Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Webinar.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/room/Webinar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c&":
/*!************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Webinar.vue?vue&type=template&id=3982d09c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Webinar.vue?vue&type=template&id=3982d09c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Webinar_vue_vue_type_template_id_3982d09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/room/WebinarCard.vue":
/*!*********************************************************!*\
  !*** ./resources/app/js/src/views/room/WebinarCard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebinarCard.vue?vue&type=template&id=d1315c3c& */ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c&");
/* harmony import */ var _WebinarCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebinarCard.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebinarCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebinarCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/room/WebinarCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebinarCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebinarCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c&":
/*!****************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebinarCard.vue?vue&type=template&id=d1315c3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/WebinarCard.vue?vue&type=template&id=d1315c3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebinarCard_vue_vue_type_template_id_d1315c3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);