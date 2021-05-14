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




console.info('[BIFROST] Library loaded. Current frame URL: ', window.location.href);

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
    this.askForStorageAccess(); //======================={ + B I F R O S T - L I S T N E R + }=========================

    window.addEventListener('message', function (e) {
      console.log('[BIFROST] Message received from the other side.');

      if (e.origin === _this.address.origin) {
        console.log('[BIFROST] Message was received from our destination.');
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
        console.warn("[BIFROST] Unauthorized message host. Expected '".concat(_this.address.origin, "', got ").concat(e.origin, ". Ignoring message..."));
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
                  console.debug('[BIFROST] Storage access needed in this browser. Checking access...');
                  document.hasStorageAccess().then(function (result) {
                    if (!result) {
                      console.warn('[BIFROST] Storage unavailable. Requesting access...');
                      document.requestStorageAccess().then(function () {
                        console.debug('[BIFROST] Storage access granted. We can continue.');
                        _this2.storageAccess = true;
                      })["catch"](function () {
                        console.error('[BIFROST] Storage access rejected. We need user input.');

                        if (_this2.onStorageAccessFailure != null) {
                          _this2.onStorageAccessFailure();
                        }

                        _this2.storageAccess = false;
                      });
                    } else {
                      console.debug('[BIFROST] Storage available. We can continue.');
                      _this2.storageAccess = true;
                    }
                  });
                } else {
                  console.warn('[BIFROST] Storage access not needed. We can continue.');
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
  if (this.onStorageAccessSuccess != null) {
    this.onStorageAccessSuccess(payload);
  }

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



var handleCrossOrigin = /*#__PURE__*/function () {
  var _ref = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(onStorageAccessSuccess, onStorageAccessFailure) {
    var bifrost;
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const bifrost = new BifrostCors('https://genshinmap.github.io');
            if (window.location.origin === 'http://localhost:3001') {
              bifrost = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('http://localhost:3000/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
            } else {
              console.log('Unexpected source domain.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaWZyb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudE9ubHkudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQmlmcm9zdENvcnMiLCJhZGRyZXNzIiwiaWZyYW1lQm9vbGVhbiIsImlmcmFtZUlEIiwib25TdG9yYWdlQWNjZXNzU3VjY2VzcyIsIm9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmUiLCJiaWZyb3N0UmVzcG9uc2UiLCJVUkwiLCJzb2NrZXRMaXN0bmVyIiwiYmlmcm9zdEJyaWRnZSIsImJpbmQiLCJwcm9taXNlQ29uc3RydWN0b3IiLCJwb3N0YmFja0xvY2Fsc3RvcmFnZSIsInBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlIiwicG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UiLCJwb3N0YmFja0dldENvb2tpZSIsInBvc3RiYWNrU2V0Q29va2llIiwicG9zdGJhY2tSdW5FdmFsIiwicG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZCIsInBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MiLCJzdGFydE1lc3NhZ2VUaHJlYWQiLCJoYW5kbGVTb2NrZXRNZXNzYWdlIiwibWlkZ2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZnJtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0b3JhZ2VBY2Nlc3MiLCJhc2tGb3JTdG9yYWdlQWNjZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2ciLCJvcmlnaW4iLCJkYXRhIiwidHlwZSIsImluY2x1ZGVzIiwicmVxdWVzdFR5cGUiLCJyZXBsYWNlIiwiaGVpbWRhbGwiLCJ2YWx1ZSIsImdyb3VwIiwiZXJyb3IiLCJncm91cEVuZCIsIndhcm4iLCJrZXkiLCJwYXlsb2FkIiwibmFtZSIsImRheSIsIklkIiwic3R5bGVPYmoiLCJDbGFzcyIsImluZGV4IiwiaGFzU3RvcmFnZUFjY2VzcyIsImRlYnVnIiwidGhlbiIsInJlc3VsdCIsInJlcXVlc3RTdG9yYWdlQWNjZXNzIiwiZXZlbnQiLCJwb3N0YmFjayIsIm1lc3NhZ2UiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsImNvbnRlbnRXaW5kb3ciLCJwcm9taXNlVHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFwIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsInNwbGl0IiwiY29va2llcyIsImkiLCJsZW5ndGgiLCJ0cmltIiwidW5lc2NhcGUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImV2YWwiLCJob3N0Iiwic3R5bGUiLCJPYmplY3QiLCJrZXlzIiwiaXRlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJCb29sZWFuIiwiaGFuZGxlQ3Jvc3NPcmlnaW4iLCJiaWZyb3N0IiwicmVkaXJlY3RUb1VybCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsK0NBQWIsRUFBOERDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBOUU7O0lBQ01DLFc7QUFDSix1QkFDRUMsT0FERixFQU1FO0FBQUE7O0FBQUEsUUFKQUMsYUFJQSx1RUFKZ0IsS0FJaEI7QUFBQSxRQUhBQyxRQUdBO0FBQUEsUUFGQUMsc0JBRUEsdUVBRnlCLElBRXpCO0FBQUEsUUFEQUMsc0JBQ0EsdUVBRHlCLElBQ3pCOztBQUFBOztBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLTCxPQUFMLEdBQWUsSUFBSU0sR0FBSixDQUFRTixPQUFSLENBQWY7QUFDQSxTQUFLTyxhQUFMO0FBRUEsU0FBS0gsc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUNBLFNBQUtELHNCQUFMLEdBQThCQSxzQkFBOUIsQ0FOQSxDQVFBOztBQUNBLFNBQUtLLGFBQUwsR0FBcUJBLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixJQUFuQixDQUFyQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBa0IsQ0FBQ0QsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBMUI7QUFDQSxTQUFLRSxvQkFBTCxHQUE0QkEsb0JBQW9CLENBQUNGLElBQXJCLENBQTBCLElBQTFCLENBQTVCO0FBQ0EsU0FBS0csdUJBQUwsR0FBK0JBLHVCQUF1QixDQUFDSCxJQUF4QixDQUE2QixJQUE3QixDQUEvQjtBQUNBLFNBQUtJLDBCQUFMLEdBQWtDQSwwQkFBMEIsQ0FBQ0osSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBbEM7QUFDQSxTQUFLSyxpQkFBTCxHQUF5QkEsaUJBQWlCLENBQUNMLElBQWxCLENBQXVCLElBQXZCLENBQXpCO0FBQ0EsU0FBS00saUJBQUwsR0FBeUJBLGlCQUFpQixDQUFDTixJQUFsQixDQUF1QixJQUF2QixDQUF6QjtBQUNBLFNBQUtPLGVBQUwsR0FBdUJBLGVBQWUsQ0FBQ1AsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdkI7QUFDQSxTQUFLUSx5QkFBTCxHQUFpQ0EseUJBQXlCLENBQUNSLElBQTFCLENBQStCLElBQS9CLENBQWpDO0FBQ0EsU0FBS1MsNEJBQUwsR0FBb0NBLDRCQUE0QixDQUFDVCxJQUE3QixDQUFrQyxJQUFsQyxDQUFwQztBQUNBLFNBQUtVLGtCQUFMLEdBQTBCQSxrQkFBa0IsQ0FBQ1YsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBMUI7QUFDQSxTQUFLVyxtQkFBTCxHQUEyQkEsbUJBQW1CLENBQUNYLElBQXBCLENBQXlCLElBQXpCLENBQTNCLENBcEJBLENBc0JBOztBQUNBLFFBQUlSLGFBQUosRUFBbUI7QUFDakIsV0FBS29CLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxjQUFULENBQXdCckIsUUFBeEIsQ0FBZjtBQUNEOztBQUNELFFBQUlELGFBQWEsS0FBSyxLQUF0QixFQUE2QjtBQUMzQixVQUFJdUIsSUFBSjtBQUNBQSxVQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFQO0FBQ0FELFVBQUksQ0FBQ0UsWUFBTCxDQUFrQixJQUFsQixFQUF3QixjQUF4QjtBQUNBRixVQUFJLENBQUNFLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBM0I7QUFDQUYsVUFBSSxDQUFDRSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLEtBQTVCO0FBQ0FGLFVBQUksQ0FBQ0UsWUFBTCxDQUFrQixPQUFsQixFQUEyQiwrQ0FBM0I7QUFDQUYsVUFBSSxDQUFDRSxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLEtBQUsxQixPQUFMLENBQWFGLElBQXRDLEVBUDJCLENBT2tCOztBQUM3Q3dCLGNBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxXQUFkLENBQTBCSixJQUExQjtBQUNBLFdBQUtILE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDRDs7QUFFRCxTQUFLTSxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsbUJBQUwsR0F2Q0EsQ0F5Q0E7O0FBRUFsQyxVQUFNLENBQUNtQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxDQUFELEVBQU87QUFDeEN0QyxhQUFPLENBQUN1QyxHQUFSLENBQVksaURBQVo7O0FBQ0EsVUFBSUQsQ0FBQyxDQUFDRSxNQUFGLEtBQWEsS0FBSSxDQUFDbEMsT0FBTCxDQUFha0MsTUFBOUIsRUFBc0M7QUFDcEN4QyxlQUFPLENBQUN1QyxHQUFSLENBQVksc0RBQVo7QUFDQXZDLGVBQU8sQ0FBQ3VDLEdBQVIsQ0FBWUQsQ0FBWjs7QUFDQSxZQUFJQSxDQUFDLENBQUNHLElBQUYsQ0FBT0MsSUFBUCxDQUFZQyxRQUFaLENBQXFCLFNBQXJCLENBQUosRUFBcUM7QUFDbkMsY0FBSUMsV0FBVyxHQUFHTixDQUFDLENBQUNHLElBQUYsQ0FBT0MsSUFBUCxDQUFZRyxPQUFaLENBQW9CLFNBQXBCLEVBQStCLFVBQS9CLEVBQTJDQSxPQUEzQyxDQUFtRCxJQUFuRCxFQUF5RCxHQUF6RCxDQUFsQjs7QUFDQSxlQUFJLENBQUNDLFFBQUwsQ0FBY0YsV0FBZCxFQUEyQk4sQ0FBQyxDQUFDRyxJQUFGLENBQU9NLEtBQWxDO0FBQ0Q7O0FBQ0QsWUFBSVQsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLElBQVAsS0FBZ0Isd0JBQXBCLEVBQThDO0FBQzVDLGNBQUksS0FBSSxDQUFDN0IsYUFBVCxFQUF3QjtBQUN0QixpQkFBSSxDQUFDQyxhQUFMLENBQW1CLGtCQUFuQixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3Qzs7QUFDQSxpQkFBSSxDQUFDRCxhQUFMLENBQW1CeUIsQ0FBQyxDQUFDRyxJQUFGLENBQU9NLEtBQTFCO0FBQ0QsV0FIRCxNQUdPO0FBQ0wvQyxtQkFBTyxDQUFDZ0QsS0FBUixDQUFjLHNCQUFkO0FBQ0FoRCxtQkFBTyxDQUFDaUQsS0FBUixDQUFjLHlDQUFkO0FBQ0FqRCxtQkFBTyxDQUFDdUMsR0FBUixDQUFZLHlEQUFaO0FBQ0F2QyxtQkFBTyxDQUFDa0QsUUFBUjtBQUNEO0FBQ0Y7QUFDRixPQWxCRCxNQWtCTztBQUNMbEQsZUFBTyxDQUFDbUQsSUFBUiwwREFDb0QsS0FBSSxDQUFDN0MsT0FBTCxDQUFha0MsTUFEakUsb0JBQ2lGRixDQUFDLENBQUNFLE1BRG5GO0FBR0Q7QUFDRixLQXpCRDtBQTBCRCxHLENBRUQ7Ozs7OztvWUFFc0JZLEc7Ozs7O0FBQ3BCLHFCQUFLTixRQUFMLENBQWMsa0JBQWQsRUFBa0NNLEdBQWxDO0FBQ0EscUJBQUtOLFFBQUwsQ0FBYyxjQUFkOzt1QkFDYSxLQUFLbkMsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzWUFHRzBDLE87Ozs7O0FBQ3JCLHFCQUFLUCxRQUFMLENBQWMsMkJBQWQsRUFBMkNPLE9BQTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FZQUdvQkEsTzs7Ozs7QUFDcEIscUJBQUtQLFFBQUwsQ0FBYyxrQkFBZCxFQUFrQ08sT0FBbEM7QUFDQSxxQkFBS1AsUUFBTCxDQUFjLGNBQWQ7O3VCQUNhLEtBQUtuQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dZQUdLMEMsTzs7Ozs7QUFDdkIscUJBQUtQLFFBQUwsQ0FBYyxxQkFBZCxFQUFxQ08sT0FBckM7QUFDQSxxQkFBS1AsUUFBTCxDQUFjLGNBQWQ7O3VCQUNhLEtBQUtuQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytYQUdKMEMsTzs7Ozs7QUFDZCxxQkFBS1AsUUFBTCxDQUFjLFlBQWQsRUFBNEJPLE9BQTVCO0FBQ0EscUJBQUtQLFFBQUwsQ0FBYyxjQUFkOzt1QkFDYSxLQUFLbkMsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrWEFHSjJDLEksRUFBTVAsSyxFQUFPUSxHOzs7Ozs7QUFDdkJGLHVCLEdBQVUsQ0FBQ0MsSUFBRCxFQUFPUCxLQUFQLEVBQWNRLEdBQWQsQztBQUNkLHFCQUFLVCxRQUFMLENBQWMsWUFBZCxFQUE0Qk8sT0FBNUI7QUFDQSxxQkFBS1AsUUFBTCxDQUFjLGNBQWQ7O3VCQUNhLEtBQUtuQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21ZQUdBMEMsTzs7Ozs7QUFDbEIscUJBQUtQLFFBQUwsQ0FBYyxVQUFkLEVBQTBCTyxPQUExQjtBQUNBLHFCQUFLUCxRQUFMLENBQWMsY0FBZDs7dUJBQ2EsS0FBS25DLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eVlBR002QyxFLEVBQUlDLFE7Ozs7OztBQUN4QkosdUIsR0FBVSxDQUFDRyxFQUFELEVBQUtDLFFBQUwsQztBQUNkLHFCQUFLWCxRQUFMLENBQWMscUJBQWQsRUFBcUNPLE9BQXJDO0FBQ0EscUJBQUtQLFFBQUwsQ0FBYyxjQUFkOzt1QkFDYSxLQUFLbkMsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0WUFHUytDLEssRUFBT0MsSyxFQUFPRixROzs7Ozs7QUFDckNKLHVCLEdBQVUsQ0FBQ0ssS0FBRCxFQUFRQyxLQUFSLEVBQWVGLFFBQWYsQztBQUNkLHFCQUFLWCxRQUFMLENBQWMsd0JBQWQsRUFBd0NPLE9BQXhDO0FBQ0EscUJBQUtQLFFBQUwsQ0FBYyxjQUFkOzt1QkFDYSxLQUFLbkMsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyWUFHTzBDLE87Ozs7O0FBQ3pCLHFCQUFLUCxRQUFMLENBQWMsc0JBQWQsRUFBc0NPLE9BQXRDOztxQkFDSSxLQUFLeEMsYTs7Ozs7bURBQXNCLEk7OzttREFDeEIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyWEFHRXdDLE87Ozs7O0FBQ1QscUJBQUtQLFFBQUwsQ0FBYyw2QkFBZCxFQUE2Q08sT0FBN0M7QUFDQSxxQkFBS1AsUUFBTCxDQUFjLGNBQWQ7O3VCQUNhLEtBQUtuQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixvQkFBSWlCLFFBQVEsQ0FBQ2dDLGdCQUFULElBQTZCLElBQWpDLEVBQXVDO0FBQ3JDNUQseUJBQU8sQ0FBQzZELEtBQVIsQ0FBYyxxRUFBZDtBQUNBakMsMEJBQVEsQ0FBQ2dDLGdCQUFULEdBQTRCRSxJQUE1QixDQUFpQyxVQUFDQyxNQUFELEVBQVk7QUFDM0Msd0JBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gvRCw2QkFBTyxDQUFDbUQsSUFBUixDQUFhLHFEQUFiO0FBQ0F2Qiw4QkFBUSxDQUNMb0Msb0JBREgsR0FFR0YsSUFGSCxDQUVRLFlBQU07QUFDVjlELCtCQUFPLENBQUM2RCxLQUFSLENBQWMsb0RBQWQ7QUFDQSw4QkFBSSxDQUFDMUIsYUFBTCxHQUFxQixJQUFyQjtBQUNELHVCQUxILFdBTVMsWUFBTTtBQUNYbkMsK0JBQU8sQ0FBQ2lELEtBQVIsQ0FBYyx3REFBZDs7QUFDQSw0QkFBSSxNQUFJLENBQUN2QyxzQkFBTCxJQUErQixJQUFuQyxFQUF5QztBQUN2QyxnQ0FBSSxDQUFDQSxzQkFBTDtBQUNEOztBQUNELDhCQUFJLENBQUN5QixhQUFMLEdBQXFCLEtBQXJCO0FBQ0QsdUJBWkg7QUFhRCxxQkFmRCxNQWVPO0FBQ0xuQyw2QkFBTyxDQUFDNkQsS0FBUixDQUFjLCtDQUFkO0FBQ0EsNEJBQUksQ0FBQzFCLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGLG1CQXBCRDtBQXFCRCxpQkF2QkQsTUF1Qk87QUFDTG5DLHlCQUFPLENBQUNtRCxJQUFSLENBQWEsdURBQWI7QUFDQSx1QkFBS2hCLGFBQUwsR0FBcUIsSUFBckI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O1FBR0g7Ozs7NkJBQ1M4QixLLEVBQU9aLE8sRUFBUztBQUN2QixjQUFRWSxLQUFSO0FBQ0UsYUFBSyxjQUFMO0FBQ0UsZUFBS2pELGtCQUFMLENBQXdCLGtCQUF4QjtBQUNBOztBQUVGLGFBQUssa0JBQUw7QUFDRSxlQUFLRixhQUFMLENBQW1CLDBCQUFuQixFQUErQ3VDLE9BQS9DO0FBQ0E7O0FBRUYsYUFBSyxrQkFBTDtBQUNFLGVBQUt2QyxhQUFMLENBQW1CLDBCQUFuQixFQUErQ3VDLE9BQS9DO0FBQ0E7O0FBRUYsYUFBSyxxQkFBTDtBQUNFLGVBQUt2QyxhQUFMLENBQW1CLDZCQUFuQixFQUFrRHVDLE9BQWxEO0FBQ0E7O0FBRUYsYUFBSyxZQUFMO0FBQ0UsZUFBS3ZDLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDdUMsT0FBekM7QUFDQTs7QUFFRixhQUFLLFlBQUw7QUFDRSxlQUFLdkMsYUFBTCxDQUFtQixvQkFBbkIsRUFBeUN1QyxPQUF6QztBQUNBOztBQUVGLGFBQUssVUFBTDtBQUNFLGVBQUt2QyxhQUFMLENBQW1CLGtCQUFuQixFQUF1Q3VDLE9BQXZDO0FBQ0E7O0FBRUYsYUFBSyxxQkFBTDtBQUNFLGVBQUt2QyxhQUFMLENBQW1CLDZCQUFuQixFQUFrRHVDLE9BQWxEO0FBQ0E7O0FBRUYsYUFBSyx3QkFBTDtBQUNFLGVBQUt2QyxhQUFMLENBQW1CLGdDQUFuQixFQUFxRHVDLE9BQXJEO0FBQ0E7O0FBRUYsYUFBSywyQkFBTDtBQUNFLGVBQUtwQyxvQkFBTCxDQUEwQm9DLE9BQTFCO0FBQ0E7O0FBRUYsYUFBSywyQkFBTDtBQUNFLGVBQUtuQyx1QkFBTCxDQUE2Qm1DLE9BQTdCO0FBQ0E7O0FBRUYsYUFBSyw4QkFBTDtBQUNFLGVBQUtsQywwQkFBTCxDQUFnQ2tDLE9BQWhDO0FBQ0E7O0FBRUYsYUFBSyxxQkFBTDtBQUNFLGVBQUtqQyxpQkFBTCxDQUF1QmlDLE9BQXZCO0FBQ0E7O0FBRUYsYUFBSyxxQkFBTDtBQUNFLGVBQUtoQyxpQkFBTCxDQUF1QmdDLE9BQXZCO0FBQ0E7O0FBRUYsYUFBSyxtQkFBTDtBQUNFLGVBQUsvQixlQUFMLENBQXFCK0IsT0FBckI7QUFDQTs7QUFFRixhQUFLLDhCQUFMO0FBQ0UsZUFBSzlCLHlCQUFMLENBQStCOEIsT0FBL0I7QUFDQTs7QUFFRixhQUFLLGlDQUFMO0FBQ0UsZUFBSzdCLDRCQUFMLENBQWtDNkIsT0FBbEM7QUFDQTs7QUFFRixhQUFLLHNCQUFMO0FBQ0UsZUFBSzVCLGtCQUFMLENBQXdCNEIsT0FBeEI7QUFDQTs7QUFFRixhQUFLLDZCQUFMO0FBQ0UsZUFBSzNCLG1CQUFMLENBQXlCMkIsT0FBekI7QUFDQTtBQTNFSjtBQTZFRDs7OztLQUdIOzs7QUFFQSxTQUFTdkMsYUFBVCxDQUF1Qm1ELEtBQXZCLEVBQThCWixPQUE5QixFQUF5RDtBQUFBLE1BQWxCYSxRQUFrQix1RUFBUCxLQUFPO0FBQ3ZELE1BQUlDLE9BQU8sR0FBRztBQUNaekIsUUFBSSxFQUFFdUIsS0FETTtBQUVabEIsU0FBSyxFQUFFTTtBQUZLLEdBQWQ7O0FBSUEsTUFBSWEsUUFBSixFQUFjO0FBQ1poRSxVQUFNLENBQUNrRSxNQUFQLENBQWNDLFdBQWQsQ0FBMEJGLE9BQTFCLEVBQW1DLEdBQW5DO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsU0FBS3hDLE9BQUwsSUFBZ0IsS0FBS0EsT0FBTCxDQUFhMkMsYUFBYixDQUEyQkQsV0FBM0IsQ0FBdUNGLE9BQXZDLEVBQWdELEdBQWhELENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTbkQsa0JBQVQsQ0FBNEJ1RCxXQUE1QixFQUF5QztBQUFBOztBQUN2QyxPQUFLNUQsZUFBTCxHQUF1QixJQUFJNkQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0RHhFLFVBQU0sQ0FBQ21DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4QyxVQUFJQSxDQUFDLENBQUNFLE1BQUYsS0FBYSxNQUFJLENBQUNsQyxPQUFMLENBQWFrQyxNQUE5QixFQUFzQztBQUNwQyxZQUFJRixDQUFDLENBQUNHLElBQUYsQ0FBT0MsSUFBUCxJQUFlSixDQUFDLENBQUNHLElBQUYsQ0FBT0MsSUFBUCxLQUFnQjZCLFdBQW5DLEVBQWdEO0FBQzlDRSxpQkFBTyxDQUFDbkMsQ0FBQyxDQUFDRyxJQUFGLENBQU9NLEtBQVIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixLQU5EO0FBT0QsR0FSc0IsQ0FBdkI7QUFTQSxTQUFPLEtBQUtwQyxlQUFaO0FBQ0Q7O0FBRUQsU0FBU00sb0JBQVQsQ0FBOEJvQyxPQUE5QixFQUF1QztBQUNyQyxNQUFJLEtBQUs1QyxzQkFBTCxJQUErQixJQUFuQyxFQUF5QztBQUN2QyxTQUFLQSxzQkFBTCxDQUE0QjRDLE9BQTVCO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPQSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFFBQUlaLElBQUksR0FBRyxFQUFYO0FBQ0FZLFdBQU8sQ0FBQ3NCLEdBQVIsQ0FBWSxVQUFDdkIsR0FBRCxFQUFTO0FBQ25CWCxVQUFJLENBQUNtQyxJQUFMLENBQVVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQjFCLEdBQXJCLENBQVY7QUFDRCxLQUZEO0FBR0EsU0FBS3RDLGFBQUwsQ0FBbUIsa0JBQW5CLEVBQXVDMkIsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRCxHQU5ELE1BTU87QUFDTCxRQUFJQSxLQUFJLEdBQUdvQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJ6QixPQUFyQixDQUFYOztBQUNBLFNBQUt2QyxhQUFMLENBQW1CLGtCQUFuQixFQUF1QzJCLEtBQXZDLEVBQTZDLElBQTdDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTdkIsdUJBQVQsQ0FBaUNtQyxPQUFqQyxFQUEwQztBQUN4Q3dCLGNBQVksQ0FBQ0UsT0FBYixDQUFxQjFCLE9BQU8sQ0FBQyxLQUFELENBQTVCLEVBQXFDQSxPQUFPLENBQUMsT0FBRCxDQUE1Qzs7QUFDQSxNQUFJd0IsWUFBWSxDQUFDQyxPQUFiLENBQXFCekIsT0FBTyxDQUFDLEtBQUQsQ0FBNUIsQ0FBSixFQUEwQztBQUN4QyxTQUFLdkMsYUFBTCxDQUFtQixrQkFBbkIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRCxHQUZELE1BRU87QUFDTCxTQUFLQSxhQUFMLENBQW1CLGtCQUFuQixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QztBQUNEO0FBQ0Y7O0FBRUQsU0FBU0ssMEJBQVQsQ0FBb0NrQyxPQUFwQyxFQUE2QztBQUMzQyxNQUFJLE9BQU9BLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLFdBQU8sQ0FBQ3NCLEdBQVIsQ0FBWSxVQUFDdkIsR0FBRCxFQUFTO0FBQ25CeUIsa0JBQVksQ0FBQ0csVUFBYixDQUF3QjVCLEdBQXhCO0FBQ0QsS0FGRDtBQUdBLFNBQUt0QyxhQUFMLENBQW1CLGtCQUFuQixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QztBQUNELEdBTEQsTUFLTztBQUNMK0QsZ0JBQVksQ0FBQ0csVUFBYixDQUF3QjNCLE9BQXhCO0FBQ0EsU0FBS3ZDLGFBQUwsQ0FBbUIsa0JBQW5CLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTTSxpQkFBVCxDQUEyQmlDLE9BQTNCLEVBQW9DO0FBQ2xDLE1BQUk0QixZQUFZLEdBQUdyRCxRQUFRLENBQUNzRCxNQUFULENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixDQUFuQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osWUFBWSxDQUFDSyxNQUFqQyxFQUF5Q0QsQ0FBQyxFQUExQyxFQUE4QztBQUM1QyxRQUFJSCxNQUFNLEdBQUdELFlBQVksQ0FBQ0ksQ0FBRCxDQUFaLENBQWdCRixLQUFoQixDQUFzQixHQUF0QixDQUFiO0FBQ0FDLFdBQU8sQ0FBQyxDQUFDRixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksRUFBYixFQUFpQkssSUFBakIsRUFBRCxDQUFQLEdBQW1DQyxRQUFRLENBQUNOLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBM0M7QUFDRDs7QUFDRCxNQUFJN0IsT0FBSixFQUFhO0FBQ1gsUUFBSVosSUFBSSxHQUFHMkMsT0FBTyxDQUFDL0IsT0FBRCxDQUFsQjtBQUNBLFNBQUt2QyxhQUFMLENBQW1CLGtCQUFuQixFQUF1QzJCLElBQXZDLEVBQTZDLElBQTdDO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsUUFBSUEsTUFBSSxHQUFHMkMsT0FBWDtBQUNBLFNBQUt0RSxhQUFMLENBQW1CLGtCQUFuQixFQUF1QzJCLE1BQXZDLEVBQTZDLElBQTdDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTcEIsaUJBQVQsQ0FBMkJnQyxPQUEzQixFQUFvQztBQUNsQyxNQUFJQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQWxCO0FBQUEsTUFDRU4sS0FBSyxHQUFHTSxPQUFPLENBQUMsQ0FBRCxDQURqQjtBQUFBLE1BRUVvQyxJQUFJLEdBQUdwQyxPQUFPLENBQUMsQ0FBRCxDQUZoQjtBQUdBLE1BQUlxQyxPQUFPLEdBQUcsRUFBZDs7QUFDQSxNQUFJRCxJQUFKLEVBQVU7QUFDUixRQUFJRSxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0FELFFBQUksQ0FBQ0UsT0FBTCxDQUFhRixJQUFJLENBQUNHLE9BQUwsS0FBaUJMLElBQUksR0FBRyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFqQixHQUFzQixJQUFwRDtBQUNBQyxXQUFPLEdBQUcsZUFBZUMsSUFBSSxDQUFDSSxXQUFMLEVBQXpCO0FBQ0Q7O0FBQ0RuRSxVQUFRLENBQUNzRCxNQUFULEdBQWtCNUIsSUFBSSxHQUFHLEdBQVAsSUFBY1AsS0FBSyxJQUFJLEVBQXZCLElBQTZCMkMsT0FBN0IsR0FBdUMsVUFBekQ7QUFDQSxPQUFLNUUsYUFBTCxDQUFtQixrQkFBbkIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRDs7QUFFRCxTQUFTUSxlQUFULENBQXlCK0IsT0FBekIsRUFBa0M7QUFDaEMsTUFBSVosSUFBSSxHQUFHdUQsSUFBSSxDQUFDM0MsT0FBRCxDQUFmO0FBQ0EsT0FBS3ZDLGFBQUwsQ0FBbUIsa0JBQW5CLEVBQXVDMkIsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRDs7QUFFRCxTQUFTbEIseUJBQVQsQ0FBbUM4QixPQUFuQyxFQUE0QztBQUMxQyxNQUFJRyxFQUFFLEdBQUdILE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0EsTUFBSUksUUFBUSxHQUFHSixPQUFPLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQUk0QyxJQUFJLEdBQUdyRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IyQixFQUF4QixFQUE0QjBDLEtBQXZDO0FBQ0FDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZM0MsUUFBWixFQUFzQmtCLEdBQXRCLENBQTBCLFVBQUMwQixJQUFELEVBQVU7QUFDbENKLFFBQUksQ0FBQ0ksSUFBRCxDQUFKLEdBQWE1QyxRQUFRLENBQUM0QyxJQUFELENBQXJCO0FBQ0QsR0FGRDtBQUdBLE9BQUt2RixhQUFMLENBQW1CLGtCQUFuQixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QztBQUNEOztBQUVELFNBQVNVLDRCQUFULENBQXNDNkIsT0FBdEMsRUFBK0M7QUFDN0MsTUFBSUssS0FBSyxHQUFHTCxPQUFPLENBQUMsQ0FBRCxDQUFuQjtBQUNBLE1BQUlNLEtBQUssR0FBR04sT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFDQSxNQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0EsTUFBSTRDLElBQUksR0FBR3JFLFFBQVEsQ0FBQzBFLHNCQUFULENBQWdDNUMsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDdUMsS0FBekQ7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVkzQyxRQUFaLEVBQXNCa0IsR0FBdEIsQ0FBMEIsVUFBQzBCLElBQUQsRUFBVTtBQUNsQ0osUUFBSSxDQUFDSSxJQUFELENBQUosR0FBYTVDLFFBQVEsQ0FBQzRDLElBQUQsQ0FBckI7QUFDRCxHQUZEO0FBR0EsT0FBS3ZGLGFBQUwsQ0FBbUIsa0JBQW5CLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0Q7O0FBRUQsU0FBU1csa0JBQVQsQ0FBNEI0QixPQUE1QixFQUFxQztBQUNuQyxPQUFLeEMsYUFBTCxHQUFxQndDLE9BQXJCO0FBQ0EsT0FBS3ZDLGFBQUwsQ0FBbUIsa0JBQW5CLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0Q7O0FBRUQsU0FBU1ksbUJBQVQsQ0FBNkIyQixPQUE3QixFQUFzQztBQUNwQyxPQUFLdkMsYUFBTCxDQUFtQix3QkFBbkIsRUFBNkN1QyxPQUE3QyxFQUFzRGtELE9BQU8sQ0FBQyxDQUFDLEtBQUs1RSxPQUFQLENBQTdEO0FBQ0Q7O0FBRUQsK0RBQWV0QixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcllBO0FBRU8sSUFBTW1HLGlCQUFpQjtBQUFBLG1XQUFHLGlCQUMvQi9GLHNCQUQrQixFQUUvQkMsc0JBRitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUkvQjtBQUNBLGdCQUFJUixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JxQyxNQUFoQixLQUEyQix1QkFBL0IsRUFBd0Q7QUFDaERpRSxxQkFEZ0QsR0FDdEMsSUFBSXBHLDZDQUFKLENBQ2QsMkJBRGMsRUFFZCxLQUZjLEVBR2QsSUFIYyxFQUlkSSxzQkFKYyxFQUtkQyxzQkFMYyxDQURzQztBQVF2RCxhQVJELE1BUU87QUFDTFYscUJBQU8sQ0FBQ3VDLEdBQVIsQ0FBWSwyQkFBWjtBQUNEOztBQWY4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQmlFLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2QjtBQWlCQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUNwQztBQUNBekcsUUFBTSxDQUFDQyxRQUFQLENBQWdCMEMsT0FBaEIsQ0FBd0I4RCxHQUF4QjtBQUNELENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2NvbXBvbmVudHNfY2xpZW50T25seV90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUuaW5mbygnW0JJRlJPU1RdIExpYnJhcnkgbG9hZGVkLiBDdXJyZW50IGZyYW1lIFVSTDogJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuY2xhc3MgQmlmcm9zdENvcnMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGRyZXNzLFxuICAgIGlmcmFtZUJvb2xlYW4gPSBmYWxzZSxcbiAgICBpZnJhbWVJRCxcbiAgICBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzID0gbnVsbCxcbiAgICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlID0gbnVsbFxuICApIHtcbiAgICB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgICB0aGlzLmFkZHJlc3MgPSBuZXcgVVJMKGFkZHJlc3MpO1xuICAgIHRoaXMuc29ja2V0TGlzdG5lcjtcblxuICAgIHRoaXMub25TdG9yYWdlQWNjZXNzRmFpbHVyZSA9IG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmU7XG4gICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NTdWNjZXNzID0gb25TdG9yYWdlQWNjZXNzU3VjY2VzcztcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09eyArIEZ1bmN0aW9uIEJpbmRpbmcgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB0aGlzLmJpZnJvc3RCcmlkZ2UgPSBiaWZyb3N0QnJpZGdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcm9taXNlQ29uc3RydWN0b3IgPSBwcm9taXNlQ29uc3RydWN0b3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrTG9jYWxzdG9yYWdlID0gcG9zdGJhY2tMb2NhbHN0b3JhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrU2V0TG9jYWxzdG9yYWdlID0gcG9zdGJhY2tTZXRMb2NhbHN0b3JhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrRGVsZXRlTG9jYWxzdG9yYWdlID0gcG9zdGJhY2tEZWxldGVMb2NhbHN0b3JhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrR2V0Q29va2llID0gcG9zdGJhY2tHZXRDb29raWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrU2V0Q29va2llID0gcG9zdGJhY2tTZXRDb29raWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrUnVuRXZhbCA9IHBvc3RiYWNrUnVuRXZhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZCA9IHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MgPSBwb3N0YmFja0RvbU1hbmlwdWxhdGlvbkNsYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydE1lc3NhZ2VUaHJlYWQgPSBzdGFydE1lc3NhZ2VUaHJlYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNvY2tldE1lc3NhZ2UgPSBoYW5kbGVTb2NrZXRNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PXsgKyBNIEkgRCBHIEEgUiBEICsgfT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgaWYgKGlmcmFtZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMubWlkZ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlEKTtcbiAgICB9XG4gICAgaWYgKGlmcmFtZUJvb2xlYW4gPT09IGZhbHNlKSB7XG4gICAgICB2YXIgaWZybTtcbiAgICAgIGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdpZCcsICdiaWZyb3N0LWNvcnMnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwcHgnKTtcbiAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMHB4Jyk7XG4gICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246YWJzb2x1dGU7IHRvcDogLTk5OXB4OyBkaXNwbGF5OiBub25lJyk7XG4gICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5hZGRyZXNzLmhyZWYpOyAvLyBVc2UgdGhlIGZ1bGwgVVJMLCBub3QganVzdCB0aGUgb3JpZ2luLlxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJtKTtcbiAgICAgIHRoaXMubWlkZ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWZyb3N0LWNvcnMnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmFza0ZvclN0b3JhZ2VBY2Nlc3MoKTtcblxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT17ICsgQiBJIEYgUiBPIFMgVCAtIEwgSSBTIFQgTiBFIFIgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1tCSUZST1NUXSBNZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhlIG90aGVyIHNpZGUuJyk7XG4gICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuYWRkcmVzcy5vcmlnaW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tCSUZST1NUXSBNZXNzYWdlIHdhcyByZWNlaXZlZCBmcm9tIG91ciBkZXN0aW5hdGlvbi4nKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGlmIChlLmRhdGEudHlwZS5pbmNsdWRlcygncmVxdWVzdCcpKSB7XG4gICAgICAgICAgbGV0IHJlcXVlc3RUeXBlID0gZS5kYXRhLnR5cGUucmVwbGFjZSgncmVxdWVzdCcsICdwb3N0YmFjaycpLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICAgICAgICB0aGlzLmhlaW1kYWxsKHJlcXVlc3RUeXBlLCBlLmRhdGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ2JpZnJvc3Qtc29ja2V0LW1lc3NhZ2UnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc29ja2V0TGlzdG5lcikge1xuICAgICAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldExpc3RuZXIoZS5kYXRhLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRXJyb3IgLSBCaWZyb3N0LUNvcnMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lc3NhZ2UgVGhyZWFkIG5vdCBpbml0IC0tIEJpZnJvc3QtQ29ycycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdS5kZXZlbG9wZXIgPyBkaWcgaW50byBsaWIgYXQgbGluZSAzNyA6IFJhaXNlIGEgaXNzdWUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgW0JJRlJPU1RdIFVuYXV0aG9yaXplZCBtZXNzYWdlIGhvc3QuIEV4cGVjdGVkICcke3RoaXMuYWRkcmVzcy5vcmlnaW59JywgZ290ICR7ZS5vcmlnaW59LiBJZ25vcmluZyBtZXNzYWdlLi4uYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PXsgKyBCIEkgRiBSIE8gUyBUIC0gTSBFIFQgSCBPIEQgUyArIH09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgYXN5bmMgZ2V0TG9jYWxTdG9yYWdlKGtleSkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9sb2NhbHN0b3JhZ2UnLCBrZXkpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHNlbmRMb2NhbFN0b3JhZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ3Bvc3RiYWNrX2dldF9sb2NhbHN0b3JhZ2UnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGFzeW5jIHNldExvY2FsU3RvcmFnZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnc2V0X2xvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUxvY2FsU3RvcmFnZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnZGVsZXRlX2xvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIGdldENvb2tpZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X2Nvb2tpZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5KSB7XG4gICAgbGV0IHBheWxvYWQgPSBbbmFtZSwgdmFsdWUsIGRheV07XG4gICAgdGhpcy5oZWltZGFsbCgnc2V0X2Nvb2tpZScsIHBheWxvYWQpO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2dldF9yZXNwb25zZScpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpZnJvc3RSZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIHJ1bkV4cHJlc3Npb24ocGF5bG9hZCkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ3J1bl9ldmFsJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgZG9tTWFuaXB1bGF0aW9uQnlJZChJZCwgc3R5bGVPYmopIHtcbiAgICBsZXQgcGF5bG9hZCA9IFtJZCwgc3R5bGVPYmpdO1xuICAgIHRoaXMuaGVpbWRhbGwoJ2RvbV9tYW5pcHVsYXRpb25faWQnLCBwYXlsb2FkKTtcbiAgICB0aGlzLmhlaW1kYWxsKCdnZXRfcmVzcG9uc2UnKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5iaWZyb3N0UmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBkb21NYW5pcHVsYXRpb25CeUNsYXNzKENsYXNzLCBpbmRleCwgc3R5bGVPYmopIHtcbiAgICBsZXQgcGF5bG9hZCA9IFtDbGFzcywgaW5kZXgsIHN0eWxlT2JqXTtcbiAgICB0aGlzLmhlaW1kYWxsKCdkb21fbWFuaXB1bGF0aW9uX2NsYXNzJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdE1lc3NhZ2VUaHJlYWQocGF5bG9hZCkge1xuICAgIHRoaXMuaGVpbWRhbGwoJ3N0YXJ0X21lc3NhZ2VfdGhyZWFkJywgcGF5bG9hZCk7XG4gICAgaWYgKHRoaXMuc29ja2V0TGlzdG5lcikgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgc2VuZChwYXlsb2FkKSB7XG4gICAgdGhpcy5oZWltZGFsbCgnYmlmcm9zdF9zb2NrZXRfc2VuZF9tZXNzYWdlJywgcGF5bG9hZCk7XG4gICAgdGhpcy5oZWltZGFsbCgnZ2V0X3Jlc3BvbnNlJyk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgYXNrRm9yU3RvcmFnZUFjY2VzcygpIHtcbiAgICBpZiAoZG9jdW1lbnQuaGFzU3RvcmFnZUFjY2VzcyAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbQklGUk9TVF0gU3RvcmFnZSBhY2Nlc3MgbmVlZGVkIGluIHRoaXMgYnJvd3Nlci4gQ2hlY2tpbmcgYWNjZXNzLi4uJyk7XG4gICAgICBkb2N1bWVudC5oYXNTdG9yYWdlQWNjZXNzKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdbQklGUk9TVF0gU3RvcmFnZSB1bmF2YWlsYWJsZS4gUmVxdWVzdGluZyBhY2Nlc3MuLi4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnJlcXVlc3RTdG9yYWdlQWNjZXNzKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW0JJRlJPU1RdIFN0b3JhZ2UgYWNjZXNzIGdyYW50ZWQuIFdlIGNhbiBjb250aW51ZS4nKTtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbQklGUk9TVF0gU3RvcmFnZSBhY2Nlc3MgcmVqZWN0ZWQuIFdlIG5lZWQgdXNlciBpbnB1dC4nKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub25TdG9yYWdlQWNjZXNzRmFpbHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblN0b3JhZ2VBY2Nlc3NGYWlsdXJlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlQWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbQklGUk9TVF0gU3RvcmFnZSBhdmFpbGFibGUuIFdlIGNhbiBjb250aW51ZS4nKTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2VBY2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdbQklGUk9TVF0gU3RvcmFnZSBhY2Nlc3Mgbm90IG5lZWRlZC4gV2UgY2FuIGNvbnRpbnVlLicpO1xuICAgICAgdGhpcy5zdG9yYWdlQWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXsgKyBIIEUgSSBNIEQgQSBMIEwgKyB9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaGVpbWRhbGwoZXZlbnQsIHBheWxvYWQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICBjYXNlICdnZXRfcmVzcG9uc2UnOlxuICAgICAgICB0aGlzLnByb21pc2VDb25zdHJ1Y3RvcignYmlmcm9zdC1yZXNwb25zZScpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ2V0X2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1nZXQtbG9jYWxzdG9yYWdlJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LXNldC1sb2NhbHN0b3JhZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RlbGV0ZV9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtZGVsZXRlLWxvY2Fsc3RvcmFnZScsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ2V0X2Nvb2tpZSc6XG4gICAgICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgncmVxdWVzdC1nZXQtY29va2llJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LXNldC1jb29raWUnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3J1bl9ldmFsJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LXJ1bi1ldmFsJywgcGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkb21fbWFuaXB1bGF0aW9uX2lkJzpcbiAgICAgICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdyZXF1ZXN0LWRvbS1tYW5pcHVsYXRpb24taWQnLCBwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbV9tYW5pcHVsYXRpb25fY2xhc3MnOlxuICAgICAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ3JlcXVlc3QtZG9tLW1hbmlwdWxhdGlvbi1jbGFzcycsIHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfZ2V0X2xvY2Fsc3RvcmFnZSc6XG4gICAgICAgIHRoaXMucG9zdGJhY2tMb2NhbHN0b3JhZ2UocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19zZXRfbG9jYWxzdG9yYWdlJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja1NldExvY2Fsc3RvcmFnZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX2RlbGV0ZV9sb2NhbHN0b3JhZ2UnOlxuICAgICAgICB0aGlzLnBvc3RiYWNrRGVsZXRlTG9jYWxzdG9yYWdlKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfZ2V0X2Nvb2tpZSc6XG4gICAgICAgIHRoaXMucG9zdGJhY2tHZXRDb29raWUocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19zZXRfY29va2llJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja1NldENvb2tpZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bvc3RiYWNrX3J1bl9ldmFsJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja1J1bkV2YWwocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb3N0YmFja19kb21fbWFuaXB1bGF0aW9uX2lkJzpcbiAgICAgICAgdGhpcy5wb3N0YmFja0RvbU1hbmlwdWxhdGlvbklkKHBheWxvYWQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9zdGJhY2tfZG9tX21hbmlwdWxhdGlvbl9jbGFzcyc6XG4gICAgICAgIHRoaXMucG9zdGJhY2tEb21NYW5pcHVsYXRpb25DbGFzcyhwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXJ0X21lc3NhZ2VfdGhyZWFkJzpcbiAgICAgICAgdGhpcy5zdGFydE1lc3NhZ2VUaHJlYWQocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdiaWZyb3N0X3NvY2tldF9zZW5kX21lc3NhZ2UnOlxuICAgICAgICB0aGlzLmhhbmRsZVNvY2tldE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09eysgRiBVIE4gQyBUIEkgTyBOIFMgK30gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYmlmcm9zdEJyaWRnZShldmVudCwgcGF5bG9hZCwgcG9zdGJhY2sgPSBmYWxzZSkge1xuICBsZXQgbWVzc2FnZSA9IHtcbiAgICB0eXBlOiBldmVudCxcbiAgICB2YWx1ZTogcGF5bG9hZCxcbiAgfTtcbiAgaWYgKHBvc3RiYWNrKSB7XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWlkZ2FyZCAmJiB0aGlzLm1pZGdhcmQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb21pc2VDb25zdHJ1Y3Rvcihwcm9taXNlVHlwZSkge1xuICB0aGlzLmJpZnJvc3RSZXNwb25zZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuYWRkcmVzcy5vcmlnaW4pIHtcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlICYmIGUuZGF0YS50eXBlID09PSBwcm9taXNlVHlwZSkge1xuICAgICAgICAgIHJlc29sdmUoZS5kYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXMuYmlmcm9zdFJlc3BvbnNlO1xufVxuXG5mdW5jdGlvbiBwb3N0YmFja0xvY2Fsc3RvcmFnZShwYXlsb2FkKSB7XG4gIGlmICh0aGlzLm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MgIT0gbnVsbCkge1xuICAgIHRoaXMub25TdG9yYWdlQWNjZXNzU3VjY2VzcyhwYXlsb2FkKTtcbiAgfVxuICBpZiAodHlwZW9mIHBheWxvYWQgPT09ICdvYmplY3QnKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBwYXlsb2FkLm1hcCgoa2V5KSA9PiB7XG4gICAgICBkYXRhLnB1c2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgfSk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXlsb2FkKTtcbiAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0YmFja1NldExvY2Fsc3RvcmFnZShwYXlsb2FkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBheWxvYWRbJ2tleSddLCBwYXlsb2FkWyd2YWx1ZSddKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBheWxvYWRbJ2tleSddKSkge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRGVsZXRlTG9jYWxzdG9yYWdlKHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0Jykge1xuICAgIHBheWxvYWQubWFwKChrZXkpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocGF5bG9hZCk7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tHZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gIGxldCBjb29raWVzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNvb2tpZSA9IGNvb2tpZVN0cmluZ1tpXS5zcGxpdCgnPScpO1xuICAgIGNvb2tpZXNbKGNvb2tpZVswXSArICcnKS50cmltKCldID0gdW5lc2NhcGUoY29va2llWzFdKTtcbiAgfVxuICBpZiAocGF5bG9hZCkge1xuICAgIGxldCBkYXRhID0gY29va2llc1twYXlsb2FkXTtcbiAgICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZGF0YSA9IGNvb2tpZXM7XG4gICAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgZGF0YSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tTZXRDb29raWUocGF5bG9hZCkge1xuICBsZXQgbmFtZSA9IHBheWxvYWRbMF0sXG4gICAgdmFsdWUgPSBwYXlsb2FkWzFdLFxuICAgIGRheXMgPSBwYXlsb2FkWzJdO1xuICBsZXQgZXhwaXJlcyA9ICcnO1xuICBpZiAoZGF5cykge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgfVxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgKHZhbHVlIHx8ICcnKSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tSdW5FdmFsKHBheWxvYWQpIHtcbiAgbGV0IGRhdGEgPSBldmFsKHBheWxvYWQpO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCBkYXRhLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcG9zdGJhY2tEb21NYW5pcHVsYXRpb25JZChwYXlsb2FkKSB7XG4gIGxldCBJZCA9IHBheWxvYWRbMF07XG4gIGxldCBzdHlsZU9iaiA9IHBheWxvYWRbMV07XG4gIGxldCBob3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSWQpLnN0eWxlO1xuICBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKChpdGVtKSA9PiB7XG4gICAgaG9zdFtpdGVtXSA9IHN0eWxlT2JqW2l0ZW1dO1xuICB9KTtcbiAgdGhpcy5iaWZyb3N0QnJpZGdlKCdiaWZyb3N0LXJlc3BvbnNlJywgdHJ1ZSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RiYWNrRG9tTWFuaXB1bGF0aW9uQ2xhc3MocGF5bG9hZCkge1xuICBsZXQgQ2xhc3MgPSBwYXlsb2FkWzBdO1xuICBsZXQgaW5kZXggPSBwYXlsb2FkWzFdO1xuICBsZXQgc3R5bGVPYmogPSBwYXlsb2FkWzJdO1xuICBsZXQgaG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ2xhc3MpW2luZGV4XS5zdHlsZTtcbiAgT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcCgoaXRlbSkgPT4ge1xuICAgIGhvc3RbaXRlbV0gPSBzdHlsZU9ialtpdGVtXTtcbiAgfSk7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1yZXNwb25zZScsIHRydWUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydE1lc3NhZ2VUaHJlYWQocGF5bG9hZCkge1xuICB0aGlzLnNvY2tldExpc3RuZXIgPSBwYXlsb2FkO1xuICB0aGlzLmJpZnJvc3RCcmlkZ2UoJ2JpZnJvc3QtcmVzcG9uc2UnLCB0cnVlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU29ja2V0TWVzc2FnZShwYXlsb2FkKSB7XG4gIHRoaXMuYmlmcm9zdEJyaWRnZSgnYmlmcm9zdC1zb2NrZXQtbWVzc2FnZScsIHBheWxvYWQsIEJvb2xlYW4oIXRoaXMubWlkZ2FyZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCaWZyb3N0Q29ycztcbiIsImltcG9ydCBCaWZyb3N0Q29ycyBmcm9tICcuL2JpZnJvc3QnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ3Jvc3NPcmlnaW4gPSBhc3luYyAoXG4gIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmU6ICgpID0+IHZvaWRcbikgPT4ge1xuICAvLyBjb25zdCBiaWZyb3N0ID0gbmV3IEJpZnJvc3RDb3JzKCdodHRwczovL2dlbnNoaW5tYXAuZ2l0aHViLmlvJyk7XG4gIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJykge1xuICAgIGNvbnN0IGJpZnJvc3QgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21hcCcsXG4gICAgICBmYWxzZSxcbiAgICAgIG51bGwsXG4gICAgICBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzLFxuICAgICAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgc291cmNlIGRvbWFpbi4nKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCByZWRpcmVjdFRvVXJsID0gKHVybCkgPT4ge1xuICAvLyBNb3ZlIHRvIGEgbmV3IFVSTCwgd2hpbGUgZGVzdHJveWluZyB0aGUgcGFnZSBoaXN0b3J5LlxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSJdLCJzb3VyY2VSb290IjoiIn0=