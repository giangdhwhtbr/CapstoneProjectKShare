import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
declare var paper: any;
declare var io: any;

var brushColor: string = $('#color-picker').val();
@Component ({
    selector: 'chalkboard',
    template: `
        <button id="draw-option"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>
        <canvas id="chalkboard" resize=true keepalive=true></canvas>
        <div id="draw-tools">
            <p id="new-page" (click)="newPage()" class="tool-btn">
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
            <div class="tool-btn" *ngFor="let page of pages" (click)="openPage(page.url)">
                <i class="fa fa-file-o fa-2x" aria-hidden="true">{{page.page}}</i>
            </div>
        </div>
    `,
    styleUrls:["client/dev/app/components/front-end/kspace/styles/chalkboard.css"]
})

export class ChalkBoardComponent {
    colors: any[];
    brushSizes: any[];
    pages: Array<any>;

    constructor() {
        this.pages = [];
        this.colors= [
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
        ]
    }
    @Input() id: string;

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

    ngOnInit():void {
            var drawing = false;
            var mode = 'draw';
            var path: any;
            var streamPath: any;
            var strokeColor: string = 'white';
            var strokeWidth = 1;
            var colorStore :string ;
            var room = this.id;
            
            var socket = io('https://localhost:8081');
            socket.emit('subscribe', room);
            var chalkboard = document.getElementById('chalkboard');
            // Initiate the paper at canvas id="chalkboard"
            paper.setup(chalkboard);

            //initiate setting
            var drawToolShow: boolean = false;
            $('#draw-tools').hide();          
            //show draw-tools
            $('#draw-option').click(function(){
                if(!drawToolShow){
                    $('#draw-tools').show();
                    drawToolShow = true;
                } else {
                    $('#draw-tools').hide();
                    drawToolShow = false;
                }
            });

            $('#color-picker').change(function(){
                if($('#color-picker').val()!=='white'){
                    $('#color-picker').css('color','white');
                }
                if($('#color-picker').val()){
                    $('#color-picker').css('background-color',$('#color-picker').val());
                    strokeColor = $('#color-picker').val();
                }
            });
            $('#brush-size').change(function () {
                if($('#brush-size').val()){
                    strokeWidth = $('#brush-size').val();
                }
            })

            $('#eraser').click(function(){
                strokeColor = '#000000';
            })

            /**
             * Catch event when mouse down, create new path, emit start point
             */
            $('#chalkboard').mousedown(function(event){
                    drawing = true;
                    path = new paper.Path(); 
                    path.strokeColor = strokeColor;
                    path.strokeWidth = strokeWidth;
                    var x = event.pageX - 0.1879935275*$(window).width();
                    var y = event.pageY - 0.036667*$(window).height(); 
                    path.add(new paper.Point(x,y));
                    emitStartPoint(x,y,strokeColor,strokeWidth);
            });

            /**
             * Catch event when mouse move and drawing token is true
             * Then call function draw (x,y) Emit the points of the path to server
             */
            $('#chalkboard').mousemove(function(event){
                if(drawing){
                    var x = event.pageX - 0.1879935275*$(window).width();
                    var y = event.pageY - 0.036667*$(window).height(); 
                    draw(x, y);                
                    emitPathPoint( x, y);
                }
            });
            /**
             * When mouse up, set drawing is false, finish the path
             */
            $('#chalkboard').mouseup(function (event) {
                drawing = false;
            })

            /**
             * function draw(x, y)
             * Add point(x,y) to the path
             */
            
            function draw( x, y) {
                path.add(new paper.Point(x,y));
                path.smooth();
                paper.view.draw();
            }

            /**
             * function streamStartPath(x,y)
             * When receive the start point from server, create the stream path
             */
            function streamStartPath (x,y,color,width){
                streamPath = new paper.Path();
                streamPath.strokeColor = color;
                streamPath.strokeWidth = width;
                streamPath.add(new paper.Point(x,y));
                streamPath.smooth();
            }

            /**
             * function streamDraw(x,y) 
             * Add point(x,y) to the stream path
             */
            function streamDraw (x,y){
                streamPath.add(new paper.Point(x,y));
                paper.view.draw();
            }

            /**
             * function emitStartPoint(x,y) 
             * Send the start point (x,y) to the server
             */
            function emitStartPoint(x,y,color,width) {
                var data = {
                    x: x,
                    y: y,
                    color,
                    width,
                    room
                };
                socket.emit( 'startPoint', data)
                
            }
             /**
             * function emitPathPoint(x,y) 
             * Send the path's point (x,y) to the server
             */
            function emitPathPoint( x, y) {
                var data = {
                    x: x,
                    y: y,
                    room
                };
                socket.emit( 'pathpoint', data)
            }
            /**
             * When socket receive startPoint, call function streamStartPath(x,y)
             */
            socket.on('startPoint', function (data) {
                streamStartPath(data.x, data.y,data.color,data.width);
            })
            /**
             * When socket receive pathpoint, call function streamDraw(x,y)
             */
            socket.on('pathpoint', function( data ) {
                streamDraw( data.x, data.y);
            })
        }
}