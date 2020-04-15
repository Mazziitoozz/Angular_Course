import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mySecondApp';
  loadedFeature = 'recipe'; // the same name i wrote in header component when I call OnSelect

  constructor() { }

  ngOnInit(): void {
  }
  onNavigate(feature:string){
    this.loadedFeature = feature;

  }
}
