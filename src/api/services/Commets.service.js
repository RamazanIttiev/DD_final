export class CommentsService {
  request;
  constructor(instance) {
    this.request = instance;
  }

  getCommentsDB() {
    return this.request.get('/comments');
  }

  postCommentDB(data) {
    return this.request.post(`/comments`, data);
  }

  // postExtraCommentDB(data) {
  //   return this.request.post(`/comments/`, data);
  // }

  // deleteTasksDB(id) {
  //   return this.request.delete(`/tasks/${id}`);
  // }
}
