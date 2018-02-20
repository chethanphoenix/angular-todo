export class Todos {
  $key: string;
  date: Date;
  value: TodoObj[];
  constructor() {}

  fromFirebaseToDos(todoObj: any[]){
    for (let i = 0; i < todoObj.length; i++) {
      console.log(todoObj[i]);
    }
  }
}

export class TodoObj {
  $key: string;
  todo?: string;
  isCompleted: boolean;

  constructor(private todos: any[]) {
    this.$key = todos['$key'];
    this.todo = todos['todo'];
    this.isCompleted = todos['isCompleted'];
  }
}
