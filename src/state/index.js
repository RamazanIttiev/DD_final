import Preloader from './Preloader';
import TasksState from './TasksState';
import CommentsState from './CommentsState';

class State {
  tasks = new TasksState();
  comments = new CommentsState();
  preloader = new Preloader();
}

const store = new State();

export default store;
