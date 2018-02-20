import { Component } from '@angular/core';
import { TodosService } from './services/todos.service';
import {setInterval} from 'timers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  time: Date;
  constructor(private tds: TodosService) {
    Observable.interval(1000).subscribe(x => {
      this.time = new Date();
    });
  }
}
