import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component'; // Import TaskComponent
import { CommonModule } from '@angular/common';      // Import CommonModule for *ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent, CommonModule],  // Add TaskComponent and CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-app';
}
