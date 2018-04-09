import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  imagePath: string;

  constructor() {
    this.imageURL = 'https://i.imgur.com/JhG9ppn.jpg';
  }

  ngOnInit() {
  }

}
