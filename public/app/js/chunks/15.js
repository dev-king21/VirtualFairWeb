(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
      active_index: 0,
      active_user: {},
      me: null,
      contacts: [],
      online_users: [],
      messages: [],
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
    },
    chatTo: function chatTo(index) {
      this.$loading.show(this);
      this.active_index = index;
      this.getMessages();
    },
    getMessages: function getMessages() {
      var _this = this;

      this.active_user = this.contacts.find(function (it) {
        return it.id === _this.active_index;
      });
      this.$http.post('/api/fair/chat/messages', {
        other: this.active_index
      }).then(function (res) {
        _this.$loading.hide(_this);

        _this.messages = res.data.messages;
        _this.active_user.send_unread_messages = [];
        setTimeout(function () {
          var scroll_el = _this.$refs.messageScrollPs.$el || _this.$refs.messageScrollPs;
          scroll_el.scrollTop = scroll_el.scrollHeight;
        });
      })["catch"](function () {
        _this.$loading.hide(_this);
      });
    },
    goEnter: function goEnter(event) {
      if (event.keyCode === 13) {
        this.sendMessage();
      }
    },
    sendMessage: function sendMessage() {
      var _this2 = this;

      if (this.chat_text === '') return;
      this.$loading.show(this);
      this.$http.post('/api/fair/chat/send_message', {
        other: this.active_index,
        message: this.chat_text
      }).then(function () {
        _this2.messages.push({
          sender_id: _this2.me.id,
          receiver_id: _this2.active_index,
          message: _this2.chat_text
        });

        _this2.$loading.hide(_this2);

        _this2.chat_text = '';
        setTimeout(function () {
          var scroll_el = _this2.$refs.messageScrollPs.$el || _this2.$refs.messageScrollPs;
          scroll_el.scrollTop = scroll_el.scrollHeight;
        });
      })["catch"](function () {
        _this2.$loading.hide(_this2);
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.$loading.show(this);
    var userInfo = localStorage.getItem('userInfo');

    if (!userInfo) {
      return this.$router.push('/home');
    }

    userInfo = JSON.parse(userInfo);

    if (!userInfo.id || !userInfo.email || userInfo.email === '') {
      return this.$router.push('/home');
    }

    this.me = userInfo;
    this.$http.post('/api/fair/chat/contacts').then(function (res) {
      _this3.$loading.hide(_this3);

      _this3.contacts = res.data.contacts;

      if (_this3.contacts.length !== 0) {
        _this3.active_index = _this3.contacts[0].id; //res.data.active_index

        _this3.getMessages();
      }
    })["catch"](function () {
      _this3.$loading.hide(_this3);
    });
    Echo.join('chat').here(function (users) {
      _this3.online_users = users;
    }).joining(function (user) {
      _this3.online_users.push(user);
    }).leaving(function (user) {
      _this3.online_users = _this3.online_users.filter(function (u) {
        return u.id !== user.id;
      });
    }).listen('ChatEvent', function (event) {
      if (event.chat.receiver_id === _this3.me.id) {
        if (_this3.active_index === event.chat.sender_id) {
          _this3.messages.push(event.chat);

          setTimeout(function () {
            var scroll_el = _this3.$refs.messageScrollPs.$el || _this3.$refs.messageScrollPs;
            scroll_el.scrollTop = scroll_el.scrollHeight;
          });
        } else {
          var sender = _this3.contacts.find(function (item) {
            return item.id === event.chat.sender_id;
          });

          sender.send_unread_messages.push(event.chat);
        }
      }
    }).listenForWhisper('typing', function (user) {
      _this3.activeUser = user;

      if (_this3.typingTimer) {
        clearTimeout(_this3.typingTimer);
      }

      _this3.typingTimer = setTimeout(function () {
        _this3.activeUser = false;
      }, 1000);
    });
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
    active_index: {
      type: Number,
      required: true
    },
    user_img: {
      type: String,
      required: true
    },
    idx: {
      type: Number,
      required: true
    },
    select: {
      type: Function,
      required: true
    },
    count: {
      type: Number,
      required: false
    }
  },
  methods: {
    selectContact: function selectContact(id) {
      this.select(id);
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
exports.push([module.i, ".chatting-main {\n  height: calc(var(--vh, 1vh) * 100 - 162px);\n}\n.chatting-main .page-content .contact-panel {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #151515;\n}\n[dir] .chatting-main .page-content .contact-panel {\n  padding: 0 !important;\n}\n[dir] .chatting-main .page-content .contact-panel .chevron-border {\n  border: 1px solid #f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.4rem;\n}\n.chatting-main .page-content .user-img {\n  width: 4rem;\n  height: 4rem;\n}\n[dir] .chatting-main .page-content .user-img {\n  border-radius: 50%;\n  border: 1px solid silver;\n}\n[dir=ltr] .chatting-main .page-content .border-contact {\n  border-left: 3px solid #123058;\n}\n[dir=rtl] .chatting-main .page-content .border-contact {\n  border-right: 3px solid #123058;\n}\n.chatting-main .page-content .message-item {\n  font-size: 1.1rem;\n}\n[dir] .chatting-main .page-content .message-item {\n  margin-top: 2rem;\n}\n[dir] .chatting-main .page-content .message-item .receive-item {\n  padding: 1.2rem 2rem;\n}\n[dir=ltr] .chatting-main .page-content .message-item .receive-item {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n[dir=rtl] .chatting-main .page-content .message-item .receive-item {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n[dir] .chatting-main .page-content .message-item .send-item {\n  padding: 1.2rem 2rem;\n}\n[dir=ltr] .chatting-main .page-content .message-item .send-item {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n[dir=rtl] .chatting-main .page-content .message-item .send-item {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n[dir] .chatting-main .page-content .msg-input {\n  border: 1px solid #efefef;\n}\n[dir] .chatting-main .page-content .msg-input .vs-input--input {\n  border: none !important;\n}\n[dir=ltr] .chatting-main .page-content .msg-input .vs-input--input {\n  padding-left: 0 !important;\n}\n[dir=rtl] .chatting-main .page-content .msg-input .vs-input--input {\n  padding-right: 0 !important;\n}\n[dir] .chatting-main .page-content .msg-input .vs-input--input:focus {\n  box-shadow: none !important;\n}\n[dir=ltr] .chatting-main .page-content .msg-input .vs-input--placeholder {\n  padding-left: 0 !important;\n}\n[dir=rtl] .chatting-main .page-content .msg-input .vs-input--placeholder {\n  padding-right: 0 !important;\n}\n.chatting-main .page-content .msg-input .send-btn {\n  width: 3.5rem !important;\n  height: 3.5rem !important;\n}\n[dir] .chatting-main .page-content .msg-input .send-btn {\n  border-radius: 50% !important;\n  padding: 1rem !important;\n}\n.chatting-main .page-content .contact-wrapper section.ps-container {\n  height: calc(var(--vh, 1vh) * 100 - 212px);\n}\n[dir=ltr] .chatting-main .page-content .contact-wrapper section.ps-container {\n  padding-right: 2rem !important;\n}\n[dir=rtl] .chatting-main .page-content .contact-wrapper section.ps-container {\n  padding-left: 2rem !important;\n}\n.chatting-main .page-content .message-wrapper section.ps-container {\n  height: calc(var(--vh, 1vh) * 100 - 402px);\n}\n[dir=ltr] .chatting-main .page-content .message-wrapper section.ps-container {\n  padding-right: 2rem !important;\n}\n[dir=rtl] .chatting-main .page-content .message-wrapper section.ps-container {\n  padding-left: 2rem !important;\n}\n[dir] .chatting-main .vx-row {\n  margin: 0 !important;\n}\n[dir] .chatting-main .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-item .badge {\n  color: white;\n  width: 1.6rem;\n  height: 1.6rem;\n  font-size: 0.8rem;\n  font-weight: normal !important;\n}[dir] .contact-item .badge {\n  background: #ff2200;\n  border-radius: 100%;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&");

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
          text: "networking",
          avartar: true,
          user_img:
            "/fair_image/" +
            (_vm.me.avatar ? _vm.me.avatar : "placeholder.png"),
          user_name: _vm.me.first_name + " " + _vm.me.last_name
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
          _vm.contacts && _vm.contacts.length
            ? _c("div", { staticClass: "vx-row page-content" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col lg:w-1/4 md:w-1/4 sm:w-1/3 xs:w-1/3 contact-panel"
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
                          _vm._l(_vm.contacts, function(item, index) {
                            return _c("contact-item", {
                              key: "message-item-" + index,
                              staticClass: "cursor-pointer",
                              attrs: {
                                idx: item.id,
                                select: _vm.chatTo,
                                active_index: _vm.active_index,
                                expositor_name:
                                  item.first_name + " " + item.last_name,
                                expositor_company: "" + item.company,
                                expositor_profession: "" + item.address,
                                expositor_country: "" + item.country,
                                user_img:
                                  "/fair_image/" +
                                  (item.avatar
                                    ? item.avatar
                                    : "placeholder.png"),
                                count: item.send_unread_messages
                                  ? item.send_unread_messages.length
                                  : 0
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
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col lg:w-3/4 md:w-3/4 sm:w-2/3 xs:w-2/3 content-panel"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "ml-4 my-3",
                        staticStyle: { height: "100%" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex flex-row w-full items-center bg-white py-3"
                          },
                          [
                            _c("img", {
                              staticClass: "user-img responsive mx-4",
                              attrs: {
                                src:
                                  "/fair_image/" +
                                  (_vm.active_user.avatar
                                    ? _vm.active_user.avatar
                                    : "placeholder.png")
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "ml-2" }, [
                              _c("div", { staticClass: "font-bold" }, [
                                _vm._v(
                                  _vm._s(_vm.active_user.first_name) +
                                    " " +
                                    _vm._s(_vm.active_user.last_name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm.online_users.find(function(user) {
                                      return user.id === _vm.active_user.id
                                    })
                                      ? "online"
                                      : "offline"
                                  )
                                )
                              ])
                            ])
                          ]
                        ),
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
                                _vm._l(_vm.messages, function(item, index) {
                                  return _c("message-item", {
                                    key: "message-item-" + index,
                                    attrs: {
                                      received:
                                        item.sender_id === _vm.active_user.id,
                                      content: item.message,
                                      user_img:
                                        "" +
                                        (item.sender_id === _vm.active_user.id
                                          ? "/fair_image/" +
                                            (_vm.active_user.avatar
                                              ? _vm.active_user.avatar
                                              : "placeholder.png")
                                          : "/fair_image/" +
                                            (_vm.me.avatar
                                              ? _vm.me.avatar
                                              : "placeholder.png"))
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
                                on: { keypress: _vm.goEnter },
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
                                      attrs: { type: "filled" },
                                      on: { click: _vm.sendMessage }
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
                  ]
                )
              ])
            : _vm._e()
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
  return _c(
    "div",
    {
      staticClass: "py-4 my-3 w-full bg-white contact-item",
      on: {
        click: function($event) {
          return _vm.selectContact(_vm.idx)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "flex flex-row w-full items-center",
          class: { "border-contact": _vm.active_index === _vm.idx }
        },
        [
          _c("img", {
            staticClass: "user-img responsive mx-4",
            attrs: { src: _vm.user_img }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "ml-2 w-full" }, [
            _c("div", { staticClass: "font-bold" }, [
              _vm._v(_vm._s(_vm.expositor_name))
            ]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.expositor_profession))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.expositor_company))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.expositor_country))])
          ]),
          _vm._v(" "),
          _vm.count !== 0
            ? _c("div", { staticClass: "mx-4" }, [
                _c(
                  "div",
                  { staticClass: "badge flex items-center justify-center" },
                  [_c("div", [_vm._v(_vm._s(_vm.count))])]
                )
              ])
            : _vm._e()
        ]
      )
    ]
  )
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
                  attrs: { src: _vm.user_img }
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
                attrs: { src: _vm.user_img }
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
/* empty/unused harmony star reexport *//* harmony import */ var _ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactItem.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/chat/ContactItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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