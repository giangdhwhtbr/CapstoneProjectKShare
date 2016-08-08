import { Component, OnInit, Input } from '@angular/core';
declare var $:any;
declare var paper:any;
declare var io:any;

@Component({
  selector: 'chalkboard',
  template: `

    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s1"><a class="active" (click)="changeBoard(currentPage)">Bảng chính</a></li>
          <li class="tab col s1" *ngFor="let board of boards">
          <a *ngIf="isLect" (click)="changeBoard(board.json, board.boardNumber)">
             Bảng {{board.boardNumber}}
          </a></li>
        </ul>
      </div>
    </div>

      <button id="draw-option"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>
      <canvas id="chalkboard" resize=true keepalive=true></canvas>

      <div id="draw-tools">
          <p id="new-page" (click)="newPage()"  href="#modal1" class="tool-btn">
              <i class="fa fa-file-o fa-2x" aria-hidden="true"></i>
          </p>
          <select id="color-picker" class="tool-btn">
              <option *ngFor="let color of colors" value="{{color.value}}">{{color.label}}</option>
          </select>
          <hr>
          <select id="brush-size" class="tool-btn">
              <option *ngFor="let size of brushSizes" value="{{size.value}}">{{size.label}}</option>
          </select>
          <hr>
          <p id="eraser">
              <i class="fa fa-eraser fa-2x" aria-hidden="true"></i>
          </p>
      </div>
    `,
  styleUrls: ["client/dev/app/components/front-end/kspace/styles/chalkboard.css"]
})

export class ChalkBoardComponent {
  colors:any[];
  brushSizes:any[];
  boards:Array<any>;
  currentPage:any;
  initToken:boolean = true;
  socket:any;
  username: string;
  isLect: boolean;
  @Input() id:string;
  @Input() lecturer:string;

  constructor() {
    this.username = localStorage.getItem('username');
    this.boards = [];
    this.colors = [
      {label: '#000000', value: '#000000'},
      {label: '#de3535', value: '#DE3535'},
      {label: '#03a9f4', value: '#03a9f4'}
    ];
    this.brushSizes = [
      {label: '1', value: '1'},
      {label: '2', value: '3'},
      {label: '3', value: '5'},
      {label: '4', value: '10'},
      {label: '5', value: '20'},
      {label: '6', value: '30'},
      {label: '7', value: '50'}
    ];
    // Socket Config
    this.socket = io('https://localhost:80');

  }




  ngOnInit():void {

    var drawing = false;
    var path:any;
    var streamPath:any;
    var strokeColor:string = 'black';
    var strokeWidth = 1;   var room = this.id;

    var socket = this.socket;

    function isLecturer (username, lecturer){
      if(username === lecturer){
        return true;
      }else {
        return false;
      }
    }
    this.isLect = isLecturer(this.username,this.lecturer);
    var isLect = this.isLect;
    if(!this.isLect){
      $('#draw-option').hide();
    }
    // Prepare data for identify the subscriber is lecturer or not
    var data = {
      room: room,
      lecturer: this.lecturer,
      isLecturer: this.isLect
    };
    socket.emit('subscribe', data);


    socket.on('userSubscribed', (dataReturn) => {
      // If user subscribe is not the lecturer => lecturer must share board to the new subscriber
      if(!dataReturn.isLecturer){
        //check if logged in user is lecturer
        if(isLecturer(localStorage.getItem('username'), data.lecturer)){
          var json = paper.exportJSON(paper.project.activeLayer);
          var board = {
            json: json,
            room: data.room,
            lecturer: data.lecturer
          };
          socket.emit('shareBoard',board);
        }
      }
    });

    socket.on('shareBoard', (board) => {
        // if logged in user is not lecturer => import board
        if(!isLecturer(localStorage.getItem('username'), data.lecturer)){
          paper.importJSON(board.json);
        }
    });

    socket.on('newBoard', data =>{
      paper.project.clear();
      var newLayer = new paper.Layer();
      newLayer.activate();

      if(isLecturer(localStorage.getItem('username'), data.lecturer)){
        var board = {
          boardNumber: data.boardNumber,
          json: data.json
        }

        this.boards.push(board);
      }
    });

    socket.on('changeBoard', (board) =>{
      if(!isLecturer(localStorage.getItem('username'), board.lecturer)){
        paper.project.clear();
        paper.importJSON(board.json);
      }
    });

    var chalkboard = document.getElementById('chalkboard');
    // Initiate the paper at canvas id="chalkboard"
    paper.setup(chalkboard);

    //initiate setting
    var drawToolShow:boolean = false;
    $('#draw-tools').hide();
    //show draw-tools
    $('#draw-option').click(function () {
      if (!drawToolShow) {
        $('#draw-tools').show();
        drawToolShow = true;
      } else {
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
    })

    $('#eraser').click(function () {
      strokeColor = '#ffffff';
    })


    //Catch event when mouse down, create new path, emit start point

    $('#chalkboard').mousedown(function (event) {
      if(isLect){
        drawing = true;
        path = new paper.Path();
        path.strokeColor = strokeColor;
        path.strokeWidth = strokeWidth;
        var x = event.pageX - 0.249 * $(window).width();
        var y = event.pageY - 120;
        path.add(new paper.Point(x, y));
        emitStartPoint(x, y, strokeColor, strokeWidth);
      }
    });


     //Catch event when mouse move and drawing token is true
     //Then call function draw (x,y) Emit the points of the path to server

    $('#chalkboard').mousemove(function (event) {
      if (drawing && isLect) {
        var x = event.pageX - 0.249 * $(window).width();
        var y = event.pageY - 120;
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
        color,
        width,
        room
      };
      socket.emit('startPoint', data)

    }

    /**
     * function emitPathPoint(x,y)
     * Send the path's point (x,y) to the server
     */
    function emitPathPoint(x, y) {
      var data = {
        x: x,
        y: y,
        room
      };
      socket.emit('pathpoint', data)
    }

     //When socket receive startPoint, call function streamStartPath(x,y)

    socket.on('startPoint', function (data) {
      streamStartPath(data.x, data.y, data.color, data.width);
    })

     //When socket receive pathpoint, call function streamDraw(x,y)

    socket.on('pathpoint', function (data) {
      streamDraw(data.x, data.y);
    })
  }

  /*
  * Lecturer create new page
  * */
  newPage():void {
    if(this.isLect){
      var json = paper.exportJSON(paper.project.activeLayer);
      var socket = this.socket;
      var boardNumber:number;

      var chalkboard = document.getElementById("chalkboard");
      var dataURL = chalkboard.toDataURL();


      paper.project.clear();
      var newLayer = new paper.Layer();
      newLayer.activate();

      if (!this.boards.length) {
        boardNumber = 1;
      } else {
        boardNumber = this.boards.length + 1;
      }

      var data = {
        room: this.id,
        lecturer: this.lecturer,
        boardNumber: boardNumber,
        json: json,
        dataURL: dataURL
      };

      var board = {
        boardNumber: data.boardNumber,
        json: data.json
      }

      this.boards.push(board);

      socket.emit('newBoard',data)
    }
  }

  changeBoard(json:any, num:number) {
    var socket = this.socket;
    if(this.isLect){
      if (this.initToken == true) {
        this.currentPage = paper.exportJSON(paper.project.activeLayer);
      }
      if (num) {
        paper.project.clear();
        paper.importJSON(json);
        this.initToken = false;
      } else {
        paper.project.clear();
        paper.importJSON(json);
        this.initToken = true
      }
      var data = {
        room: this.id,
        json: json,
        lecturer: this.lecturer
      }
      socket.emit('changeBoard', data);
    }
  }
}
