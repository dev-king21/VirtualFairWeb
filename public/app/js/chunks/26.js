(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/auth/moduleAuth.js */ "./resources/app/js/src/store/auth/moduleAuth.js");
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppHeader: _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      categories: [false, false, false, false, false, false, false, false, false],
      user: {
        type: 'user'
      },
      repeat_password: '',
      accept_chk: false,
      avatar_show: false,
      avatar_file: null
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.user.email !== '' && this.user.password !== '' && this.repeat_password !== '' && this.repeat_password === this.user.password && this.user.first_name !== '' && this.user.last_name !== '' && this.user.phone !== '' && this.user.address !== '' && this.user.company !== '' && this.user.country !== '' && this.user.region !== '' && this.accept_chk;
    }
  },
  methods: {
    registerClick: function registerClick() {
      var _this = this;

      if (this.avatar_file) this.user.avatar_file = this.avatar_file;
      this.$store.dispatch('auth/register', this.user).then(function (response) {
        if (response.data.status === 'ok') {
          _this.$vs.notify({
            title: 'éxito',
            text: 'su cuenta se ha registrado correctamente',
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
    }
  },
  created: function created() {
    if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watermark {\n  position: fixed;\n  bottom: 20px;\n  width: 100%;\n}[dir] .watermark {\n  margin: auto;\n}[dir=ltr] .watermark {\n  text-align: right;\n  padding-right: 30px;\n}[dir=rtl] .watermark {\n  text-align: left;\n  padding-left: 30px;\n}\n.participant-main {\n  min-height: calc(var(--vh, 1vh) * 100 - 86px);\n}\n[dir] .participant-main .left-panel {\n  background: #283ac4;\n}\n.participant-main .left-panel .think-text {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 5rem;\n}\n[dir] .participant-main .left-panel .think-text {\n  border: 1px solid white;\n  margin: 0 8rem;\n}\n.participant-main .left-panel .left-content {\n  height: 100%;\n}\n[dir] .participant-main .right-panel {\n  background: white !important;\n}\n.participant-main .right-panel input, .participant-main .right-panel textarea {\n  font-size: 0.9rem !important;\n}\n[dir] .participant-main .right-panel input, [dir] .participant-main .right-panel textarea {\n  border-radius: 0 !important;\n  padding: 0.6rem !important;\n}\n.participant-main .right-panel .vs-input--placeholder {\n  font-size: 0.9rem !important;\n}\n.participant-main .right-panel .input-span-placeholder {\n  color: #333 !important;\n}\n[dir] .participant-main .right-panel .input-span-placeholder {\n  padding: 0.6rem !important;\n}\n[dir] .participant-main .right-panel .vs-con-textarea {\n  border-radius: 0 !important;\n}\n.participant-main .right-panel .con-slot-label {\n  font-size: 0.8rem;\n}\n.participant-main .right-panel .register-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .participant-main .right-panel .register-btn {\n  padding: 0.8rem 1rem !important;\n}\n.participant-main .right-panel .attach-btn {\n  font-size: 0.8rem !important;\n}\n[dir] .participant-main .right-panel .attach-btn {\n  padding: 0.8rem 1rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterParticipant.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                    _c("span", { staticClass: "ml-2" }, [_vm._v("VOLVER")])
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
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row px-20" }, [
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
                        placeholder: "Nombre",
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
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Nombre")))
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
                        placeholder: "Apellido",
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
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Apellido")))
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
                          value: "required|email|min:5",
                          expression: "'required|email|min:5'"
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
                        placeholder: "Telefono",
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
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Telefono")))
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
                        placeholder: "Compania",
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
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Compania")))
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
                        placeholder: "Posicion",
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
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Posicion")))
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
                        type: "password",
                        color: "success",
                        placeholder: "Seleccione una constrasena",
                        name: "constrasena",
                        "data-vv-validate-on": "blur"
                      },
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
                      _vm._v(_vm._s(_vm.errors.first("constrasena")))
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
                        type: "password",
                        color: "success",
                        placeholder: "Repita la contrasena",
                        name: "contrasena",
                        "data-vv-validate-on": "blur"
                      },
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
                      _vm._v(_vm._s(_vm.errors.first("constrasena")))
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
                        placeholder: "Seleccione un Pais",
                        name: "Pais",
                        "data-vv-validate-on": "blur"
                      },
                      model: {
                        value: _vm.user.country,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "country", $$v)
                        },
                        expression: "user.country"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Pais")))
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
                        placeholder: "Seleccione la Region",
                        name: "Region",
                        "data-vv-validate-on": "blur"
                      },
                      model: {
                        value: _vm.user.region,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "region", $$v)
                        },
                        expression: "user.region"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm" }, [
                      _vm._v(_vm._s(_vm.errors.first("Region")))
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
                        [_vm._v("Agregar fotograpia o logotipo")]
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
                        [_vm._v("Adjuntar")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col w-full mb-2" }, [
                  _vm._v(
                    "\n                    Seleccione un area de interes\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[0],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 0, $$v)
                          },
                          expression: "categories[0]"
                        }
                      },
                      [_vm._v("Diseno del Espacio")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[1],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 1, $$v)
                          },
                          expression: "categories[1]"
                        }
                      },
                      [_vm._v("Espacios Intelligentes")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[2],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 2, $$v)
                          },
                          expression: "categories[2]"
                        }
                      },
                      [_vm._v("Illuminacion Solar")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[3],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 3, $$v)
                          },
                          expression: "categories[3]"
                        }
                      },
                      [_vm._v("Zonas de luz")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[4],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 4, $$v)
                          },
                          expression: "categories[4]"
                        }
                      },
                      [_vm._v("Salas minimalistas")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[5],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 5, $$v)
                          },
                          expression: "categories[5]"
                        }
                      },
                      [_vm._v("Cuartos infantiles")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[6],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 6, $$v)
                          },
                          expression: "categories[6]"
                        }
                      },
                      [_vm._v("Oficinas modernas")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[7],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 7, $$v)
                          },
                          expression: "categories[7]"
                        }
                      },
                      [_vm._v("Aprovechamiento de Espacios")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4"
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        attrs: { color: "rgb(103, 179, 81) " },
                        model: {
                          value: _vm.categories[8],
                          callback: function($$v) {
                            _vm.$set(_vm.categories, 8, $$v)
                          },
                          expression: "categories[8]"
                        }
                      },
                      [_vm._v("Jardines")]
                    )
                  ],
                  1
                ),
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
                          "\n                        REGISTRARME\n                    "
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
                      [_vm._v("Acepto los terminos y condiciones")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
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
    return _c("div", { staticClass: "text-center p-5" }, [
      _c("h2", { staticClass: "font-bold mb-4" }, [
        _vm._v("Bienvenido al Registro de usuario para:")
      ]),
      _vm._v(" "),
      _c("h2", [_vm._v("EXPO ARQUITECTURA MODERNA")])
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

/***/ "./resources/app/js/src/views/sign/RegisterParticipant.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterParticipant.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterParticipant.vue?vue&type=template&id=d5821a8c& */ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c&");
/* harmony import */ var _RegisterParticipant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterParticipant.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterParticipant.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterParticipant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/sign/RegisterParticipant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterParticipant.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterParticipant.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c&":
/*!************************************************************************************************!*\
  !*** ./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterParticipant.vue?vue&type=template&id=d5821a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/sign/RegisterParticipant.vue?vue&type=template&id=d5821a8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterParticipant_vue_vue_type_template_id_d5821a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);