import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@blog/data';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  todos: Todo[];

  constructor(
    private http: HttpClient
  ) {
    this.todos = [];
    this.fetch();
  }
  
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}