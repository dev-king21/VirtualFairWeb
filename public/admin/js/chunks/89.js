(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mailContent: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CountryStandsCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryStandsCard.vue */ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    emailTags: {
      type: Array,
      required: true
    },
    openMailId: {
      required: true,
      validator: function validator(prop) {
        return typeof prop === 'number' || prop === null;
      }
    },
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    mailFilter: {
      type: String
    }
  },
  data: function data() {
    return {
      showThread: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.50
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(value) {
      var _this = this;

      if (!value) {
        this.$emit('closeSidebar');
        setTimeout(function () {
          _this.showThread = false;
        }, 500);
      }
    }
  },
  computed: {
    currentMail: function currentMail() {
      return this.$store.getters['email/getMail'](this.openMailId);
    },
    labelColor: function labelColor() {
      var _this2 = this;

      return function (label) {
        var tags = _this2.$store.state.email.mailTags;
        return tags.find(function (tag) {
          return tag.value === label;
        }).color;
      };
    },
    currentMailLabels: {
      get: function get() {
        return this.currentMail.labels;
      },
      set: function set(value) {
        if (Array.isArray(value)) {
          var payload = {
            mailId: this.openMailId,
            labels: value
          };
          this.$store.dispatch('email/setLabels', payload);
        }
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.openMailId,
        value: !this.currentMail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    },
    moveTo: function moveTo(to) {
      this.$emit('closeSidebar');
      this.$emit('moveTo', to);
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    CountryStandsCard: _CountryStandsCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  updated: function updated() {
    if (!this.currentMail) return;
    if (this.currentMail.unread && this.isSidebarActive) this.$store.dispatch('email/setUnread', {
      emailIds: [this.openMailId],
      unread: false
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("vx-card", { staticClass: "px-4", class: _vm.data.staticClass }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid flex justify-between flex items-center"
        },
        [
          _c("div", { staticClass: "flex items-center" }, [
            _c(
              "div",
              [
                _c("vs-avatar", {
                  staticClass:
                    "sender__avatar--single flex-shrink-0 mr-3 border-2 border-solid border-white",
                  attrs: { src: _vm.props.mailContent.img, size: "65px" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-col" }, [
              _c("h5", { staticClass: "mb-1" }, [
                _vm._v(_vm._s(_vm.props.mailContent.sender_name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c("span", { staticClass: "text-sm" }, [
                    _vm._v(_vm._s(_vm.props.mailContent.sender))
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "inline-flex cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "w-3 h-3",
                        attrs: { icon: "ChevronDownIcon" }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        { staticStyle: { "z-index": "40001" } },
                        [
                          _c("div", { staticClass: "p-2" }, [
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("From: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.props.mailContent.sender) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("To: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("csv")(_vm.props.mailContent.to)
                                    ) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("Date: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("time")(_vm.props.mailContent.time)
                                    ) +
                                    " " +
                                    _vm._s(
                                      _vm._f("date")(
                                        _vm.props.mailContent.time,
                                        true
                                      )
                                    ) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.props.mailContent.cc.length
                              ? _c("p", { staticClass: "text-sm mb-1" }, [
                                  _vm._v("cc: "),
                                  _c("span", { staticClass: "font-semibold" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("csv")(
                                            _vm.props.mailContent.cc
                                          )
                                        ) +
                                        " "
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col justify-end" }, [
            _c("span", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm._f("time")(_vm.props.mailContent.time)))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-end mt-2" }, [
              _c("span", { staticClass: "text-right" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.props.mailContent.time, true)))
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c("div", {
          staticClass: "mail__content break-words mt-8 mb-4",
          domProps: { innerHTML: _vm._s(_vm.props.mailContent.message) }
        })
      ])
    ]),
    _vm._v(" "),
    _vm.props.mailContent.attachments.length
      ? _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            {
              staticClass:
                "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid mb-6 flex"
            },
            [
              _c("feather-icon", {
                staticClass: "mr-2",
                attrs: { icon: "PaperclipIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "block py-4" }, [_vm._v("ATTACHMENTS")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex" },
            _vm._l(_vm.props.mailContent.attachments, function(
              attachment,
              index
            ) {
              return _c(
                "div",
                { key: index, staticClass: "mail__attachment" },
                [
                  _c(
                    "vs-chip",
                    {
                      staticClass: "px-4 py-2 mr-3",
                      attrs: { color: "primary" }
                    },
                    [_vm._v(_vm._s(attachment))]
                  )
                ],
                1
              )
            }),
            0
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e& ***!
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
  return _c(
    "div",
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "full-vs-sidebar email-view-sidebar items-no-padding",
          attrs: {
            "click-not-close": "",
            parent: "#email-app",
            "hidden-background": true,
            "position-right": ""
          },
          model: {
            value: _vm.isSidebarActive,
            callback: function($$v) {
              _vm.isSidebarActive = $$v
            },
            expression: "isSidebarActive"
          }
        },
        [
          _vm.currentMail
            ? _c(
                "div",
                { staticClass: "mail-sidebar-content px-0 sm:pb-6 h-full" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg"
                    },
                    [
                      _c("div", { staticClass: "flex mb-4" }, [
                        _c(
                          "div",
                          { staticClass: "flex items-center" },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer mr-4",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ArrowRightIcon"
                                  : "ArrowLeftIcon",
                                "svg-classes": "w-6 h-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("closeSidebar")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.currentMail.subject
                              ? _c("h4", [
                                  _vm._v(_vm._s(_vm.currentMail.subject))
                                ])
                              : _c("h4", [_vm._v("(no subject)")])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-10 mb-4 mt-1" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "email__actions--single flex items-baseline"
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                icon: "StarIcon",
                                svgClasses: [
                                  {
                                    "text-warning stroke-current stroke-current":
                                      _vm.currentMail.isStarred
                                  },
                                  "h-6 w-6"
                                ]
                              },
                              on: { click: _vm.toggleIsStarred }
                            }),
                            _vm._v(" "),
                            _vm.mailFilter != "sent"
                              ? _c(
                                  "vs-dropdown",
                                  {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      "vs-custom-content": "",
                                      "vs-trigger-click": ""
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "ml-4",
                                      attrs: {
                                        icon: "FolderIcon",
                                        "svg-classes": "h-6 w-6"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      [
                                        _vm.currentMail.mailFolder != "inbox"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("inbox")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "MailIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Inbox")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "draft"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("draft")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "Edit2Icon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Draft")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "spam"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("spam")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "InfoIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [_vm._v("Spam")])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "trash"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("trash")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "TrashIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Trash")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "vs-dropdown",
                              {
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "vs-custom-content": "",
                                  "vs-trigger-click": ""
                                }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer ml-4",
                                  attrs: {
                                    icon: "TagIcon",
                                    "svg-classes": "h-6 w-6"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown-menu",
                                  { staticStyle: { "z-index": "40001" } },
                                  _vm._l(_vm.emailTags, function(label, index) {
                                    return _c(
                                      "vs-dropdown-item",
                                      {
                                        key: index,
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "vs-checkbox",
                                          {
                                            attrs: { "vs-value": label.value },
                                            model: {
                                              value: _vm.currentMailLabels,
                                              callback: function($$v) {
                                                _vm.currentMailLabels = $$v
                                              },
                                              expression: "currentMailLabels"
                                            }
                                          },
                                          [_vm._v(_vm._s(label.text))]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "cursor-pointer ml-4",
                              attrs: {
                                icon: "MailIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("markUnread")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.currentMail.mailFolder != "trash"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer ml-4",
                                  attrs: {
                                    icon: "TrashIcon",
                                    "svg-classes": "h-6 w-6"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$emit("removeMail")
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ChevronsRightIcon"
                                  : "ChevronsLeftIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("previousMail")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ChevronsLeftIcon"
                                  : "ChevronsRightIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("nextMail")
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    _vm.scrollbarTag,
                    {
                      key: _vm.$vs.rtl,
                      tag: "component",
                      staticClass:
                        "scroll-area-mail-content md:px-8 md:pb-8 pt-4 px-6 pb-6",
                      attrs: { settings: _vm.settings }
                    },
                    [
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "email__labels--single flex ml-10 items-center mt-2"
                            },
                            [
                              _c(
                                "transition-group",
                                {
                                  staticClass: "flex",
                                  attrs: { name: "list", tag: "div" }
                                },
                                _vm._l(_vm.currentMail.labels, function(label) {
                                  return _c(
                                    "div",
                                    {
                                      key: label,
                                      staticClass:
                                        "open-mail-label flex items-center mr-4"
                                    },
                                    [
                                      _c("div", {
                                        staticClass:
                                          "h-3 w-3 rounded-full mr-1",
                                        class: "bg-" + _vm.labelColor(label)
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "text-sm" }, [
                                        _vm._v(
                                          _vm._s(_vm._f("capitalize")(label))
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.currentMail.replies.length && !_vm.showThread
                        ? _c("div", { staticClass: "vx-row mb-4" }, [
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-primary font-medium ml-10 cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      _vm.showThread = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.currentMail.replies.length) +
                                      " Earlier Messages"
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isSidebarActive
                        ? _c(
                            "div",
                            [
                              _vm._l(
                                _vm.currentMail.replies.slice().reverse(),
                                function(threadMail) {
                                  return _c(
                                    "div",
                                    {
                                      key: threadMail.id,
                                      staticClass: "vx-row"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "vx-col w-full" },
                                        [
                                          _c("email-mail-card", {
                                            staticClass: "mb-10",
                                            attrs: { mailContent: threadMail }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                }
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "vx-col w-full" },
                                  [
                                    _c("email-mail-card", {
                                      attrs: { mailContent: _vm.currentMail }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "vx-row",
                                  staticStyle: { "margin-top": "2.2rem" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "vx-col w-full" },
                                    [
                                      _c("vx-card", [
                                        _c("div", { staticClass: "vx-row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "vx-col w-full flex justify-between"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-lg" },
                                                [
                                                  _vm._v("Click here to "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Reply")]
                                                  ),
                                                  _vm._v(" or "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Forward")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("feather-icon", {
                                                attrs: { icon: "PaperclipIcon" }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue":
/*!********************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true& */ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true&");
/* harmony import */ var _CountryStandsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryStandsCard.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CountryStandsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryStandsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsCard.vue?vue&type=template&id=175ab30e&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsCard_vue_vue_type_template_id_175ab30e_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue":
/*!********************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryStandsView.vue?vue&type=template&id=3c17938e& */ "./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e&");
/* harmony import */ var _CountryStandsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryStandsView.vue?vue&type=script&lang=js& */ "./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CountryStandsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryStandsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e&":
/*!***************************************************************************************************************!*\
  !*** ./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryStandsView.vue?vue&type=template&id=3c17938e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin/js/src/views/fair/country-stands/CountryStandsView.vue?vue&type=template&id=3c17938e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryStandsView_vue_vue_type_template_id_3c17938e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);