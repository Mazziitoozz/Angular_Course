import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // If we use routing we dont need it
  // @Output() featureSelected = new EventEmitter<string>(); // We want to use in the parent component that's why we need to pass this property
  //                                                         // in our parent component when we refer to header (see app.component.html)
  collapsed = true;
  // constructor() { }
  // ngOnInit(): void {
  // }
  // onSelect(feature:string){
  //   this.featureSelected.emit(feature); // This function only send the string info to the app.component in order to loadedFeature use it

  // }
}
