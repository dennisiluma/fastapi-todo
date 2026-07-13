import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todos } from './todos/todos';
import { AddTodo } from './add-todo/add-todo';
import { EditTodo } from './edit-todo/edit-todo';


export const routes: Routes = [
    {path: '', component:Home},
    {path:'home', component: Home},
    {path:'todos', component: Todos},
    {path:'add', component: AddTodo},
    {path:'todos/:id/edit', component: EditTodo},

    {path:'**', redirectTo: ''}
];
