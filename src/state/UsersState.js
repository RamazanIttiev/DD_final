import { makeAutoObservable } from 'mobx';
import api from '../api';

class UsersState {
  users = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers(data) {
    return (this.users = await api.users.getUsersDB(data));
  }
}

export default UsersState;
