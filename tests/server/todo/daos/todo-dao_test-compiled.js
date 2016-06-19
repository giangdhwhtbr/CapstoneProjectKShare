'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _todoDao = require('../../../../server/api/todo/dao/todo-dao');

var _todoDao2 = _interopRequireDefault(_todoDao);

var _chai = require('chai');

var _db = require('../../_helpers/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('todo.dao', function () {
    before(function () {
        (0, _db.setupMongoose)(_mongoose2.default);
    });

    afterEach(function () {
        _todoDao2.default.remove();
    });

    describe('getAll', function () {
        beforeEach(function (done) {
            (0, _db.createTodos)().then(function () {
                return done();
            }).catch(function () {
                return done();
            });
        });

        it('should get all todos', function (done) {
            var _onSuccess = function _onSuccess(todos) {
                (0, _chai.expect)(todos).to.be.defined;
                (0, _chai.expect)(todos[0]).to.have.property('todoMessage').and.to.equal('a0');
                (0, _chai.expect)(todos[0]).to.have.property('createdAt').and.to.be.defined;

                done();
            };

            var _onError = function _onError() {
                (0, _chai.expect)(true).to.be.false; // should not come here;
            };

            _todoDao2.default.getAll().then(_onSuccess).catch(_onError);
        });
    });

    describe('createTodo', function () {
        it('should throw an error, object passed is not defined', function (done) {
            var _undefinedTodo = undefined;

            var _onSuccess = function _onSuccess() {
                (0, _chai.expect)(true).to.be.false; // should not come here;
            };

            var _onError = function _onError(error) {
                (0, _chai.expect)(error).to.be.defined;

                done();
            };

            _todoDao2.default.createTodo(_undefinedTodo).then(_onSuccess).catch(_onError);
        });

        it('should create the todo correctly', function (done) {
            var _todo = { todoMessage: 'abc' };

            var _onSuccess = function _onSuccess(todo) {
                (0, _chai.expect)(todo).to.be.defined;
                (0, _chai.expect)(todo.todoMessage).to.equal('abc');
                (0, _chai.expect)(todo.createdAt).to.be.defined;

                done();
            };

            var _onError = function _onError() {
                (0, _chai.expect)(true).to.be.false;
            };

            _todoDao2.default.createTodo(_todo).then(_onSuccess).catch(_onError);
        });
    });

    describe('deleteTodo', function () {
        beforeEach(function (done) {
            (0, _db.createTodos)().then(function () {
                return done();
            }).catch(function () {
                return done();
            });
        });

        it('should get an error back, id is not defined', function (done) {
            var _id = null;

            var _onSuccess = function _onSuccess() {
                (0, _chai.expect)(true).to.be.false;
            };

            var _onError = function _onError(error) {
                (0, _chai.expect)(error).to.be.defined;

                done();
            };

            _todoDao2.default.deleteTodo(_id).then(_onSuccess).catch(_onError);
        });

        it('should delete the doc successfully', function (done) {
            var _id = '507c7f79bcf86cd7994f6c10';

            var _onSuccess = function _onSuccess() {
                (0, _chai.expect)(true).to.be.true;

                done();
            };

            var _onError = function _onError() {
                (0, _chai.expect)(true).to.be.false;
            };

            _todoDao2.default.deleteTodo(_id).then(_onSuccess).catch(_onError);
        });
    });
});

//# sourceMappingURL=todo-dao_test-compiled.script.map
