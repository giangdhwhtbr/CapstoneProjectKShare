var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var ChalkBoardComponent = (function () {
    function ChalkBoardComponent() {
        this.initToken = true;
        this.username = localStorage.getItem('username');
        this.guest = localStorage.getItem('guest');
        this.boards = [];
        this.colors = [
            { label: 'đen', value: '#000000' },
            { label: 'đỏ', value: '#DE3535' },
            { label: 'lục', value: '#03a9f4' },
            { label: 'lam', value: '#4caf50' },
            { label: 'vàng ', value: '#ffeb3b' },
            { label: 'cam', value: '#ff5722' }
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
        // Socket Config
        this.socket = io('https://localhost:80');
    }
    //gọi modal
    ChalkBoardComponent.prototype.openModal = function () {
        $('#modal1').openModal({
            complete: function () {
            }
        });
        $('.lean-overlay').remove();
    };
    ChalkBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var drawing = false;
        var path;
        var streamPath;
        var strokeColor = 'black';
        var strokeWidth = 1;
        var room = this.id;
        var socket = this.socket;
        function isLecturer(username, lecturer) {
            if (username === lecturer) {
                return true;
            }
            else {
                return false;
            }
        }
        if (this.lecturer) {
            this.isGuest = false;
        }
        else if (!this.lecturer && this.guest) {
            this.isGuest = true;
        }
        this.isLect = isLecturer(this.username, this.lecturer);
        var isLect = this.isLect;
        var isGuest = this.isGuest;
        if (!this.isLect) {
            $('#draw-option').hide();
        }
        // Prepare data for identify the subscriber is lecturer or not
        var data = {
            room: room,
            lecturer: this.lecturer,
            isLecturer: this.isLect
        };
        socket.emit('subscribe', data);
        socket.on('userSubscribed', function (dataReturn) {
            // If user subscribe is not the lecturer => lecturer must share board to the new subscriber
            if (!dataReturn.isLecturer) {
                //check if logged in user is lecturer
                if (isLecturer(localStorage.getItem('username'), data.lecturer)) {
                    var json = paper.exportJSON(paper.project.activeLayer);
                    var board = {
                        json: json,
                        room: data.room,
                        lecturer: data.lecturer
                    };
                    socket.emit('shareBoard', board);
                }
            }
        });
        // if logged in user is not lecturer => import board
        socket.on('shareBoard', function (board) {
            if (!isLecturer(localStorage.getItem('username'), data.lecturer)) {
                paper.importJSON(board.json);
            }
        });
        // if lecturer create new board => learners import board
        socket.on('newBoard', function (data) {
            paper.project.clear();
            var newLayer = new paper.Layer();
            newLayer.activate();
            if (isLecturer(localStorage.getItem('username'), data.lecturer)) {
                var board = {
                    boardNumber: data.boardNumber,
                    json: data.json
                };
                _this.boards.push(board);
            }
        });
        // if lecturer change board => learners change board
        socket.on('changeBoard', function (board) {
            if (!isLecturer(localStorage.getItem('username'), board.lecturer)) {
                paper.project.clear();
                paper.importJSON(board.json);
            }
        });
        /*
        * Init new chalk board
        * */
        var chalkboard = document.getElementById('chalkboard');
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
            if ($('#color-picker').val() !== 'black') {
                $('#color-picker').css('color', 'black');
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
            strokeColor = '#ffffff';
        });
        //Catch event when mouse down, create new path, emit start point
        $('#chalkboard').mousedown(function (event) {
            if (isLect || isGuest) {
                drawing = true;
                path = new paper.Path();
                path.strokeColor = strokeColor;
                path.strokeWidth = strokeWidth;
                var x = event.pageX - 0.22 * $(window).width();
                var y = event.pageY - 70;
                path.add(new paper.Point(x, y));
                emitStartPoint(x, y, strokeColor, strokeWidth);
            }
        });
        //Catch event when mouse move and drawing token is true
        //Then call function draw (x,y) Emit the points of the path to server
        $('#chalkboard').mousemove(function (event) {
            if (drawing && (isLect || isGuest)) {
                var x = event.pageX - 0.22 * $(window).width();
                var y = event.pageY - 70;
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
        //When socket receive startPoint, call function streamStartPath(x,y)
        socket.on('startPoint', function (data) {
            streamStartPath(data.x, data.y, data.color, data.width);
        });
        //When socket receive pathpoint, call function streamDraw(x,y)
        socket.on('pathpoint', function (data) {
            streamDraw(data.x, data.y);
        });
    };
    /*
     * Lecturer create new page
     * */
    ChalkBoardComponent.prototype.newPage = function (name, des) {
        if (this.isLect) {
            var json = paper.exportJSON(paper.project.activeLayer);
            var socket = this.socket;
            var chalkboard = document.getElementById("chalkboard");
            var dataURL = chalkboard.toDataURL();
            paper.project.clear();
            var newLayer = new paper.Layer();
            newLayer.activate();
            //config data to save to server
            var data = {
                room: this.id,
                lecturer: this.lecturer,
                name: name,
                des: des,
                json: json,
                dataURL: dataURL
            };
            var board = {
                name: data.name,
                json: data.json
            };
            this.boards.push(board);
            socket.emit('newBoard', data);
        }
    };
    ChalkBoardComponent.prototype.changeBoard = function (json, num) {
        var socket = this.socket;
        if (this.isLect) {
            if (this.initToken == true) {
                this.currentPage = paper.exportJSON(paper.project.activeLayer);
            }
            if (num) {
                paper.project.clear();
                paper.importJSON(json);
                this.initToken = false;
            }
            else {
                paper.project.clear();
                paper.importJSON(json);
                this.initToken = true;
            }
            var data = {
                room: this.id,
                json: json,
                lecturer: this.lecturer
            };
            socket.emit('changeBoard', data);
        }
    };
    __decorate([
        core_1.Input()
    ], ChalkBoardComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], ChalkBoardComponent.prototype, "boards");
    __decorate([
        core_1.Input()
    ], ChalkBoardComponent.prototype, "lecturer");
    ChalkBoardComponent = __decorate([
        core_1.Component({
            selector: 'chalkboard',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/chalkboard.html',
            styleUrls: ["client/dev/app/components/front-end/kspace/styles/chalkboard.css"]
        })
    ], ChalkBoardComponent);
    return ChalkBoardComponent;
})();
exports.ChalkBoardComponent = ChalkBoardComponent;
//# sourceMappingURL=chalkboard.js.map