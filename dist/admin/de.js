"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meters = _interopRequireDefault(require("./de/meters"));

var _registers = _interopRequireDefault(require("./de/registers"));

var _contracts = _interopRequireDefault(require("./de/contracts"));

var _persons = _interopRequireDefault(require("./de/persons"));

var _tariffs = _interopRequireDefault(require("./de/tariffs"));

var _payments = _interopRequireDefault(require("./de/payments"));

var _organizations = _interopRequireDefault(require("./de/organizations"));

var _addresses = _interopRequireDefault(require("./de/addresses"));

var _formulas = _interopRequireDefault(require("./de/formulas"));

var _bank_accounts = _interopRequireDefault(require("./de/bank_accounts"));

var _types = _interopRequireDefault(require("./de/types"));

var _readings = _interopRequireDefault(require("./de/readings"));

var _auth = _interopRequireDefault(require("./de/auth"));

var _groups = _interopRequireDefault(require("./de/groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = _extends({}, _meters.default, _registers.default, _contracts.default, _persons.default, _tariffs.default, _payments.default, _organizations.default, _addresses.default, _formulas.default, _bank_accounts.default, _types.default, _readings.default, _auth.default, _groups.default);

exports.default = _default;