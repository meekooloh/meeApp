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
    /*****************/
    // navbar cool effect
    resizeTimeout = setTimeout((() => {
    }).bind(this), 500);

    @HostListener('scroll', ['$event'])
    onScroll(event) {
       //debounce resize, wait for resize to finish before doing stuff
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            if (event.target.offsetWidth >600 ){
                this.doTheThing();
            }          
        }
    }
    @HostListener('window:resize', ['$event'])
    onResize(event){
       //debounce resize, wait for resize to finish before doing stuff
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            if (event.target.innerWidth >600){
                this.doTheThing();
            }else{
                this.doTheReset();
            }
        }
    }
    /*****************/
    title = 'app';
    /*****************/
    //mapa var
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
    
    lat: number = 40.481406;
    lng: number = -3.669023;  
    zoom: number = 110;  
    positionCords = {};

    /*****************/
    // test data
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
    mPost2: Post={
        id: "1",
        title: "post test",
        info: "This is the post test infoooo",
        metadata: [ this.metadata1, this.metadata2,this.metadata3],
        userid: "user1",
        date: "1501699582462",
        category: "cat1",
        subcategory1: "cat2",
        subcategory2: "cat3",
        subcategory3: "cat4"
    }    
    mockPosts=[this.mPost,this.mPost2,this.mPost,this.mPost];
    
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
    /*****************/


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
        if (this.windowService.window.document.getElementsByClassName("jumbotron")[0].offsetWidth >600){
            if (this.windowService.window.document.getElementsByClassName("compact-container")[0].scrollTop==0){
                this.doTheThing();
            }else{
                this.doTheReset();
            }
        }
 	    //this.getCurrentPosition();
         
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
    doTheThing(){
        if (this.windowService.window.document.getElementsByClassName("compact-container")[0].scrollTop==0){
            var arr = this.windowService.window.document.getElementsByClassName("body-top")[0].children;
            this.windowService.window.document.getElementsByClassName("body-top")[0].classList.remove("transition-element-hide");
            this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.remove("transition-element-hide");
            this.windowService.window.document.getElementsByClassName("body-top")[0].classList.add("transition-element-show");
            this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.add("transition-element-show");
            for (var i = 0; i < arr.length; i++) {
                arr[i].classList.remove("transition-element-out");
                arr[i].classList.add("transition-element-in");
            }
            this.windowService.window.document.getElementsByClassName("toptitle")[0].classList.remove("transparent");
            this.windowService.window.document.getElementsByClassName("logo")[0].classList.remove("transparent");
            this.windowService.window.document.getElementsByClassName("body-top")[0].classList.add("height410");
            this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.add("height410");
        }else{
            this.doTheReset();
        }
    }
    doTheReset(){
        var arr = this.windowService.window.document.getElementsByClassName("body-top")[0].children;
        for (var i = 0; i < arr.length; i++) {
            arr[i].classList.remove("transition-element-in");
            arr[i].classList.add("transition-element-out");
        }
        var class2add="transition-element-out";
            var arr = this.windowService.window.document.getElementsByClassName("body-top")[0].children;
            this.windowService.window.document.getElementsByClassName("body-top")[0].classList.remove("transition-element-show");
            this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.remove("transition-element-show");
            this.windowService.window.document.getElementsByClassName("body-top")[0].classList.add("transition-element-hide");
            this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.add("transition-element-hide");
            for (var i = 0; i < arr.length; i++) {
                if (!arr[i].classList.contains(class2add)){
                    arr[i].classList.add(class2add);
                }
            }
        this.windowService.window.document.getElementsByClassName("toptitle")[0].classList.add("transparent");
        this.windowService.window.document.getElementsByClassName("logo")[0].classList.add("transparent");
        this.windowService.window.document.getElementsByClassName("body-top")[0].classList.remove("height410");
        this.windowService.window.document.getElementsByClassName("jumbotron")[0].classList.remove("height410");
    }

}
