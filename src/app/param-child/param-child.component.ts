import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param-child',
  templateUrl: './param-child.component.html',
  styleUrls: ['./param-child.component.scss']
})
export class ParamChildComponent {
  componentID: string;

  constructor(route: ActivatedRoute) { 
    this.componentID = route.snapshot.params['id'];
  }
}
