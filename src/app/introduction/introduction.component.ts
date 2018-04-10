import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  imageURL: string;
  bigText: string;
  underText: string;

  constructor() {
    //this.imageURL = 'https://i.imgur.com/BOhQe0n.jpg';
    //this.imageURL = 'https://i.imgur.com/dvVr4rC.jpg';
    this.imageURL = 'https://i.imgur.com/Wm2Qjnv.jpg'; // GOOD!
    this.imageURL = 'https://i.imgur.com/LzrDFMo.jpg';
    //this.imageURL = 'https://i.imgur.com/kvfNJ3O.jpg';
    //this.imageURL = 'https://i.imgur.com/tq5xf58.jpg'; // Also good
    this.bigText = 'Griffin Bishop';
    this.underText = 'Site currently under construction';
  }

  ngOnInit() {
  }

}
