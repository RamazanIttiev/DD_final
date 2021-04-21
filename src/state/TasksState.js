import { makeAutoObservable } from 'mobx';
import api from '../api';

class TasksState {
  tasks = [
    {
      id: '',
      title: 'Title',
      completed: false,
      status: 'pending',
      importance: 'Minor',
      userId: [],
      comments: [
        {
          id: '',
          text: '',
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  // async getTasks() {
  //   return (this.tasks = await api.tasks.getTasksDB());
  // }

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

  addTask(data) {
    this.tasks.push(data);
  }

  remove(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
}

export default TasksState;
