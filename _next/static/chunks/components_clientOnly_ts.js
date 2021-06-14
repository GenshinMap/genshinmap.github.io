(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_clientOnly_ts"],{

/***/ "./components/bifrost.js":
/*!*******************************!*\
  !*** ./components/bifrost.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* module decorator */ module = __webpack_require__.hmd(module);




console.info("[BIFROST ".concat(window.location.origin, "] Library loaded. Current frame URL: ").concat(window.location.href));

var BifrostCors = /*#__PURE__*/function () {
  function BifrostCors(address) {
    var _this = this;

    var iframeBoolean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var iframeID = arguments.length > 2 ? arguments[2] : undefined;
    var onStorageAccessSuccess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var onStorageAccessFailure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, BifrostCors);

    this.bifrostResponse;
    this.address = new URL(address);
    this.socketListner;
    this.onStorageAccessFailure = onStorageAccessFailure;
    this.onStorageAccessSuccess = onStorageAccessSuccess; //==========================={ + Function Binding + }================================

    this.bifrostBridge = bifrostBridge.bind(this);
    this.promiseConstructor = promiseConstructor.bind(this);
    this.postbackLocalstorage = postbackLocalstorage.bind(this);
    this.postbackSetLocalstorage = postbackSetLocalstorage.bind(this);
    this.postbackDeleteLocalstorage = postbackDeleteLocalstorage.bind(this);
    this.postbackGetCookie = postbackGetCookie.bind(this);
    this.postbackSetCookie = postbackSetCookie.bind(this);
    this.postbackRunEval = postbackRunEval.bind(this);
    this.postbackDomManipulationId = postbackDomManipulationId.bind(this);
    this.postbackDomManipulationClass = postbackDomManipulationClass.bind(this);
    this.startMessageThread = startMessageThread.bind(this);
    this.handleSocketMessage = handleSocketMessage.bind(this); //==========================={ + M I D G A R D + }================================

    if (iframeBoolean) {
      this.midgard = document.getElementById(iframeID);
    }

    if (iframeBoolean === false) {
      var ifrm;
      ifrm = document.createElement('iframe');
      ifrm.setAttribute('id', 'bifrost-cors');
      ifrm.setAttribute('width', '0px');
      ifrm.setAttribute('height', '0px');
      ifrm.setAttribute('style', 'position:absolute; top: -999px; display: none');
      ifrm.setAttribute('src', this.address.href); // Use the full URL, not just the origin.

      document.body.appendChild(ifrm);
      this.midgard = document.getElementById('bifrost-cors');
    }

    this.storageAccess = false;
    this.postponeStorageAccess = null;
    this.askForStorageAccess(); //======================={ + B I F R O S T - L I S T N E R + }=========================

    window.addEventListener('message', function (e) {
      // console.log(`[BIFROST ${window.location.origin}] Message received from the other side.`);
      if (e.origin === _this.address.origin) {
        console.debug("[BIFROST ".concat(window.location.origin, "] Message was received from our destination."));

        if (e.data.type.includes('request')) {
          var requestType = e.data.type.replace('request', 'postback').replace(/-/g, '_');

          _this.heimdall(requestType, e.data.value);
        }

        if (e.data.type === 'bifrost-socket-message') {
          if (_this.socketListner) {
            _this.bifrostBridge('bifrost-response', true, true);

            _this.socketListner(e.data.value);
          } else {
            console.error("[BIFROST ".concat(window.location.origin, "] Socket listener not defined."));
          }
        }
      } else {
        console.debug("[BIFROST ".concat(window.location.origin, "] Unauthorized message host. Expected '").concat(_this.address.origin, "', got ").concat(e.origin, ". Ignoring message..."));
      }
    });
  } //=========================={ + B I F R O S T - M E T H O D S + }=========================


  (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(BifrostCors, [{
    key: "getLocalStorage",
    value: function () {
      var _getLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(key) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.heimdall('get_localstorage', key);
                this.heimdall('get_response');
                _context.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLocalStorage(_x) {
        return _getLocalStorage.apply(this, arguments);
      }

      return getLocalStorage;
    }()
  }, {
    key: "sendLocalStorage",
    value: function () {
      var _sendLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Send local storage unprompted. This is useful if the first attempt to send failed.
                this.heimdall('postback_get_localstorage', payload);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendLocalStorage(_x2) {
        return _sendLocalStorage.apply(this, arguments);
      }

      return sendLocalStorage;
    }()
  }, {
    key: "setLocalStorage",
    value: function () {
      var _setLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.heimdall('set_localstorage', payload);
                this.heimdall('get_response');
                _context3.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setLocalStorage(_x3) {
        return _setLocalStorage.apply(this, arguments);
      }

      return setLocalStorage;
    }()
  }, {
    key: "deleteLocalStorage",
    value: function () {
      var _deleteLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.heimdall('delete_localstorage', payload);
                this.heimdall('get_response');
                _context4.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteLocalStorage(_x4) {
        return _deleteLocalStorage.apply(this, arguments);
      }

      return deleteLocalStorage;
    }()
  }, {
    key: "getCookie",
    value: function () {
      var _getCookie = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.heimdall('get_cookie', payload);
                this.heimdall('get_response');
                _context5.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCookie(_x5) {
        return _getCookie.apply(this, arguments);
      }

      return getCookie;
    }()
  }, {
    key: "setCookie",
    value: function () {
      var _setCookie = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(name, value, day) {
        var payload;
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                payload = [name, value, day];
                this.heimdall('set_cookie', payload);
                this.heimdall('get_response');
                _context6.next = 5;
                return this.bifrostResponse;

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function setCookie(_x6, _x7, _x8) {
        return _setCookie.apply(this, arguments);
      }

      return setCookie;
    }()
  }, {
    key: "runExpression",
    value: function () {
      var _runExpression = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.heimdall('run_eval', payload);
                this.heimdall('get_response');
                _context7.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function runExpression(_x9) {
        return _runExpression.apply(this, arguments);
      }

      return runExpression;
    }()
  }, {
    key: "domManipulationById",
    value: function () {
      var _domManipulationById = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(Id, styleObj) {
        var payload;
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                payload = [Id, styleObj];
                this.heimdall('dom_manipulation_id', payload);
                this.heimdall('get_response');
                _context8.next = 5;
                return this.bifrostResponse;

              case 5:
                return _context8.abrupt("return", _context8.sent);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function domManipulationById(_x10, _x11) {
        return _domManipulationById.apply(this, arguments);
      }

      return domManipulationById;
    }()
  }, {
    key: "domManipulationByClass",
    value: function () {
      var _domManipulationByClass = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(Class, index, styleObj) {
        var payload;
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                payload = [Class, index, styleObj];
                this.heimdall('dom_manipulation_class', payload);
                this.heimdall('get_response');
                _context9.next = 5;
                return this.bifrostResponse;

              case 5:
                return _context9.abrupt("return", _context9.sent);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function domManipulationByClass(_x12, _x13, _x14) {
        return _domManipulationByClass.apply(this, arguments);
      }

      return domManipulationByClass;
    }()
  }, {
    key: "requestMessageThread",
    value: function () {
      var _requestMessageThread = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.heimdall('start_message_thread', payload);

                if (!this.socketListner) {
                  _context10.next = 3;
                  break;
                }

                return _context10.abrupt("return", true);

              case 3:
                return _context10.abrupt("return", false);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function requestMessageThread(_x15) {
        return _requestMessageThread.apply(this, arguments);
      }

      return requestMessageThread;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(payload) {
        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.heimdall('bifrost_socket_send_message', payload);
                this.heimdall('get_response');
                _context11.next = 4;
                return this.bifrostResponse;

              case 4:
                return _context11.abrupt("return", _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function send(_x16) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "askForStorageAccess",
    value: function () {
      var _askForStorageAccess = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
        var _this2 = this;

        return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (document.hasStorageAccess != null) {
                  console.debug("[BIFROST ".concat(window.location.origin, "] Storage access needed in this browser. Checking access..."));
                  document.hasStorageAccess().then(function (result) {
                    if (!result) {
                      console.warn("[BIFROST ".concat(window.location.origin, "] Storage unavailable. Requesting access..."));
                      document.requestStorageAccess().then(function () {
                        console.debug("[BIFROST ".concat(window.location.origin, "] Storage access granted. We can continue."));
                        _this2.storageAccess = true;

                        if (_this2.postponeStorageAccess != null) {
                          console.debug("[BIFROST ".concat(window.location.origin, "] Sending postponed storage response."));
                          console.debug(_this2.postponeStorageAccess);

                          _this2.postbackLocalstorage(_this2.postponeStorageAccess);

                          _this2.postponeStorageAccess = null;
                        } else {
                          console.debug("[BIFROST ".concat(window.location.origin, "] Access granted, but no postponed storage response."));
                        }
                      })["catch"](function () {
                        console.error("[BIFROST ".concat(window.location.origin, "] Storage access rejected. We need user input."));

                        if (_this2.onStorageAccessFailure != null) {
                          _this2.onStorageAccessFailure();
                        }

                        _this2.storageAccess = false;
                      });
                    } else {
                      console.debug("[BIFROST ".concat(window.location.origin, "] Storage available. We can continue."));
                      _this2.storageAccess = true;

                      if (_this2.postponeStorageAccess != null) {
                        console.debug("[BIFROST ".concat(window.location.origin, "] Sending postponed storage response."));

                        _this2.postbackLocalstorage(_this2.postponeStorageAccess);

                        _this2.postponeStorageAccess = null;
                      } else {
                        console.debug("[BIFROST ".concat(window.location.origin, "] NULL postponed storage response."));
                      }
                    }
                  });
                } else {
                  console.debug("[BIFROST ".concat(window.location.origin, "] Storage access not needed in this browser. We can continue."));
                  this.storageAccess = true;
                }

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function askForStorageAccess() {
        return _askForStorageAccess.apply(this, arguments);
      }

      return askForStorageAccess;
    }() //=============================={ + H E I M D A L L + }===================================

  }, {
    key: "heimdall",
    value: function heimdall(event, payload) {
      switch (event) {
        case 'get_response':
          this.promiseConstructor('bifrost-response');
          break;

        case 'get_localstorage':
          this.bifrostBridge('request-get-localstorage', payload);
          break;

        case 'set_localstorage':
          this.bifrostBridge('request-set-localstorage', payload);
          break;

        case 'delete_localstorage':
          this.bifrostBridge('request-delete-localstorage', payload);
          break;

        case 'get_cookie':
          this.bifrostBridge('request-get-cookie', payload);
          break;

        case 'set_cookie':
          this.bifrostBridge('request-set-cookie', payload);
          break;

        case 'run_eval':
          this.bifrostBridge('request-run-eval', payload);
          break;

        case 'dom_manipulation_id':
          this.bifrostBridge('request-dom-manipulation-id', payload);
          break;

        case 'dom_manipulation_class':
          this.bifrostBridge('request-dom-manipulation-class', payload);
          break;

        case 'postback_get_localstorage':
          this.postbackLocalstorage(payload);
          break;

        case 'postback_set_localstorage':
          this.postbackSetLocalstorage(payload);
          break;

        case 'postback_delete_localstorage':
          this.postbackDeleteLocalstorage(payload);
          break;

        case 'postback_get_cookie':
          this.postbackGetCookie(payload);
          break;

        case 'postback_set_cookie':
          this.postbackSetCookie(payload);
          break;

        case 'postback_run_eval':
          this.postbackRunEval(payload);
          break;

        case 'postback_dom_manipulation_id':
          this.postbackDomManipulationId(payload);
          break;

        case 'postback_dom_manipulation_class':
          this.postbackDomManipulationClass(payload);
          break;

        case 'start_message_thread':
          this.startMessageThread(payload);
          break;

        case 'bifrost_socket_send_message':
          this.handleSocketMessage(payload);
          break;
      }
    }
  }]);

  return BifrostCors;
}(); // ====================================={+ F U N C T I O N S +} =========================================


function bifrostBridge(event, payload) {
  var postback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var message = {
    type: event,
    value: payload
  };

  if (postback) {
    window.parent.postMessage(message, '*');
  } else {
    this.midgard && this.midgard.contentWindow.postMessage(message, '*');
  }
}

function promiseConstructor(promiseType) {
  var _this3 = this;

  this.bifrostResponse = new Promise(function (resolve, reject) {
    window.addEventListener('message', function (e) {
      if (e.origin === _this3.address.origin) {
        if (e.data.type && e.data.type === promiseType) {
          resolve(e.data.value);
        }
      }
    });
  });
  return this.bifrostResponse;
}

function postbackLocalstorage(payload) {
  if (this.storageAccess) {
    if (typeof payload === 'object') {
      var data = [];
      payload.map(function (key) {
        data.push(localStorage.getItem(key));
      });
      this.bifrostBridge('bifrost-response', data, true);
    } else {
      var _data = localStorage.getItem(payload);

      this.bifrostBridge('bifrost-response', _data, true);
    }

    this.onStorageAccessSuccess(payload);
  } else {
    this.postponeStorageAccess = payload;
  }
}

function postbackSetLocalstorage(payload) {
  localStorage.setItem(payload['key'], payload['value']);

  if (localStorage.getItem(payload['key'])) {
    this.bifrostBridge('bifrost-response', true, true);
  } else {
    this.bifrostBridge('bifrost-response', true, true);
  }
}

function postbackDeleteLocalstorage(payload) {
  if (typeof payload === 'object') {
    payload.map(function (key) {
      localStorage.removeItem(key);
    });
    this.bifrostBridge('bifrost-response', true, true);
  } else {
    localStorage.removeItem(payload);
    this.bifrostBridge('bifrost-response', true, true);
  }
}

function postbackGetCookie(payload) {
  var cookieString = document.cookie.split(';');
  var cookies = {};

  for (var i = 0; i < cookieString.length; i++) {
    var cookie = cookieString[i].split('=');
    cookies[(cookie[0] + '').trim()] = unescape(cookie[1]);
  }

  if (payload) {
    var data = cookies[payload];
    this.bifrostBridge('bifrost-response', data, true);
  } else {
    var _data2 = cookies;
    this.bifrostBridge('bifrost-response', _data2, true);
  }
}

function postbackSetCookie(payload) {
  var name = payload[0],
      value = payload[1],
      days = payload[2];
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
  this.bifrostBridge('bifrost-response', true, true);
}

function postbackRunEval(payload) {
  var data = eval(payload);
  this.bifrostBridge('bifrost-response', data, true);
}

function postbackDomManipulationId(payload) {
  var Id = payload[0];
  var styleObj = payload[1];
  var host = document.getElementById(Id).style;
  Object.keys(styleObj).map(function (item) {
    host[item] = styleObj[item];
  });
  this.bifrostBridge('bifrost-response', true, true);
}

function postbackDomManipulationClass(payload) {
  var Class = payload[0];
  var index = payload[1];
  var styleObj = payload[2];
  var host = document.getElementsByClassName(Class)[index].style;
  Object.keys(styleObj).map(function (item) {
    host[item] = styleObj[item];
  });
  this.bifrostBridge('bifrost-response', true, true);
}

function startMessageThread(payload) {
  this.socketListner = payload;
  this.bifrostBridge('bifrost-response', true, true);
}

function handleSocketMessage(payload) {
  this.bifrostBridge('bifrost-socket-message', payload, Boolean(!this.midgard));
}

/* harmony default export */ __webpack_exports__["default"] = (BifrostCors);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/clientOnly.ts":
/*!**********************************!*\
  !*** ./components/clientOnly.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCrossOrigin": function() { return /* binding */ handleCrossOrigin; },
/* harmony export */   "handleCrossOriginManual": function() { return /* binding */ handleCrossOriginManual; },
/* harmony export */   "redirectToUrl": function() { return /* binding */ redirectToUrl; }
/* harmony export */ });
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _bifrost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bifrost */ "./components/bifrost.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var IFRAME_ID = 'genshinmap-origin-bifrost';
var bifrostClient = null;
var handleCrossOrigin = /*#__PURE__*/function () {
  var _ref = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(onStorageAccessSuccess, onStorageAccessFailure) {
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (window.location.origin === 'http://localhost:3000' || window.location.origin === 'https://localhost:3000' || window.location.origin === 'http://localhost:3001' || window.location.origin === 'https://localhost:3001') {
              // We are in a local environment.
              console.log("Parent window: ".concat(document.referrer));
              bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('http://localhost:3000/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
            } else if (window.location.origin === 'https://genshinmap.github.io') {
              if (document.referrer == 'https://develop.teyvat.moe') {
                // We are in the development environment.
                bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('https://develop.teyvat.moe/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
              } else {
                // We are in the production environment.
                bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('https://teyvat.moe/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
              }
            } else {
              console.log("Unknown source domain: ".concat(window.location.origin, "."));
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleCrossOrigin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleCrossOriginManual = function handleCrossOriginManual() {
  if (bifrostClient != null) {
    bifrostClient.askForStorageAccess();
  }
};
var redirectToUrl = function redirectToUrl(url) {
  // Move to a new URL, while destroying the page history.
  window.location.replace(url);
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaWZyb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudE9ubHkudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJocmVmIiwiQmlmcm9zdENvcnMiLCJhZGRyZXNzIiwiaWZyYW1lQm9vbGVhbiIsImlmcmFtZUlEIiwib25TdG9yYWdlQWNjZXNzU3VjY2VzcyIsIm9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUiLCJiaWZyb3N0UmVzcG9uc2UiLCJVUkwiLCJzb2NrZXRMaXN0bmVyIiwiYmlmcm9zdEJyaWRnZSIsImJpbmQiLCJwcm9taXNlQ29uc3RydWN0b3IiLCJwb3N0YmFja0xvY2Fsc3RvcmFnZSIsInBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlIiwicG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UiLCJwb3N0YmFja0dldENvb2tpZSIsInBvc3RiYWNrU2V0Q29va2llIiwicG9zdGJhY2tSdW5FdmFsIiwicG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZCIsInBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MiLCJzdGFydE1lc3NhZ2VUaHJlYWQiLCJoYW5kbGVTb2NrZXRNZXNzYWdlIiwibWlkZ2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZnJtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0b3JhZ2VBY2Nlc3MiLCJwb3N0cG9uZVN0b3JhZ2VBY2Nlc3MiLCJhc2tGb3JTdG9yYWdlQWNjZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWJ1ZyIsImRhdGEiLCJ0eXBlIiwiaW5jbHVkZXMiLCJyZXF1ZXN0VHlwZSIsInJlcGxhY2UiLCJoZWltZGFsbCIsInZhbHVlIiwiZXJyb3IiLCJrZXkiLCJwYXlsb2FkIiwibmFtZSIsImRheSIsIklkIiwic3R5bGVPYmoiLCJDbGFzcyIsImluZGV4IiwiaGFzU3RvcmFnZUFjY2VzcyIsInRoZW4iLCJyZXN1bHQiLCJ3YXJuIiwicmVxdWVzdFN0b3JhZ2VBY2Nlc3MiLCJldmVudCIsInBvc3RiYWNrIiwibWVzc2FnZSIsInBhcmVudCIsInBvc3RNZXNzYWdlIiwiY29udGVudFdpbmRvdyIsInByb21pc2VUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYXAiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY29va2llU3RyaW5nIiwiY29va2llIiwic3BsaXQiLCJjb29raWVzIiwiaSIsImxlbmd0aCIsInRyaW0iLCJ1bmVzY2FwZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiZXZhbCIsImhvc3QiLCJzdHlsZSIsIk9iamVjdCIsImtleXMiLCJpdGVtIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkJvb2xlYW4iLCJJRlJBTUVfSUQiLCJiaWZyb3N0Q2xpZW50IiwiaGFuZGxlQ3Jvc3NPcmlnaW4iLCJsb2ciLCJyZWZlcnJlciIsImhhbmRsZUNyb3NzT3JpZ2luTWFudWFsIiwicmVkaXJlY3RUb1VybCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxJQUFSLG9CQUNjQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BRDlCLGtEQUM0RUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxJ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Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RFE7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvY29tcG9uZW50c19jbGllbnRPbmx5X3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5pbmZvKFxuICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gTGlicmFyeSBsb2FkZWQuIEN1cnJlbnQgZnJhbWUgVVJMOiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWBcbik7XG5jbGFzcyBCaWZyb3N0Q29ycyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFkZHJlc3MsXG4gICAgaWZyYW1lQm9vbGVhbiA9IGZhbHNlLFxuICAgIGlmcmFtZUlELFxuICAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MgPSBudWxsLFxuICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUgPSBudWxsXG4gICkge1xuICAgIHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICAgIHRoaXMuYWRkcmVzcyA9IG5ldyBVUkwoYWRkcmVzcyk7XG4gICAgdGhpcy5zb2NrZXRMaXN0bmVyO1xuXG4gICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NGYWlsdXJlID0gb25TdG9yYWdlQWNjZXNzRmFpbHVyZTtcbiAgICB0aGlzLm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MgPSBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzO1xuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT17ICsgRnVuY3Rpb24gQmluZGluZyArIH09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSA9IGJpZnJvc3RCcmlkZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb21pc2VDb25zdHJ1Y3RvciA9IHByb21pc2VDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja0xvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tTZXRMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja1NldExvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja0RlbGV0ZUxvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tHZXRDb29raWUgPSBwb3N0YmFja0dldENvb2tpZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tTZXRDb29raWUgPSBwb3N0YmFja1NldENvb2tpZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tSdW5FdmFsID0gcG9zdGJhY2tSdW5FdmFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wb3N0YmFja0RvbU1hbmlwdWxhdGlvbklkID0gcG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tEb21NYW5pcHVsYXRpb25DbGFzcyA9IHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0TWVzc2FnZVRocmVhZCA9IHN0YXJ0TWVzc2FnZVRocmVhZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU29ja2V0TWVzc2FnZSA9IGhhbmRsZVNvY2tldE1lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09eyArIE0gSSBEIEcgQSBSIEQgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBpZiAoaWZyYW1lQm9vbGVhbikge1xuICAgICAgdGhpcy5taWRnYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSUQpO1xuICAgIH1cbiAgICBpZiAoaWZyYW1lQm9vbGVhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHZhciBpZnJtO1xuICAgICAgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JpZnJvc3QtY29ycycpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzBweCcpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOiAtOTk5cHg7IGRpc3BsYXk6IG5vbmUnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmFkZHJlc3MuaHJlZik7IC8vIFVzZSB0aGUgZnVsbCBVUkwsIG5vdCBqdXN0IHRoZSBvcmlnaW4uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcm0pO1xuICAgICAgdGhpcy5taWRnYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZnJvc3QtY29ycycpO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLmFza0ZvclN0b3JhZ2VBY2Nlc3MoKTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT17ICsgQiBJIEYgUiBPIFMgVCAtIEwgSSBTIFQgTiBFIFIgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIE1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGUgb3RoZXIgc2lkZS5gKTtcbiAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5hZGRyZXNzLm9yaWdpbikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBNZXNzYWdlIHdhcyByZWNlaXZlZCBmcm9tIG91ciBkZXN0aW5hdGlvbi5gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChlLmRhdGEudHlwZS5pbmNsdWRlcygncmVxdWVzdCcpKSB7XG4gICAgICAgICAgbGV0IHJlcXVlc3RUeXBlID0gZS5kYXRhLnR5cGUucmVwbGFjZSgncmVxdWVzdCcsICdwb3N0YmFjaycpLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICAgICAgICB0aGlzLmhlaW1kYWxsKHJlcXVlc3RUeXBlLCBlLmRhdGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ2JpZnJvc3Qtc29ja2V0LW1lc3NhZ2UnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc29ja2V0TGlzdG5lcikge1xuICAgICAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldExpc3RuZXIoZS5kYXRhLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU29ja2V0IGxpc3RlbmVyIG5vdCBkZWZpbmVkLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gVW5hdXRob3JpemVkIG1lc3NhZ2UgaG9zdC4gRXhwZWN0ZWQgJyR7dGhpcy5hZGRyZXNzLm9yaWdpbn0nLCBnb3QgJHtlLm9yaWdpbn0uIElnbm9yaW5nIG1lc3NhZ2UuLi5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09eyArIEIgSSBGIFIgTyBTIFQgLSBNIEUgVCBIIE8gRCBTICsgfT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBhc3luYyBnZXRMb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X2xvY2Fsc3RvcmFnZScsIGtleSk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgc2VuZExvY2FsU3RvcmFnZShwYXlsb2FkKSB7XG4gICAgLy8gU2VuZCBsb2NhbCBzdG9yYWdlIHVucHJvbXB0ZWQuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBmaXJzdCBhdHRlbXB0IHRvIHNlbmQgZmFpbGVkLlxuICAgIHRoaXMuaGVpbWRhbGwoJ3Bvc3RiYWNrX2dldF9sb2NhbHN0b3JhZ2UnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGFzeW5jIHNldExvY2FsU3RvcmFnZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnc2V0X2xvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUxvY2FsU3RvcmFnZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnZGVsZXRlX2xvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGdldENvb2tpZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X2Nvb2tpZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5KSB7XG4gICAgbGV0IHBheWxvYWQgPSBbbmFtZSwgdmFsdWUsIGRheV07XG4gICAgdGhpcy5oZWltZGFsbCgnc2V0X2Nvb2tpZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHJ1bkV4cHJlc3Npb24ocGF5bG9hZCkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ3J1bl9ldmFsJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZG9tTWFuaXB1bGF0aW9uQnlJZChJZCwgc3R5bGVPYmopIHtcbiAgICBsZXQgcGF5bG9hZCA9IFtJZCwgc3R5bGVPYmpdO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2RvbV9tYW5pcHVsYXRpb25faWQnLCBwYXlsb2FkKTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBkb21NYW5pcHVsYXRpb25CeUNsYXNzKENsYXNzLCBpbmRleCwgc3R5bGVPYmopIHtcbiAgICBsZXQgcGF5bG9hZCA9IFtDbGFzcywgaW5kZXgsIHN0eWxlT2JqXTtcbiAgICB0aGlzLmhlaW1kYWxsKCdkb21fbWFuaXB1bGF0aW9uX2NsYXNzJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdE1lc3NhZ2VUaHJlYWQocGF5bG9hZCkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ3N0YXJ0X21lc3NhZ2VfdGhyZWFkJywgcGF5bG9hZCk7XG4gICAgaWYgKHRoaXMuc29ja2V0TGlzdG5lcikgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgc2VuZChwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnYmlmcm9zdF9zb2NrZXRfc2VuZF9tZXNzYWdlJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgYXNrRm9yU3RvcmFnZUFjY2VzcygpIHtcbiAgICBpZiAoZG9jdW1lbnQuaGFzU3RvcmFnZUFjY2VzcyAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSBhY2Nlc3MgbmVlZGVkIGluIHRoaXMgYnJvd3Nlci4gQ2hlY2tpbmcgYWNjZXNzLi4uYFxuICAgICAgKTtcbiAgICAgIGRvY3VtZW50Lmhhc1N0b3JhZ2VBY2Nlc3MoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSB1bmF2YWlsYWJsZS4gUmVxdWVzdGluZyBhY2Nlc3MuLi5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnJlcXVlc3RTdG9yYWdlQWNjZXNzKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSBhY2Nlc3MgZ3JhbnRlZC4gV2UgY2FuIGNvbnRpbnVlLmBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICAgICAgICAgICAgYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIFNlbmRpbmcgcG9zdHBvbmVkIHN0b3JhZ2UgcmVzcG9uc2UuYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2Vzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0YmFja0xvY2Fsc3RvcmFnZSh0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2Vzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZVN0b3JhZ2VBY2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gQWNjZXNzIGdyYW50ZWQsIGJ1dCBubyBwb3N0cG9uZWQgc3RvcmFnZSByZXNwb25zZS5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIFN0b3JhZ2UgYWNjZXNzIHJlamVjdGVkLiBXZSBuZWVkIHVzZXIgaW5wdXQuYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vblN0b3JhZ2VBY2Nlc3NGYWlsdXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIFN0b3JhZ2UgYXZhaWxhYmxlLiBXZSBjYW4gY29udGludWUuYCk7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5wb3N0cG9uZVN0b3JhZ2VBY2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgICAgICAgYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIFNlbmRpbmcgcG9zdHBvbmVkIHN0b3JhZ2UgcmVzcG9uc2UuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucG9zdGJhY2tMb2NhbHN0b3JhZ2UodGhpcy5wb3N0cG9uZVN0b3JhZ2VBY2Nlc3MpO1xuICAgICAgICAgICAgdGhpcy5wb3N0cG9uZVN0b3JhZ2VBY2Nlc3MgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBOVUxMIHBvc3Rwb25lZCBzdG9yYWdlIHJlc3BvbnNlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBTdG9yYWdlIGFjY2VzcyBub3QgbmVlZGVkIGluIHRoaXMgYnJvd3Nlci4gV2UgY2FuIGNvbnRpbnVlLmBcbiAgICAgICk7XG4gICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09eyArIEggRSBJIE0gRCBBIEwgTCArIH09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBoZWltZGFsbChldmVudCwgcGF5bG9hZCkge1xuICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgIGNhc2UgJ2dldF9yZXNwb25zZSc6XG4gICAgICAgIHRoaXMucHJvbWlzZUNvbnN0cnVjdG9yKCdiaWZyb3N0LXJlc3BvbnNlJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LWdldC1sb2NhbHN0b3JhZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NldF9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3Qtc2V0LWxvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVsZXRlX2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1kZWxldGUtbG9jYWxzdG9yYWdlJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LWdldC1jb29raWUnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NldF9jb29raWUnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3Qtc2V0LWNvb2tpZScsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncnVuX2V2YWwnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtcnVuLWV2YWwnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbV9tYW5pcHVsYXRpb25faWQnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtZG9tLW1hbmlwdWxhdGlvbi1pZCcsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZG9tX21hbmlwdWxhdGlvbl9jbGFzcyc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1kb20tbWFuaXB1bGF0aW9uLWNsYXNzJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19nZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0xvY2Fsc3RvcmFnZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX3NldF9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfZGVsZXRlX2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMucG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19nZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0dldENvb2tpZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX3NldF9jb29raWUnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrU2V0Q29va2llKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfcnVuX2V2YWwnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrUnVuRXZhbChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX2RvbV9tYW5pcHVsYXRpb25faWQnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uSWQocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19kb21fbWFuaXB1bGF0aW9uX2NsYXNzJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0RvbU1hbmlwdWxhdGlvbkNsYXNzKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhcnRfbWVzc2FnZV90aHJlYWQnOlxuICAgICAgICB0aGlzLnN0YXJ0TWVzc2FnZVRocmVhZChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JpZnJvc3Rfc29ja2V0X3NlbmRfbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0TWVzc2FnZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT17KyBGIFUgTiBDIFQgSSBPIE4gUyArfSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBiaWZyb3N0QnJpZGdlKGV2ZW50LCBwYXlsb2FkLCBwb3N0YmFjayA9IGZhbHNlKSB7XG4gIGxldCBtZXNzYWdlID0ge1xuICAgIHR5cGU6IGV2ZW50LFxuICAgIHZhbHVlOiBwYXlsb2FkLFxuICB9O1xuICBpZiAocG9zdGJhY2spIHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5taWRnYXJkICYmIHRoaXMubWlkZ2FyZC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvbWlzZUNvbnN0cnVjdG9yKHByb21pc2VUeXBlKSB7XG4gIHRoaXMuYmlmcm9zdFJlc3BvbnNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5hZGRyZXNzLm9yaWdpbikge1xuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgJiYgZS5kYXRhLnR5cGUgPT09IHByb21pc2VUeXBlKSB7XG4gICAgICAgICAgcmVzb2x2ZShlLmRhdGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrTG9jYWxzdG9yYWdlKHBheWxvYWQpIHtcbiAgaWYgKHRoaXMuc3RvcmFnZUFjY2Vzcykge1xuICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBkYXRhID0gW107XG4gICAgICBwYXlsb2FkLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGRhdGEucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGF5bG9hZCk7XG4gICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NTdWNjZXNzKHBheWxvYWQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzID0gcGF5bG9hZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0YmFja1NldExvY2Fsc3RvcmFnZShwYXlsb2FkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBheWxvYWRbJ2tleSddLCBwYXlsb2FkWyd2YWx1ZSddKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBheWxvYWRbJ2tleSddKSkge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRGVsZXRlTG9jYWxzdG9yYWdlKHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0Jykge1xuICAgIHBheWxvYWQubWFwKChrZXkpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocGF5bG9hZCk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tHZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIGxldCBjb29raWVzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNvb2tpZSA9IGNvb2tpZVN0cmluZ1tpXS5zcGxpdCgnPScpO1xuICAgIGNvb2tpZXNbKGNvb2tpZVswXSArICcnKS50cmltKCldID0gdW5lc2NhcGUoY29va2llWzFdKTtcbiAgfVxuICBpZiAocGF5bG9hZCkge1xuICAgIGxldCBkYXRhID0gY29va2llc1twYXlsb2FkXTtcbiAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZGF0YSA9IGNvb2tpZXM7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tTZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgbmFtZSA9IHBheWxvYWRbMF0sXG4gICAgdmFsdWUgPSBwYXlsb2FkWzFdLFxuICAgIGRheXMgPSBwYXlsb2FkWzJdO1xuICBsZXQgZXhwaXJlcyA9ICcnO1xuICBpZiAoZGF5cykge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgfVxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgKHZhbHVlIHx8ICcnKSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tSdW5FdmFsKHBheWxvYWQpIHtcbiAgbGV0IGRhdGEgPSBldmFsKHBheWxvYWQpO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZChwYXlsb2FkKSB7XG4gIGxldCBJZCA9IHBheWxvYWRbMF07XG4gIGxldCBzdHlsZU9iaiA9IHBheWxvYWRbMV07XG4gIGxldCBob3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSWQpLnN0eWxlO1xuICBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKChpdGVtKSA9PiB7XG4gICAgaG9zdFtpdGVtXSA9IHN0eWxlT2JqW2l0ZW1dO1xuICB9KTtcbiAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MocGF5bG9hZCkge1xuICBsZXQgQ2xhc3MgPSBwYXlsb2FkWzBdO1xuICBsZXQgaW5kZXggPSBwYXlsb2FkWzFdO1xuICBsZXQgc3R5bGVPYmogPSBwYXlsb2FkWzJdO1xuICBsZXQgaG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ2xhc3MpW2luZGV4XS5zdHlsZTtcbiAgT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcCgoaXRlbSkgPT4ge1xuICAgIGhvc3RbaXRlbV0gPSBzdHlsZU9ialtpdGVtXTtcbiAgfSk7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUaHJlYWQocGF5bG9hZCkge1xuICB0aGlzLnNvY2tldExpc3RuZXIgPSBwYXlsb2FkO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU29ja2V0TWVzc2FnZShwYXlsb2FkKSB7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1zb2NrZXQtbWVzc2FnZScsIHBheWxvYWQsIEJvb2xlYW4oIXRoaXMubWlkZ2FyZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCaWZyb3N0Q29ycztcbiIsImltcG9ydCBCaWZyb3N0Q29ycyBmcm9tICcuL2JpZnJvc3QnO1xuXG5jb25zdCBJRlJBTUVfSUQgPSAnZ2Vuc2hpbm1hcC1vcmlnaW4tYmlmcm9zdCc7XG5cbmxldCBiaWZyb3N0Q2xpZW50ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNyb3NzT3JpZ2luID0gYXN5bmMgKFxuICBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzOiAoKSA9PiB2b2lkLFxuICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlOiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgaWYgKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgfHxcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMSdcbiAgKSB7XG4gICAgLy8gV2UgYXJlIGluIGEgbG9jYWwgZW52aXJvbm1lbnQuXG4gICAgY29uc29sZS5sb2coYFBhcmVudCB3aW5kb3c6ICR7ZG9jdW1lbnQucmVmZXJyZXJ9YCk7XG4gICAgYmlmcm9zdENsaWVudCA9IG5ldyBCaWZyb3N0Q29ycyhcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWFwJyxcbiAgICAgIGZhbHNlLFxuICAgICAgbnVsbCxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MsXG4gICAgICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlXG4gICAgKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9nZW5zaGlubWFwLmdpdGh1Yi5pbycpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIgPT0gJ2h0dHBzOi8vZGV2ZWxvcC50ZXl2YXQubW9lJykge1xuICAgICAgLy8gV2UgYXJlIGluIHRoZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudC5cbiAgICAgIGJpZnJvc3RDbGllbnQgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgICAgICdodHRwczovL2RldmVsb3AudGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgYXJlIGluIHRoZSBwcm9kdWN0aW9uIGVudmlyb25tZW50LlxuICAgICAgYmlmcm9zdENsaWVudCA9IG5ldyBCaWZyb3N0Q29ycyhcbiAgICAgICAgJ2h0dHBzOi8vdGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYFVua25vd24gc291cmNlIGRvbWFpbjogJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS5gKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNyb3NzT3JpZ2luTWFudWFsID0gKCkgPT4ge1xuICBpZiAoYmlmcm9zdENsaWVudCAhPSBudWxsKSB7XG4gICAgYmlmcm9zdENsaWVudC5hc2tGb3JTdG9yYWdlQWNjZXNzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWRpcmVjdFRvVXJsID0gKHVybCkgPT4ge1xuICAvLyBNb3ZlIHRvIGEgbmV3IFVSTCwgd2hpbGUgZGVzdHJveWluZyB0aGUgcGFnZSBoaXN0b3J5LlxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSJdLCJzb3VyY2VSb290IjoiIn0=