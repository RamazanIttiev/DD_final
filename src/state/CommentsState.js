import { makeAutoObservable } from 'mobx';
import api from '../api';

class CommentsState {
  comments = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getComments() {
    return (this.comments = await api.comments.getCommentsDB());
  }

  async addComment(data) {
    await api.comments.postCommentDB(data);
    await this.getComments();
  }

  // async removeTask(id) {
  //   await api.comments.deletecommentsDB(id);
  //   await this.getcomments();
  // }
}

export default CommentsState;
