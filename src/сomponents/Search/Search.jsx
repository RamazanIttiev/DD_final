import { observer } from 'mobx-react';
import React from 'react';
import store from '../../state';
import './Search.scss';

const Search = observer(() => {
  const debounce = (myFunc, delay) => {
    let timer;
    return (...args) => {
      clearInterval(timer);
      timer = setTimeout(() => {
        myFunc(...args);
      }, delay);
    };
  };

  let searchForPartner = task => {
    if (task) {
      store.tasks.getTasks(task);
      store.comments.getComments(task);
    } else {
      store.tasks.getTasks();
      store.comments.getComments();
    }
  };

  searchForPartner = debounce(searchForPartner, 400);

  return (
    <form className="Search">
      <input
        onChange={e => searchForPartner(e.target.value)}
        className="Search__input"
        type="text"
        placeholder="Search for any task you want"
      />
    </form>
  );
});

export default Search;
