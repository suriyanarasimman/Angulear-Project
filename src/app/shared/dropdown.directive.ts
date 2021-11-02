import {Directive, ElementRef, HostListener, Input, HostBinding} from "@angular/core";

@Directive({
  selector:'[appDropdown]'
  })
export class DropdownDirective {
  @Input() dp: string;

  @HostBinding('class.open') isOpen = false;

  constructor(private elementref:ElementRef) {
  }
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
