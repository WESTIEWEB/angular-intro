import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})

export class DirectiveDemoComponent {
  postArray: string [] = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];

  objArray: Array<Record<string, any>> = [{name: 'John Doe', age: 20}, {name: 'Ilo Doe', age: 30}, {name: 'Mary Dan', age: 22}] 

  constructor() {
    this.postArray.forEach((item: string) => {
      console.log(item)
    })

  }

  addNew () {
    this.objArray.push({name: 'Jimmy Banks', age: 16})
  }
  onDelete (object: number) {
    this.objArray.splice(object, 1)
  }
}
