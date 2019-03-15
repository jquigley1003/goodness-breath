import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { DataService } from '../services/data.service';

import { ThreeStepsModalComponent } from '../modals/three-steps-modal/three-steps-modal.component';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  map: Map;
  mapCreated = false;
  // options = {
  //   layers: [
  //     tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
  //       attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //     })
  //   ],
  //   zoom: 7,
  //   center: latLng([46.879966, -121.726909])
  // };

  // @ViewChild(GoogleMapComponent) map: GoogleMapComponent;

  @ViewChild('video') mVideoPlayer: any;
  video: HTMLVideoElement;

  showImage = false;
  showContentBI = true;
  showContentTM = false;
  showContentBO = false;
  showMoreContent = false;

  private latitude: number;
  private longitude: number;

  constructor(
    private renderer: Renderer2,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {

    // this.map.init().then((res) => {
    //   console.log('map ready!');
    // }, (err) => {
    //   console.log(err);
    // });

    // this.createLeafletMap();
  }

  createLeafletMap() {
    this.map = new Map('map').setView([33, -90], 4);

    tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
      // tslint:disable-next-line
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.mapCreated = true;

    setTimeout(() => {
      this.map.invalidateSize();
    }, 3000);

  }

  handleOnFocus() {
    this.map.invalidateSize();
    console.log('Map onLoad activated: the map will be resized')
  }

  vanishOnScroll($event) {
   if ($event && $event.detail && $event.detail.scrollTop) {
     const scrollTop = $event.detail.scrollTop;
     this.showImage = scrollTop >= 200;
   }
  }

  showBreatheIn() {
    this.showContentBI = true;
    this.showContentTM = false;
    this.showContentBO = false;
  }

  showTakeMoment() {
    this.showContentBI = false;
    this.showContentTM = true;
    this.showContentBO = false;
  }

  showBreatheOut() {
    this.showContentBI = false;
    this.showContentTM = false;
    this.showContentBO = true;
  }


  goToFB() {
    window.open('https://www.facebook.com/GoodnessBreath/');
  }

  goToArticle1() {
    window.open('https://thriveglobal.com/stories/the-goodness-breath-project/');
  }

  // setLocation() {
  //   console.log('Setting your location...');
  //   this.loadingCtrl.create({
  //     message: 'Adding your light to the grid...'
  //   }).then((overlay) => {
  //     overlay.present();
  //     Geolocation.getCurrentPosition().then((position) => {
  //       overlay.dismiss();
  //
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //
  //       this.map.changeMarker(this.latitude, this.longitude);
  //
  //       let data = {
  //         latitude: this.latitude,
  //         longitude: this.longitude
  //       };
  //
  //       //this.dataService.setLocation(data);
  //
  //       this.alertCtrl.create({
  //         header: 'Your light is on the grid.',
  //         message: 'Thank you for joining the Goodness Breath Project!',
  //         buttons: [
  //           {
  //             text: 'OK'
  //           }
  //         ]
  //       }).then((alert) => {
  //         alert.present();
  //       });
  //
  //     }, (err) => {
  //       console.log(err);
  //       overlay.dismiss();
  //     });
  //   });
  // }

  onShowMoreContent() {
    this.showMoreContent = true;
  }

  onShowLessContent() {
    this.showMoreContent = false;
  }

  async presentThreeStepsModal() {
    const modal = await this.modalCtrl.create({
      component: ThreeStepsModalComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
