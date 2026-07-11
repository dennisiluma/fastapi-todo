const API_BASE_URL = 'http://localhost:8085'


interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}


export const todoService = {

    async getAllTodos():Promise<Todo[]> {

    const res = await fetch(`${API_BASE_URL}/todos`);

    const json: ApiResponse<Todo[]> = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to fetch todos');
    return json.data;

    },

  async getTodoById(id: number): Promise<Todo> {
    const res = await fetch(`${API_BASE_URL}/todos/${id}`);
    const json: ApiResponse<Todo> = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to fetch todo');
    return json.data;
  },

  async createTodo(title: string, description: string): Promise<Todo> {
    const res = await fetch(`${API_BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });
    const json: ApiResponse<Todo> = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create todo');
    return json.data;
  },

  async updateTodo(id: number, title: string, description: string, is_completed: boolean): Promise<Todo> {
    const res = await fetch(`${API_BASE_URL}/todos/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, is_completed }),
    });
    const json: ApiResponse<Todo> = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to update todo');
    return json.data;
  },

  async deleteTodo(id: number): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/todos/delete/${id}`, {
      method: 'DELETE',
    });
    const json: ApiResponse<null> = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to delete todo');
  }


}