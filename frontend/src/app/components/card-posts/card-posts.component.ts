import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss'],
})
export class CardPostsComponent implements OnInit {
  @Input() post;

  constructor() { }

  ngOnInit() {}

}
