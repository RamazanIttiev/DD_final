export class UsersService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getUsersDB() {
    return this.request.get('/users');
  }
}
