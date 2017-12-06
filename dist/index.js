"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _en = _interopRequireDefault(require("./module_powertaker_form/en"));

var _de = _interopRequireDefault(require("./module_powertaker_form/de"));

var _en2 = _interopRequireDefault(require("./admin/en"));

var _de2 = _interopRequireDefault(require("./admin/de"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  'en-US': _extends({}, _en.default, _en2.default),
  'de-DE': _extends({}, _de.default, _de2.default)
};
exports.default = _default;