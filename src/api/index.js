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
    // Делаем перехват запроса
    this.request.interceptors.request.use(config => {
      // Модифицируем список запросов (условный)
      this.requestList.push(config);
      // Задаем значение прелодера
      store.preloader.setPreloader(true);
      return config;
    });

    // Получаем data из объекта результата
    this.request.interceptors.response.use(this.clearData);

    // Перехватываем ответ
    this.request.interceptors.response.use(
      // Секция resolve (ok)
      res => {
        // Модифицируем список запросов (условный)
        this.requestList.pop();

        // Задаем значение прелодера
        store.preloader.setPreloader(!!this.requestList.length);

        return res;
      },
      // Секция reject (error)
      err => {
        // Очищаем список
        this.requestList = [];

        // Вырубаем прелодер
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
