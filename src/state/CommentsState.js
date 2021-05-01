import { makeAutoObservable } from 'mobx';
import api from '../api';

class CommentsState {
  comments = [];
  messages = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getComments(data) {
    return (this.comments = await api.comments.getCommentsDB(data));
  }

  async getMessages() {
    return (this.messages = await api.comments.getMessagesDB());
  }

  async addComment(data) {
    await api.comments.postCommentDB(data);

    await this.getComments();
  }

  async addMessage(data) {
    await api.comments.postMessageDB(data);
    await this.getMessages();
  }

  // async removeTask(id) {
  //   await api.comments.deletecommentsDB(id);
  //   await this.getcomments();
  // }
}

export default CommentsState;
