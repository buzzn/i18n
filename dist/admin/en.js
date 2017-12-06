"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meters = _interopRequireDefault(require("./en/meters"));

var _registers = _interopRequireDefault(require("./en/registers"));

var _contracts = _interopRequireDefault(require("./en/contracts"));

var _persons = _interopRequireDefault(require("./en/persons"));

var _tariffs = _interopRequireDefault(require("./en/tariffs"));

var _payments = _interopRequireDefault(require("./en/payments"));

var _organizations = _interopRequireDefault(require("./en/organizations"));

var _addresses = _interopRequireDefault(require("./en/addresses"));

var _formulas = _interopRequireDefault(require("./en/formulas"));

var _bank_accounts = _interopRequireDefault(require("./en/bank_accounts"));

var _types = _interopRequireDefault(require("./en/types"));

var _readings = _interopRequireDefault(require("./en/readings"));

var _auth = _interopRequireDefault(require("./en/auth"));

var _groups = _interopRequireDefault(require("./en/groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = _extends({}, _meters.default, _registers.default, _contracts.default, _persons.default, _tariffs.default, _payments.default, _organizations.default, _addresses.default, _formulas.default, _bank_accounts.default, _types.default, _readings.default, _auth.default, _groups.default);

exports.default = _default;