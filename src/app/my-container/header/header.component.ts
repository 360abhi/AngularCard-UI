import { Component } from '@angular/core';
import { Classes } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public classservice: Classes){}

}
