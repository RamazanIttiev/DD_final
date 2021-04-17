import TasksState from './TasksState';

class State {
  tasks = new TasksState();
}

const store = new State();

export default store;
