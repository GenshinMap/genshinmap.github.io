self["webpackHotUpdate_N_E"]("components_clientOnly_ts",{

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
              // We are in a development environment.
              console.log("Parent window: ".concat(document.referrer));
              bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('http://localhost:3000/map', false, null, onStorageAccessSuccess, onStorageAccessFailure);
            } else if (window.location.origin === 'https://genshinmap.github.io') {
              // We are in the production environment.
              bifrostClient = new _bifrost__WEBPACK_IMPORTED_MODULE_2__.default('https://teyvat.moe/map', false, null, onStorageAccessSuccess, onStorageAccessFailure); // bifrostClient = new BifrostCors(
              //   'https://develop.teyvat.moe/map',
              //   false,
              //   null,
              //   onStorageAccessSuccess,
              //   onStorageAccessFailure
              // );
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRPbmx5LnRzIl0sIm5hbWVzIjpbIklGUkFNRV9JRCIsImJpZnJvc3RDbGllbnQiLCJoYW5kbGVDcm9zc09yaWdpbiIsIm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MiLCJvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJyZWZlcnJlciIsIkJpZnJvc3RDb3JzIiwiaGFuZGxlQ3Jvc3NPcmlnaW5NYW51YWwiLCJhc2tGb3JTdG9yYWdlQWNjZXNzIiwicmVkaXJlY3RUb1VybCIsInVybCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRywyQkFBbEI7QUFFQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFFTyxJQUFNQyxpQkFBaUI7QUFBQSxtV0FBRyxpQkFDL0JDLHNCQUQrQixFQUUvQkMsc0JBRitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJL0IsZ0JBQ0VDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsdUJBQTNCLElBQ0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsd0JBRDNCLElBRUFGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsdUJBRjNCLElBR0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsd0JBSjdCLEVBS0U7QUFDQTtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLDBCQUE4QkMsUUFBUSxDQUFDQyxRQUF2QztBQUNBViwyQkFBYSxHQUFHLElBQUlXLDZDQUFKLENBQ2QsMkJBRGMsRUFFZCxLQUZjLEVBR2QsSUFIYyxFQUlkVCxzQkFKYyxFQUtkQyxzQkFMYyxDQUFoQjtBQU9ELGFBZkQsTUFlTyxJQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEtBQTJCLDhCQUEvQixFQUErRDtBQUNwRTtBQUNBTiwyQkFBYSxHQUFHLElBQUlXLDZDQUFKLENBQ2Qsd0JBRGMsRUFFZCxLQUZjLEVBR2QsSUFIYyxFQUlkVCxzQkFKYyxFQUtkQyxzQkFMYyxDQUFoQixDQUZvRSxDQVNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELGFBaEJNLE1BZ0JBO0FBQ0xJLHFCQUFPLENBQUNDLEdBQVIsa0NBQXNDSixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQXREO0FBQ0Q7O0FBckM4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQkwsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCO0FBd0NBLElBQU1XLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUMzQyxNQUFJWixhQUFhLElBQUksSUFBckIsRUFBMkI7QUFDekJBLGlCQUFhLENBQUNhLG1CQUFkO0FBQ0Q7QUFDRixDQUpNO0FBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQVM7QUFDcEM7QUFDQVgsUUFBTSxDQUFDQyxRQUFQLENBQWdCVyxPQUFoQixDQUF3QkQsR0FBeEI7QUFDRCxDQUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfY2xpZW50T25seV90cy44YjFhNTYxNTZlYjdiZDNhOGViOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpZnJvc3RDb3JzIGZyb20gJy4vYmlmcm9zdCc7XG5cbmNvbnN0IElGUkFNRV9JRCA9ICdnZW5zaGlubWFwLW9yaWdpbi1iaWZyb3N0JztcblxubGV0IGJpZnJvc3RDbGllbnQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ3Jvc3NPcmlnaW4gPSBhc3luYyAoXG4gIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmU6ICgpID0+IHZvaWRcbikgPT4ge1xuICBpZiAoXG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgfHxcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCcgfHxcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyB8fFxuICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2xvY2FsaG9zdDozMDAxJ1xuICApIHtcbiAgICAvLyBXZSBhcmUgaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudC5cbiAgICBjb25zb2xlLmxvZyhgUGFyZW50IHdpbmRvdzogJHtkb2N1bWVudC5yZWZlcnJlcn1gKTtcbiAgICBiaWZyb3N0Q2xpZW50ID0gbmV3IEJpZnJvc3RDb3JzKFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYXAnLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmVcbiAgICApO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2dlbnNoaW5tYXAuZ2l0aHViLmlvJykge1xuICAgIC8vIFdlIGFyZSBpbiB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudC5cbiAgICBiaWZyb3N0Q2xpZW50ID0gbmV3IEJpZnJvc3RDb3JzKFxuICAgICAgJ2h0dHBzOi8vdGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmVcbiAgICApO1xuICAgIC8vIGJpZnJvc3RDbGllbnQgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgLy8gICAnaHR0cHM6Ly9kZXZlbG9wLnRleXZhdC5tb2UvbWFwJyxcbiAgICAvLyAgIGZhbHNlLFxuICAgIC8vICAgbnVsbCxcbiAgICAvLyAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MsXG4gICAgLy8gICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlXG4gICAgLy8gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgVW5rbm93biBzb3VyY2UgZG9tYWluOiAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LmApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ3Jvc3NPcmlnaW5NYW51YWwgPSAoKSA9PiB7XG4gIGlmIChiaWZyb3N0Q2xpZW50ICE9IG51bGwpIHtcbiAgICBiaWZyb3N0Q2xpZW50LmFza0ZvclN0b3JhZ2VBY2Nlc3MoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VG9VcmwgPSAodXJsKSA9PiB7XG4gIC8vIE1vdmUgdG8gYSBuZXcgVVJMLCB3aGlsZSBkZXN0cm95aW5nIHRoZSBwYWdlIGhpc3RvcnkuXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==