import React from 'react';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="Layout">
      <div className="Layout__heading">
        <h1>
          You’ve got <span>7 task </span>today
        </h1>
        <button>Add new</button>
      </div>
    </div>
  );
};

export default Layout;
