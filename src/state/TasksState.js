import { makeAutoObservable, toJS } from 'mobx';
import api from '../api';

class TasksState {
  tasks = [
    {
      id: '1',
      userId: [],
      title: '1',
      completed: false,
      status: 'pending',
      importance: 'minor',
    },
    {
      id: '2',
      userId: [],
      title: '2',
      completed: true,
      status: 'pending',
      importance: 'minor',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get onHold() {
    return this.tasks.filter(task => !task.completed);
  }

  get completed() {
    return this.tasks.filter(task => task.completed);
  }

  toggleComplete(id) {
    const item = this.tasks.find(({ id: _id }) => _id === id);
    item.completed = !item.completed;
  }

  remove(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
  // async getTasks() {
  //   this.tasks = await api.tasks.getTasksDB();
  // }
}

export default TasksState;
