import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title : string = "";
  @Input() fullname : string = "";
  imgprfx = environment.imgprfx;
}
