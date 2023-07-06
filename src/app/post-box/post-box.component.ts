import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent {

  @Input()
  postBoxMessage!: string;

  initiate: boolean = false;

  imageUrl: string = 'https://picsum.photos/200/300';

}
