import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { TodosComponent } from './components/todos/todos.component';
import { TodosService } from './services/todos.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule
  ],
  providers: [AngularFireDatabase, AngularFireDatabaseModule, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
