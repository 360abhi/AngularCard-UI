import { Component } from '@angular/core';
import { Classes } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    constructor(public classservice: Classes){}
}
