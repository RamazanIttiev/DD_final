import { makeAutoObservable } from 'mobx';

class Preloader {
  preloader = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPreloader(value) {
    return (this.preloader = value);
  }
}

export default Preloader;
