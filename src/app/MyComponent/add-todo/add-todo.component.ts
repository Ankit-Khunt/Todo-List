import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo:Todo = {
      sono: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);

  }
}
