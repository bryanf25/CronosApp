import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CronosApp';

  constructor(private readonly location: Location) { }


  goBack(){
    this.location.back();
  }
}
