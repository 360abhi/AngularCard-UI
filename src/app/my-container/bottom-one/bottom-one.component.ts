import { Component } from '@angular/core';
import { Classes } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-bottom-one',
  templateUrl: './bottom-one.component.html',
  styleUrls: ['./bottom-one.component.css'],
})
export class BottomOneComponent {
  changed: boolean = false;
  isActive : boolean = false;

  constructor(public classservice: Classes) {}

  myclasses = {
    'bg-white': this.changed,
    'bg-black' : !this.changed,
    'text-white' : !this.changed
  }

  change() {
    this.changed = !this.changed;

    this.classservice.myData = {
      'bg-black': !this.changed,
      'bg-blue-500' : this.changed,
      'text-black': this.changed,
    };

    this.myclasses = {
      'bg-white': this.changed,
      'bg-black' : !this.changed,
      'text-white' : !this.changed
    }

    this.classservice.gray = {
      'grayscale': !this.changed
    }
  }

  changeText(): void {
    this.isActive  = !this.isActive;
  }
}
