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
              console.log(window.parent.location.origin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRPbmx5LnRzIl0sIm5hbWVzIjpbIklGUkFNRV9JRCIsImJpZnJvc3RDbGllbnQiLCJoYW5kbGVDcm9zc09yaWdpbiIsIm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MiLCJvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiQmlmcm9zdENvcnMiLCJoYW5kbGVDcm9zc09yaWdpbk1hbnVhbCIsImFza0ZvclN0b3JhZ2VBY2Nlc3MiLCJyZWRpcmVjdFRvVXJsIiwidXJsIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLDJCQUFsQjtBQUVBLElBQUlDLGFBQWEsR0FBRyxJQUFwQjtBQUVPLElBQU1DLGlCQUFpQjtBQUFBLG1XQUFHLGlCQUMvQkMsc0JBRCtCLEVBRS9CQyxzQkFGK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUkvQixnQkFDRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixLQUEyQix1QkFBM0IsSUFDQUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixLQUEyQix3QkFEM0IsSUFFQUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixLQUEyQix1QkFGM0IsSUFHQUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixLQUEyQix3QkFKN0IsRUFLRTtBQUNBO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBTSxDQUFDSyxNQUFQLENBQWNKLFFBQWQsQ0FBdUJDLE1BQW5DO0FBQ0FOLDJCQUFhLEdBQUcsSUFBSVUsNkNBQUosQ0FDZCwyQkFEYyxFQUVkLEtBRmMsRUFHZCxJQUhjLEVBSWRSLHNCQUpjLEVBS2RDLHNCQUxjLENBQWhCO0FBT0QsYUFmRCxNQWVPLElBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsOEJBQS9CLEVBQStEO0FBQ3BFO0FBQ0FOLDJCQUFhLEdBQUcsSUFBSVUsNkNBQUosQ0FDZCx3QkFEYyxFQUVkLEtBRmMsRUFHZCxJQUhjLEVBSWRSLHNCQUpjLEVBS2RDLHNCQUxjLENBQWhCLENBRm9FLENBU3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsYUFoQk0sTUFnQkE7QUFDTEkscUJBQU8sQ0FBQ0MsR0FBUixrQ0FBc0NKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBdEQ7QUFDRDs7QUFyQzhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWpCTCxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsR0FBdkI7QUF3Q0EsSUFBTVUsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDLE1BQUlYLGFBQWEsSUFBSSxJQUFyQixFQUEyQjtBQUN6QkEsaUJBQWEsQ0FBQ1ksbUJBQWQ7QUFDRDtBQUNGLENBSk07QUFNQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUNwQztBQUNBVixRQUFNLENBQUNDLFFBQVAsQ0FBZ0JVLE9BQWhCLENBQXdCRCxHQUF4QjtBQUNELENBSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svY29tcG9uZW50c19jbGllbnRPbmx5X3RzLjEyZGQ1YjM2NWQyODA5YzU2ZWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmlmcm9zdENvcnMgZnJvbSAnLi9iaWZyb3N0JztcblxuY29uc3QgSUZSQU1FX0lEID0gJ2dlbnNoaW5tYXAtb3JpZ2luLWJpZnJvc3QnO1xuXG5sZXQgYmlmcm9zdENsaWVudCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDcm9zc09yaWdpbiA9IGFzeW5jIChcbiAgb25TdG9yYWdlQWNjZXNzU3VjY2VzczogKCkgPT4gdm9pZCxcbiAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZTogKCkgPT4gdm9pZFxuKSA9PiB7XG4gIGlmIChcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyB8fFxuICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2xvY2FsaG9zdDozMDAwJyB8fFxuICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDEnXG4gICkge1xuICAgIC8vIFdlIGFyZSBpbiBhIGRldmVsb3BtZW50IGVudmlyb25tZW50LlxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wYXJlbnQubG9jYXRpb24ub3JpZ2luKTtcbiAgICBiaWZyb3N0Q2xpZW50ID0gbmV3IEJpZnJvc3RDb3JzKFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYXAnLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmVcbiAgICApO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL2dlbnNoaW5tYXAuZ2l0aHViLmlvJykge1xuICAgIC8vIFdlIGFyZSBpbiB0aGUgcHJvZHVjdGlvbiBlbnZpcm9ubWVudC5cbiAgICBiaWZyb3N0Q2xpZW50ID0gbmV3IEJpZnJvc3RDb3JzKFxuICAgICAgJ2h0dHBzOi8vdGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc0ZhaWx1cmVcbiAgICApO1xuICAgIC8vIGJpZnJvc3RDbGllbnQgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgLy8gICAnaHR0cHM6Ly9kZXZlbG9wLnRleXZhdC5tb2UvbWFwJyxcbiAgICAvLyAgIGZhbHNlLFxuICAgIC8vICAgbnVsbCxcbiAgICAvLyAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MsXG4gICAgLy8gICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlXG4gICAgLy8gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgVW5rbm93biBzb3VyY2UgZG9tYWluOiAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LmApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ3Jvc3NPcmlnaW5NYW51YWwgPSAoKSA9PiB7XG4gIGlmIChiaWZyb3N0Q2xpZW50ICE9IG51bGwpIHtcbiAgICBiaWZyb3N0Q2xpZW50LmFza0ZvclN0b3JhZ2VBY2Nlc3MoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VG9VcmwgPSAodXJsKSA9PiB7XG4gIC8vIE1vdmUgdG8gYSBuZXcgVVJMLCB3aGlsZSBkZXN0cm95aW5nIHRoZSBwYWdlIGhpc3RvcnkuXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==