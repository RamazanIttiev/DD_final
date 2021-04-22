import TasksState from './TasksState';
import Preloader from './Preloader';

class State {
  tasks = new TasksState();
  preloader = new Preloader();
}

const store = new State();

export default store;
