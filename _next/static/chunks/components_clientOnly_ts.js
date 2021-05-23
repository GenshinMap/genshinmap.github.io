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
      console.log("[BIFROST ".concat(window.location.origin, "] Message received from the other side."));

      if (e.origin === _this.address.origin) {
        console.log("[BIFROST ".concat(window.location.origin, "] Message was received from our destination."));
        console.log(e);

        if (e.data.type.includes('request')) {
          var requestType = e.data.type.replace('request', 'postback').replace(/-/g, '_');

          _this.heimdall(requestType, e.data.value);
        }

        if (e.data.type === 'bifrost-socket-message') {
          if (_this.socketListner) {
            _this.bifrostBridge('bifrost-response', true, true);

            _this.socketListner(e.data.value);
          } else {
            console.group('Error - Bifrost-Cors');
            console.error('Message Thread not init -- Bifrost-Cors');
            console.log('You.developer ? dig into lib at line 37 : Raise a issue');
            console.groupEnd();
          }
        }
      } else {
        console.warn("[BIFROST ".concat(window.location.origin, "] Unauthorized message host. Expected '").concat(_this.address.origin, "', got ").concat(e.origin, ". Ignoring message..."));
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
                          console.debug("[BIFROST ".concat(window.location.origin, "] NULL postponed storage response."));
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
                  console.warn("[BIFROST ".concat(window.location.origin, "] Storage access not needed. We can continue."));
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
/* harmony export */   "redirectToUrl": function() { return /* binding */ redirectToUrl; }
/* harmony export */ });
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _bifrost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bifrost */ "./components/bifrost.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var IFRAME_ID = 'genshinmap-origin-bifrost';
var bifrostClient = null;

var getBifrostClient = function getBifrostClient(onStorageAccessSuccess, onStorageAccessFailure) {
  if (bifrostClient != null) {
    return bifrostClient;
  }

  if (window.location.origin === 'http://localhost:3001') {
    bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('http://localhost:3000/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
    return bifrostClient;
  } else if (window.location.origin === 'https://genshinmap.github.io') {
    bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('https://develop.teyvat.moe/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
    return bifrostClient;
  } else {
    console.log("Unexpected source domain.");
    return null;
  }
};

var handleCrossOrigin = /*#__PURE__*/function () {
  var _ref = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleCrossOrigin() {
    return _ref.apply(this, arguments);
  };
}();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaWZyb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudE9ubHkudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJocmVmIiwiQmlmcm9zdENvcnMiLCJhZGRyZXNzIiwiaWZyYW1lQm9vbGVhbiIsImlmcmFtZUlEIiwib25TdG9yYWdlQWNjZXNzU3VjY2VzcyIsIm9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUiLCJiaWZyb3N0UmVzcG9uc2UiLCJVUkwiLCJzb2NrZXRMaXN0bmVyIiwiYmlmcm9zdEJyaWRnZSIsImJpbmQiLCJwcm9taXNlQ29uc3RydWN0b3IiLCJwb3N0YmFja0xvY2Fsc3RvcmFnZSIsInBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlIiwicG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UiLCJwb3N0YmFja0dldENvb2tpZSIsInBvc3RiYWNrU2V0Q29va2llIiwicG9zdGJhY2tSdW5FdmFsIiwicG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZCIsInBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MiLCJzdGFydE1lc3NhZ2VUaHJlYWQiLCJoYW5kbGVTb2NrZXRNZXNzYWdlIiwibWlkZ2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZnJtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0b3JhZ2VBY2Nlc3MiLCJwb3N0cG9uZVN0b3JhZ2VBY2Nlc3MiLCJhc2tGb3JTdG9yYWdlQWNjZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2ciLCJkYXRhIiwidHlwZSIsImluY2x1ZGVzIiwicmVxdWVzdFR5cGUiLCJyZXBsYWNlIiwiaGVpbWRhbGwiLCJ2YWx1ZSIsImdyb3VwIiwiZXJyb3IiLCJncm91cEVuZCIsIndhcm4iLCJrZXkiLCJwYXlsb2FkIiwibmFtZSIsImRheSIsIklkIiwic3R5bGVPYmoiLCJDbGFzcyIsImluZGV4IiwiaGFzU3RvcmFnZUFjY2VzcyIsImRlYnVnIiwidGhlbiIsInJlc3VsdCIsInJlcXVlc3RTdG9yYWdlQWNjZXNzIiwiZXZlbnQiLCJwb3N0YmFjayIsIm1lc3NhZ2UiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsImNvbnRlbnRXaW5kb3ciLCJwcm9taXNlVHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFwIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsInNwbGl0IiwiY29va2llcyIsImkiLCJsZW5ndGgiLCJ0cmltIiwidW5lc2NhcGUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImV2YWwiLCJob3N0Iiwic3R5bGUiLCJPYmplY3QiLCJrZXlzIiwiaXRlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJCb29sZWFuIiwiSUZSQU1FX0lEIiwiYmlmcm9zdENsaWVudCIsImdldEJpZnJvc3RDbGllbnQiLCJoYW5kbGVDcm9zc09yaWdpbiIsInJlZGlyZWN0VG9VcmwiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsSUFBUixvQkFDY0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUQ5QixrREFDNEVGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkUs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c0NvbnRlbnQiOlsiY29uc29sZS5pbmZvKFxuICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gTGlicmFyeSBsb2FkZWQuIEN1cnJlbnQgZnJhbWUgVVJMOiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWBcbik7XG5jbGFzcyBCaWZyb3N0Q29ycyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFkZHJlc3MsXG4gICAgaWZyYW1lQm9vbGVhbiA9IGZhbHNlLFxuICAgIGlmcmFtZUlELFxuICAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MgPSBudWxsLFxuICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUgPSBudWxsXG4gICkge1xuICAgIHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICAgIHRoaXMuYWRkcmVzcyA9IG5ldyBVUkwoYWRkcmVzcyk7XG4gICAgdGhpcy5zb2NrZXRMaXN0bmVyO1xuXG4gICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NGYWlsdXJlID0gb25TdG9yYWdlQWNjZXNzRmFpbHVyZTtcbiAgICB0aGlzLm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MgPSBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzO1xuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT17ICsgRnVuY3Rpb24gQmluZGluZyArIH09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSA9IGJpZnJvc3RCcmlkZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb21pc2VDb25zdHJ1Y3RvciA9IHByb21pc2VDb25zdHJ1Y3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja0xvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tTZXRMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja1NldExvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UgPSBwb3N0YmFja0RlbGV0ZUxvY2Fsc3RvcmFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tHZXRDb29raWUgPSBwb3N0YmFja0dldENvb2tpZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tTZXRDb29raWUgPSBwb3N0YmFja1NldENvb2tpZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tSdW5FdmFsID0gcG9zdGJhY2tSdW5FdmFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wb3N0YmFja0RvbU1hbmlwdWxhdGlvbklkID0gcG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tEb21NYW5pcHVsYXRpb25DbGFzcyA9IHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0TWVzc2FnZVRocmVhZCA9IHN0YXJ0TWVzc2FnZVRocmVhZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU29ja2V0TWVzc2FnZSA9IGhhbmRsZVNvY2tldE1lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09eyArIE0gSSBEIEcgQSBSIEQgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBpZiAoaWZyYW1lQm9vbGVhbikge1xuICAgICAgdGhpcy5taWRnYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSUQpO1xuICAgIH1cbiAgICBpZiAoaWZyYW1lQm9vbGVhbiA9PT0gZmFsc2UpIHtcbiAgICAgIHZhciBpZnJtO1xuICAgICAgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JpZnJvc3QtY29ycycpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzBweCcpO1xuICAgICAgaWZybS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOiAtOTk5cHg7IGRpc3BsYXk6IG5vbmUnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmFkZHJlc3MuaHJlZik7IC8vIFVzZSB0aGUgZnVsbCBVUkwsIG5vdCBqdXN0IHRoZSBvcmlnaW4uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcm0pO1xuICAgICAgdGhpcy5taWRnYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZnJvc3QtY29ycycpO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzID0gbnVsbDtcbiAgICB0aGlzLmFza0ZvclN0b3JhZ2VBY2Nlc3MoKTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT17ICsgQiBJIEYgUiBPIFMgVCAtIEwgSSBTIFQgTiBFIFIgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIE1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGUgb3RoZXIgc2lkZS5gKTtcbiAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5hZGRyZXNzLm9yaWdpbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gTWVzc2FnZSB3YXMgcmVjZWl2ZWQgZnJvbSBvdXIgZGVzdGluYXRpb24uYFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlLmluY2x1ZGVzKCdyZXF1ZXN0JykpIHtcbiAgICAgICAgICBsZXQgcmVxdWVzdFR5cGUgPSBlLmRhdGEudHlwZS5yZXBsYWNlKCdyZXF1ZXN0JywgJ3Bvc3RiYWNrJykucmVwbGFjZSgvLS9nLCAnXycpO1xuICAgICAgICAgIHRoaXMuaGVpbWRhbGwocmVxdWVzdFR5cGUsIGUuZGF0YS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnYmlmcm9zdC1zb2NrZXQtbWVzc2FnZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5zb2NrZXRMaXN0bmVyKSB7XG4gICAgICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0TGlzdG5lcihlLmRhdGEudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdFcnJvciAtIEJpZnJvc3QtQ29ycycpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVzc2FnZSBUaHJlYWQgbm90IGluaXQgLS0gQmlmcm9zdC1Db3JzJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91LmRldmVsb3BlciA/IGRpZyBpbnRvIGxpYiBhdCBsaW5lIDM3IDogUmFpc2UgYSBpc3N1ZScpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBVbmF1dGhvcml6ZWQgbWVzc2FnZSBob3N0LiBFeHBlY3RlZCAnJHt0aGlzLmFkZHJlc3Mub3JpZ2lufScsIGdvdCAke2Uub3JpZ2lufS4gSWdub3JpbmcgbWVzc2FnZS4uLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT17ICsgQiBJIEYgUiBPIFMgVCAtIE0gRSBUIEggTyBEIFMgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGFzeW5jIGdldExvY2FsU3RvcmFnZShrZXkpIHtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfbG9jYWxzdG9yYWdlJywga2V5KTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBzZW5kTG9jYWxTdG9yYWdlKHBheWxvYWQpIHtcbiAgICAvLyBTZW5kIGxvY2FsIHN0b3JhZ2UgdW5wcm9tcHRlZC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGZpcnN0IGF0dGVtcHQgdG8gc2VuZCBmYWlsZWQuXG4gICAgdGhpcy5oZWltZGFsbCgncG9zdGJhY2tfZ2V0X2xvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICB9XG5cbiAgYXN5bmMgc2V0TG9jYWxTdG9yYWdlKHBheWxvYWQpIHtcbiAgICB0aGlzLmhlaW1kYWxsKCdzZXRfbG9jYWxzdG9yYWdlJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlTG9jYWxTdG9yYWdlKHBheWxvYWQpIHtcbiAgICB0aGlzLmhlaW1kYWxsKCdkZWxldGVfbG9jYWxzdG9yYWdlJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q29va2llKHBheWxvYWQpIHtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfY29va2llJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXkpIHtcbiAgICBsZXQgcGF5bG9hZCA9IFtuYW1lLCB2YWx1ZSwgZGF5XTtcbiAgICB0aGlzLmhlaW1kYWxsKCdzZXRfY29va2llJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgcnVuRXhwcmVzc2lvbihwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgncnVuX2V2YWwnLCBwYXlsb2FkKTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBkb21NYW5pcHVsYXRpb25CeUlkKElkLCBzdHlsZU9iaikge1xuICAgIGxldCBwYXlsb2FkID0gW0lkLCBzdHlsZU9ial07XG4gICAgdGhpcy5oZWltZGFsbCgnZG9tX21hbmlwdWxhdGlvbl9pZCcsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGRvbU1hbmlwdWxhdGlvbkJ5Q2xhc3MoQ2xhc3MsIGluZGV4LCBzdHlsZU9iaikge1xuICAgIGxldCBwYXlsb2FkID0gW0NsYXNzLCBpbmRleCwgc3R5bGVPYmpdO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2RvbV9tYW5pcHVsYXRpb25fY2xhc3MnLCBwYXlsb2FkKTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0TWVzc2FnZVRocmVhZChwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnc3RhcnRfbWVzc2FnZV90aHJlYWQnLCBwYXlsb2FkKTtcbiAgICBpZiAodGhpcy5zb2NrZXRMaXN0bmVyKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhc3luYyBzZW5kKHBheWxvYWQpIHtcbiAgICB0aGlzLmhlaW1kYWxsKCdiaWZyb3N0X3NvY2tldF9zZW5kX21lc3NhZ2UnLCBwYXlsb2FkKTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBhc2tGb3JTdG9yYWdlQWNjZXNzKCkge1xuICAgIGlmIChkb2N1bWVudC5oYXNTdG9yYWdlQWNjZXNzICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBTdG9yYWdlIGFjY2VzcyBuZWVkZWQgaW4gdGhpcyBicm93c2VyLiBDaGVja2luZyBhY2Nlc3MuLi5gXG4gICAgICApO1xuICAgICAgZG9jdW1lbnQuaGFzU3RvcmFnZUFjY2VzcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBTdG9yYWdlIHVuYXZhaWxhYmxlLiBSZXF1ZXN0aW5nIGFjY2Vzcy4uLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucmVxdWVzdFN0b3JhZ2VBY2Nlc3MoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICAgICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBTdG9yYWdlIGFjY2VzcyBncmFudGVkLiBXZSBjYW4gY29udGludWUuYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAodGhpcy5wb3N0cG9uZVN0b3JhZ2VBY2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU2VuZGluZyBwb3N0cG9uZWQgc3RvcmFnZSByZXNwb25zZS5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RiYWNrTG9jYWxzdG9yYWdlKHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgIGBbQklGUk9TVCAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59XSBOVUxMIHBvc3Rwb25lZCBzdG9yYWdlIHJlc3BvbnNlLmBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSBhY2Nlc3MgcmVqZWN0ZWQuIFdlIG5lZWQgdXNlciBpbnB1dC5gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdG9yYWdlQWNjZXNzRmFpbHVyZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSBhdmFpbGFibGUuIFdlIGNhbiBjb250aW51ZS5gKTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU2VuZGluZyBwb3N0cG9uZWQgc3RvcmFnZSByZXNwb25zZS5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wb3N0YmFja0xvY2Fsc3RvcmFnZSh0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2Vzcyk7XG4gICAgICAgICAgICB0aGlzLnBvc3Rwb25lU3RvcmFnZUFjY2VzcyA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFtCSUZST1NUICR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1dIE5VTEwgcG9zdHBvbmVkIHN0b3JhZ2UgcmVzcG9uc2UuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgW0JJRlJPU1QgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufV0gU3RvcmFnZSBhY2Nlc3Mgbm90IG5lZWRlZC4gV2UgY2FuIGNvbnRpbnVlLmBcbiAgICAgICk7XG4gICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09eyArIEggRSBJIE0gRCBBIEwgTCArIH09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBoZWltZGFsbChldmVudCwgcGF5bG9hZCkge1xuICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgIGNhc2UgJ2dldF9yZXNwb25zZSc6XG4gICAgICAgIHRoaXMucHJvbWlzZUNvbnN0cnVjdG9yKCdiaWZyb3N0LXJlc3BvbnNlJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LWdldC1sb2NhbHN0b3JhZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NldF9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3Qtc2V0LWxvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVsZXRlX2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1kZWxldGUtbG9jYWxzdG9yYWdlJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LWdldC1jb29raWUnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NldF9jb29raWUnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3Qtc2V0LWNvb2tpZScsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncnVuX2V2YWwnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtcnVuLWV2YWwnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbV9tYW5pcHVsYXRpb25faWQnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtZG9tLW1hbmlwdWxhdGlvbi1pZCcsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZG9tX21hbmlwdWxhdGlvbl9jbGFzcyc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1kb20tbWFuaXB1bGF0aW9uLWNsYXNzJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19nZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0xvY2Fsc3RvcmFnZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX3NldF9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfZGVsZXRlX2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMucG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19nZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0dldENvb2tpZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX3NldF9jb29raWUnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrU2V0Q29va2llKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfcnVuX2V2YWwnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrUnVuRXZhbChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX2RvbV9tYW5pcHVsYXRpb25faWQnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uSWQocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19kb21fbWFuaXB1bGF0aW9uX2NsYXNzJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0RvbU1hbmlwdWxhdGlvbkNsYXNzKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhcnRfbWVzc2FnZV90aHJlYWQnOlxuICAgICAgICB0aGlzLnN0YXJ0TWVzc2FnZVRocmVhZChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2JpZnJvc3Rfc29ja2V0X3NlbmRfbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0TWVzc2FnZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT17KyBGIFUgTiBDIFQgSSBPIE4gUyArfSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBiaWZyb3N0QnJpZGdlKGV2ZW50LCBwYXlsb2FkLCBwb3N0YmFjayA9IGZhbHNlKSB7XG4gIGxldCBtZXNzYWdlID0ge1xuICAgIHR5cGU6IGV2ZW50LFxuICAgIHZhbHVlOiBwYXlsb2FkLFxuICB9O1xuICBpZiAocG9zdGJhY2spIHtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5taWRnYXJkICYmIHRoaXMubWlkZ2FyZC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvbWlzZUNvbnN0cnVjdG9yKHByb21pc2VUeXBlKSB7XG4gIHRoaXMuYmlmcm9zdFJlc3BvbnNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLm9yaWdpbiA9PT0gdGhpcy5hZGRyZXNzLm9yaWdpbikge1xuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgJiYgZS5kYXRhLnR5cGUgPT09IHByb21pc2VUeXBlKSB7XG4gICAgICAgICAgcmVzb2x2ZShlLmRhdGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrTG9jYWxzdG9yYWdlKHBheWxvYWQpIHtcbiAgaWYgKHRoaXMuc3RvcmFnZUFjY2Vzcykge1xuICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBkYXRhID0gW107XG4gICAgICBwYXlsb2FkLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGRhdGEucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGF5bG9hZCk7XG4gICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NTdWNjZXNzKHBheWxvYWQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucG9zdHBvbmVTdG9yYWdlQWNjZXNzID0gcGF5bG9hZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0YmFja1NldExvY2Fsc3RvcmFnZShwYXlsb2FkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBheWxvYWRbJ2tleSddLCBwYXlsb2FkWyd2YWx1ZSddKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBheWxvYWRbJ2tleSddKSkge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRGVsZXRlTG9jYWxzdG9yYWdlKHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0Jykge1xuICAgIHBheWxvYWQubWFwKChrZXkpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocGF5bG9hZCk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tHZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIGxldCBjb29raWVzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNvb2tpZSA9IGNvb2tpZVN0cmluZ1tpXS5zcGxpdCgnPScpO1xuICAgIGNvb2tpZXNbKGNvb2tpZVswXSArICcnKS50cmltKCldID0gdW5lc2NhcGUoY29va2llWzFdKTtcbiAgfVxuICBpZiAocGF5bG9hZCkge1xuICAgIGxldCBkYXRhID0gY29va2llc1twYXlsb2FkXTtcbiAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZGF0YSA9IGNvb2tpZXM7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tTZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgbmFtZSA9IHBheWxvYWRbMF0sXG4gICAgdmFsdWUgPSBwYXlsb2FkWzFdLFxuICAgIGRheXMgPSBwYXlsb2FkWzJdO1xuICBsZXQgZXhwaXJlcyA9ICcnO1xuICBpZiAoZGF5cykge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgfVxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgKHZhbHVlIHx8ICcnKSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tSdW5FdmFsKHBheWxvYWQpIHtcbiAgbGV0IGRhdGEgPSBldmFsKHBheWxvYWQpO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZChwYXlsb2FkKSB7XG4gIGxldCBJZCA9IHBheWxvYWRbMF07XG4gIGxldCBzdHlsZU9iaiA9IHBheWxvYWRbMV07XG4gIGxldCBob3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSWQpLnN0eWxlO1xuICBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKChpdGVtKSA9PiB7XG4gICAgaG9zdFtpdGVtXSA9IHN0eWxlT2JqW2l0ZW1dO1xuICB9KTtcbiAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MocGF5bG9hZCkge1xuICBsZXQgQ2xhc3MgPSBwYXlsb2FkWzBdO1xuICBsZXQgaW5kZXggPSBwYXlsb2FkWzFdO1xuICBsZXQgc3R5bGVPYmogPSBwYXlsb2FkWzJdO1xuICBsZXQgaG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ2xhc3MpW2luZGV4XS5zdHlsZTtcbiAgT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcCgoaXRlbSkgPT4ge1xuICAgIGhvc3RbaXRlbV0gPSBzdHlsZU9ialtpdGVtXTtcbiAgfSk7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUaHJlYWQocGF5bG9hZCkge1xuICB0aGlzLnNvY2tldExpc3RuZXIgPSBwYXlsb2FkO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU29ja2V0TWVzc2FnZShwYXlsb2FkKSB7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1zb2NrZXQtbWVzc2FnZScsIHBheWxvYWQsIEJvb2xlYW4oIXRoaXMubWlkZ2FyZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCaWZyb3N0Q29ycztcbiIsImltcG9ydCBCaWZyb3N0Q29ycyBmcm9tICcuL2JpZnJvc3QnO1xuXG5jb25zdCBJRlJBTUVfSUQgPSAnZ2Vuc2hpbm1hcC1vcmlnaW4tYmlmcm9zdCc7XG5cbmxldCBiaWZyb3N0Q2xpZW50ID0gbnVsbDtcblxuY29uc3QgZ2V0Qmlmcm9zdENsaWVudCA9IChcbiAgb25TdG9yYWdlQWNjZXNzU3VjY2VzczogKCkgPT4gdm9pZCxcbiAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZTogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGlmIChiaWZyb3N0Q2xpZW50ICE9IG51bGwpIHtcbiAgICByZXR1cm4gYmlmcm9zdENsaWVudDtcbiAgfVxuICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpIHtcbiAgICBiaWZyb3N0Q2xpZW50ID0gbmV3IEJpZnJvc3RDb3JzKFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYXAnLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmVcbiAgICApO1xuICAgIHJldHVybiBiaWZyb3N0Q2xpZW50O1xuICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2dlbnNoaW5tYXAuZ2l0aHViLmlvJykge1xuICAgIGJpZnJvc3RDbGllbnQgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgICAnaHR0cHM6Ly9kZXZlbG9wLnRleXZhdC5tb2UvbWFwJyxcbiAgICAgIGZhbHNlLFxuICAgICAgbnVsbCxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MsXG4gICAgICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlXG4gICAgKTtcbiAgICByZXR1cm4gYmlmcm9zdENsaWVudDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgVW5leHBlY3RlZCBzb3VyY2UgZG9tYWluLmApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ3Jvc3NPcmlnaW4gPSBhc3luYyAoKSA9PiB7fTtcbmV4cG9ydCBjb25zdCByZWRpcmVjdFRvVXJsID0gKHVybCkgPT4ge1xuICAvLyBNb3ZlIHRvIGEgbmV3IFVSTCwgd2hpbGUgZGVzdHJveWluZyB0aGUgcGFnZSBoaXN0b3J5LlxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSJdLCJzb3VyY2VSb290IjoiIn0=