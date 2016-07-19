"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var $ = require('jquery');
var paper = require('paper');
var io = require('socket.io');
var primeng_1 = require('primeng/primeng');
var brushColor = $('#color-picker').val();
var ChalkBoardComponent = (function () {
    function ChalkBoardComponent() {
        this.colors = [
            { label: '#ffffff', value: '#ffffff' },
            { label: '#de3535', value: '#DE3535' },
            { label: '#03a9f4', value: '#03a9f4' }
        ];
        this.brushSizes = [
            { label: '1px', value: '1' },
            { label: '2px', value: '2' },
            { label: '3px', value: '3' },
            { label: '4px', value: '4' },
            { label: '5px', value: '5' },
            { label: '6px', value: '6' },
            { label: '7px', value: '7' },
            { label: '8px', value: '8' },
            { label: '9px', value: '9' },
            { label: '10px', value: '10' }
        ];
    }
    ChalkBoardComponent.prototype.ngOnInit = function () {
        var socket = io('http://192.168.1.7:3333');
        var sessionId = socket.sessionid;
        var drawing = false;
        var mode = 'draw';
        var path;
        var streamPath;
        var strokeColor = 'white';
        var strokeWidth = 1;
        var colorStore;
        var chalkboard = document.getElementById('chalkboard');
        // Initiate the paper at canvas id="chalkboard"
        paper.setup(chalkboard);
        $('#color-picker').change(function () {
            if ($('#color-picker').val() !== 'white') {
                $('#color-picker').css('color', 'white');
            }
            if ($('#color-picker').val()) {
                $('#color-picker').css('background-color', $('#color-picker').val());
                strokeColor = $('#color-picker').val();
            }
        });
        $('#brush-size').change(function () {
            if ($('#brush-size').val()) {
                strokeWidth = $('#brush-size').val();
            }
        });
        $('#eraser').click(function () {
            strokeColor = '#000000';
        });
        /**
         * Catch event when mouse down, create new path, emit start point
         */
        $('#chalkboard').mousedown(function (event) {
            drawing = true;
            path = new paper.Path();
            path.strokeColor = strokeColor;
            path.strokeWidth = strokeWidth;
            var x = event.pageX - 0.1879935275 * $(window).width();
            var y = event.pageY - 0.036667 * $(window).height();
            path.add(new paper.Point(x, y));
            emitStartPoint(x, y, strokeColor, strokeWidth);
        });
        /**
         * Catch event when mouse move and drawing token is true
         * Then call function draw (x,y) Emit the points of the path to server
         */
        $('#chalkboard').mousemove(function (event) {
            if (drawing) {
                var x = event.pageX - 0.1879935275 * $(window).width();
                var y = event.pageY - 0.036667 * $(window).height();
                draw(x, y);
                emitPathPoint(x, y);
            }
        });
        /**
         * When mouse up, set drawing is false, finish the path
         */
        $('#chalkboard').mouseup(function (event) {
            drawing = false;
        });
        /**
         * function draw(x, y)
         * Add point(x,y) to the path
         */
        function draw(x, y) {
            path.add(new paper.Point(x, y));
            path.smooth();
            paper.view.draw();
        }
        /**
         * function streamStartPath(x,y)
         * When receive the start point from server, create the stream path
         */
        function streamStartPath(x, y, color, width) {
            streamPath = new paper.Path();
            streamPath.strokeColor = color;
            streamPath.strokeWidth = width;
            streamPath.add(new paper.Point(x, y));
            streamPath.smooth();
        }
        /**
         * function streamDraw(x,y)
         * Add point(x,y) to the stream path
         */
        function streamDraw(x, y) {
            streamPath.add(new paper.Point(x, y));
            paper.view.draw();
        }
        /**
         * function emitStartPoint(x,y)
         * Send the start point (x,y) to the server
         */
        function emitStartPoint(x, y, color, width) {
            var data = {
                x: x,
                y: y,
                color: color,
                width: width
            };
            socket.emit('startPoint', data, sessionId);
        }
        /**
        * function emitPathPoint(x,y)
        * Send the path's point (x,y) to the server
        */
        function emitPathPoint(x, y) {
            var data = {
                x: x,
                y: y
            };
            socket.emit('pathpoint', data, sessionId);
        }
        /**
         * When socket receive startPoint, call function streamStartPath(x,y)
         */
        socket.on('startPoint', function (data) {
            console.log('Stream Start point', data);
            streamStartPath(data.x, data.y, data.color, data.width);
        });
        /**
         * When socket receive pathpoint, call function streamDraw(x,y)
         */
        socket.on('pathpoint', function (data) {
            console.log('draw event recieved:', data);
            streamDraw(data.x, data.y);
        });
    };
    ChalkBoardComponent = __decorate([
        core_1.Component({
            selector: 'chalkboard',
            template: "\n        <canvas id=\"chalkboard\" resize=true keepalive=true></canvas>\n        <div id=\"draw-tools\">\n            <select id=\"color-picker\" class=\"tool-btn\">\n                <option *ngFor=\"let color of colors\" value=\"{{color.value}}\">{{color.label}}</option>\n            </select>\n            <hr>\n            <select id=\"brush-size\" class=\"tool-btn\">\n                <option *ngFor=\"let size of brushSizes\" value=\"{{size.value}}\">{{size.label}}</option>\n            </select>\n            <hr>\n            <p id=\"eraser\">\n                <i class=\"fa fa-eraser fa-2x\" aria-hidden=\"true\"></i>\n            </p>\n        </div>\n    ",
            styleUrls: ["client/dev/app/components/front-end/kspace/styles/chalkboard.css"],
            directives: [primeng_1.Dropdown]
        }), 
        __metadata('design:paramtypes', [])
    ], ChalkBoardComponent);
    return ChalkBoardComponent;
}());
exports.ChalkBoardComponent = ChalkBoardComponent;
//# sourceMappingURL=chalkboard.js.map