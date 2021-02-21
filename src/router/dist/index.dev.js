"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _start = _interopRequireDefault(require("@/pages/start/start"));

var _index = _interopRequireDefault(require("@/pages/index/index"));

var _particulars = _interopRequireDefault(require("@/pages/particulars/particulars"));

var _search = _interopRequireDefault(require("@/pages/search/search"));

var _register = _interopRequireDefault(require("@/pages/register/register"));

var _my = _interopRequireDefault(require("@/pages/my/my"));

var _myTicket = _interopRequireDefault(require("@/pages/my/myTicket"));

var _vipRights = _interopRequireDefault(require("@/pages/my/vipRights"));

var _myInvitation = _interopRequireDefault(require("@/pages/my/myInvitation"));

var _myTutor = _interopRequireDefault(require("@/pages/my/myTutor"));

var _rests = _interopRequireDefault(require("@/pages/rests/rests"));

var _AboutUs = _interopRequireDefault(require("@/pages/rests/AboutUs"));

var _required = _interopRequireDefault(require("@/pages/rests/required"));

var _faq = _interopRequireDefault(require("@/pages/rests/faq"));

var _useRaiders = _interopRequireDefault(require("@/pages/rests/useRaiders"));

var _service = _interopRequireDefault(require("@/pages/rests/service"));

var _member = _interopRequireDefault(require("@/pages/member/member"));

var _certification = _interopRequireDefault(require("@/pages/certification/certification"));

var _share = _interopRequireDefault(require("@/pages/share/share"));

var _shareParticulars = _interopRequireDefault(require("@/pages/share/shareParticulars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'start',
    component: _start["default"]
  }, {
    path: '/index',
    name: 'index',
    component: _index["default"]
  }, {
    path: '/particulars/:list/:userId',
    name: 'particulars',
    component: _particulars["default"]
  }, {
    path: '/search',
    name: 'search',
    component: _search["default"]
  }, {
    path: '/my',
    name: 'my',
    component: _my["default"]
  }, {
    path: '/register',
    name: 'register',
    component: _register["default"]
  }, {
    path: '/rests',
    name: 'rests',
    component: _rests["default"]
  }, {
    path: "/AboutUs",
    name: "AboutUs",
    component: _AboutUs["default"]
  }, {
    path: '/required',
    name: 'required',
    component: _required["default"]
  }, {
    path: '/faq',
    name: 'faq',
    component: _faq["default"]
  }, {
    path: "/useRaiders",
    name: "useRaiders",
    component: _useRaiders["default"]
  }, {
    path: "/service",
    name: "service",
    component: _service["default"]
  }, {
    path: "/member",
    name: "member",
    component: _member["default"]
  }, {
    path: "/ticket",
    name: "ticket",
    component: _myTicket["default"]
  }, {
    path: "/vipRights",
    name: "vipRights",
    component: _vipRights["default"]
  }, {
    path: "/myInvitation",
    name: "myInvitation",
    component: _myInvitation["default"]
  }, {
    path: "/myTutor",
    name: "myTutor",
    component: _myTutor["default"]
  }, {
    path: "/certification",
    name: "certification",
    component: _certification["default"]
  }, {
    path: "/share",
    name: "share",
    component: _share["default"]
  }, {
    path: "/carnival/:list",
    name: "carnival",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/activity/carnival"));
      });
    }
  }, {
    path: "/withdraw",
    name: "withdraw",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/withdraw/withdraw"));
      });
    }
  }, {
    path: "/withdrawParticulars/:list",
    name: "withdrawParticulars",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/withdraw/particulars"));
      });
    }
  }, {
    path: "/withdrawrecord",
    name: "withdrawrecord",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/withdraw/record"));
      });
    }
  }, {
    path: "/withdrawsucceed",
    name: "withdrawsucceed",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/withdraw/succeed"));
      });
    }
  }, {
    path: "/shareParticulars/:list/:userId",
    name: "shareParticulars",
    component: _shareParticulars["default"]
  }, {
    path: "/sharePaySuccess/:introducenum/:userId",
    name: "sharePaySuccess",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/share/paySuccess"));
      });
    }
  }, {
    path: "/promotion",
    name: "promotion",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/promotion/promotion"));
      });
    }
  }, {
    path: "/myAward",
    name: "myAward",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/my/myAward"));
      });
    }
  }, {
    path: "/tutor",
    name: "tutor",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/tutor/tutor"));
      });
    }
  }, {
    path: "/avaSVa",
    name: "avaSVa",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/avaSVa"));
      });
    }
  }, {
    path: '/myFans',
    name: "myFans",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/my/myFans"));
      });
    }
  }, {
    path: '/City',
    name: "City",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/pages/city/City"));
      });
    }
  }]
});

exports["default"] = _default;