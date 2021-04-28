export class UsersService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getUsersDB(data) {
    console.log(data);
    if (data === undefined) {
      return this.request.get('/users');
    }
    return this.request.get(`/users/${data}`);
  }
}
