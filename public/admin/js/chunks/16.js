(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileUpload: _views_components_extra_components_upload_ImageFileUpload_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      building_image: undefined,
      interior_image: undefined,
      // upload_building_url: undefined,
      // upload_interior_url: undefined,
      ftype_name: undefined,
      building_file: null,
      interior_file: null
    };
  },
  methods: {
    changeUploadFile: function changeUploadFile(_ref) {
      var action = _ref.action,
          name = _ref.name,
          file = _ref.file;

      if (action === 'remove') {
        if (name === 'building') this.building_file = null;else this.interior_file = null;
      } else if (name === 'building') this.building_file = file;else this.interior_file = file;
    },
    saveAction: function saveAction() {
      var _this = this;

      var action = '/api/fair_type/create/';
      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      if (this.$route.params.ftype_id) {
        action = "/api/fair_type/update/".concat(this.$route.params.ftype_id);
      }

      formData.append('name', this.ftype_name);
      if (this.building_file) formData.append('building_file', this.building_file);
      if (this.interior_file) formData.append('interior_file', this.interior_file);
      this.$http.post(action, formData, headers).then(function (response) {
        var res = response.data;
        if (res.status === 'ok' && res.id) _this.$router.push({
          path: "/settings/fair-type/edit/".concat(res.id)
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.params.ftype_id) {
      // this.upload_building_url = `/api/fair_type/upload/building/${this.$route.params.ftype_id}`
      // this.upload_interior_url = `/api/fair_type/upload/interior/${this.$route.params.ftype_id}`
      this.$http.get("/api/fair_type/get/".concat(this.$route.params.ftype_id)).then(function (response) {
        var fair_type = response.data.fair_type;
        if (fair_type.building) _this2.building_image = "/fair_image/".concat(fair_type.building);
        if (fair_type.interior) _this2.interior_image = "/fair_image/".concat(fair_type.interior);
        if (fair_type.name) _this2.ftype_name = fair_type.name;
      })["catch"](function (error) {
        console.log(error);
      });
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "flex justify-between flex-wrap mb-4" },
      [
        _c("vs-input", {
          attrs: { "label-placeholder": "Fair Type Name" },
          model: {
            value: _vm.ftype_name,
            callback: function($$v) {
              _vm.ftype_name = $$v
            },
            expression: "ftype_name"
          }
        }),
        _vm._v(" "),
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
            on: {
              click: function($event) {
                return _vm.saveAction()
              }
            }
          },
          [_vm._v("\n          Save\n      ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/2 sm:w-1 mb-base" },
        [
          _c("vx-card", { staticClass: "overlay-card overflow-hidden" }, [
            _c("h3", { staticClass: "mb-2 text-warning font-bold" }, [
              _vm._v("Building Image")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-8" },
              [
                _c("file-upload", {
                  attrs: {
                    preview: _vm.building_image,
                    upload_key: "building",
                    onSuccess: _vm.changeUploadFile
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/2 sm:w-1 mb-base" },
        [
          _c("vx-card", { staticClass: "overlay-card overflow-hidden" }, [
            _c("h3", { staticClass: "mb-2 text-warning font-bold" }, [
              _vm._v("Interior Hall Image")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-8" },
              [
                _c("file-upload", {
                  attrs: {
                    preview: _vm.interior_image,
                    upload_key: "interior",
                    onSuccess: _vm.changeUploadFile
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
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

/***/ "./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue":
/*!********************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FairTypeEdit.vue?vue&type=template&id=2b8bbffa& */ "./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa&");
/* harmony import */ var _FairTypeEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairTypeEdit.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FairTypeEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/setting/fair/FairTypeEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FairTypeEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairTypeEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FairTypeEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa&":
/*!***************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FairTypeEdit.vue?vue&type=template&id=2b8bbffa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/setting/fair/FairTypeEdit.vue?vue&type=template&id=2b8bbffa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FairTypeEdit_vue_vue_type_template_id_2b8bbffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);