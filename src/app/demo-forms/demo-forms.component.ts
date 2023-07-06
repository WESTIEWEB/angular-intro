import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent {
  postTitle: string = '';
  postDetails: string = '';
  imageUrl: string = '';
  postUrl: string = '';
  addBackground!: boolean;

  title: string = '';
  img: string = '';

  onkeyUp () {
    this.img = this.imageUrl
  }
   ngOnInit(): void {

   }
}
