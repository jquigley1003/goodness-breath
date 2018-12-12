import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { DataService } from '../services/data.service';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild(GoogleMapComponent) map: GoogleMapComponent;

  @ViewChild('video') mVideoPlayer: any;
  video: HTMLVideoElement;

  showImage = false;
  showContentBI = true;
  showContentTM = false;
  showContentBO = false;

  private latitude: number;
  private longitude: number;

  constructor(
    private renderer: Renderer2,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.video = this.mVideoPlayer.nativeElement;
    this.video.src = 'assets/vids/Deva1.mov';

    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));

    this.map.init().then((res) => {
      console.log('map ready!');
    }, (err) => {
      console.log(err);
    });
  }

  vanishOnScroll($event) {
   if ($event && $event.detail && $event.detail.scrollTop) {
     const scrollTop = $event.detail.scrollTop;
     this.showImage = scrollTop >= 200;

   }
  }

  segmentChanged(ev: any) {
    if(ev.detail.value === 'breatheIn') {
      this.showContentBI = true;
      this.showContentTM = false;
      this.showContentBO = false;
    } else if (ev.detail.value === 'takeMoment') {
      this.showContentBI = false;
      this.showContentTM = true;
      this.showContentBO = false;
    } else if (ev.detail.value === 'breatheOut') {
      this.showContentBI = false;
      this.showContentTM = false;
      this.showContentBO = true;
    }
  };

  goToFB() {
    window.open('https://www.facebook.com/GoodnessBreath/');
  }
}
