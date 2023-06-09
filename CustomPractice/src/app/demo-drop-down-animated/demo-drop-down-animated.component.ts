import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-demo-drop-down-animated',
  templateUrl: './demo-drop-down-animated.component.html',
  styleUrls: ['./demo-drop-down-animated.component.css'],
  providers:[{provide:BsDropdownConfig,useValue:{isAnimated:true,autoClose:true}}]
})
export class DemoDropDownAnimatedComponent {

}
