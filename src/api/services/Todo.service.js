export class TodoService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getList() {
    return this.request.get('/todos');
  }
}
