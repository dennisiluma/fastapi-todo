import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../service/todo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {

  private todoService = inject(TodoService)
  private router = inject(Router)


  title = signal('');
  description = signal('');

  error = signal<string | null>(null);
  isSubmitting = signal(false);


  onSubmit() {
    if (!this.title().trim()) return;

    this.isSubmitting.set(true);
    this.error.set(null);

    this.todoService.createTodo(this.title().trim(), this.description().trim()).subscribe({
      next: () => this.router.navigate(['/todos']),
      error: (err) => {
        this.error.set(err.message || 'Failed to create todo.');
        this.isSubmitting.set(false);
      }
    });
  }


  cancelAddTodo() {
    this.router.navigate(['/todos']);
  }

}
