import { makeAutoObservable } from 'mobx';
import store from '.';
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

  async getTasks(data) {
    return (this.tasks = await api.tasks.getTasksDB(data));
  }

  async addTask(data) {
    await api.tasks.postTasksDB(data);
    await this.getTasks();
  }

  async removeTask(id) {
    await api.tasks.deleteTasksDB(id);
    await this.getTasks();
    await store.comments.getComments();
    await store.comments.getMessages();
  }

  async toggleComplete(id) {
    const item = this.tasks.find(({ id: _id }) => _id === id);

    item.completed = !item.completed;

    await api.tasks.changeStatus(item);
    await this.getTasks();
  }
}

export default TasksState;
