"use strict";

exports.__esModule = true;
exports.unstable_SuspenseSSR = unstable_SuspenseSSR;

var _react = _interopRequireWildcard(require("react"));

var _SSRContext = require("./internal/SSRContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function unstable_SuspenseSSR(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;
  var ssrManager = (0, _react.useContext)(_SSRContext.SSRContext);
  return ssrManager ? _react["default"].createElement(_react["default"].Fragment, null, children) : _react["default"].createElement(_react.Suspense, {
    fallback: fallback
  }, children);
}