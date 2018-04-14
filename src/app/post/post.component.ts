import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from '../postInfo'
import { POSTS } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  posts = POSTS;

}
