import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {
  
  developer: string;// this is just explicit definition
  names: string[]; // an array of strings
  constructor() {
  this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  this.developer = 'Will'; // set the name
  }
  ngOnInit() {
  }

}
