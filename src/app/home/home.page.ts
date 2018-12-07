import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  showImage = false;
  showContentBI = true;
  showContentTM = false;
  showContentBO = false;

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
