import { makeAutoObservable } from 'mobx';
import api from '../api';

class TasksState {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  get onHold() {
    return this.tasks.filter(tasks => !tasks.completed);
  }

  get completed() {
    return this.tasks.filter(tasks => tasks.completed);
  }

  async getTasks() {
    return (this.tasks = await api.tasks.getTasksDB());
  }

  async addTask(data) {
    await api.tasks.postTasksDB(data);
    await this.getTasks();
  }

  async addComment(data) {
    await api.tasks.postCommentDB(data);
    await this.getTasks();
  }

  async removeTask(id) {
    await api.tasks.deleteTasksDB(id);
    await this.getTasks();
  }

  toggleComplete(id) {
    const item = this.tasks.find(({ id: _id }) => _id === id);
    item.completed = !item.completed;
  }
}

export default TasksState;
