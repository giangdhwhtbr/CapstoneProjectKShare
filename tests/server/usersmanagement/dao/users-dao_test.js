"use strict";

const mongoose = require('mongoose');
const usersDAO = require(process.cwd() + '/server/api/usersManagement/dao/users-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('usersDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    usersDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
