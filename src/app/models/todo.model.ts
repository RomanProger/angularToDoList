export interface ITodo
{
  id: number;
  title?: string;
  complete?: boolean;
  subTodos?: Array<TodoModel>;
}

export class TodoModel
{
  id: number;
  title: string;
  complete: boolean;
  subTodos: Array<TodoModel>;

  constructor(model?: ITodo) {
    if (model)
    {
      this.id = model.id;
      this.title = model.title || 'new Todo';
      this.complete = model.complete || false;
      this.subTodos = model.subTodos || [];
    }
    else
    {
      this.id = 1;
      this.title = 'undefined';
      this.complete = false;
      this.subTodos = [];
    }
  }
}
