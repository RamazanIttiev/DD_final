import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <form className="Search">
      <input className="Search__input" type="text" placeholder="Search for any training you want" />
    </form>
  );
};

export default Search;
