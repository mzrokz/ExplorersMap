import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController
  ) {
  }

  ionViewDidLoad() {
    this.initMap();
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos);
      let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.updatePos(latLng);
    });
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
  }

  updatePos(pos) {
    var marker = new google.maps.Marker({ position: pos, map: this.map });
    this.map.setCenter(pos);
    this.map.setZoom(10);
  }

  onLink(url: string) {
    window.open(url);
  }
}
