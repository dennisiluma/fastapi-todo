import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../service/todo-service';

@Component({
  selector: 'app-todos',
  imports: [RouterLink],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {

  private todoService = inject(TodoService)

  todos = signal<any>([])

  error = signal<string | null>(null);

  isModalOpen = signal(false);

  todoToDelete = signal<number | null>(null);


  ngOnInit() {
    this.fetchTodos()
  }


  fetchTodos() {
    this.error.set(null);

    this.todoService.getAllTodos().subscribe({
      next: (data) => { this.todos.set(data); },
      error: (err) => { this.error.set(err.message || 'Failed to load todo data.'); }
    });
  }


  openModal(id: number) {
    this.todoToDelete.set(id);
    this.isModalOpen.set(true);
  }


  confirmDelete() {
    const id = this.todoToDelete();
    if (id === null) return;
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos.update(list => list.filter((t: any) => t.id !== id));
        this.closeModal();
      },
      error: (err) => this.error.set(err.message || 'Failed to delete.')
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.todoToDelete.set(null);
  }

}
