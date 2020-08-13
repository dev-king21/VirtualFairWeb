(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/Header.vue */ "./resources/app/js/src/layouts/components/Header.vue");
/* harmony import */ var _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/custom/BreadCrumb.vue */ "./resources/app/js/src/views/custom/BreadCrumb.vue");
/* harmony import */ var _VideoCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VideoCard.vue */ "./resources/app/js/src/views/setting/VideoCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _views_custom_BreadCrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VideoCard: _VideoCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      gallery_list: [],
      gallery_show: false,
      gallery_title: '',
      gallery_file: null,
      stand_id: null
    };
  },
  computed: {
    hasImage: function hasImage() {
      var _this = this;

      return this.gallery_list.filter(function (it) {
        return _this.isImage(it.url);
      }).length !== 0;
    },
    hasVideo: function hasVideo() {
      var _this2 = this;

      return this.gallery_list.filter(function (it) {
        return _this2.isVideo(it.url);
      }).length !== 0;
    }
  },
  methods: {
    browseVideo: function browseVideo() {
      this.$refs.refVideoFile.click();
    },
    videoChanged: function videoChanged(e) {
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

      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato .avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.gallery_show = true;
      this.gallery_file = rawFile;
      this.$refs.refVideoFile.value = null;
      if (this.isImage(this.gallery_file.name)) this.saveGallery();
    },
    isImage: function isImage(file) {
      return /\.(jpeg|jpg|png|gif)$/.test(file);
    },
    isVideo: function isVideo(file) {
      return /\.(avi|mp4|3gp)$/.test(file);
    },
    isValidExt: function isValidExt(file) {
      return /\.(avi|mp4|3gp|jpeg|jpg|png|gif)$/.test(file.name);
    },
    getGalleryItems: function getGalleryItems() {
      var _this3 = this;

      this.$http.post('/api/setting/my_stand/get_gallery').then(function (response) {
        var data = response.data;

        if (!data.stand || !data.stand.id) {
          _this3.$vs.notify({
            title: 'error',
            text: 'primero debe comprar el soporte.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });

          setTimeout(function () {
            _this3.$router.push('/setting/home');
          }, 3000);
          return;
        }

        _this3.gallery_show = false;
        _this3.stand_id = data.stand.id;
        _this3.gallery_list = data.stand.gallerys;
      });
    },
    saveGallery: function saveGallery() {
      var _this4 = this;

      if (!this.gallery_file || this.gallery_file.size > 100 * 1024 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato .avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      if (this.isVideo(this.gallery_file.name) && (!this.gallery_title || this.gallery_title === '')) {
        this.$vs.notify({
          title: 'Error de título del catálogo',
          text: 'Ingrese corregir el mosaico del catálogo',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var formData = new FormData();
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('stand_id', this.stand_id);
      formData.append('gallery_file', this.gallery_file);

      if (this.isVideo(this.gallery_file.name)) {
        console.log(this.gallery_title);
        formData.append('gallery_title', this.gallery_title);
      }

      console.log('save_gallery');
      this.$http.post('/api/setting/my_stand/save_gallery', formData, headers).then(function (response) {
        if (response.data.status === 'ok') {
          _this4.$vs.notify({
            title: 'éxito',
            text: 'Folleto registrado con éxito',
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this4.getGalleryItems();
        }
      });
    },
    removeGallery: function removeGallery(id) {
      var _this5 = this;

      this.$http.post('/api/setting/my_stand/remove_gallery', {
        _id: id
      }).then(function (response) {
        if (response.data.status === 'ok') {
          _this5.$vs.notify({
            title: 'éxito',
            text: 'Folleto registrado con éxito',
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'success'
          });

          _this5.getGalleryItems();
        }
      });
    },
    showVideo: function showVideo(id) {
      console.log(id);
    }
  },
  created: function created() {
    this.getGalleryItems();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    readed: {
      type: Number,
      required: true
    },
    remove: {
      type: Function,
      required: false
    },
    show: {
      type: Function,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeVideo: function removeVideo(id) {
      this.remove(id);
    },
    showVideo: function showVideo(id) {
      this.show(id);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting-stand-video {\n  min-height: calc(var(--vh, 1vh) * 100 - 152px);\n}\n[dir] .setting-stand-video .vx-row {\n  margin: 0 !important;\n}\n[dir] .setting-stand-video .vx-col {\n  padding: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-card {\n  font-size: 1rem;\n  font-weight: normal;\n}[dir] .video-card {\n  margin: 0 1.5rem;\n}\n.video-card .card-header {\n  height: 15rem;\n}\n[dir=ltr] .video-card .card-header {\n  border-top-left-radius: 0.8rem;\n  border-top-right-radius: 0.8rem;\n}\n[dir=rtl] .video-card .card-header {\n  border-top-right-radius: 0.8rem;\n  border-top-left-radius: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandVideo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659& ***!
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
      _c("app-header", { attrs: { activeItem: "0" } }),
      _vm._v(" "),
      _c("bread-crumb", {
        attrs: { icon: "gallery", type: "svg", text: "GALERÍA" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "w-full setting-stand-video bg-white-grey" }, [
        _c("div", { staticClass: "w-full px-10 pb-4 mt-4" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasImage,
                  expression: "hasImage"
                }
              ],
              staticClass: "h3 m-2 font-bold"
            },
            [_vm._v("\n              Image\n            ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-row w-full" },
            _vm._l(
              _vm.gallery_list.filter(function(it) {
                return _vm.isImage(it.url)
              }),
              function(item, index) {
                return _c(
                  "div",
                  { key: "photo-item-" + index, staticClass: "vx-col w-1/6" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "bg-grey-real m-4 p-2",
                        staticStyle: {
                          "border-radius": "10px",
                          height: "200px"
                        }
                      },
                      [
                        _c("img", {
                          staticStyle: {
                            height: "100%",
                            width: "auto",
                            "max-width": "100%"
                          },
                          attrs: { src: "/fair_image/" + item.url }
                        })
                      ]
                    )
                  ]
                )
              }
            ),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.hasVideo,
                  expression: "hasVideo"
                }
              ],
              staticClass: "h3 m-2 font-bold"
            },
            [_vm._v("\n              Video\n            ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-row w-full mt-4" },
            [
              _vm._l(
                _vm.gallery_list.filter(function(it) {
                  return _vm.isVideo(it.url)
                }),
                function(item, index) {
                  return _c(
                    "div",
                    { key: "video-item-" + index, staticClass: "vx-col w-1/4" },
                    [
                      _c("video-card", {
                        attrs: {
                          title: item.name,
                          readed: item.readed,
                          id: item.id,
                          remove: _vm.removeGallery,
                          show: _vm.showVideo
                        }
                      })
                    ],
                    1
                  )
                }
              ),
              _vm._v(" "),
              !_vm.gallery_show
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col w-1/4 flex flex-col items-center justify-center"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "mt-4 blue-dark flex items-center justify-center text-white",
                            staticStyle: {
                              "border-radius": "50%",
                              width: "4rem",
                              height: "4rem"
                            }
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                svgClases: "w-10 h-10",
                                icon: "PlusIcon"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.browseVideo()
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.gallery_show && _vm.isVideo(_vm.gallery_file.name)
                ? [
                    _c("div", { staticClass: "vx-col w-1/4" }, [
                      _c("div", { staticClass: "video-card" }, [
                        _c(
                          "div",
                          { staticClass: "h6 mb-2" },
                          [
                            _c("vs-input", {
                              staticClass: "w-full",
                              attrs: { placeholder: "título del catálogo" },
                              model: {
                                value: _vm.gallery_title,
                                callback: function($$v) {
                                  _vm.gallery_title = $$v
                                },
                                expression: "gallery_title"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex w-full items-center justify-center card-header grey-real"
                          },
                          [
                            _c("vs-icon", {
                              staticClass: "play-icon",
                              attrs: {
                                size: "4rem",
                                color: "red",
                                "icon-pack": "material-icons",
                                icon: "play_circle_filled"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c("div", { staticClass: "vx-col w-full" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.saveGallery()
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { size: "w-5 h-5", icon: "SaveIcon" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "ml-2",
                                    staticStyle: { "font-size": "0.9rem" }
                                  },
                                  [_vm._v("GUARDAR")]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                ref: "refVideoFile",
                staticClass: "hidden",
                attrs: {
                  type: "file",
                  accept: ".avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg"
                },
                on: { change: _vm.videoChanged }
              })
            ],
            2
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 text-center" }, [
      _vm._v("\n                          SUBIR FOTO O VIDEO "),
      _c("br"),
      _vm._v(
        "\n                          (Peso maximo 100mb)\n                      "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20& ***!
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
  return _c("div", { staticClass: "video-card" }, [
    _c("div", { staticClass: "h6 mb-2 mx-8 text-center" }, [
      _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex w-full items-center justify-center card-header grey-real"
      },
      [
        _c("vs-icon", {
          staticClass: "play-icon",
          attrs: {
            size: "4rem",
            color: "red",
            "icon-pack": "material-icons",
            icon: "play_circle_filled"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        {
          staticClass:
            "vx-col flex items-center justify-center text-white w-3/5 bg-dark"
        },
        [_vm._v("\n          " + _vm._s(_vm.readed) + " vistars\n        ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-2/5" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center justify-center text-white py-2 yellow-dark w-full cursor-pointer",
            on: {
              click: function($event) {
                return _vm.removeVideo(_vm.id)
              }
            }
          },
          [
            _c("svg-icon", { attrs: { size: "w-5 h-5", icon: "erase" } }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-2", staticStyle: { "font-size": "0.9rem" } },
              [_vm._v("BORRAR")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandVideo.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandVideo.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandVideo.vue?vue&type=template&id=20719659& */ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659&");
/* harmony import */ var _StandVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandVideo.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandVideo.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StandVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/Stand/StandVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandVideo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659&":
/*!************************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StandVideo.vue?vue&type=template&id=20719659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/Stand/StandVideo.vue?vue&type=template&id=20719659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StandVideo_vue_vue_type_template_id_20719659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/views/setting/VideoCard.vue":
/*!**********************************************************!*\
  !*** ./resources/app/js/src/views/setting/VideoCard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoCard.vue?vue&type=template&id=5ccd1c20& */ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20&");
/* harmony import */ var _VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoCard.vue?vue&type=script&lang=js& */ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoCard.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/views/setting/VideoCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCard.vue?vue&type=template&id=5ccd1c20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/views/setting/VideoCard.vue?vue&type=template&id=5ccd1c20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCard_vue_vue_type_template_id_5ccd1c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);