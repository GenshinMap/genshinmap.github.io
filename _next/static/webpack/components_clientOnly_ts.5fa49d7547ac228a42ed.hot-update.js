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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRPbmx5LnRzIl0sIm5hbWVzIjpbIklGUkFNRV9JRCIsImJpZnJvc3RDbGllbnQiLCJoYW5kbGVDcm9zc09yaWdpbiIsIm9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MiLCJvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJyZWZlcnJlciIsIkJpZnJvc3RDb3JzIiwiaGFuZGxlQ3Jvc3NPcmlnaW5NYW51YWwiLCJhc2tGb3JTdG9yYWdlQWNjZXNzIiwicmVkaXJlY3RUb1VybCIsInVybCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRywyQkFBbEI7QUFFQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFFTyxJQUFNQyxpQkFBaUI7QUFBQSxtV0FBRyxpQkFDL0JDLHNCQUQrQixFQUUvQkMsc0JBRitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJL0IsZ0JBQ0VDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsdUJBQTNCLElBQ0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsd0JBRDNCLElBRUFGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsdUJBRjNCLElBR0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsS0FBMkIsd0JBSjdCLEVBS0U7QUFDQTtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLDBCQUE4QkMsUUFBUSxDQUFDQyxRQUF2QztBQUNBViwyQkFBYSxHQUFHLElBQUlXLDZDQUFKLENBQ2QsMkJBRGMsRUFFZCxLQUZjLEVBR2QsSUFIYyxFQUlkVCxzQkFKYyxFQUtkQyxzQkFMYyxDQUFoQjtBQU9ELGFBZkQsTUFlTyxJQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEtBQTJCLDhCQUEvQixFQUErRDtBQUNwRSxrQkFBSUcsUUFBUSxDQUFDQyxRQUFULElBQXFCLDRCQUF6QixFQUF1RDtBQUNyRDtBQUNBViw2QkFBYSxHQUFHLElBQUlXLDZDQUFKLENBQ2QsZ0NBRGMsRUFFZCxLQUZjLEVBR2QsSUFIYyxFQUlkVCxzQkFKYyxFQUtkQyxzQkFMYyxDQUFoQjtBQU9ELGVBVEQsTUFTTztBQUNMO0FBQ0FILDZCQUFhLEdBQUcsSUFBSVcsNkNBQUosQ0FDZCx3QkFEYyxFQUVkLEtBRmMsRUFHZCxJQUhjLEVBSWRULHNCQUpjLEVBS2RDLHNCQUxjLENBQWhCO0FBT0Q7QUFDRixhQXBCTSxNQW9CQTtBQUNMSSxxQkFBTyxDQUFDQyxHQUFSLGtDQUFzQ0osTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUF0RDtBQUNEOztBQXpDOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBakJMLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2QjtBQTRDQSxJQUFNVyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDM0MsTUFBSVosYUFBYSxJQUFJLElBQXJCLEVBQTJCO0FBQ3pCQSxpQkFBYSxDQUFDYSxtQkFBZDtBQUNEO0FBQ0YsQ0FKTTtBQU1BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3BDO0FBQ0FYLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQlcsT0FBaEIsQ0FBd0JELEdBQXhCO0FBQ0QsQ0FITSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9jb21wb25lbnRzX2NsaWVudE9ubHlfdHMuNWZhNDlkNzU0N2FjMjI4YTQyZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaWZyb3N0Q29ycyBmcm9tICcuL2JpZnJvc3QnO1xuXG5jb25zdCBJRlJBTUVfSUQgPSAnZ2Vuc2hpbm1hcC1vcmlnaW4tYmlmcm9zdCc7XG5cbmxldCBiaWZyb3N0Q2xpZW50ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNyb3NzT3JpZ2luID0gYXN5bmMgKFxuICBvblN0b3JhZ2VBY2Nlc3NTdWNjZXNzOiAoKSA9PiB2b2lkLFxuICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlOiAoKSA9PiB2b2lkXG4pID0+IHtcbiAgaWYgKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgfHxcbiAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMSdcbiAgKSB7XG4gICAgLy8gV2UgYXJlIGluIGEgbG9jYWwgZW52aXJvbm1lbnQuXG4gICAgY29uc29sZS5sb2coYFBhcmVudCB3aW5kb3c6ICR7ZG9jdW1lbnQucmVmZXJyZXJ9YCk7XG4gICAgYmlmcm9zdENsaWVudCA9IG5ldyBCaWZyb3N0Q29ycyhcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWFwJyxcbiAgICAgIGZhbHNlLFxuICAgICAgbnVsbCxcbiAgICAgIG9uU3RvcmFnZUFjY2Vzc1N1Y2Nlc3MsXG4gICAgICBvblN0b3JhZ2VBY2Nlc3NGYWlsdXJlXG4gICAgKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9nZW5zaGlubWFwLmdpdGh1Yi5pbycpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIgPT0gJ2h0dHBzOi8vZGV2ZWxvcC50ZXl2YXQubW9lJykge1xuICAgICAgLy8gV2UgYXJlIGluIHRoZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudC5cbiAgICAgIGJpZnJvc3RDbGllbnQgPSBuZXcgQmlmcm9zdENvcnMoXG4gICAgICAgICdodHRwczovL2RldmVsb3AudGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgYXJlIGluIHRoZSBwcm9kdWN0aW9uIGVudmlyb25tZW50LlxuICAgICAgYmlmcm9zdENsaWVudCA9IG5ldyBCaWZyb3N0Q29ycyhcbiAgICAgICAgJ2h0dHBzOi8vdGV5dmF0Lm1vZS9tYXAnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzU3VjY2VzcyxcbiAgICAgICAgb25TdG9yYWdlQWNjZXNzRmFpbHVyZVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYFVua25vd24gc291cmNlIGRvbWFpbjogJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS5gKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNyb3NzT3JpZ2luTWFudWFsID0gKCkgPT4ge1xuICBpZiAoYmlmcm9zdENsaWVudCAhPSBudWxsKSB7XG4gICAgYmlmcm9zdENsaWVudC5hc2tGb3JTdG9yYWdlQWNjZXNzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWRpcmVjdFRvVXJsID0gKHVybCkgPT4ge1xuICAvLyBNb3ZlIHRvIGEgbmV3IFVSTCwgd2hpbGUgZGVzdHJveWluZyB0aGUgcGFnZSBoaXN0b3J5LlxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=