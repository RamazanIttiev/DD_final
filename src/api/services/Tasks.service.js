export class TasksService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getTasksDB() {
    return this.request.get('/tasks');
  }

  getCommentsDB() {
    return this.request.get('/comments');
  }

  postTasksDB(task) {
    return this.request.post('/tasks', task);
  }

  postCommentDB(data) {
    return this.request.post(`/comments`, data);
  }

  postExtraCommentDB(data) {
    return this.request.post(`/comments/`, data);
  }

  deleteTasksDB(id) {
    return this.request.delete(`/tasks/${id}`);
  }

  changeStatus(item) {
    return this.request.put(`/tasks/${item.id}`, item);
  }
}
