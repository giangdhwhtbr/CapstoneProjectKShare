"use strict";

var mongoose = require('mongoose');
var usersDAO = require(process.cwd() + '/server/api/usersManagement/dao/users-dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

describe('usersDAO', function () {
  before(function () {
    setupMongoose(mongoose);
  });

  afterEach(function () {
    usersDAO.remove();
  });

  describe('getAll', function () {});

  describe('createNew', function () {});

  describe('removeById', function () {});
});

//# sourceMappingURL=users-dao_test-compiled.js.map