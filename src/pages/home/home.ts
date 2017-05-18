import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {RoundProgressModule, RoundProgressConfig} from 'angular-svg-round-progressbar';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  
lat: number = 51.678418;
  lng: number = 7.809007;

	current: number = 50;
  max: number = 50;
  stroke: number = 10;
  radius: number = 270;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 30000;
  animation: string = 'easeOutCubic';
  animationDelay: number = 120;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

constructor(public navCtrl: NavController, private _config: RoundProgressConfig) {

		_config.setDefaults({
				color: '#f00',
				background: '#eaeaea'
			});
}

increment(amount = 1) {
    this.current += amount;
  }
getOverlayStyle($event) {
    let isSemi = this.radius;
    let transform = (isSemi ? '' : 'translateY(-100%) ') + 'translateX(-100%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

   clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  

  /*mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }*/
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: '',
		  draggable: false
	  }
  ]
}
