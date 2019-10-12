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
    this.imageURL = '/assets/profile_picture.jpg';

    this.bigText = 'Griffin Bishop';
    this.underText = 'Software Engineer, Rower, and Machine Learning enthusiast';
  }

  ngOnInit() {
  }

}
