import Preloader from './Preloader';
import UsersState from './UsersState';
import TasksState from './TasksState';
import CommentsState from './CommentsState';

class State {
  tasks = new TasksState();
  users = new UsersState();
  preloader = new Preloader();
  comments = new CommentsState();
}

const store = new State();

export default store;
