import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core'
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false; // we want to change the dropdown, the open class in th ehtml code
   
    // @HostListener('click') toggleOpen(){ // toglle the dropdown just if you click on it
    //     console.log('hello')
    //     this.isOpen = !this.isOpen;
    // }
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {  // untoggle the drowpdown if you click outside
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
    
}