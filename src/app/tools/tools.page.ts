import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit{

  constructor() { }

  @ViewChild(IonSlides)

  slides: Slides;
  hideNext = false;
  hidePrevious = true;
  showImage = false;
  showUseOfImagery = true;
  showUseOfBreath = false;
  showUseOfMovement = false;

  ngOnInit() {
  }

  vanishOnScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showImage = scrollTop >= 200;

    }
  }

  segmentChanged(ev: any) {
    this.hideNext = false;
    this.hidePrevious = true;
    if(ev.detail.value === 'useOfImagery') {
      this.showUseOfImagery = true;
      this.showUseOfBreath = false;
      this.showUseOfMovement = false;
    } else if (ev.detail.value === 'useOfBreath') {
      this.showUseOfImagery = false;
      this.showUseOfBreath = true;
      this.showUseOfMovement = false;
    } else if (ev.detail.value === 'useOfMovement') {
      this.showUseOfImagery = false;
      this.showUseOfBreath = false;
      this.showUseOfMovement = true;
    }
  };

  slideOpts = {
    effect: 'cube'
  };

  next() {
    this.slides.slideNext();
    this.checkSlidePosition();
  }

  previous() {
    this.slides.slidePrev();
    this.checkSlidePosition();
  }

  checkSlidePosition() {
    this.slides.isEnd()
      .then((result) => {
        this.hideNext = result;
      });
     this.slides.isBeginning()
       .then((result) => {
         this.hidePrevious = result;
       });
  }
}
