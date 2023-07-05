import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements  OnInit {

    title: string = 'Post Title';
    postMessage: string = 'from post component';

    childMessage: string = 'message from child';

    outputChildMessage: string = 'This is an output message';
      
    @Input() fromParent!: string;

    @Output() messageEvent = new EventEmitter<string>();
  
    constructor() { }
  
    ngOnInit(): void {
    }

    sendMessage() {
       console.log('clicked')
       this.messageEvent.emit(this.outputChildMessage);
    }
}
