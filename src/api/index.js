import axios from 'axios';
import { TodoService } from './services';

class API {
  request;
  todo;

  constructor(baseURL) {
    this.request = axios.create({
      baseURL,
    });

    this.todo = new TodoService(this.request);
  }
}

const api = new API('http://localhost:3000');

export default api;
