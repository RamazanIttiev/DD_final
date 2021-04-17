import axios from 'axios';
import { TasksService } from './services';

class API {
  request;
  tasks;

  constructor(baseURL) {
    this.request = axios.create({
      baseURL,
    });

    this.tasks = new TasksService(this.request);
  }

  // setInterceptors() {
  //   // Делаем перехват запроса
  //   this.request.interceptors.request.use(config => {
  //     // Модифицируем список запросов (условный)
  //     this.requestList.push(config);
  //     // Задаем значение прелодера
  //     // store.common.setPreloader(true);

  //     return config;
  //   });

  //   // Получаем data из объекта результата
  //   this.request.interceptors.response.use(this.clearData);

  //   // Перехватываем ответ
  //   this.request.interceptors.response.use(
  //     // Секция resolve (ok)
  //     res => {
  //       // Модифицируем список запросов (условный)
  //       this.requestList.pop();

  //       // Задаем значение прелодера
  //       // store.common.setPreloader(!!this.requestList.length);

  //       return res;
  //     },
  //     // Секция reject (error)
  //     err => {
  //       // Очищаем список
  //       this.requestList = [];

  //       // Вырубаем прелодер
  //       // store.common.setPreloader(false);
  //       return err;
  //     },
  //   );
  // }

  // async clearData(res) {
  //   return res.data;
  // }
}

const api = new API('http://localhost:3000');

export default api;
