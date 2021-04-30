import { makeAutoObservable } from 'mobx';
import api from '../api';

class UsersState {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getUsers() {
    return (this.users = await api.users.getUsersDB());
  }
}

export default UsersState;
