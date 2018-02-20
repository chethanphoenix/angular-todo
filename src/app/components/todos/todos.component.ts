import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { TodosService } from '../../services/todos.service';
import 'rxjs/add/operator/map';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any[];
  todayTodo: any[];
  currentDay: string;
  todosStats: any[] = [];

  constructor(private tds: TodosService) {
    const today = new Date();
    let day = today.getDate().toString();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    if (Number(day) < 10) {
      day = '0' + day;
    }
    this.currentDay = day + '-' + month + '-' + year;
  }



  ngOnInit() {
    this.tds.getTodos()
      .subscribe(
        todos => {
          this.todos = todos;
          this.updateStatistics(this.todos);
        }
      );

    this.tds.getTodayTodo(this.currentDay)
      .subscribe(
        todo => {
          this.todayTodo = todo;
        });


  }



  updateStatistics(todos: any[]) {
        this.todosStats = [];
        for (let i = 0; i < todos.length; i++) {
          const todoList = todos[i]
          const date = todoList.$key;
          let totalTodoForDate = 0;
          let totalCompForDate = 0;
          for (const key in todoList) {
            if (todoList.hasOwnProperty(key)) {
              if (todoList[key].isCompleted) {
                totalCompForDate++;
              }
              totalTodoForDate++;
            }

          }
          const data = {
                totalTodo: totalTodoForDate,
                totalCompted: totalCompForDate,
                date: date
              };

          this.todosStats.push(data);
        }
  }



  removeTodoFromCurrentDay($key) {
    this.tds.removeTodo(this.currentDay, $key);
  }

  updateCompletedOnCurrentDay(todo: string, $key: string, isCompleted: boolean) {
    const data = {
      todo: todo,
      isCompleted: isCompleted
    };
    this.tds.updateTodo(this.currentDay, $key, data);
  }

  addTodoForToday(e: any, form: any,  todo: string) {
    e.preventDefault();
    const data = {
      todo: todo,
      isCompleted: false
    };
    this.tds.addTodo(this.currentDay, data);

    form.reset();
  }

  getTodoForDate(date: string) {
    this.tds.getTodayTodo(date)
      .subscribe(
        todos => {
          this.todayTodo = todos;
          this.currentDay = date;
        }
      );
  }

}
