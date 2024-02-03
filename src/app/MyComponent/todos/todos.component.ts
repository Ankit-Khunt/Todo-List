import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string;
  todos:Todo[];
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }

   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo); 
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){ 
    debugger
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo)
  }

property:object={
  abc:123,
  name:"ankit"
}





}
