(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[262],{

/***/ 8266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2447);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4047);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2700);




console.info("[BIFROST ".concat(window.location.origin, "] Library loaded. Current frame URL: ").concat(window.location.href));

var BifrostCors = /*#__PURE__*/function () {
  function BifrostCors(address) {
    var _this = this;

    var iframeBoolean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var iframeID = arguments.length > 2 ? arguments[2] : undefined;
    var onStorageAccessSuccess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var onStorageAccessFailure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(this, BifrostCors);

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


  (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(BifrostCors, [{
    key: "getLocalStorage",
    value: function () {
      var _getLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(key) {
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
      var _sendLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(payload) {
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
      var _setLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(payload) {
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
      var _deleteLocalStorage = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(payload) {
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
      var _getCookie = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(payload) {
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
      var _setCookie = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(name, value, day) {
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
      var _runExpression = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(payload) {
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
      var _domManipulationById = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(Id, styleObj) {
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
      var _domManipulationByClass = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(Class, index, styleObj) {
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
      var _requestMessageThread = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(payload) {
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
      var _send = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(payload) {
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
      var _askForStorageAccess = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
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

/* harmony default export */ __webpack_exports__["Z"] = (BifrostCors);

/***/ }),

/***/ 1262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCrossOrigin": function() { return /* binding */ handleCrossOrigin; },
/* harmony export */   "handleCrossOriginManual": function() { return /* binding */ handleCrossOriginManual; },
/* harmony export */   "redirectToUrl": function() { return /* binding */ redirectToUrl; }
/* harmony export */ });
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2447);
/* harmony import */ var _bifrost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8266);



var IFRAME_ID = 'genshinmap-origin-bifrost';
var bifrostClient = null;
var handleCrossOrigin = /*#__PURE__*/function () {
  var _ref = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(onStorageAccessSuccess, onStorageAccessFailure) {
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (window.location.origin === 'http://localhost:3001') {
              bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z('http://localhost:3000/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
            } else if (window.location.origin === 'https://genshinmap.github.io') {
              bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z('https://develop.teyvat.moe/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
            } else {
              console.log("Unexpected source domain.");
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
    console.log('bifrostClient retrieved!');
    bifrostClient.askForStorageAccess();
  } else {
    console.log('bifrostClient was not retained.');
  }
};
var redirectToUrl = function redirectToUrl(url) {
  // Move to a new URL, while destroying the page history.
  window.location.replace(url);
};

/***/ }),

/***/ 4047:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2700:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
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