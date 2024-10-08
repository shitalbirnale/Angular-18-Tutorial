import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName : string = "Angular 18";

  changeCourse(){
    this.courseName = "React JS";
  }
  
  firstname = signal("Welcome to India");

  changeSignalText()
  {
    this.firstname.set("Welcome to USA")
  }
}
