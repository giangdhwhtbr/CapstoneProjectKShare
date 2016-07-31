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
var brushColor = $('#color-picker').val();
var ChalkBoardComponent = (function () {
    function ChalkBoardComponent() {
        this.pages = [];
        this.colors = [
            { label: '#ffffff', value: '#ffffff' },
            { label: '#de3535', value: '#DE3535' },
            { label: '#03a9f4', value: '#03a9f4' }
        ];
        this.brushSizes = [
            { label: '1', value: '1' },
            { label: '2', value: '3' },
            { label: '3', value: '5' },
            { label: '4', value: '10' },
            { label: '5', value: '20' },
            { label: '6', value: '30' },
            { label: '7', value: '50' }
        ];
    }
    // openPage(url): void {
    //    var board =  $('#chalkboard');
    //    board.css('background-image', 'url(' + imageUrl + ')');
    // }
    // newPage():void {
    //     var canvas = document.getElementById('chalkboard');
    //     var ctx = canvas.getContext('2d');
    //     var currentBoard = canvas.toDataURL();
    //     var page = this.pages.length + 1;
    //     var data = {
    //         page: page,
    //         url: currentBoard
    //     }
    //     this.pages.push(data);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }
    ChalkBoardComponent.prototype.ngOnInit = function () {
        var drawing = false;
        var mode = 'draw';
        var path;
        var streamPath;
        var strokeColor = 'white';
        var strokeWidth = 1;
        var colorStore;
        var room = this.id;
        var socket = io('https://localhost:8081');
        socket.emit('subscribe', room);
        var chalkboard = document.getElementById('chalkboard');
        // Initiate the paper at canvas id="chalkboard"
        paper.setup(chalkboard);
        //initiate setting
        var drawToolShow = false;
        $('#draw-tools').hide();
        //show draw-tools
        $('#draw-option').click(function () {
            if (!drawToolShow) {
                $('#draw-tools').show();
                drawToolShow = true;
            }
            else {
                $('#draw-tools').hide();
                drawToolShow = false;
            }
        });
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
                width: width,
                room: room
            };
            socket.emit('startPoint', data);
        }
        /**
        * function emitPathPoint(x,y)
        * Send the path's point (x,y) to the server
        */
        function emitPathPoint(x, y) {
            var data = {
                x: x,
                y: y,
                room: room
            };
            socket.emit('pathpoint', data);
        }
        /**
         * When socket receive startPoint, call function streamStartPath(x,y)
         */
        socket.on('startPoint', function (data) {
            streamStartPath(data.x, data.y, data.color, data.width);
        });
        /**
         * When socket receive pathpoint, call function streamDraw(x,y)
         */
        socket.on('pathpoint', function (data) {
            streamDraw(data.x, data.y);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChalkBoardComponent.prototype, "id", void 0);
    ChalkBoardComponent = __decorate([
        core_1.Component({
            selector: 'chalkboard',
            template: "\n        <button id=\"draw-option\"><i class=\"fa fa-bars fa-2x\" aria-hidden=\"true\"></i></button>\n        <canvas id=\"chalkboard\" resize=true keepalive=true></canvas>\n        <div id=\"draw-tools\">\n            <p id=\"new-page\" (click)=\"newPage()\" class=\"tool-btn\">\n                <i class=\"fa fa-file-o fa-2x\" aria-hidden=\"true\"></i>\n            </p>\n            <select id=\"color-picker\" class=\"tool-btn\">\n                <option *ngFor=\"let color of colors\" value=\"{{color.value}}\">{{color.label}}</option>\n            </select>\n            <hr>\n            <select id=\"brush-size\" class=\"tool-btn\">\n                <option *ngFor=\"let size of brushSizes\" value=\"{{size.value}}\">{{size.label}}</option>\n            </select>\n            <hr>\n            <p id=\"eraser\">\n                <i class=\"fa fa-eraser fa-2x\" aria-hidden=\"true\"></i>\n            </p>\n            <div class=\"tool-btn\" *ngFor=\"let page of pages\" (click)=\"openPage(page.url)\">\n                <i class=\"fa fa-file-o fa-2x\" aria-hidden=\"true\">{{page.page}}</i>\n            </div>\n        </div>\n    ",
            styleUrls: ["client/dev/app/components/front-end/kspace/styles/chalkboard.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChalkBoardComponent);
    return ChalkBoardComponent;
})();
exports.ChalkBoardComponent = ChalkBoardComponent;
//# sourceMappingURL=chalkboard.js.map