export class CommentsService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getCommentsDB(data) {
    if (data === undefined) {
      return this.request.get(`/comments`);
    }
    return this.request.get(`/comments/?taskTitle_like=${data}`);
  }

  getMessagesDB() {
    return this.request.get('/messages');
  }

  postCommentDB(data) {
    return this.request.post(`/comments`, data);
  }

  postMessageDB(data) {
    return this.request.post(`/messages`, data);
  }

  // deleteTasksDB(id) {
  //   return this.request.delete(`/tasks/${id}`);
  // }
}
