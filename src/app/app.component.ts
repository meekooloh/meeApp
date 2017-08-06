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
