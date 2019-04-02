import { Component, OnInit, Input } from '@angular/core';
import { ProjectsInfo } from '../projectsInfo'
import { PROJECTS } from '../projects';
import $ = require('jquery');

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    //$("#projects").hide();
    // Don't hide at beginning
  }


  projects = PROJECTS;
}
