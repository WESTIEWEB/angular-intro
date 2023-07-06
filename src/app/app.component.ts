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
  parentMessage: string = "message changed"

  textValue: string = "coming from component";

  fromChildOutput: string = '';

  fromInput: string = '';

  @ViewChild(PostComponent) child!: PostComponent;

  ngAfterViewInit() {
    console.log(this.child)
    this.fromChild = this.child.childMessage
  }

  receiveMessage($event: any) {
    this.fromChildOutput = $event;    
  }

  onClick () {
    alert ('i was clicked')
  }

  onKeyUp(value: any = null) {
    this.fromInput = value;
      console.log(this.textValue)
      console.log('fromInput field',this.fromInput)
 
  }
}
