import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  userDetails = 
  {
    name: 'John Doe',
    age: 20,
    city: 'New York',
  }

  greetings: string = 'credo neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit'
}
