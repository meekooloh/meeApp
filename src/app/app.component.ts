import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,HostListener, OnInit } from '@angular/core';
import { Directive, Input, ElementRef } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { WindowService } from './services/window.service';

import { GeolocationService } from '../app/services/geolocation.service';
import { PostComponent } from './components/post/post.component';
import { Post,MetaData } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    @HostListener('scroll', ['$event'])
    onScroll(event) {
        event.stopPropagation();
        if (event.target.scrollTop!=0){
            var arr = this.windowService.window.document.getElementsByClassName("body-top")[0].children;

            for (var i = 0; i < arr.length; i++) {
                arr[i].className="";
                arr[i].style.opacity = "0";

            }
            this.windowService.window.document.getElementsByClassName("body-top")[0].style.height="50px";
            this.windowService.window.document.getElementsByClassName("body-top")[0].className="body-top fixed-top";
            this.windowService.window.document.getElementsByClassName("container")[0].style.margin="120px 0 0 0";
            this.windowService.window.document.getElementsByClassName("index-container")[0].style.top="50px";
        }else{
            if (this.windowService.window.document.body.offsetWidth>=600){

                 var arr = this.windowService.window.document.getElementsByClassName("body-top")[0].children;
                for (var i = 0; i < arr.length; i++) {
                    arr[i].className="transition-element";
                    arr[i].style.opacity = "1";
                }
                this.windowService.window.document.getElementsByClassName("body-top")[0].style.height="410px";
                this.windowService.window.document.getElementsByClassName("body-top")[0].className="body-top";
                this.windowService.window.document.getElementsByClassName("container")[0].style.margin="410px 0 0 0";
                this.windowService.window.document.getElementsByClassName("index-container")[0].style.top="410px";
            }
        }
    }

    title = 'app';
    lat: number = 40.481406;
    lng: number = -3.669023;  
    zoom: number = 110;  
    positionCords = {};


    metadata1 : MetaData={type:"image", link:"http://www.lovethispic.com/uploaded_images/247074-Cute-Little-Bunny.jpg"};
    metadata2 : MetaData={type:"mp4", link:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"};

    metadata3 : MetaData={type:"youtube", link:"http://www.youtube.com/embed/AwLxg-yvEmc"};
    
    mPost: Post={
        id: "1",
        title: "post test",
        info: "This is the post test infoooo",
        metadata: [ this.metadata1, this.metadata2,this.metadata3],
        userid: "user1",
        date: "1501699582462",
        category: "cat1",
        subcategory1: "cat2",
        subcategory2: "cat3"
    }
    mockPosts=[this.mPost,this.mPost,this.mPost,this.mPost];
    
    catIndex={ level:1,label:"index",strc:[
            { level:2,value: "cat10000", label:"info1",strc:[
                { level:3,value:"cat11000", label:"info11",strc:[
                        {level:4,value: "cat11100", label:"info111",strc:[
                            {level:5,value :"cat11110", label:"info1111",strc:[
                                { level:6, value: "cat11111", label:"info11111",strc:[]},
                                { level:6, value: "cat11112", label:"info11112",strc:[]},
                                { level:6, value: "cat11113", label:"info11113",strc:[]},
                            ]},
                            {level:5,value :"cat11120", label:"info1112",strc:[
                                {value :"cat11121", label:"info11121",strc:[]},
                                {value :"cat11122", label:"info11122",strc:[]},
                                {value :"cat11123", label:"info11123",strc:[]},
                            ]},
                            {level:5,value :"cat11130", label:"info1113",strc:[]},
                        ]
                        },
                        {level:4,value :"cat11200", label:"info211",strc:[]},
                        {level:4,value :"cat11300", label:"info311",strc:[]},
                    ]
                },
                {level:3,value :"cat12000", label:"info12",strc:[
                        {level:4,value :"cat12100", label:"info121",strc:[]},
                        {level:4,value :"cat12200", label:"info122",strc:[]},
                        {level:4,value :"cat12300",label:"info123",strc:[]}
                    ]
                },
                {level:3,value :"cat13000", label: "info13", strc:[
                        {level:4,value :"cat13100", label:"info131",strc:[]},
                        {level:4,value :"cat13200", label:"info132",strc:[]},
                        {level:4,value :"cat13300", label:"info133",strc:[]}
                    ]
                },
            ]
        },
        {level:2,value :"cat20000", label:"info2",strc:[
            {level:3,value :"cat21000",label:"info21", strc:[]},
            {level:3,value :"cat22000",label:"info22", strc:[]},
            {level:3,value :"cat23000",label:"info23", strc:[]}
            ]
        },
        {level:2,value :"cat30000", label:"info3",strc:[
            {level:3,value :"cat31000",label:"info31", strc:[]},
            {level:3,value :"cat32000",label:"info32", strc:[]},
            {level:3,value :"cat33000",label:"info33", strc:[]}
            ]
        }
    ]};
    // Center map. Required.
    // MapOptions object specification.
    // The initial map zoom level. Required.
    //zoom: number;
    disableDefaultUI: boolean;
    disableDoubleClickZoom: boolean;
    maxZoom: number;
    minZoom: number;
    // Marker position. Required.
    // Marker title.
    // Info window.
    content: string;
    // Address to be searched.
    address: string;
    // Warning flag & message.
    warning: boolean;
    message: string;

    constructor(private geolocation: GeolocationService,
                public windowService: WindowService) {
        // Other options.
        this.disableDefaultUI = true;
        this.disableDoubleClickZoom = false;
        this.maxZoom = 15;
        this.minZoom = 4;
        // Styled Maps: https://developers.google.com/maps/documentation/javascript/styling
        // You can use the Styled Maps Wizard: http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html 
        // Initially the marker isn't set.
        this.address = "";
        this.warning = false;
        this.message = "";
    }

    tooggleMenu() {
        var x = this.windowService.window.document.getElementById("myTopnav");
        if (x.className.indexOf("responsive")==-1) {
            x.className += " responsive";
        } else {
            x.classList.remove("responsive");
        }
    }

    ngOnInit(){
 	    this.getCurrentPosition();
    }
    getCurrentPosition() {
        this.warning = false;
        this.message = "";
        if (navigator.geolocation) {
            this.geolocation.getCurrentPosition().forEach(
                (position: Position) => {
                	this.positionCords= position.coords;
                }
            ).then(() => console.log('Geolocation service: completed.')).catch(
                (error: PositionError) => {
                    if (error.code > 0) {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                this.message = 'permission denied';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                this.message = 'position unavailable';
                                break;
                            case error.TIMEOUT:
                                this.message = 'position timeout';
                                break;
                        }
                        this.warning = true;
                    }
                });
        } else {
            this.message = "browser doesn't support geolocation";
            this.warning = true;
        }
    }

}
