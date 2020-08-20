(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dataId: null,
      dataName: '',
      dataCategory: null,
      dataImg: null,
      dataOrder_status: 'pending',
      dataPrice: 0,
      category_choices: [{
        text: 'Audio',
        value: 'audio'
      }, {
        text: 'Computers',
        value: 'computers'
      }, {
        text: 'Fitness',
        value: 'fitness'
      }, {
        text: 'Appliance',
        value: 'appliance'
      }],
      order_status_choices: [{
        text: 'Pending',
        value: 'pending'
      }, {
        text: 'Canceled',
        value: 'canceled'
      }, {
        text: 'Delivered',
        value: 'delivered'
      }, {
        text: 'On Hold',
        value: 'on_hold'
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      if (!val) return;

      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        var _JSON$parse = JSON.parse(JSON.stringify(this.data)),
            category = _JSON$parse.category,
            id = _JSON$parse.id,
            img = _JSON$parse.img,
            name = _JSON$parse.name,
            order_status = _JSON$parse.order_status,
            price = _JSON$parse.price;

        this.dataId = id;
        this.dataCategory = category;
        this.dataImg = img;
        this.dataName = name;
        this.dataOrder_status = order_status;
        this.dataPrice = price;
        this.initValues();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit('closeSidebar'); // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid: function isFormValid() {
      return !this.errors.any() && this.dataName && this.dataCategory && this.dataPrice > 0;
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    initValues: function initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = '';
      this.dataCategory = null;
      this.dataOrder_status = 'pending';
      this.dataPrice = 0;
      this.dataImg = null;
    },
    submitData: function submitData() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var obj = {
            id: _this.dataId,
            name: _this.dataName,
            img: _this.dataImg,
            category: _this.dataCategory,
            order_status: _this.dataOrder_status,
            price: _this.dataPrice
          };

          if (_this.dataId !== null && _this.dataId >= 0) {
            _this.$store.dispatch('dataList/updateItem', obj)["catch"](function (err) {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;

            _this.$store.dispatch('dataList/addItem', obj)["catch"](function (err) {
              console.error(err);
            });
          }

          _this.$emit('closeSidebar');

          _this.initValues();
        }
      });
    },
    updateCurrImg: function updateCurrImg(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.dataImg = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue */ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataViewSidebar: _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selected: [],
      // products: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},
      talks: [],
      isPast: false,
      switch1: false
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.talks.length;
    }
  },
  methods: {
    deleteData: function deleteData(id) {//   this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
    },
    editData: function editData(data) {
      console.log(data);
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      if (status === 'on_hold') return 'warning';
      if (status === 'delivered') return 'success';
      if (status === 'canceled') return 'danger';
      return 'primary';
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return 'success';
      if (num > 70) return 'primary';
      if (num >= 50) return 'warning';
      if (num < 50) return 'danger';
      return 'primary';
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    updateStatus: function updateStatus(tr) {
      var _this = this;

      var action = "/api/room/talk/update/".concat(tr.id);
      console.log(action);
      var param = {
        status: tr.status
      };
      this.$loading.show(this);
      this.$http.post(action, param).then(function (response) {
        _this.$loading.hide(_this);

        if (response.data.status === 'ok') {
          _this.$vs.notify({
            title: 'éxito',
            text: 'Ha sido cambiado exitosamente.',
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

    /* if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch('dataList/fetchDataListItems') */
    var action = "/api/rooms/talks/all/".concat(this.$route.params.room_id);
    console.log(this.$route.name);

    if (this.$route.name === 'request_talk') {
      this.isPast = false;
      action = '/api/rooms/talks/request';
    } else if (this.$route.name === 'scheduled_talk') {
      this.isPast = false;
      action = '/api/rooms/talks/scheduled';
    } else if (this.$route.name === 'live_talk') {
      this.isPast = false;
      action = '/api/rooms/talks/live';
    } else if (this.$route.name === 'past_talk') {
      action = '/api/rooms/talks/past';
      this.isPast = true;
    }

    this.$loading.show(this);
    this.$http.get(action).then(function (response) {
      console.log(action);
      var res = response.data;
      _this2.talks = res.talks;
      console.log(_this2.talks);

      _this2.$loading.hide(_this2);
    })["catch"](function (error) {
      return console.log(error);
    });
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar {\n  z-index: 52010;\n  width: 400px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-c2910b68]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-c2910b68] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n.scroll-area--data-list-add-new[data-v-c2910b68]:not(.ps) {\n  overflow-y: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-thumb-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr td {\n  padding: 10px;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table tr td.img-container span {\n  display: flex;\n  justify-content: flex-start;\n}\n#data-list-thumb-view .vs-con-table .vs-table tr td.img-container .product-img {\n  height: 110px;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-thumb-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-thumb-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Talks.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE"
              ) + " ITEM"
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        _vm.scrollbarTag,
        {
          key: _vm.$vs.rtl,
          tag: "component",
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            { staticClass: "p-6" },
            [
              _vm.dataImg
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "img-container w-64 mx-auto flex items-center justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: { src: _vm.dataImg, alt: "img" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modify-img flex justify-between mt-5" },
                      [
                        _c("input", {
                          ref: "updateImgInput",
                          staticClass: "hidden",
                          attrs: { type: "file", accept: "image/*" },
                          on: { change: _vm.updateCurrImg }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "mr-4",
                            attrs: { type: "flat" },
                            on: {
                              click: function($event) {
                                return _vm.$refs.updateImgInput.click()
                              }
                            }
                          },
                          [_vm._v("Update Image")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { type: "flat", color: "#999" },
                            on: {
                              click: function($event) {
                                _vm.dataImg = null
                              }
                            }
                          },
                          [_vm._v("Remove Image")]
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: "Name", name: "item-name" },
                model: {
                  value: _vm.dataName,
                  callback: function($$v) {
                    _vm.dataName = $$v
                  },
                  expression: "dataName"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("item-name"),
                      expression: "errors.has('item-name')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("item-name")))]
              ),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Category", name: "item-category" },
                  model: {
                    value: _vm.dataCategory,
                    callback: function($$v) {
                      _vm.dataCategory = $$v
                    },
                    expression: "dataCategory"
                  }
                },
                _vm._l(_vm.category_choices, function(item) {
                  return _c("vs-select-item", {
                    key: item.value,
                    attrs: { value: item.value, text: item.text }
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("item-category"),
                      expression: "errors.has('item-category')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("item-category")))]
              ),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Order Status" },
                  model: {
                    value: _vm.dataOrder_status,
                    callback: function($$v) {
                      _vm.dataOrder_status = $$v
                    },
                    expression: "dataOrder_status"
                  }
                },
                _vm._l(_vm.order_status_choices, function(item) {
                  return _c("vs-select-item", {
                    key: item.value,
                    attrs: { value: item.value, text: item.text }
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: { required: true, regex: /\d+(\.\d+)?$/ },
                    expression: "{ required: true, regex: /\\d+(\\.\\d+)?$/ }"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: {
                  "icon-pack": "feather",
                  icon: "icon-dollar-sign",
                  label: "Price",
                  name: "item-price"
                },
                model: {
                  value: _vm.dataPrice,
                  callback: function($$v) {
                    _vm.dataPrice = $$v
                  },
                  expression: "dataPrice"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("item-price"),
                      expression: "errors.has('item-price')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("item-price")))]
              ),
              _vm._v(" "),
              !_vm.dataImg
                ? _c(
                    "div",
                    { staticClass: "upload-img mt-5" },
                    [
                      _c("input", {
                        ref: "uploadImgInput",
                        staticClass: "hidden",
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.updateCurrImg }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.$refs.uploadImgInput.click()
                            }
                          }
                        },
                        [_vm._v("Upload Image")]
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
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "mr-6",
              attrs: { disabled: !_vm.isFormValid },
              on: { click: _vm.submitData }
            },
            [_vm._v("Submit")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "border", color: "danger" },
              on: {
                click: function($event) {
                  _vm.isSidebarActiveLocal = false
                }
              }
            },
            [_vm._v("Cancel")]
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66& ***!
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
      staticClass: "data-list-container",
      attrs: { id: "data-list-thumb-view" }
    },
    [
      _c("data-view-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          ref: "table",
          attrs: {
            pagination: "",
            "max-items": _vm.itemsPerPage,
            search: "",
            data: this.talks
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return [
                  _c(
                    "tbody",
                    _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c("vs-td", { staticClass: "img-container" }, [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.id))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { staticClass: "img-container" }, [
                            _c("img", {
                              staticClass: "product-img",
                              attrs: { src: "/fair_image/" + tr.video }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.title))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-category" }, [
                              _vm._v(_vm._s(tr.user.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-category" }, [
                              _vm._v(_vm._s(tr.exhibitor_profession))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-category" }, [
                              _vm._v(_vm._s(tr.exhibitor_company))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-price" }, [
                              _vm._v(_vm._s(tr.peoples))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-price" }, [
                              _vm._v(_vm._s(tr.start_time))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-price" }, [
                              _vm._v(_vm._s(tr.end_time))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { staticClass: "whitespace-no-wrap" },
                            [
                              _c(
                                "vs-switch",
                                {
                                  attrs: {
                                    color: "success",
                                    disabled: _vm.isPast
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.updateStatus(tr)
                                    }
                                  },
                                  model: {
                                    value: tr.status,
                                    callback: function($$v) {
                                      _vm.$set(tr, "status", $$v)
                                    },
                                    expression: "tr.status"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { slot: "on" }, slot: "on" },
                                    [_vm._v("Accept")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { attrs: { slot: "off" }, slot: "off" },
                                    [_vm._v("Cancel")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ]
              }
            }
          ])
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-wrap-reverse items-center flex-grow justify-between",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("div", { staticClass: "flex flex-wrap-reverse items-center" }),
              _vm._v(" "),
              _c(
                "vs-dropdown",
                {
                  staticClass: "cursor-pointer mb-4 mr-4",
                  attrs: { "vs-trigger-click": "" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                    },
                    [
                      _c("span", { staticClass: "mr-2" }, [
                        _vm._v(
                          _vm._s(
                            _vm.currentPage * _vm.itemsPerPage -
                              (_vm.itemsPerPage - 1)
                          ) +
                            " - " +
                            _vm._s(
                              _vm.talks.length -
                                _vm.currentPage * _vm.itemsPerPage >
                                0
                                ? _vm.currentPage * _vm.itemsPerPage
                                : _vm.talks.length
                            ) +
                            " of " +
                            _vm._s(_vm.queriedItems)
                        )
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        attrs: {
                          icon: "ChevronDownIcon",
                          svgClasses: "h-4 w-4"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    [
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 4
                            }
                          }
                        },
                        [_c("span", [_vm._v("4")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 10
                            }
                          }
                        },
                        [_c("span", [_vm._v("10")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 15
                            }
                          }
                        },
                        [_c("span", [_vm._v("15")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 20
                            }
                          }
                        },
                        [_c("span", [_vm._v("20")])]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Video")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Title")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Exhibitor Name")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Exhibitor Profession")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Exhibitor Company")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Number of People")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Start Time")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("End Time")
              ]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Action")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue":
/*!*********************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true& */ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true&");
/* harmony import */ var _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& */ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c2910b68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/room/rooms/DataViewSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=style&index=0&id=c2910b68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_c2910b68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/DataViewSidebar.vue?vue&type=template&id=c2910b68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_c2910b68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/Talks.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/Talks.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Talks.vue?vue&type=template&id=4bd7fc66& */ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66&");
/* harmony import */ var _Talks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Talks.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Talks.vue?vue&type=style&index=0&lang=scss& */ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Talks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/room/rooms/Talks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Talks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Talks.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66&":
/*!******************************************************************************************!*\
  !*** ./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Talks.vue?vue&type=template&id=4bd7fc66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/room/rooms/Talks.vue?vue&type=template&id=4bd7fc66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Talks_vue_vue_type_template_id_4bd7fc66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);