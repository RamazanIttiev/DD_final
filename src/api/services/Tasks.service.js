export class TasksService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getTasksDB() {
    return this.request.get('/tasks');
  }
}
