import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  loadedFeature: string = 'recipes';

  constructor() {}

  ngOnInit() {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
