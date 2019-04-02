import { Component, OnInit } from '@angular/core';
import $ = require('jquery');



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$('#work').hide();
  }

  showContent(which: string) {
    console.log(which);
    if(which === 'projects'){
      $('#projects').show();
      window.location.href = '#bottom-page';
    } else {
      $('#projects').hide();
    }



    if(which === 'resume'){
      $('#resume').show();
      window.location.href = '#resume';
      //window.location.href = '/assets/grbishop_resume.pdf';
    } else {
      $('#resume').hide();
    }
  }

}
