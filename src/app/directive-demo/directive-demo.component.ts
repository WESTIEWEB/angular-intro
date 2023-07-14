import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})

export class DirectiveDemoComponent {
  postArray: string [] = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];

  objArray: Array<Record<string, any>> = [{name: 'John Doe', age: 20}, {name: 'Ilo Doe', age: 30}, {name: 'Mary Dan', age: 22}] 

  //for steps control
  formStep: number = 1;

  isStep1: boolean = true;
  isStep2: boolean = false;
  isStep3: boolean = false;

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

  onSwitch (value: number) {
    this.formStep = value
    
    this.formStep === 1 ? this.isStep1 = true : this.isStep1 = false
    this.formStep === 2 ? this.isStep2 = true : this.isStep2 = false
    this.formStep === 3 ? this.isStep3 = true : this.isStep3 = false
  }
}
