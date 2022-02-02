import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appDragImage]'
})
export class DragImageDirective {

  constructor() { }
@HostListener('drop',['$event'])
OnDrop(event: DragEvent){
    console.log(event)
}

}

