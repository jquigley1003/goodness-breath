import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ScrollVanishDirective } from '../shared/scroll-vanish.directive';
import { GoogleMapComponent } from '../components/google-map/google-map.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage,
    ScrollVanishDirective,
    GoogleMapComponent
  ]
})
export class HomePageModule {}
