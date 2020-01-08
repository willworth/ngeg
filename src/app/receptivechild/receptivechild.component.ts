import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receptivechild',
  templateUrl: './receptivechild.component.html',
  styleUrls: ['./receptivechild.component.scss']
})
export class ReceptivechildComponent implements OnInit {
  @Input() beatle: string;

  constructor() {
    
   }

  ngOnInit() {
  }

}
