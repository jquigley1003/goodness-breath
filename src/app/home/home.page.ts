import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild('video') mVideoPlayer: any;
  video: HTMLVideoElement;

  showImage = false;
  showContentBI = true;
  showContentTM = false;
  showContentBO = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {

    this.video = this.mVideoPlayer.nativeElement;
    this.video.src = 'assets/vids/Deva1.mov';

    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
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
}
