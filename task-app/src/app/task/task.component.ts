import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClient

interface Task {
  title: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  title = '';

  // ✅ Inject HttpClient into constructor
  constructor(private http: HttpClient) {}

  addTask() {
    if (this.title) {
      const taskData = { title: this.title };
      this.http.post<any>('http://localhost:5000/tasks', taskData) // 🔧 Add typing
        .subscribe((response: any) => {
          console.log('Task added:', response);
          this.tasks.push({ title: this.title });
          this.title = '';
        }, (error: any) => {
          console.error('Error adding task:', error);
        });
    }
  }
}
