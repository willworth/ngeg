import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {
  
  developer: string;// this is just explicit definition
  names: string[]; // an array of strings
  // let beatles: Array<string>; //alternate declaration style
  beatles: string[];
  constructor() {
  this.developer = 'Will'; // set the name
  this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  this.beatles = ['John', 'Paul', 'Ringo', 'George'];
  }
  ngOnInit() {  }

}
