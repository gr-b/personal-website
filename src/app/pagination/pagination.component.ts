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
    if(which === 'work'){
      $('#work').show();
      window.location.href = '#bottom-page';
    } else {
      $('#work').hide();
    }
  }

}
