export class CommentsService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getCommentsDB() {
    return this.request.get('/comments');
  }

  getMessagesDB() {
    return this.request.get('/messages');
  }

  postCommentDB(data) {
    return this.request.post(`/comments`, data);
  }

  postMessageDB(data) {
    console.log(data);
    return this.request.post(`/messages`, data);
  }

  // postExtraCommentDB(data) {
  //   return this.request.post(`/comments/`, data);
  // }

  // deleteTasksDB(id) {
  //   return this.request.delete(`/tasks/${id}`);
  // }
}
