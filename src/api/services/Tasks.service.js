export class TasksService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getTasksDB(data) {
    if (data === undefined) {
      return this.request.get(`/tasks`);
    }
    return this.request.get(`/tasks/?title_like=${data}`);
  }

  postTasksDB(task) {
    return this.request.post('/tasks', task);
  }

  deleteTasksDB(id) {
    return this.request.delete(`/tasks/${id}`);
  }

  changeStatus(item) {
    return this.request.put(`/tasks/${item.id}`, item);
  }
}
