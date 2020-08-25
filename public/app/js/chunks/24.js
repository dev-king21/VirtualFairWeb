(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/auth/moduleAuth.js */ "./resources/app/js/src/store/auth/moduleAuth.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    if (!_store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('auth', _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_auth_moduleAuth_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    var userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      userInfo = JSON.parse(userInfo);

      if (userInfo.id !== 0 && userInfo.email && userInfo.email !== '') {
        this.$store.dispatch('auth/logged');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .layout--full-page .vs-button {\n  border-radius: 0 !important;\n}\n[dir] .cyan-light {\n  background: #8BAFB6 !important;\n}\n[dir] .cyan-dark {\n  background: #00818D !important;\n}\n[dir] .blue-light {\n  background: #164A8B !important;\n}\n[dir] .blue-dark {\n  background: #123058 !important;\n}\n[dir] .yellow-light {\n  background: #FFC700 !important;\n}\n[dir] .yellow-dark {\n  background: #FA712A !important;\n}\n[dir] .green-light {\n  background: #009D00 !important;\n}\n[dir] .grey-real {\n  background: #AEB4C2 !important;\n}\n[dir] .card-grey {\n  background: #EAEFF0 !important;\n}\n.font-italic {\n  font-style: italic;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.fs-4 {\n  font-size: 0.4rem !important;\n}\n.fs-6 {\n  font-size: 0.6rem !important;\n}\n.fs-7 {\n  font-size: 0.7rem !important;\n}\n.fs-8 {\n  font-size: 0.8rem !important;\n}\n.fs-10 {\n  font-size: 1rem !important;\n}\n.fs-11 {\n  font-size: 1.1rem !important;\n}\n.fs-12 {\n  font-size: 1.2rem !important;\n}\n.fs-14 {\n  font-size: 1.4rem !important;\n}\n.fs-16 {\n  font-size: 1.6rem !important;\n}\n.fs-20 {\n  font-size: 2rem !important;\n}\n.fs-24 {\n  font-size: 2.4rem !important;\n}\n.fs-28 {\n  font-size: 2.8rem !important;\n}\n.fs-32 {\n  font-size: 3.2rem !important;\n}\n.fs-36 {\n  font-size: 3.6rem !important;\n}\n.fs-40 {\n  font-size: 4rem !important;\n}\n.fs-52 {\n  font-size: 5.2rem !important;\n}\n.swiper-pagination .swiper-pagination-bullet {\n  width: 40px !important;\n  height: 6px !important;\n  opacity: 0.8 !important;\n}\n[dir] .swiper-pagination .swiper-pagination-bullet {\n  border-radius: 3px !important;\n  background: transparent !important;\n  border: 1px solid white !important;\n}\n[dir] .swiper-pagination .swiper-pagination-bullet-active {\n  background: white !important;\n}\n.swiper-pagination2 .swiper-pagination-bullet {\n  width: 28px !important;\n  height: 4px !important;\n  opacity: 0.8 !important;\n}\n[dir] .swiper-pagination2 .swiper-pagination-bullet {\n  border-radius: 3px !important;\n  background: transparent !important;\n  border: 1px solid white !important;\n}\n[dir] .swiper-pagination2 .swiper-pagination-bullet-active {\n  background: white !important;\n}\n.swiper-button-prev, [dir] .swiper-container-rtl .swiper-button-next {\n  border-radius: 100%;\n  width: 40px !important;\n  height: 40px !important;\n  background: #ffffff;\n  opacity: 0.6 !important;\n  background-image: none !important;\n}\n.swiper-button-next, [dir] .swiper-container-rtl .swiper-button-prev {\n  border-radius: 100%;\n  width: 40px !important;\n  height: 40px !important;\n  background: #ffffff;\n  opacity: 0.6 !important;\n  background-image: none !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "layout--full-page" }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/js/src/http/axios/index.js":
/*!**************************************************!*\
  !*** ./resources/app/js/src/http/axios/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios.js */ "./resources/app/js/src/axios.js");

/* harmony default export */ __webpack_exports__["default"] = (_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/app/js/src/layouts/full-page/FullPage.vue":
/*!*************************************************************!*\
  !*** ./resources/app/js/src/layouts/full-page/FullPage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullPage.vue?vue&type=template&id=da4ad1fe& */ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe&");
/* harmony import */ var _FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPage.vue?vue&type=script&lang=js& */ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullPage.vue?vue&type=style&index=0&lang=scss& */ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/src/layouts/full-page/FullPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=template&id=da4ad1fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=da4ad1fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_da4ad1fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuth.js":
/*!*******************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuth.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleAuthState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleAuthState.js */ "./resources/app/js/src/store/auth/moduleAuthState.js");
/* harmony import */ var _moduleAuthMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleAuthMutations.js */ "./resources/app/js/src/store/auth/moduleAuthMutations.js");
/* harmony import */ var _moduleAuthActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleAuthActions.js */ "./resources/app/js/src/store/auth/moduleAuthActions.js");
/* harmony import */ var _moduleAuthGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleAuthGetters.js */ "./resources/app/js/src/store/auth/moduleAuthGetters.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: _moduleAuthState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleAuthMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleAuthActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleAuthGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthActions.js":
/*!**************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthActions.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../http/axios/index.js */ "./resources/app/js/src/http/axios/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(_ref, payload) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/login', JSON.parse(JSON.stringify(payload))).then(function (response) {
        if (response.data.user) {
          localStorage.setItem('accessToken', response.data.access_token);
          console.log(response.data.user);
          commit('UPDATE_USER_INFO', response.data.user);
          commit('SET_BEARER', response.data.access_token);
          resolve();
        } else {
          reject({
            message: 'Wrong Email or Password'
          });
        }
      })["catch"](function () {
        reject({
          message: 'Wrong Email or Password'
        });
      });
    });
  },
  register: function register(_ref2, payload) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      var user = JSON.parse(JSON.stringify(payload));
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      var formData = new FormData();

      for (var key in user) {
        if (key === 'category_interest') {
          if (user[key].length > 0) {
            for (var i = 0; i < user[key].length; i++) {
              formData.append("".concat(key, "[").concat(i, "]"), user[key][i]);
            }
          }
        } else {
          formData.append(key, user[key]);
        }
      }

      if (payload.avatar_file) formData.append('avatar_file', payload.avatar_file);
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/register', formData, headers).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  logout: function logout(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/logout').then(function () {
        commit('REMOVE_BEARER');
        localStorage.removeItem('userInfo');
        resolve();
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  logged: function logged(_ref4) {
    var commit = _ref4.commit;
    commit('SET_BEARER');
  },
  fetchAccessToken: function fetchAccessToken() {
    return new Promise(function (resolve) {
      return _http_axios_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/refresh-token', {
        accessToken: localStorage.getItem('accessToKen')
      }).then(function (response) {
        resolve(response);
      });
    });
  }
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthGetters.js":
/*!**************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthGetters.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthMutations.js":
/*!****************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthMutations.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_BEARER: function SET_BEARER(state) {
    state.loggedIn = true;
  },
  REMOVE_BEARER: function REMOVE_BEARER(state) {
    state.loggedIn = false;
  },
  UPDATE_USER_INFO: function UPDATE_USER_INFO(state, payload) {
    // Get Data localStorage
    //const userInfo = JSON.parse(localStorage.getItem('userInfo')) //|| state.AppActiveUser
    var userInfo = {};

    for (var _i = 0, _Object$keys = Object.keys(payload); _i < _Object$keys.length; _i++) {
      var property = _Object$keys[_i];

      if (payload[property] !== null) {
        userInfo[property] = payload[property];
      }
    } // Store data in localStorage


    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
});

/***/ }),

/***/ "./resources/app/js/src/store/auth/moduleAuthState.js":
/*!************************************************************!*\
  !*** ./resources/app/js/src/store/auth/moduleAuthState.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  loggedIn: false
});

/***/ })

}]);