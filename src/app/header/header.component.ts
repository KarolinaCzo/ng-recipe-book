import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  @Output()
  featureSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
