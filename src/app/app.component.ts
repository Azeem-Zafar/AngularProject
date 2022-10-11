import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuDataService } from './menu-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
myMenu:any = [];
constructor(private menu:MenuDataService)
{
  this.myMenu = menu.menuData;

}
 
 observable = new Observable((observer)=>
 {
console.log("Starts Here.....");
observer.next("1");
observer.next("2");
observer.next("3");
observer.next("4");
observer.next("5");

});
ngOnInit()
{
this.observable.subscribe((val)=>
{
console.log(val);
});
}
}

