(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
var preloader = '/fair_image/placeholder.png';
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    onSuccess: {
      type: Function,
      required: true
    },
    preview: {
      type: String,
      required: false
    },
    upload_key: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      selected: false
    };
  },
  computed: {
    image_source: function image_source() {
      return this.preview ? this.preview : preloader;
    }
  },
  methods: {
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDrop: function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.validateAndUpload(files);
    },
    readerData: function readerData(rawFile) {
      var _this = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.$refs.imagePreview.src = e.target.result;
          _this.selected = true;
          var sendData = {};
          sendData.action = 'change';
          sendData.name = _this.upload_key;
          sendData.file = rawFile;

          _this.onSuccess(sendData);

          resolve();
        };

        reader.readAsDataURL(rawFile);
      });
    },
    handleClick: function handleClick(e) {
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

      this.uploadFile(rawFile);
    },
    isImage: function isImage(file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name);
    },
    uploadFile: function uploadFile(file) {
      this.$refs['fileInput'].value = null; // fix can't select the same excel

      this.readerData(file);
    },
    cancelAction: function cancelAction() {
      this.$refs.imagePreview.src = this.image_source;
      this.selected = false;
      var sendData = {};
      sendData.action = 'remove';
      sendData.name = this.upload_key;
      this.onSuccess(sendData);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_components_extra_components_upload_ImageFileUpload_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/components/extra-components/upload/ImageFileUpload.vue */ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FileUpload: _views_components_extra_components_upload_ImageFileUpload_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sustainabilities: [],
      sustainability_image: undefined,
      image_file: null,
      isShow: false,
      sent: false
    };
  },
  methods: {
    changeUploadFile: function changeUploadFile(_ref) {
      var action = _ref.action,
          name = _ref.name,
          file = _ref.file;

      if (action === 'remove') {
        this.image_file = null;
      } else this.image_file = file;
    },
    saveAction: function saveAction() {
      var _this = this;

      if (this.image_file === null) return;
      var action = '/api/setting/sustainability/create';
      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      if (this.image_file) formData.append('image_file', this.image_file);
      formData.append('show', 1);
      this.$loading.show(this);
      this.$http.post(action, formData, headers).then(function (response) {
        _this.$loading.hide(_this);

        var res = response.data;
        _this.isShow = true;

        if (response.data.status === 'ok') {
          _this.loadContent(); // this.$router.push({ path: `/settings/advertisement` }).catch(()=>{})

        }

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
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateStatus: function updateStatus(sustainability) {
      var _this2 = this;

      if (this.sent === true) {
        this.sent = false;
        return;
      }

      this.sent = true;
      var action = "/api/setting/sustainability/update/".concat(sustainability.id);
      var param = {
        show: sustainability.show
      };
      this.$loading.show(this);
      this.$http.post(action, param).then(function (response) {
        _this2.$loading.hide(_this2);

        if (response.data.status === 'ok') {
          _this2.$vs.notify({
            title: 'éxito',
            text: 'Ha sido cambiado exitosamente.',
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
    },
    remove: function remove(ad) {
      var _this3 = this;

      var action = "/api/setting/sustainability/remove/".concat(ad.id);
      this.$loading.show(this);
      this.$http.post(action).then(function (response) {
        _this3.$loading.hide(_this3);

        if (response.data.status === 'ok') {
          _this3.loadContent(); // this.$router.push({ path: `/settings/advertisement` }).catch(()=>{})

        }

        if (response.data.status === 'ok') {
          _this3.$vs.notify({
            title: 'éxito',
            text: 'Fue eliminado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        } else {
          _this3.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          });
        }
      });
    },
    loadContent: function loadContent() {
      var _this4 = this;

      this.$loading.show(this);
      this.$http.get("/api/setting/sustainability/get").then(function (response) {
        _this4.sustainabilities = response.data.sustainabilities;

        _this4.$loading.hide(_this4);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.loadContent();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "excel-import" }, [
    _c("img", {
      ref: "imagePreview",
      staticClass: "responsive",
      attrs: { src: _vm.image_source, alt: "user-profile-cover" }
    }),
    _vm._v(" "),
    _c("input", {
      ref: "fileInput",
      staticClass: "hidden",
      attrs: { type: "file", accept: ".png, .gif, .jpg, .jpeg" },
      on: { change: _vm.handleClick }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.selected,
            expression: "selected"
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "flex justify-between flex-wrap" },
          [
            _c(
              "vs-button",
              {
                staticClass: "mt-4",
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-x",
                  color: "dark"
                },
                on: {
                  click: function($event) {
                    return _vm.cancelAction()
                  }
                }
              },
              [_vm._v("\n          Cancel\n      ")]
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
          "px-8 py-16 mt-4 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",
        on: {
          click: function($event) {
            return _vm.$refs.fileInput.click()
          },
          drop: _vm.handleDrop,
          dragover: _vm.handleDragover,
          dragenter: _vm.handleDragover
        }
      },
      [
        _c("feather-icon", {
          staticClass: "block",
          attrs: {
            icon: "UploadCloudIcon",
            svgClasses: "h-16 w-16 stroke-current text-grey"
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("Drop Image File or ")]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "font-medium text-primary",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.$refs.fileInput.click()
              }
            }
          },
          [_vm._v("Browse")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1 mb-base" },
        [
          _c("vx-card", { staticClass: "overlay-card overflow-hidden" }, [
            _c("h3", { staticClass: "mb-2 text-warning font-bold" }, [
              _vm._v("Advertisement Image")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-8" },
              [
                _c("file-upload", {
                  attrs: {
                    preview: _vm.sustainability_image,
                    upload_key: "advertisement",
                    onSuccess: _vm.changeUploadFile
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex items-center justify-center mb-4" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "mt-4",
                  attrs: {
                    type: "filled",
                    "icon-pack": "feather",
                    icon: "icon-save",
                    color: "success"
                  },
                  on: { click: _vm.saveAction }
                },
                [_vm._v("\n            Add Image\n        ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-full lg:w-2/3 sm:w-1 mb-base" }, [
        _c(
          "div",
          { staticClass: "vx-row" },
          _vm._l(_vm.sustainabilities, function(sustainability, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base"
              },
              [
                _c("vx-card", [
                  _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
                    _c("img", {
                      staticClass: "responsive card-img-top",
                      attrs: {
                        src: "/fair_image/" + sustainability.url,
                        alt: "content-img"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-between mt-5 px-4 pb-4"
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              type: "filled",
                              "icon-pack": "feather",
                              icon: "icon-trash",
                              color: "success"
                            },
                            on: {
                              click: function($event) {
                                return _vm.remove(sustainability)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                          Delete\n                      "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-switch",
                          {
                            staticClass: "mt-4 ml-2",
                            attrs: { color: "success" },
                            on: {
                              change: function($event) {
                                return _vm.updateStatus(sustainability)
                              }
                            },
                            model: {
                              value: sustainability.show,
                              callback: function($$v) {
                                _vm.$set(sustainability, "show", $$v)
                              },
                              expression: "sustainability.show"
                            }
                          },
                          [
                            _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                              _vm._v("Show")
                            ]),
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
                  ])
                ])
              ],
              1
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageFileUpload.vue?vue&type=template&id=4176bc17& */ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17&");
/* harmony import */ var _ImageFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageFileUpload.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageFileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageFileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageFileUpload.vue?vue&type=template&id=4176bc17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/components/extra-components/upload/ImageFileUpload.vue?vue&type=template&id=4176bc17&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageFileUpload_vue_vue_type_template_id_4176bc17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/admin/js/src/views/setting/sustainability/Sustainability.vue":
/*!********************************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/sustainability/Sustainability.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sustainability.vue?vue&type=template&id=8e7b0c54& */ "./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54&");
/* harmony import */ var _Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sustainability.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/setting/sustainability/Sustainability.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sustainability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54&":
/*!***************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sustainability.vue?vue&type=template&id=8e7b0c54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/sustainability/Sustainability.vue?vue&type=template&id=8e7b0c54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_8e7b0c54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);