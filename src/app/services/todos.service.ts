import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map'

@Injectable()
export class TodosService {
  constructor(private db:  AngularFireDatabase, private http: Http) { }

  getTodos() {
  return this.db.list('todos/').map(items => items);
}

  getTodayTodo(date: string) {
    return this.db.list('todos/' + date).map(items => items);
  }

  updateTodo(date: string, $key: string, data: any) {
      this.db.list('todos/' + date).update($key, data);
  }

  removeTodo(date: string, $key: string) {
    this.db.list('todos/' + date).remove($key);
  }

  addTodo(date: string, data: any) {
    console.log(date);
    this.db.list('todos/' + date).push(data);
  }
}
