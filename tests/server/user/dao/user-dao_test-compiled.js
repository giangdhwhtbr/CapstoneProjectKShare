"use strict";

var mongoose = require('mongoose');
var userDAO = require(process.cwd() + '/server/api/user/dao/user-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('userDAO', function () {
  before(function () {
    setupMongoose(mongoose);
  });

  afterEach(function () {
    userDAO.remove();
  });

  describe('getAll', function () {});

  describe('createNew', function () {});

  describe('removeById', function () {});
});

//# sourceMappingURL=user-dao_test-compiled.script.map
