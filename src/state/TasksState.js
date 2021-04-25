import { makeAutoObservable } from 'mobx';
import api from '../api';

class TasksState {
  tasks = [];
  comments = [];

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

  async getComments() {
    return (this.comments = await api.tasks.getCommentsDB());
  }

  async addTask(data) {
    await api.tasks.postTasksDB(data);
    await this.getTasks();
  }

  async addComment(data) {
    let getdata = await api.tasks.postCommentDB(data);
    data.taskComments.map(({ text }) => {
      if (!text) {
        return null;
      } else {
        return getdata;
      }
    });
    await this.getComments();
  }

  async removeTask(id) {
    await api.tasks.deleteTasksDB(id);
    await this.getTasks();
  }

  async toggleComplete(id) {
    const item = this.tasks.find(({ id: _id }) => _id === id);

    item.completed = !item.completed;

    await api.tasks.changeStatus(item);
    await this.getTasks();
  }
}

export default TasksState;
