import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit {
  myMenu:any = [];

  constructor(private menu:MenuDataService) { 
  this.myMenu = menu.menuData;
  }

  ngOnInit(): void {
    
  }
 
}
