import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-edit-todo',
  imports: [FormsModule],
  templateUrl: './edit-todo.html',
  styleUrl: './edit-todo.css',
})
export class EditTodo {

  private router = inject(Router)
  private todoService = inject(TodoService)

  private route = inject(ActivatedRoute)

  id = 0;

  title = signal('');
  description = signal('');
  isCompleted = signal(false);

  error = signal<string | null>(null);
  isSubmitting = signal(false);


  ngOnInit() {
    //this will scann our url to get hold of the id value
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodoById(this.id).subscribe({
      next: (todo) => {
        this.title.set(todo.title);
        this.description.set(todo.description);
        this.isCompleted.set(todo.is_completed);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to load task.');
      }
    });
  }



  onSubmit() {
    if (!this.title().trim()) return;
    this.isSubmitting.set(true);
    this.error.set(null);

    this.todoService.updateTodo(
      this.id,
      this.title().trim(),
      this.description().trim(),
      this.isCompleted()
    ).subscribe({
      next: () => this.router.navigate(['/todos']),
      error: (err) => {
        this.error.set(err.message || 'Failed to update task.');
        this.isSubmitting.set(false);
      }
    });
  }


  cancelEditTodo() {
    this.router.navigate(['/todos']);
  }


}
