import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formexample',
  templateUrl: './formexample.component.html',
  styleUrls: ['./formexample.component.scss']
})
export class FormexampleComponent implements OnInit {
  
  constructor() { }



  formExampleFunction(thing: HTMLInputElement, reason: HTMLInputElement): boolean {
    console.log(`Don't forget to do this thing: ${thing.value} for this reason: ${reason.value}`);
    
    return false;  // this boolean is to prevent event propagation causing a page reload.
  }


  ngOnInit() {
  }

}
