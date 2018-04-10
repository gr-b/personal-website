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
    this.imageURL = 'https://i.imgur.com/JhG9ppn.jpg';
    this.bigText = 'Griffin Bishop';
    this.underText = 'Site currently under construction';
  }

  ngOnInit() {
  }

}
