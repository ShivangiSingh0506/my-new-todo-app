import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  submitForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
  });
  title: string;
  desc: string;

  constructor() {
    this.todos = [
      {
        Title: 'title1',
        Desc: 'desc1',
        Active: false,
      },
      {
        Title: 'title2',
        Desc: 'desc2',
        Active: false,
      },
      {
        Title: 'title3',
        Desc: 'desc3',
        Active: false,
      },
    ];
  }

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.deleteTodo(todo);
    console.log('onClick has been triggered');
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  onCheckboxClick(todo: Todo) {
    this.toggleTodo(todo);
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].Active = !this.todos[index].Active;
    //localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  onSubmit() {
    const todo = {
      sno: 8,
      Title: this.title,
      Desc: this.desc,
      Active: true,
    };
    this.addTodo(todo);
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
