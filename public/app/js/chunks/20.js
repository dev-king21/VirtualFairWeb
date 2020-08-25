(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_NavBackButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/NavBackButton.vue */ "./resources/app/js/src/views/custom/NavBackButton.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var _ScheduleCard_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScheduleCard.vue */ "./resources/app/js/src/views/room/ScheduleCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ScheduleCard: _ScheduleCard_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      webinars: [],
      today: ''
    };
  },
  methods: {
    period: function period(start_time, end_time) {
      var sd = this.$date.timeFormat(start_time);
      var ed = this.$date.timeFormat(end_time);
      return "".concat(sd, " - ").concat(ed);
    },
    show: function show(id) {
      console.log(id);
    },
    addToBoard: function addToBoard(id) {
      var _this = this;

      this.$loading.show(this);
      this.$http.post('/api/room/webinar/add_to_board', {
        _id: id
      }).then(function (response) {
        _this.$loading.hide(_this);

        if (response.data.status === 'ok') {
          _this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        } else {
          _this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        }
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.$loading.show(this);
    this.$http.post('/api/room/schedule').then(function (response) {
      _this2.$loading.hide(_this2);

      var data = response.data;
      _this2.today = data.today;
      _this2.webinars = data.webinars;

      if (response.data.status === 'ok') {
        _this2.$vs.notify({
          title: 'éxito',
          text: 'Te has registrado con éxito.',
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        });
      } else {
        _this2.$vs.notify({
          title: 'Oyu',
          text: 'Operación fallida',
          color: 'error',
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
    expositor_name: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    reserved: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    },
    noborder: {
      type: Boolean,
      required: false
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
    showOrReserve: function showOrReserve() {
      if (this.show && this.id) this.show(this.id);
    },
    addToBoard: function addToBoard() {
      if (this.add && this.id) this.add(this.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .room-schedule-main .page-content {\n  background: white;\n}\n.room-schedule-main .page-content .event-panel {\n  font-size: 0.8rem;\n  font-weight: 900;\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n[dir] .room-schedule-main .page-content .event-panel {\n  padding: 0 !important;\n}\n[dir=ltr] .room-schedule-main .page-content .event-panel {\n  border-right: 1px solid silver;\n}\n[dir=rtl] .room-schedule-main .page-content .event-panel {\n  border-left: 1px solid silver;\n}\n.room-schedule-main .page-content .event-panel .stroke-text {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #EEEEEEEE;\n}\n.room-schedule-main .page-content .event-los-panel {\n  font-size: 0.8rem;\n  font-weight: 900;\n  min-height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n[dir] .room-schedule-main .page-content .event-los-panel {\n  padding: 0 !important;\n}\n.room-schedule-main .page-content .event-los-panel .stroke-text {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #EEEEEEEE;\n}\n[dir] .room-schedule-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .room-schedule-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".room-schedule-card {\n  font-size: 1rem;\n  font-weight: normal;\n}[dir] .room-schedule-card {\n  background: white;\n  margin: 1rem;\n}\n.room-schedule-card .reserved {\n  height: 1.6rem;\n}\n.room-schedule-card .reserved span {\n  font-size: 0.6rem;\n}\n[dir] .room-schedule-card .reserved span {\n  padding: 0.5rem;\n  background: #FFC700;\n}\n.room-schedule-card .user-img {\n  height: 4rem !important;\n  width: auto;\n}\n[dir] .room-schedule-card .user-img {\n  border-radius: 50%;\n  background-color: #33333355;\n}\n.room-schedule-card .event-btn {\n  font-size: 0.85rem !important;\n}\n[dir] .room-schedule-card .event-btn {\n  padding: 0.9rem 1.2rem !important;\n}\n[dir] .room-schedule-card .event-btn.p-big {\n  padding: 0.9rem 2rem !important;\n}\n.room-schedule-card .desc-info {\n  font-size: 0.9rem;\n  font-style: italic;\n}\n[dir] .room-schedule-card .desc-info {\n  padding: 0 1rem;\n}\n.room-schedule-card .user-info {\n  font-size: 0.9rem;\n}\n[dir] .card-border {\n  border: 1px solid #E2E2E2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Schedule.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02& ***!
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
      _c(
        "div",
        { staticClass: "w-full room-schedule-main" },
        [
          _c("bread-crumb", {
            attrs: { icon: "topic", type: "svg", text: "agenda del congreso" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "w-full h-full" }, [
            _c("div", { staticClass: "vx-row page-content" }, [
              _c(
                "div",
                {
                  staticClass:
                    "vx-col lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 event-panel bg-white-grey"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(
                    _vm.webinars.filter(function(it) {
                      return it.talk_date === _vm.today
                    }),
                    function(item, index) {
                      return _c("schedule-card", {
                        key: "today-schedule-" + index,
                        attrs: {
                          reserved: true,
                          noborder: true,
                          time: _vm.period(item.start_time, item.end_time),
                          title: item.title,
                          expositor_name:
                            item.user.first_name + " " + item.user.last_name,
                          expositor_profession: "" + item.user.address,
                          user_img: "" + item.user.avatar,
                          id: item.id,
                          add: _vm.addToBoard,
                          show: _vm.show
                        }
                      })
                    }
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-3/4 event-los-panel bg-white-grey" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-row justify-between items-center bg-blue-light"
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-white fs-12 bg-blue-dark cursor-pointer font-normal p-6",
                          on: {
                            click: function($event) {
                              return _vm.$router.push("/room/webinar")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            VER TODOS LOS WEBINARS\n                        "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-row" },
                    _vm._l(_vm.webinars, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "all-schedule-" + index,
                          staticClass: "vx-col w-1/3"
                        },
                        [
                          _c("schedule-card", {
                            attrs: {
                              reserved: item.talk_date === _vm.today,
                              time: _vm.period(item.start_time, item.end_time),
                              title: item.title,
                              expositor_name:
                                item.user.first_name +
                                " " +
                                item.user.last_name,
                              expositor_profession: "" + item.user.address,
                              user_img: "" + item.user.avatar,
                              id: item.id,
                              add: _vm.addToBoard,
                              show: _vm.show
                            }
                          })
                        ],
                        1
                      )
                    }),
                    0
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-3 bg-cyan-dark" }, [
      _c(
        "span",
        {
          staticClass: "fs-24 text-white ml-4",
          staticStyle: { "font-weight": "900" }
        },
        [_vm._v("Evantos")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "fs-24 text-white stroke-text ml-2",
          staticStyle: { "font-weight": "100" }
        },
        [_vm._v("del día")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-3 ml-8" }, [
      _c(
        "span",
        {
          staticClass: "fs-24 text-white stroke-text",
          staticStyle: { "font-weight": "100" }
        },
        [_vm._v("Todos")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "fs-24 text-white font-bold ml-2",
          staticStyle: { "font-weight": "900" }
        },
        [_vm._v("los Evantos")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      staticClass: "room-schedule-card",
      class: { "card-border": !_vm.noborder }
    },
    [
      _c(
        "div",
        { staticClass: "flex reserved" },
        [
          _vm.reserved
            ? [
                _c("span", { staticClass: "text-white font-normal" }, [
                  _vm._v("RESERVED")
                ])
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-row justify-between items-center mt-2" },
        [
          _c(
            "span",
            { staticClass: "flex items-center  ml-4" },
            [
              _c("feather-icon", {
                staticClass: "text-yellow-light",
                attrs: { svgClasses: "w-5 h-5", icon: "ClockIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2" }, [_vm._v(_vm._s(_vm.time))])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "flex items-center  mr-4" },
            [
              _c("feather-icon", {
                staticClass: "text-yellow-light",
                attrs: { svgClasses: "w-5 h-5", icon: "MonitorIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2" }, [_vm._v("WEBINAR")])
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "desc-info" }, [
        _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-row items-center mt-2 px-4" }, [
        _c("img", {
          staticClass: "user-img",
          attrs: { src: "/fair_image/" + _vm.user_img }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ml-4 user-info" }, [
          _vm._v("\n            Lic. " + _vm._s(_vm.expositor_name)),
          _c("br"),
          _vm._v(
            "\n            " + _vm._s(_vm.expositor_profession) + "\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-row justify-between items-center mt-4" },
        [
          _c(
            "vs-button",
            {
              staticClass: "cyan-light event-btn",
              on: { click: _vm.addToBoard }
            },
            [_vm._v("\n            AGREGAR A MI TABLEO \n        ")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "blue-light event-btn p-big",
              on: { click: _vm.showOrReserve }
            },
            [_vm._v("\n            INICIAR\n        ")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-row justify-between items-center mt-2" },
      [
        _c("span", { staticClass: "flex items-center ml-4" }, [
          _c("span", {}, [_vm._v("CONFERENCIA:")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/room/Schedule.vue":
/*!******************************************************!*\
  !*** ./resources/app/js/src/views/room/Schedule.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schedule.vue?vue&type=template&id=9ef51a02& */ "./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02&");
/* harmony import */ var _Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Schedule.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schedule.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/room/Schedule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Schedule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Schedule.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02&":
/*!*************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Schedule.vue?vue&type=template&id=9ef51a02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/Schedule.vue?vue&type=template&id=9ef51a02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Schedule_vue_vue_type_template_id_9ef51a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/room/ScheduleCard.vue":
/*!**********************************************************!*\
  !*** ./resources/app/js/src/views/room/ScheduleCard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleCard.vue?vue&type=template&id=6405beaf& */ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf&");
/* harmony import */ var _ScheduleCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleCard.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScheduleCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/room/ScheduleCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleCard.vue?vue&type=template&id=6405beaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/room/ScheduleCard.vue?vue&type=template&id=6405beaf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleCard_vue_vue_type_template_id_6405beaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);