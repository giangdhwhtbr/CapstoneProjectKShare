/**
 * Created by GiangDH on 5/18/16.
 */
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var acl = require('acl');
var path = require('path');

var initPoliciesPath = function initPoliciesPath(module) {
  return './server/api/' + module + '/config/policies';
};
var userPolicies = require(path.resolve(initPoliciesPath('user')));
module.exports = function () {
  function PolicyConfig() {
    _classCallCheck(this, PolicyConfig);
  }

  _createClass(PolicyConfig, null, [{
    key: 'init',
    value: function init() {
      userPolicies.invokeRolesPolicies();
    }
  }]);

  return PolicyConfig;
}();

//# sourceMappingURL=policies.conf-compiled.js.map