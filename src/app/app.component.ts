import { Component } from '@angular/core';
import { Sensor } from './shared/models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors: Sensor[] =[];
  constructor(){
    for(let i=0; i<8;i++){
      this.sensors.push(new Sensor(i+1, `Датчик ${i+1}`));
    }
  }
  newTitle = '';
  newStatus = false;
  onDeleteSensor(idx: number) {
    this.sensors.splice(idx, 1);
  }
  onAddSensor() {
    let newId;
    if (this.sensors.length!=0){
     newId = +this.sensors[this.sensors.length-1].id +1;
    }
    else {newId=1;}
    if (this.newTitle!='') {
      this.sensors.push(new Sensor(newId, this.newTitle, this.newStatus));
      this.newTitle = '';
      this.newStatus = false;
    }  
  }
}
