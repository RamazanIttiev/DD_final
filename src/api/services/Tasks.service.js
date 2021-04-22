export class TasksService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getTasksDB() {
    return this.request.get('/tasks');
  }

  postTasksDB(task) {
    return this.request.post('/tasks', task);
  }

  postCommentDB(data) {
    return this.request.put(`/tasks/${data.id}`, data);
  }

  deleteTasksDB(id) {
    return this.request.delete(`/tasks/${id}`);
  }
}
