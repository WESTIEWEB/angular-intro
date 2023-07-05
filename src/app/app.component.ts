import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  fromChild: string = '';
  parentMessage = "message changed"

  @ViewChild(PostComponent) child!: PostComponent;

  ngAfterViewInit() {
    console.log(this.child)
    this.fromChild = this.child.childMessage
  }

  receiveMessage($event: any) {
    this.fromChild = $event
  }
}
