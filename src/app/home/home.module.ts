import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThreeStepsModalComponent } from '../modals/three-steps-modal/three-steps-modal.component';
import { HomePage } from './home.page';
import { ScrollVanishDirective } from '../shared/scroll-vanish.directive';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    LeafletModule
  ],
  declarations: [
    HomePage,
    ScrollVanishDirective,
    GoogleMapComponent,
    ThreeStepsModalComponent
  ],
  entryComponents: [
    ThreeStepsModalComponent
  ]
})
export class HomePageModule {}
