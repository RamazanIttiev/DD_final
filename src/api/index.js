import axios from 'axios';
import { CommentsService, TasksService, UsersService } from './services';
import store from '../state';

class API {
  request;
  tasks;
  users;
  comments;
  requestList = [];

  constructor(baseURL) {
    this.request = axios.create({
      baseURL,
    });

    this.setInterceptors();

    this.users = new UsersService(this.request);
    this.tasks = new TasksService(this.request);
    this.comments = new CommentsService(this.request);
  }

  setInterceptors() {
    this.request.interceptors.request.use(config => {
      this.requestList.push(config);
      store.preloader.setPreloader(true);
      return config;
    });

    this.request.interceptors.response.use(this.clearData);

    this.request.interceptors.response.use(
      res => {
        this.requestList.pop();

        store.preloader.setPreloader(!!this.requestList.length);

        return res;
      },
      err => {
        this.requestList = [];

        store.preloader.setPreloader(false);
        return err;
      },
    );
  }

  async clearData(res) {
    return res.data;
  }
}

const api = new API('http://localhost:8080');

export default api;
