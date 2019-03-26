import { Component, OnInit, Input } from '@angular/core';
import $ = require('jquery');

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  linkResume(){
    console.log("redirect to resume")
    //setTimeout(function(){document.location = '/assets/grbishop_resume.pdf'},500);
    setTimeout(function(){console.log("redirecting");document.location.href = 'http://localhost:4200/assets/grbishop_resume.pdf'},500);
  }

}
