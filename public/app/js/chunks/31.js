(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/auth/moduleAuth.js */ "./resources/app/js/src/store/auth/moduleAuth.js");
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      categories: [],
      cat_checked: [],
      user: {
        type: 'user'
      },
      repeat_password: '',
      accept_chk: false,
      avatar_show: false,
      avatar_file: null,
      fair_title: '',
      countries: [],
      regions: [],
      selected_country: undefined,
      selected_region: undefined,
      password_error: '',
      confirm_error: ''
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.user.email !== '' && this.user.password !== '' && this.repeat_password !== '' && this.repeat_password === this.user.password && this.user.first_name !== '' && this.user.last_name !== '' && this.user.phone !== '' && this.user.address !== '' && this.user.company !== '' && this.selected_country && this.selected_region && this.accept_chk;
    }
  },
  methods: {
    registerClick: function registerClick() {
      var _this = this;

      this.$loading.show(this);
      if (this.avatar_file) this.user.avatar_file = this.avatar_file; //this.user.interest

      var category_interest = [];

      for (var i = 0; i < this.cat_checked.length; i++) {
        if (this.cat_checked[i]) {
          category_interest.push(this.categories[i].id);
        }
      }

      this.user.category_interest = category_interest;
      this.$store.dispatch('auth/register', this.user).then(function (response) {
        _this.$loading.hide(_this);

        console.log(response.data.status);

        if (response.data.status === 'already_exist') {
          _this.$vs.notify({
            title: _this.$t('Error'),
            text: _this.$t('UserAlreadyExistMsg'),
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'danger'
          });

          return;
        }

        if (response.data.status === 'ok') {
          _this.$vs.notify({
            title: _this.$t('Success'),
            text: _this.$t('RegisterSuccess'),
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });
        }

        setTimeout(function () {
          _this.$router.push('/home');
        }, 3000);
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    setUserCountry: function setUserCountry() {
      if (this.selected_country) {
        this.user.country = this.selected_country.name;
      } else {
        this.user.country = undefined;
      }

      this.selected_region = undefined;
      this.user.region = undefined;
    },
    setUserRegion: function setUserRegion() {
      if (this.selected_region) {
        this.user.region = this.selected_region.name;
      } else {
        this.user.region = undefined;
      }
    },
    browseAvatarImg: function browseAvatarImg() {
      this.$refs.refAvatarFile.click();
    },
    readerData: function readerData(rawFile) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.$refs.avatarPreview.src = e.target.result;
          _this2.avatar_file = rawFile; //this.onSuccess(sendData)

          resolve();
        };

        _this2.avatar_show = true;
        reader.readAsDataURL(rawFile);
      });
    },
    avatarChanged: function avatarChanged(e) {
      var files = e.target.files;
      this.validateAndUpload(files);
    },
    validateAndUpload: function validateAndUpload(files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Error - Too Many Files',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: 'File Format Error',
          text: 'Only supports upload .png, .gif, .jpg, .jpeg suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.previewAvatar(rawFile);
    },
    isImage: function isImage(file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name);
    },
    previewAvatar: function previewAvatar(file) {
      this.$refs.refAvatarFile.value = null; // fix can't select the same excel

      this.readerData(file);
    },
    PasswordValidate: function PasswordValidate() {
      if (!this.user.password || this.user.password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])/.test(this.user.password)) this.password_error = this.$t('PasswordValidator');else this.password_error = '';
    },
    ConfirmValidate: function ConfirmValidate() {
      if (this.user.password !== this.user.repeat_password) this.confirm_error = this.$t('ConfirmValidator');else this.confirm_error = '';
    }
  },
  created: function created() {
    var _this3 = this;

    if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    if (this.$route.params.type === 'expositor') this.user.type = 'lecturer';
    this.$http.get('/api/fair/now/category').then(function (res) {
      if (res.data.categories) {
        _this3.fair_title = res.data.fair.name;
        _this3.categories = res.data.categories;

        for (var i = 0; i < _this3.categories.length; i++) {
          _this3.cat_checked.push(false);
        }
      }

      if (!res.data.fair) {
        _this3.$vs.notify({
          title: _this3.$t('Error'),
          text: _this3.$t('FairNotExistMsg'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });

        _this3.$router.push('/home')["catch"](function () {});
      }
    });
    this.$http.get('/api/country_info').then(function (res) {
      if (res.data.countries) {
        _this3.countries = res.data.countries;
        _this3.regions = res.data.regions;
        _this3.selected_country = {
          id: 0,
          label: _this3.$t('SelectCountry')
        };
        _this3.selected_region = {
          id: 0,
          label: _this3.$t('SelectRegion')
        };
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watermark {\n  position: fixed;\n  bottom: 20px;\n  width: 100%;\n}[dir] .watermark {\n  margin: auto;\n}[dir=ltr] .watermark {\n  text-align: right;\n  padding-right: 30px;\n}[dir=rtl] .watermark {\n  text-align: left;\n  padding-left: 30px;\n}\n.participant-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n[dir] .participant-main .left-panel {\n  background: #283ac4;\n}\n.participant-main .left-panel .think-text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 5rem;\n}\n[dir] .participant-main .left-panel .think-text {\n  border: 1px solid white;\n  margin: 0 8rem;\n}\n.participant-main .left-panel .left-content {\n  height: 100%;\n}\n[dir] .participant-main .right-panel {\n  background: white !important;\n}\n.participant-main .right-panel input, .participant-main .right-panel textarea {\n  font-size: 0.9rem !important;\n}\n[dir] .participant-main .right-panel input, [dir] .participant-main .right-panel textarea {\n  border-radius: 0 !important;\n}\n.participant-main .right-panel .vs-input--placeholder {\n  font-size: 0.9rem !important;\n}\n.participant-main .right-panel .input-span-placeholder {\n  color: #151515 !important;\n}\n[dir] .participant-main .right-panel .input-span-placeholder {\n  padding: 0.6rem !important;\n}\n[dir] .participant-main .right-panel .vs-con-textarea {\n  border-radius: 0 !important;\n}\n.participant-main .right-panel .con-slot-label {\n  font-size: 0.8rem;\n}\n.participant-main .right-panel .register-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .participant-main .right-panel .register-btn {\n  padding: 0.8rem 1rem !important;\n}\n.participant-main .right-panel .attach-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .participant-main .right-panel .attach-btn {\n  padding: 0.8rem 1rem !important;\n}\n[dir] .participant-main .right-panel .vs__dropdown-toggle {\n  border-radius: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterUser.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558& ***!
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
    { staticClass: "w-full" },
    [
      _c("app-header", { attrs: { activeItem: "0", hideNavbar: true } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex w-full justify-between participant-main" },
        [
          _c(
            "div",
            {
              staticClass:
                "vx-col flex flex-col justify-between  w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 left-panel"
            },
            [
              _c("div", { staticClass: "flex items-center m-4 text-white" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.$router.back()
                      }
                    }
                  },
                  [
                    _c("feather-icon", { attrs: { icon: "ArrowLeftIcon" } }),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2" }, [
                      _vm._v(_vm._s(_vm.$t("Return")))
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center h6 ml-6 mt-base mb-base text-white"
                },
                [
                  _vm._v(
                    "\n                *ESPACIO PARA LOGO Y BANNER PRINCIPAL DEL EVENTO\n            "
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "vx-col w-full bg-white lg:w-1/2 sm:w-1/2 xs:w-1/2 right-panel"
            },
            [
              _c("div", { staticClass: "text-center p-5" }, [
                _c("h2", { staticClass: "font-bold mb-4" }, [
                  _vm._v(_vm._s(_vm.$t("WelcomeMsg")) + ":")
                ]),
                _vm._v(" "),
                _c("h2", [_vm._v(_vm._s(_vm.fair_title))])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-row px-20" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: _vm.$t("FirstName"),
                          name: "FirstName",
                          "data-vv-validate-on": "blur"
                        },
                        model: {
                          value: _vm.user.first_name,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "first_name", $$v)
                          },
                          expression: "user.first_name"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("FirstName") &&
                              _vm.errors
                                .first("FirstName")
                                .replace("FirstName", _vm.$t("FirstName"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: _vm.$t("LastName"),
                          name: "LastName",
                          "data-vv-validate-on": "blur"
                        },
                        model: {
                          value: _vm.user.last_name,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "last_name", $$v)
                          },
                          expression: "user.last_name"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("LastName") &&
                              _vm.errors
                                .first("LastName")
                                .replace("LastName", _vm.$t("LastName"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: "Email",
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
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.errors.first("Email")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: _vm.$t("Phone"),
                          name: "Phone",
                          "data-vv-validate-on": "blur"
                        },
                        model: {
                          value: _vm.user.phone,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "phone", $$v)
                          },
                          expression: "user.phone"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("Phone") &&
                              _vm.errors
                                .first("Phone")
                                .replace("Phone", _vm.$t("Phone"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: _vm.$t("Company"),
                          name: "Company",
                          "data-vv-validate-on": "blur"
                        },
                        model: {
                          value: _vm.user.company,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "company", $$v)
                          },
                          expression: "user.company"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("Company") &&
                              _vm.errors
                                .first("Company")
                                .replace("Company", _vm.$t("Company"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
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
                        staticClass: "w-full",
                        attrs: {
                          color: "success",
                          placeholder: _vm.$t("Position"),
                          name: "Position",
                          "data-vv-validate-on": "blur"
                        },
                        model: {
                          value: _vm.user.address,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "address", $$v)
                          },
                          expression: "user.address"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("Position") &&
                              _vm.errors
                                .first("Position")
                                .replace("Position", _vm.$t("Position"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                    },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: {
                          type: "password",
                          color: "success",
                          placeholder: _vm.$t("SelectPassword"),
                          name: "constrasena"
                        },
                        on: { blur: _vm.PasswordValidate },
                        model: {
                          value: _vm.user.password,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "password", $$v)
                          },
                          expression: "user.password"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.password_error))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                    },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: {
                          type: "password",
                          color: "success",
                          placeholder: _vm.$t("ConfirmPassword"),
                          name: "contrasena"
                        },
                        on: { blur: _vm.ConfirmValidate },
                        model: {
                          value: _vm.repeat_password,
                          callback: function($$v) {
                            _vm.repeat_password = $$v
                          },
                          expression: "repeat_password"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(_vm._s(_vm.confirm_error))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                    },
                    [
                      _c("v-select", {
                        attrs: { options: _vm.countries },
                        on: { input: _vm.setUserCountry },
                        model: {
                          value: _vm.selected_country,
                          callback: function($$v) {
                            _vm.selected_country = $$v
                          },
                          expression: "selected_country"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("Country") &&
                              _vm.errors
                                .first("Country")
                                .replace("Country", _vm.$t("Country"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                    },
                    [
                      _c("v-select", {
                        attrs: {
                          options: _vm.regions.filter(function(it) {
                            return it.country_id === _vm.selected_country.id
                          })
                        },
                        on: { input: _vm.setUserRegion },
                        model: {
                          value: _vm.selected_region,
                          callback: function($$v) {
                            _vm.selected_region = $$v
                          },
                          expression: "selected_region"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger text-sm" }, [
                        _vm._v(
                          _vm._s(
                            _vm.errors.first("Region") &&
                              _vm.errors
                                .first("Region")
                                .replace("Region", _vm.$t("Region"))
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col w-full my-4" }, [
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.avatar_show,
                                expression: "!avatar_show"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.$t("AddLogo")))]
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("img", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.avatar_show,
                                expression: "avatar_show"
                              }
                            ],
                            ref: "avatarPreview",
                            staticStyle: {
                              width: "150px",
                              height: "150px",
                              "border-radius": "100%"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "cyan-light ml-2 attach-btn",
                            on: { click: _vm.browseAvatarImg }
                          },
                          [_vm._v(_vm._s(_vm.$t("Attach")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col w-full mb-2" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("SelectInterest")) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(cat, index) {
                    return _c(
                      "div",
                      {
                        key: "cat-item-" + index,
                        staticClass:
                          "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                      },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            attrs: { color: "rgb(103, 179, 81) " },
                            model: {
                              value: _vm.cat_checked[index],
                              callback: function($$v) {
                                _vm.$set(_vm.cat_checked, index, $$v)
                              },
                              expression: "cat_checked[index]"
                            }
                          },
                          [_vm._v(_vm._s(cat.name))]
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-4 text-center" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "cyan-dark register-btn",
                          attrs: { disabled: !_vm.validateForm },
                          on: {
                            click: function($event) {
                              return _vm.registerClick()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("Register")) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col flex justify-center w-full text-center mb-4"
                    },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          attrs: { color: "rgb(103, 179, 81) " },
                          model: {
                            value: _vm.accept_chk,
                            callback: function($$v) {
                              _vm.accept_chk = $$v
                            },
                            expression: "accept_chk"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("AcceptTerm")))]
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        ref: "refAvatarFile",
        staticClass: "hidden",
        attrs: { type: "file", accept: ".png, .gif, .jpg, .jpeg" },
        on: { change: _vm.avatarChanged }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col" }, [
      _c("div", { staticClass: "text-center w-full mb-base" }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @assets/images/logo/fair_logo.jpg */ "./resources/app/assets/images/logo/fair_logo.jpg") }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center text-white think-text" }, [
        _vm._v("\n                    Think "),
        _c("br"),
        _vm._v("\n                    Outside "),
        _c("br"),
        _vm._v(" \n                    The Box\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-right mr-2",
        staticStyle: { "margin-top": "-50px" }
      },
      [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @assets/images/logo/watermark.png */ "./resources/app/assets/images/logo/watermark.png") }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/assets/images/logo/fair_logo.jpg":
/*!********************************************************!*\
  !*** ./resources/app/assets/images/logo/fair_logo.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fair_logo.jpg?2445a91993babaed9e80972aff8f6d12";

/***/ }),

/***/ "./resources/app/assets/images/logo/watermark.png":
/*!********************************************************!*\
  !*** ./resources/app/assets/images/logo/watermark.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watermark.png?6fb6136310da06fad0c20d8f6c51c47c";

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterUser.vue":
/*!**********************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterUser.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterUser.vue?vue&type=template&id=a6062558& */ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558&");
/* harmony import */ var _RegisterUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterUser.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterUser.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/sign/RegisterUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterUser.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterUser.vue?vue&type=template&id=a6062558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterUser.vue?vue&type=template&id=a6062558&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterUser_vue_vue_type_template_id_a6062558___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);