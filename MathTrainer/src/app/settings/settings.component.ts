import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{
  constructor(public app:AppService) {
   }
}
